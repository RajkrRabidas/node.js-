const express = require("express")
const app = express()

let port = 3000

app.get("/", (req, res)=>{
    res.send("hello breter")
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})