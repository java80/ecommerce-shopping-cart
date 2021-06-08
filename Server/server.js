const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const users = require("./routes/api/users");
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
require("./Config/passport")(passport);
app.use("/api/users", users);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));

