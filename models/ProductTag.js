// Import Model and DataTypes from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import connection.js module, which contains Sequelize instance
const sequelize = require('../config/connection');

// Initialize ProductTag model (table) by extending Sequelize's Model class
class ProductTag extends Model {}

// Initialize ProductTag model (table)
ProductTag.init(
  {
    // define columns

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export ProductTag model
module.exports = ProductTag;
