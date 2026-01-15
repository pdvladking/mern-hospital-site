import express from 'express';
import { bookAppointment, getAppointments } from '../controllers/appointmentController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// 🗓️ Public route for booking an appointment
router.post('/', bookAppointment);

// 📊 Protected route to get all appointments (admin only)
router.get('/', verifyToken, async (req, res, next) => {
  try {
    // Optional: restrict access to admins only
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    // Call controller logic
    await getAppointments(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
