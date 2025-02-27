const express = require('express');
const router = express.Router();
const { Company } = require('../models/companyModel'); // ✅ Ensure correct model import

// POST: Create a new company
router.post('/', async (req, res) => {
  try {
    const { companyName, industry, country, establishedYear } = req.body;
    const newCompany = await Company.create({ companyName, industry, country, establishedYear });
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create company', details: error.message });
  }
});

// GET: Fetch all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch companies', details: error.message });
  }
});

module.exports = router;
