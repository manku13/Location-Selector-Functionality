const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  house: String,
  area: String,
  category: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
