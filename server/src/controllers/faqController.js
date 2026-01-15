import FAQ from '../models/faqModel.js';

// ➕ Add a FAQ entry
export const createFAQ = async (req, res) => {
  try {
    const newFAQ = await FAQ.create(req.body);
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 Get all FAQ entries
export const getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    res.status(200).json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update a FAQ entry
export const updateFAQ = async (req, res) => {
  try {
    const updated = await FAQ.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'FAQ not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Delete a FAQ entry
export const deleteFAQ = async (req, res) => {
  try {
    const deleted = await FAQ.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'FAQ not found' });
    res.status(200).json({ message: 'FAQ deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
