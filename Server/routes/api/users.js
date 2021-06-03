const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const User = require("../../models/Usermodel");
const jwt = require("jsonwebtoken");
const keys = require("../../Config/keys");
const passport = require("passport");

router.get("/test", (req, res) => res.json({ msg: "Users work" }));


module.exports = router;