import express from 'express';
import { createPatient, getPatients } from '../controllers/patientController';
import protect from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createPatient);
router.get('/', protect, getPatients);

export default router;