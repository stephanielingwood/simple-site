var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser"); // Automatically parses JSON data
var piglatinify = require("./lib/piglatining.js");
var jokes = require("./lib/jokes.js");
var translator = require("./lib/translator.js");
var quotes = require("./lib/quotes.js");
var devowel = require("./lib/devowel.js");

app.use(express.static(__dirname + "/app/"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
 res.sendFile("index.html");
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

// Post for a form, needed route
app.post("/piglatin", function(req, res) {
 var firstname = piglatinify(req.body.firstname); // Parser works here
 var lastname = piglatinify(req.body.lastname);
 var piglatined = { firstname: firstname, lastname:
 lastname };
 res.json(piglatined);
});

// Post for devowel form
app.post("/devowel", function(req, res) {
  var devoweled = devowel(req.body.randomWord);
  res.json(devoweled);
});

// Starts a server on local machine
app.listen(port, function() {
  console.log("server started on port " + port);
});
