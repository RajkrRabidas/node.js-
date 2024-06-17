const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModule = require("./models/user");
const postModule = require("./models/post");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  let { name, username, email, password, age } = req.body;
  let user = await userModule.findOne({ email });
  if (user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModule.create({
        name,
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "oooerroooee");
      res.cookie("token", token);
      res.send("registered");
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/cart", (req, res)=>{
  res.render("cart")
})

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.user);
  res.redirect("/cart");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModule.findOne({ email });
  if (!user) return res.status(500).send("something went wrong");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "oooerroooee");
      res.cookie("token", token);
      res.status(200).send("you can logged in now");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("You must be logged in");
  } 

  try {
    const data = jwt.verify(token, "oooerroooee");
    req.user = data;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
}

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
