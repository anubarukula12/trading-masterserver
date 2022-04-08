const router = require("express").Router();
let User = require("../models/user.model");

//post method
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const status = "Active";
  const newUser = new User({ name, username, email, password, status });
  newUser.save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});
//get method
router.route("/:id").get((req, res) => {
  console.log("I am in get method")
  User.findById(req.params.id)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete method
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update method
router.route("/update/:id").post((req, res) => {
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
module.exports = router;
