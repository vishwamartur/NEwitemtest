// Import mongoose, bcrypt, and Schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }]
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    this.password = await bcrypt.hash(this.password, salt);
    // Call next
    next();
  } catch (error) {
    next(error);
  }
});

// Compare the password with the hashed password
userSchema.methods.comparePassword = async function (password) {
  try {
    // Return a boolean
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Export the user model
module.exports = mongoose.model('User', userSchema);
