import pool from '../config/db.js';

export const createEnquiry = async (req, res) => {
  try {
    const {
      form_type = 'contact',
      name,
      email,
      phone,
      service_type,
      message,
      company,
      project_type,
      budget,
      quantity,
    } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const [result] = await pool.execute(
      `INSERT INTO enquiries (form_type, name, email, phone, service_type, message, company, project_type, budget, quantity)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [form_type, name, email, phone || null, service_type || null, message || null, company || null, project_type || null, budget || null, quantity || null]
    );

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      id: result.insertId,
    });
  } catch (err) {
    console.error('Error creating enquiry:', err);
    res.status(500).json({ error: 'Failed to submit enquiry. Please try again.' });
  }
};

export const getEnquiries = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM enquiries ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching enquiries:', err);
    res.status(500).json({ error: 'Failed to fetch enquiries.' });
  }
};

export const updateEnquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' });
    }

    await pool.execute('UPDATE enquiries SET status = ? WHERE id = ?', [status, id]);
    res.json({ success: true, message: 'Status updated.' });
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ error: 'Failed to update status.' });
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.execute('DELETE FROM enquiries WHERE id = ?', [id]);
    res.json({ success: true, message: 'Enquiry deleted.' });
  } catch (err) {
    console.error('Error deleting enquiry:', err);
    res.status(500).json({ error: 'Failed to delete enquiry.' });
  }
};
