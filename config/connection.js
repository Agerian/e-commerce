// Import dotenv package to use environment variables
require('dotenv').config();

// Import Sequelize module
const Sequelize = require('sequelize');

// Represents a connection to a database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export sequelize connection    
module.exports = sequelize;
