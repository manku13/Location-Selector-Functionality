const express = require("express");
const Location = require("../models/Location");

const router = express.Router();

// Save a new address
router.post("/", async (req, res) => {
  const { house, area, category, coordinates } = req.body;
  const newLocation = new Location({ house, area, category, coordinates });
  try {
    await newLocation.save();
    res.status(200).json({ message: "Location saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving location", error: err });
  }
});

// Get all addresses
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching locations", error: err });
  }
});

module.exports = router;
