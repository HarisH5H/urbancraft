import { Router } from 'express';
import {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
} from '../controllers/enquiryController.js';

const router = Router();

// ── POST /api/enquiries — Create a new enquiry ──
router.post('/', createEnquiry);

// ── GET /api/enquiries — Fetch all enquiries ──
router.get('/', getEnquiries);

// ── PATCH /api/enquiries/:id/status — Update enquiry status ──
router.patch('/:id/status', updateEnquiryStatus);

// ── DELETE /api/enquiries/:id — Delete an enquiry ──
router.delete('/:id', deleteEnquiry);

export default router;
