const express = require("express");
const userCreate = require("../controllers/usersignup.controller");
const userrouter = express.Router();
userrouter.route("/register").post(userCreate);
module.exports = userrouter;
