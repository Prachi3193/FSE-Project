const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countrycontroller'); // Fixed variable name

// Create a country
router.post('/countries', countryController.create);

// Get all countries
router.get('/countries', countryController.findAll);

// Get a country by ID
router.get('/countries/:id', countryController.findOne);

// Update a country by ID
router.put('/countries/:id', countryController.update);

// Delete a country by ID
router.delete('/countries/:id', countryController.delete);

module.exports = router;
