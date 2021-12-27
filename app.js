const express = require ("express");
const https = require("https");

const app = express();


app.get("/", function(req,res) {
    let url = "https://my-json-server.typicode.com/typicode/demo/posts";
    res.send("Server is up and runnning.");
    https.get(url, function(response) {
        console.log(response.statusCode);
    });
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000");
});
