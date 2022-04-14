// const RegisterUser = require("../models/user.model");
// const loginrouter = require("express").Router();
// const jwt=require('jsonwebtoken');
// const { json } = require("express/lib/response");
// router.route("/register").post(async(req, res) => {
//     try{
//         const{email,password}=req.body;
//         let exist=await RegisterUser.findOne({email});
//         if(!exist){
//             return res.status(400).send("User Not Found");
//         }
//         if(exist){
//             return res.status(400).send("Invalid Credentials");

//         }
//     }
//         catch(err){
//             console.log(err);
//             return res.status(500).send("Server Error");
//        }
//        let playload={
//            user:{
//                id:exist.id
//            }
//        }
//        jwt.sign(playload,'jwtSecret',{expiresIn:3600000},
//         (err,token)=>{
//             if(err) throw err;
//             return res.json({token})
//         })
    
// });