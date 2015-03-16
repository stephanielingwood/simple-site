// Require is a method that comes with node
// The server does stuff with sent data and send it back
// to the script to render it to the user.

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));
var bodyparser = require("body-parser"); // Automatically parses JSON data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var piglatinify = require("./lib/piglatinify.js");

// app.get("/", function(req, res) {

// res.sendFile("index.html")

// })
app.get("/", function (req, res){
 res.sendFile("index.html");
});

// Starts a server on local machine
app.listen(port, function() {
  console.log("server started on port " + port)
});

var quotes = [
"I know nothing with any certainty but the sight of the stars makes me dream.",
"People are not as beautiful as they look, as they walk or as they talk. They are only as beautiful as they love, as they care and as they share.",
"Everybody is a genius but if you judge a fish by its ability to climb a tree it will live its whole life believing that it is stupid.",
"If you want to live a happy life, tie it to a goal, not to people or objects.",
"We cannot solve our problems with the same thinking we used when we created them.",
"If you can’t explain it simply, you don’t understand it well enough.",
"A person who never made a mistake never tried anything new."]

var jokes = [
{setup: "Why was the ocean embarrassed?",
 punchline: "‘Cause all the fish could see it’s bottom!"},
{setup: "How many tickles does it take to tickle an octopus?",
punchline: "TEN-TICKLES!"},
{setup: "How many hipsters does it take to screw in a lightbulb?",
punchline: "It’s a really obscure number, you’ve probably never heard of it."},
{setup: "Why did the tomato blush?",
punchline: "Because it saw the salad dressing!"},
{setup: "What do you call a boomerang that doesn’t come back?",
punchline: "A stick!"},
{setup: "Did you hear about the guy who lost the entire left side of his body in an accident?",
punchline: "Don't worry, he's all right now."}]


var translator = [
{English: "Monday",
Spanish: "Lunes"},
{English: "Tuesday",
Spanish: "Martes"},
{English: "Wednesday",
Spanish: "Miércoles"},
{English: "Thursday",
Spanish: "Jueves"},
{English: "Friday",
Spanish: "Viernes"},
{English: "Saturday",
Spanish: "Sábado"},
{English: "Sunday",
Spanish: "Domingo"}
];

// This is a text endpoint
app.get("/quotes", function (req, res){
 var randomIndex = Math.floor(Math.random()*quotes.length);
 res.send(quotes[randomIndex]);
});

// JSON object endpoint
app.get("/jokes", function(req, res) {
 var randomIndex = Math.floor(Math.random() * jokes.length);
 res.json(jokes[randomIndex]);
})

// JSON object endpoint
app.get("/translator", function(rq, res) {
  var randomIndex = Math.floor(Math.random() * translator.length);
 res.json(translator[randomIndex]);
})


//Post request for a form
app.post("/piglatin", function(req, res) {
 var firstname = piglatinify(req.body.firstname);
 var lastname = piglatinify(req.body.lastname);
 var piglatined = {firstname: firstname, lastname:
 lastname};
 res.json(piglatined);
});



