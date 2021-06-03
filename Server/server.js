const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();
app.use(cors());

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB Configuration
const db = require("./Config/Db").mongoURI;

mongoose
  .connect(db, { usedNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("Hello ike"));
app.use(passport.initialize());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));