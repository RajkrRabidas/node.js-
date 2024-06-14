const express = require("express")
const app = express()
const path = require("path")
const userModel = require('./models/user')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', "ejs")

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/read", async (req, res)=>{
    let users = await userModel.find()
    res.render("read", {users})
})

app.get("/delete/:id", async (req, res)=>{
    let alluser = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read")
})

app.post("/create", async (req, res)=>{
    let {name, email, image} = req.body
    let createUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})





app.listen(port,function(){
    console.log(`app is running ${port}`)
})