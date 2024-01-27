// 'router' is an object that we can add routes to. We can then export the router and import it into another file. This is a way to break up our routes into separate files instead of having a bunch of routes in one file.
const router = require('express').Router();

// Import 'Category' model and 'Product' model from the models directory
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Route setup to handle GET requests to the /api/categories endpoint
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({ include: Product });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route setup to handle GET requests to the /api/categories/:id endpoint
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    });
    if (!category) {
      res.status(404).json({
        message: 'Category not found' 
      });
      return;
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route setup to handle POST requests to the /api/categories endpoint, which will create a new category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route setup to handle PUT requests at a specific id to the /api/categories/:id endpoint, which will update a category by its `id` value
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route setup to handle DELETE requests at a specific id to the /api/categories/:id endpoint, which will delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json({ message: 'Category deleted successfully' });
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
