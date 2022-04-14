const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const registerUser = new mongoose.Schema(
  {
    userid:{
      type:String
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

registerUser.pre("save",   async function (next){
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

module.exports = mongoose.model("RegisterUser", registerUser);;
