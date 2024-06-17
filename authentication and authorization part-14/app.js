const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

app.get("/", (req, res)=>{
    bcrypt.compare("password", "$2b$10$SEoxb2Q8mlz9oGlKg5KCcuJO8T7HnXZNoxazG2JTnJwLw/pPhBtra", function (err, result) {
        console.log(result)        
    })
})


app.listen(8000, function(){
    console.log("app is running on 8000")
})