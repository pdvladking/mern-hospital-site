import express from 'express';
import {
  createDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// 🧑‍⚕️ Admin creates a doctor
router.post('/', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await createDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

// 🌐 Public: Get all doctors (for homepage, appointment form, departments)
router.get('/', getDoctors);

// ✏️ Admin updates doctor info
router.put('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await updateDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

// ❌ Admin deletes a doctor
router.delete('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    await deleteDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
