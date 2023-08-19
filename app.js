const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.send("<h2>Home page</h2>")
});

app.get("/contacts", (request, response) => {
    response.send("<h2>Contacts page</h2>")
}); 

app.listen(3000, ()=> console.log("server running"))





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