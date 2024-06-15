#### Data Storage:
```htm
TYPES OF DBS 

SQL | NoSQL
```


What and why
terminologies - collections, documents, Schemas, keys, models
#### Database -> Collenctions -> document

## code me kaise kya likhte hai
         <--------- Threoy ---------->

        CODE                    BATABASE
    ----------------------------------------------
    mongoose.connect    ->      database create hota hai
    model create        ->      collections create hota hai
    CREATE se           ->      document create hota hai`


### mongodb connection
```javascript
 // mongoose.mosel se collection create huaa
 module.exports = mongoose.model("user", userSchema)
 // module.exports se model ya fir kahe usermodel file export ho raha hai jiska use hum " CREATE, UPDATE, READ AND DELETE " ME KAR SAKTE HAI
```
### Schema
```javascript
// how we create a schema
const userSchema = mongoose.Schema({
    name: "String",
    username: "String",
    age: "Number",
    email: "String"
})
```
## CRUD

```javascript
// create
app.get("/create", async (req, res) => {
   let createduser = await userModel.create({
        name: "roshan",
        username: "roshan show",
        email: "roshan@gmail.com",
        age: 21
    })
    res.send(createduser)
});

// Read
 app.get("/read", async (req, res) => {
    let users = await userModel.find({username:"roshan show"})
    res.send(users)
 })

// Update
app.get("/update", async (req, res) => {
    // userModel.findOneUpdate(findone, update, {new: true}) 
    let Updateuser = await userModel.findOneAndUpdate({username: "raj kumar"}, {name: "raj kumar rabidas"}, {new: true}) 
     res.send(Updateuser)
 });

// Delete
 app.get("/delete", async (req, res)=>{
    let userdelete = await usermodel.findOneAndDelete({username:"raj kumar"})
    res.send(userdelete)
 })

```
