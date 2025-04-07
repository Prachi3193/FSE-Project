// config/db.js
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize('ecommproj', 'root', 'admin@0036', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate()
//     .then(() => console.log('Database connected...'))
//     .catch(err => console.log('Database connection error: ' + err));

// module.exports = sequelize;


const { Sequelize } = require('sequelize');
require('dotenv').config();
// const User=require('./userModels');
// const Order=require('./orderModel');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Database connected...'))
  .catch(err => console.log('❌ Database connection error: ' + err));

// User.hasMany(Order, { foreignKey: 'user_id' });
// Order.belongsTo(User, { foreignKey: 'user_id' });
module.exports = sequelize;

