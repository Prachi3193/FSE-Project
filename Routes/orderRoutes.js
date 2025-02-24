const express = require('express');
const { getOrders, getOrderById, getOrdersByUserId, createOrder, updateOrderStatus, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.get('/user/:userId', getOrdersByUserId);
router.post('/', createOrder);
router.put('/:id/status', updateOrderStatus);
router.delete('/:id', deleteOrder);

module.exports = router;
