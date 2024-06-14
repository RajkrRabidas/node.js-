const express = require("express");
const app = express();
const userModel = require("./usermodel");
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("welcome")
});

app.get("/create", async (req, res) => {
   let createduser = await userModel.create({
        name: "roshni",
        username: "roshni show",
        email: "roshni@gmail.com",
        age: 21
    })
    res.send(createduser)
});

app.get("/update", async (req, res) => {
    // userModel.findOneUpdate(findone, update, {new: true}) 
    let Updateuser = await userModel.findOneAndUpdate({username: "raj kumar"}, {name: "raj kumar rabidas"}, {new: true}) 
     res.send(Updateuser)
 });

 app.get("/read", async (req, res) => {
    let users = await userModel.find({username:"roshni show"})
    res.send(users)
 })

 app.get("/delete", async (req, res)=>{
    let userdelete = await usermodel.findOneAndDelete({username:"raj kumar"})
    res.send(userdelete)
 })

app.listen(3000)