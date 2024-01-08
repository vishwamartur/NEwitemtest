const Reservation = require("../models/reservation");
// Get all reservations
exports.reservation_list = function (req, res) {
    Reservation.find()
      .then((reservations) => {
        res.json(reservations);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Get one reservation by id
  exports.reservation_detail = function (req, res) {
    Reservation.findById(req.params.id)
      .then((reservation) => {
        if (reservation) {
          res.json(reservation);
        } else {
          res.status(404).json({ error: "Reservation not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Create a new reservation
  exports.reservation_create = function (req, res) {
    const reservation = new Reservation({
      item: req.body.item,
      date: req.body.date,
      time: req.body.time,
      user: req.body.user,
    });
    reservation
      .save()
      .then((reservation) => {
        res.status(201).json(reservation);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Update an existing reservation by id
  exports.reservation_update = function (req, res) {
    Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((reservation) => {
        if (reservation) {
          res.json(reservation);
        } else {
          res.status(404).json({ error: "Reservation not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  
  // Delete an existing reservation by id
  exports.reservation_delete = function (req, res) {
    Reservation.findByIdAndDelete(req.params.id)
      .then((reservation) => {
        if (reservation) {
          res.json({ message: "Reservation deleted successfully" });
        } else {
          res.status(404).json({ error: "Reservation not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  