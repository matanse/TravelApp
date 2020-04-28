const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  openHours: {
    type: Object,
  },
  date: {
    type: Date,
  },
  duration: {
    type: String,
  },
  rating: {
    type: Array,
  },
  price: {
    type: String,
  },
  hashtag: {
    type: Array,
  },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
