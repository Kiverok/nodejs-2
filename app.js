const express = require("express");
const fs = require("fs/promises")
const moment = require("moment");
const albums = require("./albums.json");

const app = express();


app.use(async(req, res, next)=> {
const {method, url} = req;
const date = moment().format("YYYY-MM-DD_hh:mm:ss");
await fs.appendFile("./public//server.log", `\n${method} ${url} ${date}`);
next()
})
// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next()
// });
 
app.get("/products", (req, res)=> {
    res.json([])
});

app.get("/albums", (req, res)=> {
    res.json(albums)
});


app.listen(3000);












// const express = require("express");
// const albums = require("./albums")

// const app = express();

// app.set('json spaces', 8)

// app.get("/albums", (req, res)=> {

// res.json(albums)
// }) 

// app.listen(3000);








// const { request } = require("express");
// const express = require("express");

// const app = express();

// app.get("/", (request, response) => {
//     response.send("<h2>Home page</h2>")
// });

// app.get("/contacts", (request, response) => {
//     response.send("<h2>Contacts page</h2>")
// }); 

// app.listen(3000, ()=> console.log("server running"))





// const http = require("http");


// const server = http.createServer((request, response)=>{
//     const {url} = request;
//     if(url === "/"){
//         response.write("<h2>Home page</h2>");
//     } else if(url === "/contacts") {
// response.write("<h2>Contacts page</h2>");
//     } else {
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
// });