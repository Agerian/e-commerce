// 'router' is an object that we can add routes to. We can then export the router and import it into another file. This is a way to break up our routes into separate files instead of having a bunch of routes in one file.
const router = require('express').Router();

// Import 'Category' model and 'Product' model from the models directory
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Route setup to handle GET requests to the /api/categories endpoint
router.get('/', (req, res) => {
  // find all categories

  // be sure to include its associated Products

});

// Route setup to handle GET requests to the /api/categories/:id endpoint
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  
  // be sure to include its associated Products
});

// Route setup to handle POST requests to the /api/categories endpoint, which will create a new category
router.post('/', (req, res) => {
  // create a new category

});

// Route setup to handle PUT requests at a specific id to the /api/categories/:id endpoint, which will update a category by its `id` value
router.put('/:id', (req, res) => {
  // update a category by its `id` value

});

// Route setup to handle DELETE requests at a specific id to the /api/categories/:id endpoint, which will delete a category by its `id` value
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

});

module.exports = router;
