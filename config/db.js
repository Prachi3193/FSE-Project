// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommproj', 'root', 'admin@0036', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Database connection error: ' + err));

module.exports = sequelize;
