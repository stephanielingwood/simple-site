var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/app/"));

var quotes = [
 "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

var jokes = [
	{	
		'setup': 'What did the comedian say when he was hung for bad jokes?',
		'punchline': 'You gotta be chokin\' me.'
	},
	{	
		'setup': 'Did you hear about the two peanuts walking down the street?',
		'punchline': 'One was a-salted.'
	},
	{	
		'setup': 'Two men walk into a bar.',
		'punchline': 'Ouch!'
	}
];

var characters = [
	{	
		'character': 'Jean ValJean',
		'story': 'Les Miserables'
	},
	{
		'character': 'Atticus Finch',
		'story': 'To Kill A Mockingbird'
	},
	{
		'character': 'Sherlock Holmes',
		'story': 'The Adventures of Sherlock Holmes'
	}
];

app.get("/", function(req, res) {
	res.sendFile('index.html');
});

app.post("/piglatin", function(req, res) {
	var firstname = piglatinify(req.body.firstname);
	var lastname = piglatinify(req.body.lastname);
	var piglatined = { firstname: firstname, lastname: lastname };
	console.log(piglatined);
	res.json(piglatined);
});

app.get("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.get('/quote', function(req, res) {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	res.send(quotes[randomIndex]);
});

app.get('/characters', function(req, res) {
	var randomIndex = Math.floor(Math.random() * characters.length);		// Creates a variable that is a random integer coinciding with the length of the characters JSON array
	res.json(characters[randomIndex]);									// Gets a random object out of the JSON array we created above
});

app.listen(port, function () {
	console.log('server started on port ' + port);
});
