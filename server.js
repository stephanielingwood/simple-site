var express = require("express");
var app = express();
var _ = require("lodash");
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");
var piglatinify = require("./lib/piglatinify.js");
var rL = require("./lib/randomLetters.js");
var q = require("./lib/quote.js");
var r = require("./lib/random.js");
var j = require("./lib/joke.js");

app.use(express.static(__dirname + "/app"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.post("/piglatin", function(req, res) {
 var firstname = piglatinify(req.body.firstname);
 var lastname = piglatinify(req.body.lastname);
 var piglatined = { firstname: firstname, lastname:
 lastname };
 res.json(piglatined);
});

app.post("/randomLetters", function(req, res) {
 var input = rL.randomLetters(rL.alphabet);
 res.send(input);
});

app.get("/joke", function(req, res) {
var joke = j.jokes[j.randomNum];
res.json(joke);
});

app.get("/quote", function(req, res) {
var quote = q.kanyeQuotes[q.randomNum];
res.send(quote);
});

app.get("/random", function(req, res) {
  var answer = r();
res.send(answer);
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
