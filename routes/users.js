const userrouter = require("express").Router();
const RegisterUser = require("../models/user.model");

//post method
userrouter.route("/register").post(async(req, res) => {
  const crypto = require("crypto");
  const userid = crypto.randomBytes(16).toString("hex");
  const name = req.body.name;
  console.log(name);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword=req.body.confirmpassword;
  const status = "Active";
  
console.log(userid);
  try{
   const exist=await RegisterUser.findOne({email})
   if(exist){
     return res.status(400).send("User Already Exist")
   }
   if(password!=confirmpassword){
    return res.status(400).send("Password does't match")
   }
   const newUser = new RegisterUser({userid, name, username, email, password, status });
  await newUser.save()
return res.status(200).send("Registered successfully")
    
 }catch(err){
       console.log(err)
       return res.status(500).send('Internal Server Error');
  }
});
  
//get method
userrouter.route("/:id").get((req, res) => {
  console.log("I am in get method")
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json({
      "error": {
        "code": 400,
        "message": "ID not found"
      }
    }));
});

//delete method
userrouter.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update method
userrouter.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
  .then((users) => {
    users.name = req.body.name;
    users.username = req.body.username;
    users.email = req.body.email;
    users.password = req.body.password;
    users.save()
      .then(() => res.json("User updated"))
      .catch((err) => res.status(400).json("Error:" + err));
  })
  .catch(err =>res.status(400).json('Error:'+err))
});
module.exports = userrouter;
