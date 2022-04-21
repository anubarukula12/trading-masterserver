const { hashSync, compareSync } = require('bcrypt');
const express = require("express");
const passport = require("passport");
const app = express();
const RegisterUser = require("../models/user.model");
const jwt = require("jsonwebtoken");
const userExist = async (req, res) => {
  // app.use(passport.initialize());
  // require('../config/passport')
  const user=new RegisterUser({
  username : req.body.username,
   password : hashSync(req.body.password,8)})
  RegisterUser.findOne({username:req.body.username }).then((user) => {
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Could not find the user.",
      });
    }
  });
  if (!compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }
  const payload = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(payload, "Random string", { expiresIn: "1d" });
  return res.status(200).send({
    success: true,
    message: "Logged in successfully!",
    token: "Bearer" + token,
  });
  
  
};

module.exports = userExist;
