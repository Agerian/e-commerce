// Create new router object
const router = require('express').Router();

// Import api routes from the api directory
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount the /api prefix to all of the routes imported from the api directory
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Router object, with all of the routes mounted on it, is exported
module.exports = router;
