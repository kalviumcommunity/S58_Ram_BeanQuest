const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  // _id will be automatically assigned ObjectId by MongoDB
  name: { type: String, required: true },
  description: { type: String, required: true },
  flavorNotes: { type: String, required: true },
  roastProfile: { type: String, required: true },
  specialCharacteristics: { type: String, required: true },
  pricing: {
    original: { type: Number, required: true },
    currency: { type: String, required: true }
  },
  imageUrl: { type: String, required: true }
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;