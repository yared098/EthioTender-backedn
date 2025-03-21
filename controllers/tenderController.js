// controllers/tenderController.js
const dbService = require('../services/database/dbFactory');

// Create a new tender
const createTender = async (req, res) => {
  try {
    const tender = await dbService.create(req.body);
    res.status(201).json(tender);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tenders
const getTenders = async (req, res) => {
  try {
    const tenders = await dbService.find();
    res.status(200).json(tenders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific tender by ID
const getTenderById = async (req, res) => {
  try {
    const tender = await dbService.findById(req.params.id);
    if (tender) {
      res.status(200).json(tender);
    } else {
      res.status(404).json({ error: 'Tender not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific tender by ID
const updateTender = async (req, res) => {
  try {
    const updatedTender = await dbService.update(req.params.id, req.body);
    if (updatedTender) {
      res.status(200).json(updatedTender);
    } else {
      res.status(404).json({ error: 'Tender not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a specific tender by ID
const deleteTender = async (req, res) => {
  try {
    const result = await dbService.delete(req.params.id);
    if (result) {
      res.status(200).json({ message: 'Tender deleted successfully' });
    } else {
      res.status(404).json({ error: 'Tender not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTender,
  getTenders,
  getTenderById,
  updateTender,
  deleteTender,
};
