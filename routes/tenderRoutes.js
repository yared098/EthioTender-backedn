// routes/tenderRoutes.js
const express = require('express');
const tenderController = require('../controllers/tenderController');

const router = express.Router();

// Create a new tender
router.post('/tender', tenderController.createTender);

// Get all tenders
router.get('/tenders', tenderController.getTenders);

// Get a specific tender by ID
router.get('/tender/:id', tenderController.getTenderById);

// Update a specific tender by ID
router.put('/tender/:id', tenderController.updateTender);

// Delete a specific tender by ID
router.delete('/tender/:id', tenderController.deleteTender);

module.exports = router;
