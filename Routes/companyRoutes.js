const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companycontroller');

router.post('/', companyController.create);
router.get('/', companyController.findAll);
router.get('/:id', companyController.findOne);
router.put('/:id', companyController.update);
router.delete('/:id', companyController.delete);

module.exports = router;
