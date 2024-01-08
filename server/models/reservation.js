// Import mongoose and Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the reservation schema
const reservationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' }
});

// Export the reservation model
module.exports = mongoose.model('Reservation', reservationSchema);
