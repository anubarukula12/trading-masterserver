const RegisterUser = require("../models/user.model");
const userGetDetails=(req,res)=>{
    RegisterUser.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json({
      "error": {
        "code": 400,
        "message": "user details doesnot exist"
      }
    }));


}
module.exports=userGetDetails