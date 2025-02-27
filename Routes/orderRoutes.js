// Routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.create);
router.get('/', orderController.findAll);
router.get('/user/:userId', orderController.findByUserId); // For orders by a specific user
router.get('/:id', orderController.findOne);
router.put('/:id', orderController.updateStatus);
router.delete('/:id', orderController.delete);

module.exports = router;
