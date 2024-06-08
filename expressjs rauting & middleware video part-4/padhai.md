# Epress.js Basic :
```javascript
// Introduction to express.js -
// express js ek npm package hai
// express js framework hai
// framework kya hota -> framework ek flow deta wahi aur waise hi karna hota hai.


// setting up a basic express application.
const express = require("express");
const app = express();

//Routing
app.get("/", (req, res) => {
  res.send("hello wourld");
});

app.listen(3000);
```
## Middleware :
```javascript
    // jab bhi server accept karta hai waha se route ke beech pahuchne tak agar app us request ko beech me rokte ho and kuchh perform karte ho to ye element middleware hai
    
    app.use(function(req, res, next){
    console.log("middleware chalo")
    next()
})
```
    // Request and response handling
     > frontend backend frontend
    
### Error handling
    ###### route me likhna hai ki 
    return next(new Error("Not imlemented")) // console me dikhega
```javascript
    // sabhi route ke bad likhna hai

    app.use ((err, req, res, next)=>{
        console.log(err.stack)
        res.status(500).send('something broken!') //browser me dikhega
    })
```
