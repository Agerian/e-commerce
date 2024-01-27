// Import Model and DataTypes from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import connection.js module, which contains Sequelize instance
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending Sequelize's Model class
class Tag extends Model {}

// Initialize Tag model (table)
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export Tag model
module.exports = Tag;
