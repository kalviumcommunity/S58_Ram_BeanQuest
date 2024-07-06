const mongoose = require('mongoose');

const CoffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brewingMethods: [{ type: String }]
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
