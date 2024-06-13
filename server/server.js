// Import the required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load the environment variables from the .env file
dotenv.config();

// Create an express app
const app = express();

// Use the middleware
app.use(cors());
app.use(express.json());

// Get the database URI from the environment variables
const dbURI = process.env.MONGO_URI;

// Connect to the database
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error(error);
  });

// Import the routes
const itemRoutes = require("./routes/itemRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const userRoutes = require("./routes/userRoutes");

// Use the routes
app.use(itemRoutes);
app.use(reservationRoutes);
app.use(userRoutes);

// Get the port from the environment variables or use 5000 as default
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
