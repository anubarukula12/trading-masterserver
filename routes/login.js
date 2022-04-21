const express = require("express");
const userExist = require("../controllers/userlogin.controller");
const loginrouter = express.Router();
loginrouter.route("/login").post(userExist);
module.exports = loginrouter;
