// Express module imported using require function
const express = require('express');

// Routes module imported
const routes = require('./routes');

// import sequelize connection

// Create an instance of the express app
const app = express();

// Set port to environment variable PORT or 3001
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell express app to use routes imported from the beginning of the file
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
