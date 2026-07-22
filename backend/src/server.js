// UrbanCraft — Express Backend Server
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import enquiryRoutes from './routes/enquiries.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// ── Middleware ──
app.use(cors({
  origin: [
    FRONTEND_URL,
    'https://urbancraft-brown.vercel.app',
    'http://localhost:5173',
    'http://localhost:4173'
  ]
}));
app.use(express.json());

// ── Routes ──
app.use('/api/enquiries', enquiryRoutes);

// ── Health Check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Auto-create Table on Startup ──
async function initDatabase() {
  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        form_type ENUM('contact', 'business') DEFAULT 'contact',
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        service_type VARCHAR(100),
        message TEXT,
        company VARCHAR(255),
        project_type VARCHAR(100),
        budget VARCHAR(50),
        quantity VARCHAR(255),
        status ENUM('new', 'read', 'replied') DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✓ Database table "enquiries" is ready.');
  } catch (err) {
    console.error('✗ Failed to initialize database:', err.message);
    console.error('  Make sure MySQL is running and database exists.');
    process.exit(1);
  }
}

// ── Start Server ──
async function start() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`\n  UrbanCraft API Server`);
    console.log(`  ➜  Local:   http://localhost:${PORT}`);
    console.log(`  ➜  Health:  http://localhost:${PORT}/api/health`);
    console.log(`  ➜  API:     http://localhost:${PORT}/api/enquiries\n`);
  });
}

start();
