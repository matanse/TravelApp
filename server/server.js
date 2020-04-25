const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./keys").mongoURI;
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/cities", require("./routes/cities"));

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});
