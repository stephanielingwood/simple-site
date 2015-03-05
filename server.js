var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var quotes = [
 "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

var jokes = [
	{	'setup': 'What did the comedian say when he was hung for bad jokes?',
		'punchline': 'You gotta be chokin\' me.'},
	{	'setup': 'Did you hear about the two peanuts walking into a bar?',
		'punchline': 'One was a-salted.'},
	{	'setup': 'Two men walk into a bar.',
		'punchline': 'Ouch!'}
];

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
	res.sendFile('hello.html');
});

app.get("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.json(jokes[randomIndex]);
});

app.get('/quote', function(req, res) {
	var randomIndex = Math.floor(Math.random() * quotes.length);
	res.send(quotes[randomIndex]);
});

app.listen(port, function () {
	console.log('server started on port ' + port);
});
