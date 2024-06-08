const express = require("express");
const app = express();

app.use(function(req, res, next){
    console.log("middleware chalo")
    next()
})

app.get("/", (req, res) => {
    res.send("hello wourld")
});

app.listen(3000)
