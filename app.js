const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res) {
    let url = "https://my-json-server.typicode.com/typicode/demo/posts";
    // res.send("Server is up and runnning.");
    console.log(req.body.cityName);
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data){
            let weatherData = JSON.parse(data);
            let temp = weatherData[0].id;
            let weatherDescription = weatherData[0].title;
            console.log(temp + " " + weatherDescription);
            res.send("<h1>The temp in London is " + temp + " degrees Celcius and " + weatherDescription + "</h1>");
        });
    });
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000");
});
