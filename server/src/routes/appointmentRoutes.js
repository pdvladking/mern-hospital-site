import express from 'express';
import { createAppointment, getAppointments, updateAppointmentStatus } from '../controllers/appointmentController';
import protect from '../middleware/authMiddleware';

const router = express.Router();

//Protected routes
router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);
router.put('/:id/status', protect, updateAppointmentStatus);

export default router;