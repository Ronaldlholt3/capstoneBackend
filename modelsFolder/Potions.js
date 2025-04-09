const mongoose = require('mongoose');

const potionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  imageURL: {
  type: String
  }
  
});

// Create and export the Potion model
const Potion = mongoose.model('Potion', potionSchema);

module.exports = Potion;
