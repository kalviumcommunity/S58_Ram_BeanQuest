// coffee_routes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');  // Import mongoose
const Coffee = require('../models/coffee_model'); 

// GET route to fetch all coffee entries
router.get('/coffees', async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to add a new coffee entry
router.post('/coffees', async (req, res) => {
  const { name, origin, description, price, brewingMethods } = req.body;

  try {
    const newCoffee = new Coffee({
      name,
      origin,
      description,
      price,
      brewingMethods
    });

    await newCoffee.save();
    res.status(201).json(newCoffee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT route to update an existing coffee entry
router.put('/coffees/:id', async (req, res) => {
  const { id } = req.params;
  const { name, origin, description, price, brewingMethods } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updatedCoffee = await Coffee.findByIdAndUpdate(
      id,
      { name, origin, description, price, brewingMethods },
      { new: true, runValidators: true }
    );

    if (!updatedCoffee) {
      return res.status(404).json({ message: 'Coffee not found' });
    }

    res.json(updatedCoffee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
