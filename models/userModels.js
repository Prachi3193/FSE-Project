const db = require('../config/db');
const bcrypt = require('bcrypt');

// Get all users
exports.getAllUsers = (callback) => {
    const query = `SELECT user_id, name, email, phone, role, created_at FROM users ORDER BY created_at DESC`;
    db.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Get a user by ID
exports.getUserById = (userId, callback) => {
    const query = `SELECT user_id, name, email, phone, role, created_at FROM users WHERE user_id = ?`;
    db.query(query, [userId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
    });
};

// Get a user by email (for authentication)
exports.getUserByEmail = (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
    });
};

// Create a new user
exports.createUser = (userData, callback) => {
    const { name, email, phone, password, role } = userData;
    
    // Hash password before storing
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return callback(err, null);

        const query = `INSERT INTO users (name, email, phone, password, role) VALUES (?, ?, ?, ?, ?)`;
        db.query(query, [name, email, phone, hashedPassword, role], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { message: 'User created successfully', userId: result.insertId });
        });
    });
};

// Update user details
exports.updateUser = (userId, updatedData, callback) => {
    const { name, email, phone } = updatedData;
    const query = `UPDATE users SET name = ?, email = ?, phone = ? WHERE user_id = ?`;
    
    db.query(query, [name, email, phone, userId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'User updated successfully' });
    });
};

// Update user password
exports.updatePassword = (userId, newPassword, callback) => {
    bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
        if (err) return callback(err, null);

        const query = `UPDATE users SET password = ? WHERE user_id = ?`;
        db.query(query, [hashedPassword, userId], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { message: 'Password updated successfully' });
        });
    });
};

// Delete a user
exports.deleteUser = (userId, callback) => {
    const query = `DELETE FROM users WHERE user_id = ?`;
    
    db.query(query, [userId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'User deleted successfully' });
    });
};
