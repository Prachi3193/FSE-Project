const Company = require('../models/companyModel');

// Create a new company
exports.create = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all companies
exports.findAll = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.status(200).json(companies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single company by ID
exports.findOne = async (req, res) => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a company
exports.update = async (req, res) => {
    try {
        const [updated] = await Company.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedCompany = await Company.findByPk(req.params.id);
            return res.status(200).json(updatedCompany);
        }
        res.status(404).json({ message: 'Company not found' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a company
exports.delete = async (req, res) => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        await company.destroy();
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
