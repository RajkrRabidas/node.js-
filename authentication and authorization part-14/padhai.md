1) cookie kaise set karte hai and read karte hai

```javascript
// cookie-parser require here
const cookieParser = require("cookie-parser")

// set cookieParser
app.use(cookieParser())

// bowser me cookie set huaa
app.get("/", (req, res)=>{
    res.cookie("name", "rajkumar")
    res.end()
})

// how to read cookie ⬇
app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.end("read page")
})
```
2) bcrypt kaise use karte hai for password encrytption and decryption

```javascript
// i) encrytption

const bcrypt = require("bcrypt")

app.get("/", (req, res)=>{
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash("password", salt, function(err, hash){
            console.log(hash);
        })
    })
})

// ii) decryption

const bcrypt = require("bcrypt")

app.get("/", (req, res)=>{
    bcrypt.compare("password", "$2b$10$SEoxb2Q8mlz9oGlKg5KCcuJO8T7HnXZNoxazG2JTnJwLw/pPhBtra", function (err, result) {
        console.log(result)        
    })
})
```

3) JWT kya hai and JWT mein data kaise store karein and baahar nikaalein