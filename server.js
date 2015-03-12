var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var jokes = require("./lib/jokes.js");
var characters = require("./lib/characters.js");
var quotes = require("./lib/quotes.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

var jokes = [
	{
		"setup": "What did the comedian say when he was hung for bad jokes?",
		"punchline": "You gotta be chokin\' me."
	},
	{
		"setup": "Did you hear about the two peanuts walking down the street?",
		"punchline": "One was a-salted."
	},
	{
		"setup": "Two men walk into a bar.",
		"punchline": "Ouch!"
	}
];

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.post("/piglatin", function(req, res) {
	var firstname = piglatinify(req.body.firstname);
	var lastname = piglatinify(req.body.lastname);
	var piglatined = { firstname: firstname, lastname: lastname };
	res.json(piglatined);
});

app.get("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.get("/quote", function(req, res) {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	res.send(quotes[randomIndex]);
});

app.get("/characters", function(req, res) {
	var randomIndex = Math.floor(Math.random() * characters.length);		// Creates a variable that is a random integer coinciding with the length of the characters JSON array
	res.json(characters[randomIndex]);									// Gets a random object out of the JSON array we created above
});

app.listen(port, function() {
	console.log("server started on port " + port);
});
