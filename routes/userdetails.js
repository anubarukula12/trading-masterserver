const express = require("express");
const userGetDetails = require("../controllers/userdetails.controller");
const userdetailsrouter = express.Router();
userdetailsrouter.route("/registerusers").get(userGetDetails);
module.exports = userdetailsrouter;