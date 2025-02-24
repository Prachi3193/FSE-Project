const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(products);
    });
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    Product.getProductById(id, (err, product) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    });
};

exports.addProduct = (req, res) => {
    Product.addProduct(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(result);
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    Product.updateProduct(id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.deleteProduct(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};
