// Import express and router
const express = require('express');
const router = express.Router();

// Import the reservation model
const Reservation = require('../models/reservation');

// Define the POST route for /reservations
router.post('/reservations', async (req, res) => {
  try {
    // Get the reservation data from the request body
    const { user, item, quantity, date } = req.body;
    // Create a new reservation object
    const reservation = new Reservation({
      user,
      item,
      quantity,
      date
    });
    // Save the reservation to the database
    await reservation.save();
    // Send the reservation as a JSON response
    res.json(reservation);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
