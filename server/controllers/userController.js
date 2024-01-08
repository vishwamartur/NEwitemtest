const User = require("../models/user");
// Get all users
exports.user_list = function (req, res) {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Get one user by id
  exports.user_detail = function (req, res) {
    User.findById(req.params.id)
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Create a new user
  exports.user_create = function (req, res) {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    user
      .save()
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Update an existing user by id
  exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Delete an existing user by id
  exports.user_delete = function (req, res) {
    User.findByIdAndDelete(req.params.id)
      .then((user) => {
        if (user) {
          res.json({ message: "User deleted successfully" });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  