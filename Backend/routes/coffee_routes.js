const express = require('express');
const router = express.Router();
const Coffee = require('../models/coffee_model'); 


router.get('/coffees', async (req, res) => {
  try {
    const coffees = await Coffee.find(); 
    res.json(coffees); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


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

module.exports = router;
