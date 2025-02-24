require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Database connection
const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the eCommerce API!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
