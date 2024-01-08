const Item = require("../models/item");
// Get all items
exports.item_list = function (req, res) {
    Item.find()
      .then((items) => {
        res.json(items);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Get one item by id
  exports.item_detail = function (req, res) {
    Item.findById(req.params.id)
      .then((item) => {
        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ error: "Item not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Create a new item
  exports.item_create = function (req, res) {
    const item = new Item({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    item
      .save()
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Update an existing item by id
  exports.item_update = function (req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((item) => {
        if (item) {
          res.json(item);
        } else {
          res.status(404).json({ error: "Item not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Delete an existing item by id
  exports.item_delete = function (req, res) {
    Item.findByIdAndDelete(req.params.id)
      .then((item) => {
        if (item) {
          res.json({ message: "Item deleted successfully" });
        } else {
          res.status(404).json({ error: "Item not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  