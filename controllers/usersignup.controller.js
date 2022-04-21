const RegisterUser = require("../models/user.model");
const userCreate = async (req, res) => {
  console.log("hai in controller");
  const crypto = require("crypto");
  const userid = crypto.randomBytes(16).toString("hex");
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(password);
  const confirmpassword = req.body.confirmpassword;
  console.log(confirmpassword);
  const status = "Active";

  console.log(userid);
  try {
    console.log("in try");
    const emailexist = await RegisterUser.findOne({ email });
    console.log("existing email" + emailexist);
    const usernameexist = await RegisterUser.findOne({ username });
    console.log("usernameexist" + usernameexist);
    if (emailexist !== null || usernameexist !== null) {
      return res.status(400).send("User Already Exist!");
    }
    if (password != confirmpassword) {
      return res.status(400).send("Password does't match!");
    }
    const newUser = new RegisterUser({
      userid,
      name,
      username,
      email,
      password,
      status,
    });
    await newUser.save();
    return res.status(200).send(" user registered successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = userCreate;
