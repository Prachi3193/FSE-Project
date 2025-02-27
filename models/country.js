const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Country = sequelize.define('country', {
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    countryName: { // Fixed typo
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'country',
    timestamps: false // Add this if you don't want createdAt and updatedAt columns
});

module.exports = Country;
