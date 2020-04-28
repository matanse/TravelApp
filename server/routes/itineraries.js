const express = require("express");
const itineraryModel = require("../model/itineraryModel");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Itinerary test route." });
});

/*get all itinerary*/
router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newItinerary = new itineraryModel({
    title: req.body.title,
    city: req.body.city,
    img: req.body.img,
  });
  newItinerary.save((err, itinerary) => {
    console.log(itinerary);
    if (err) {
      console.log(err);
    } else {
      res.send(itinerary);
    }
  });
});

module.exports = router;
