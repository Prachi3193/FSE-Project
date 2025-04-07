const express = require('express');
const app = express();
const cors = require('cors'); //cross origin request sharing
require('dotenv').config();
const db = require('./config/db');

const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const productRoutes = require('./Routes/productRoutes');
const companyRoutes = require('./Routes/companyRoutes'); 
const countryRoutes = require('./Routes/countryRoutes');

// Sync database with data models
//    - force: false ->  Preserves existing data (Only creates tables if they don’t exist).
//    - force: true → Drops existing tables and recreates them (⚠️ Data loss).
db.sync({ force: false })
  .then(() => console.log('Database synced successfully'))
  .catch(err => console.log('Error syncing database:', err));

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

// 7. Register Routes
//    These define the URLs for each resource
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/companies', companyRoutes); // ✅ Register the company route
app.use('/api/countries', countryRoutes);

// 8. Default (root) route
// app.get('/', (req, res) => {
//   res.send('Welcome to the eCommerce API!');
// });

// 9. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
