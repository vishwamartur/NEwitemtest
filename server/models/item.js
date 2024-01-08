// Import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the item schema
const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  category: { type: String, enum: ['hotel', 'restaurant', 'service'] },
  image: { type: String, required: true }
});

// Export the item model
module.exports = mongoose.model('Item', itemSchema);
