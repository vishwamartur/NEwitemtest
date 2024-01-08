// Import express and router
const express = require('express');
const router = express.Router();

// Import the item model
const Item = require('../models/item');

// Define the GET route for /items
router.get('/items', async (req, res) => {
  try {
    // Find all the items from the database
    const items = await Item.find();
    // Send the items as a JSON response
    res.json(items);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
