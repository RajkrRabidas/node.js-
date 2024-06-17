const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const userModel = require("./models/user");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { name, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createuser = await userModel.create({
        name,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "sgsddfgdlfhdfdfjdfrurj");
      res.cookie("token", token);
      res.send(createuser);
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let userlogin = await userModel.findOne({ email: req.body.email });
  if (!userlogin) return res.send("something went wrong");

  bcrypt.compare(req.body.password, userlogin.password, function (err, result) {
    if (result) {
      let token = jwt.sign(
        { email: userlogin.email },
        "sgsddfgdlfhdfdfjdfrurj"
      );
      res.cookie("token", token);
      res.send("yes you can login");
    } else res.send("something went wrong");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(4000, function () {
  console.log("app is running on 4000");
});
