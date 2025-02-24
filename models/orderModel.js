const db = require('../config/db');

// Get all orders
exports.getAllOrders = (callback) => {
    const query = `
        SELECT orders.order_id, orders.user_id, orders.total_price, orders.status, orders.created_at, 
               users.name AS customer_name
        FROM orders
        JOIN users ON orders.user_id = users.user_id
        ORDER BY orders.created_at DESC
    `;
    db.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Get a single order by ID
exports.getOrderById = (orderId, callback) => {
    const query = `
        SELECT orders.order_id, orders.user_id, orders.total_price, orders.status, orders.created_at,
               users.name AS customer_name
        FROM orders
        JOIN users ON orders.user_id = users.user_id
        WHERE orders.order_id = ?
    `;
    db.query(query, [orderId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
    });
};

// Get orders by user ID
exports.getOrdersByUserId = (userId, callback) => {
    const query = `
        SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC
    `;
    db.query(query, [userId], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Create a new order
exports.createOrder = (orderData, callback) => {
    const { user_id, total_price, status } = orderData;
    const query = `INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)`;
    
    db.query(query, [user_id, total_price, status], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Order created successfully', orderId: result.insertId });
    });
};

// Update order status
exports.updateOrderStatus = (orderId, status, callback) => {
    const query = `UPDATE orders SET status = ? WHERE order_id = ?`;
    
    db.query(query, [status, orderId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Order status updated successfully' });
    });
};

// Delete an order
exports.deleteOrder = (orderId, callback) => {
    const query = `DELETE FROM orders WHERE order_id = ?`;
    
    db.query(query, [orderId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Order deleted successfully' });
    });
};
