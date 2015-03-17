// Require is a method that comes with node
// The server does stuff with sent data and sends it back
// to the script to render it to the user.

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));
var bodyparser = require("body-parser"); // Automatically parses JSON data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var piglatinify = require("./lib/piglatining.js");
var jokes = require("./lib/jokes.js");
var translator = require("./lib/translator.js");
var quotes = require("./lib/quotes.js");
var devowel = require("./lib/devowel.js");

app.get("/", function(req, res) {
 res.sendFile("index.html");
});

// Starts a server on local machine
app.listen(port, function() {
  console.log("server started on port " + port);
});

// This is a text endpoint
app.get("/quotes", function(req, res) {
  res.send(quotes());
});

// JSON object endpoint
app.get("/jokes", function(req, res) {
  res.json(jokes());
});

// JSON object endpoint
app.get("/translator", function(req, res) {
  res.json(translator());
});

//Post request for a form, needed route
app.post("/piglatin", function(req, res) {
 var firstname = piglatinify(req.body.firstname); // Parser works here
 var lastname = piglatinify(req.body.lastname);
 var piglatined = { firstname: firstname, lastname:
 lastname };
 res.json(piglatined);


});

// Poste for devowel form
app.post("/devowel", function(req, res) {
  var devoweled = devowel(req.body.thestring);
  res.json(devoweled);
});
