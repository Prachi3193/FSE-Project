const Order = require('../models/orderModel');

exports.getOrders = (req, res) => {
    Order.getAllOrders((err, orders) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(orders);
    });
};

exports.getOrderById = (req, res) => {
    const { id } = req.params;
    Order.getOrderById(id, (err, order) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    });
};

exports.getOrdersByUserId = (req, res) => {
    const { userId } = req.params;
    Order.getOrdersByUserId(userId, (err, orders) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(orders);
    });
};

exports.createOrder = (req, res) => {
    Order.createOrder(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(result);
    });
};

exports.updateOrderStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    Order.updateOrderStatus(id, status, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

exports.deleteOrder = (req, res) => {
    const { id } = req.params;
    Order.deleteOrder(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};
