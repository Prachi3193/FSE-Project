// models/productModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Product name cannot be empty'
      }
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: {
        msg: 'Price must be a valid number'
      },
      min: {
        args: [0],
        msg: 'Price must be a positive number'
      }
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Stock must be an integer'
      },
      min: {
        args: [0],
        msg: 'Stock cannot be negative'
      }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true // Optional field for product description
  }
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = Product;
