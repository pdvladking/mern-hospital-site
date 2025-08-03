import express from 'express';
import {
  createDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js';

const router = express.Router();

// 🧑‍⚕️ Create a doctor (no auth for now)
router.post('/', async (req, res, next) => {
  try {
    await createDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

// 🌐 Get all doctors
router.get('/', getDoctors);

// ✏️ Update doctor info (no auth for now)
router.put('/:id', async (req, res, next) => {
  try {
    await updateDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

// ❌ Delete a doctor (no auth for now)
router.delete('/:id', async (req, res, next) => {
  try {
    await deleteDoctor(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
