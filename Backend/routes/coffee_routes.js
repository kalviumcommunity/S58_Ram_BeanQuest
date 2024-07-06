const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/coffee_controller');

// GET route to fetch all coffee entries
router.get('/coffees', coffeeController.getAllCoffees);

// POST route to add a new coffee entry
router.post('/coffees', coffeeController.createCoffee);

// PUT route to update an existing coffee entry
router.put('/coffees/:id', coffeeController.updateCoffee);

module.exports = router;
