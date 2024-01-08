// Import express and router
const express = require('express');
const router = express.Router();

// Import the user model
const User = require('../models/user');

// Import the auth middleware
const auth = require('../middleware/auth');

// Define the GET route for /users/profile
router.get('/users/profile', auth, async (req, res) => {
  try {
    // Get the current user from the auth middleware
    const user = req.user;
    // Send the user as a JSON response
    res.json(user);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
