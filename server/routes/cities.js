const express = require("express");
const cityModel = require("../model/cityModel");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img,
  });
  newCity.save((err, city) => {
    console.log(city);
    if (err) {
      console.log(err);
    } else {
      res.send(city);
    }
  });
});

module.exports = router;
