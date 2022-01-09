//jshint eslint:6

const express = require("express");

const app = express();

// Routes
app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});
app.get("/contact", function(req,res){
  res.send("Contact me at 123456");
});
app.get("/about", function(req,res){
  res.send("My name is About ME");
});

// LISTEN
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
