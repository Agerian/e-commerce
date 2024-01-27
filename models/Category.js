// Import Model, a class from Sequelize that represents a table in a database, and DataTypes, an object with methods for defining the types of columns in a table
const { Model, DataTypes } = require('sequelize');

// Sequelize instance imported from connection.js module. Used to interact with database
const sequelize = require('../config/connection.js');

// Category class defined, which extends the Sequelize Model class. This means the Category class has all the functionality the Model class has, and represents a table in the database 
class Category extends Model {}

// .init() method initializes the model's data values. The first parameter passed to the init() method is an object that contains column definitions for the table. The second parameter configures certain options for the table.
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Imported Sequelize instance (connection to database)
    timestamps: false, // Don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // Don't pluralize name of database table
    underscored: true, // Use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    modelName: 'category', // Model name stays lowercase in the database
  }
);

// Export Category model
module.exports = Category;
