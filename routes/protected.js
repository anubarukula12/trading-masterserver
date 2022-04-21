const express = require("express");
const passport = require("passport");
require("../config/passport");
const jwt = require("jsonwebtoken");
const app=express();
const protectedrouter = express.Router();
app.use(passport.initialize());

// protectedrouter.post(
//     "protected",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//       return res.status(200).send({
//         success: true,
//         user: {
//           id: req.user._id,
//           username: req.user.username,
//         },
//       });
//     }
//   );

protectedrouter.post('/protected', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);
  
  module.exports=protectedrouter;