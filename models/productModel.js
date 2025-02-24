const db = require('../config/db');

// Get all products
exports.getAllProducts = (callback) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Get a single product by ID
exports.getProductById = (productId, callback) => {
    const query = 'SELECT * FROM products WHERE product_id = ?';
    db.query(query, [productId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0]);
    });
};

// Add a new product
exports.addProduct = (productData, callback) => {
    const { name, description, price, stock, category, brand, image_url } = productData;
    const query = 'INSERT INTO products (name, description, price, stock, category, brand, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, description, price, stock, category, brand, image_url], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Product added successfully', productId: result.insertId });
    });
};

// Update an existing product
exports.updateProduct = (productId, productData, callback) => {
    const { name, description, price, stock, category, brand, image_url } = productData;
    const query = 'UPDATE products SET name=?, description=?, price=?, stock=?, category=?, brand=?, image_url=? WHERE product_id=?';
    db.query(query, [name, description, price, stock, category, brand, image_url, productId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Product updated successfully' });
    });
};

// Delete a product
exports.deleteProduct = (productId, callback) => {
    const query = 'DELETE FROM products WHERE product_id = ?';
    db.query(query, [productId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Product deleted successfully' });
    });
};
