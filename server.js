const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const passport = require("passport");
//const passportLocal = require("passport-local").Strategy;
//const cookieParser = require("cookie-parser");
//const session = require("express-session");
require("dotenv").config();
const app = express();
const port = process.env.port || 5000;

//Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.use(
//   session({
//     secret: "sessioncode",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(cookieParser("secretcode"))

//MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//routes
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
// const loginRouter=require("./routes/login");
// app.use("/login",loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port:${port} `);
});
