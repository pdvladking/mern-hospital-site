import express from 'express';
import {
  createPatient,
  getAllPatients,
  updatePatient,
  getPatientById,
  deletePatient,
} from '../controllers/patientController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// ➕ Admin: Create new patient
router.post('/', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await createPatient(req, res);
  } catch (err) {
    next(err);
  }
});

// 🌐 Admin or doctor: Get all patients
router.get('/', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role === 'admin' || req.user.role === 'doctor') {
      await getAllPatients(req, res);
    } else {
      res.status(403).json({ error: 'Access denied.' });
    }
  } catch (err) {
    next(err);
  }
});

// 🔍 Admin or doctor: Get patient by ID
router.get('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role === 'admin' || req.user.role === 'doctor') {
      await getPatientById(req, res);
    } else {
      res.status(403).json({ error: 'Access denied.' });
    }
  } catch (err) {
    next(err);
  }
});

// ✏️ Admin: Update patient
router.put('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await updatePatient(req, res);
  } catch (err) {
    next(err);
  }
});

// ❌ Admin: Delete patient
router.delete('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await deletePatient(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
