// models/orderModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Use the correct path to db.js

const Order = sequelize.define('order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'orders',
    timestamps: false
});

module.exports = Order;
