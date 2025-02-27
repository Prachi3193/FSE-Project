const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Company = db.define('Company', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  industry: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  establishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { Company };
