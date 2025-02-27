// 1. Load environment variables (if you have a .env file)
require('dotenv').config();

const express = require('express');
const cors = require('cors');

// 2. Import your Sequelize instance (database connection)
const db = require('./config/db');

// 3. Import routes
const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const companyRoutes = require('./Routes/companyRoutes'); 

// 4. Create an Express application
const app = express();

// 5. Sync database
//    - force: false -> won't drop existing tables
//    - alter: false -> won't auto-add columns
db.sync({ force: false })
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.log('Error syncing database:', err));

// 6. Middleware
app.use(cors());
app.use(express.json()); // Built-in body parser for JSON

// 7. Register Routes
//    These define the URLs for each resource
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/companies', companyRoutes); // ✅ Register the company route

// 8. Default (root) route
app.get('/', (req, res) => {
  res.send('Welcome to the eCommerce API!');
});

// 9. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
