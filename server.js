var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var jokes = require("./lib/jokes.js");
var characters = require("./lib/characters.js");
var quotes = require("./lib/quotes.js");
var spanglish = require("./lib/spanglish.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.post("/piglatin", function(req, res) {
	var firstname = piglatinify(req.body.firstname);
	var lastname = piglatinify(req.body.lastname);
	var piglatined = { firstname: firstname, lastname: lastname };
	res.json(piglatined);
});

app.post("/spanglish", function(req, res) {
	var modifiedSentence = spanglish(req.body.sentenceInput);
	var spanglishObject = { spanglishSentence: modifiedSentence };
	res.json(spanglishObject);
});

app.get("/jokes", function(req, res) {
	res.json(jokes());
});

app.get("/quotes", function(req, res) {
	res.json(quotes());
});

app.get("/characters", function(req, res) {
	res.json(characters());
});

app.listen(port, function() {
	console.log("server started on port " + port);
});
