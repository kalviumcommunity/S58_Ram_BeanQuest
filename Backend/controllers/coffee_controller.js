const Coffee = require('../models/coffee_model'); // Adjust path as per your project structure
const mongoose = require('mongoose');

const getAllCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCoffee = async (req, res) => {
  const { name, description, flavorNotes, roastProfile, specialCharacteristics, pricing, imageUrl } = req.body;

  try {
    const newCoffee = new Coffee({
      name,
      description,
      flavorNotes,
      roastProfile,
      specialCharacteristics,
      pricing,
      imageUrl
    });

    await newCoffee.save();
    res.status(201).json(newCoffee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCoffee = async (req, res) => {
  const { id } = req.params;
  const { name, description, flavorNotes, roastProfile, specialCharacteristics, pricing, imageUrl } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updatedCoffee = await Coffee.findByIdAndUpdate(
      id,
      { name, description, flavorNotes, roastProfile, specialCharacteristics, pricing, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedCoffee) {
      return res.status(404).json({ message: 'Coffee not found' });
    }

    res.json(updatedCoffee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllCoffees,
  createCoffee,
  updateCoffee
};
