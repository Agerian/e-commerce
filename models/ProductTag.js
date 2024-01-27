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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
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
