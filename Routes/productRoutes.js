// Routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// POST /api/products
router.post('/', productController.createProduct);

// GET /api/products
router.get('/', productController.getAllProducts);

// Optional: GET /api/products/:id
router.get('/:id', productController.getProductById);
//UPDATE
router.put('/:id', productController.updateProduct); 
//DELETE
router.delete('/:id', productController.deleteProduct);


module.exports = router;
