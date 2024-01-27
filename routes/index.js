// Import Express.js router function and create a new router object
const router = require('express').Router();

// Import module named apiRoutes from the ./api directory
const apiRoutes = require('./api');

// Mount the /api prefix to all of the routes imported from the api directory
router.use('/api', apiRoutes);

// Middleware that will return an HTML page indicating that we have hit a route that doesn't exist
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router object so we can require() it in the server.js file
module.exports = router;