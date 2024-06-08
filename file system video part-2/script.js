const fs = require("fs")
const http = require("http")

// fs.writeFile("hello.txt", "hello hii i am fine", function(e){
//     if(e) console.error(e)
//         else console.log("done")
// })

// fs.appendFile("hello.txt", " mai to achha hu", function(err){
//     if(err) console.error(err)
//         else console.log("done")
// })

// fs.rename("padhia.md", "padhai.md", function(err){
//     if(err) console.error(err)
//         else console.log("done")
// })

// fs.copyFile("hello.txt", "./copy/chach.txt", function(err){
//     if(err) console.error(err)
//         else console.log("done")
// })

// fs.unlink("./copy/chach.txt", function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

// fs.rmdir("./copy", function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })


// fs.readFile('message.txt', "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }); 

// fs.readlink("hello.txt", function(err, data){
//     if(err) console.error(err)
//     else console.log(data)
// })

/// http*****

const server = http.createServer(function(req, res){
    res.end("hello wourld")
})

server.listen(3000)