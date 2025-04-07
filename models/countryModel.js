const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Country = sequelize.define('country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    countryName: { 
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'country',
    timestamps: false 
});

module.exports = Country;
