// controllers/orderController.js
const Order = require('../models/orderModel');

// Create a new order
exports.create = async (req, res) => {
    try {
        const { user_id, total_price, status } = req.body;

        // Validate required fields
        if (!user_id || !total_price || !status) {
            return res.status(400).json({ error: 'Missing required fields: user_id, total_price, status' });
        }

        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all orders
exports.findAll = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single order by ID
exports.findOne = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get orders by User ID
exports.findByUserId = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { user_id: req.params.userId } });
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update order status
exports.updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!status) {
            return res.status(400).json({ error: 'Status is required' });
        }
        const [updated] = await Order.update({ status: req.body.status }, {
            where: { order_id: req.params.id }
        });
        if (updated) {
            const updatedOrder = await Order.findByPk(req.params.id);
            return res.status(200).json(updatedOrder);
        }
        res.status(404).json({ message: 'Order not found' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an order
exports.delete = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        await order.destroy();
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
