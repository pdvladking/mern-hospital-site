import express from 'express';
import { createFAQ, getFAQs, updateFAQ, deleteFAQ } from '../controllers/faqController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Public: Get all FAQs
router.get('/', getFAQs);

// Admin: Create new FAQ
router.post('/', verifyToken, async (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied.' });
  await createFAQ(req, res);
});

// Admin: Update FAQ
router.put('/:id', verifyToken, async (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied.' });
  await updateFAQ(req, res);
});

// Admin: Delete FAQ
router.delete('/:id', verifyToken, async (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied.' });
  await deleteFAQ(req, res);
});

export default router;
