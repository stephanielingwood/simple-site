var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");
// var piglatinify = require("piglatinify.js");

app.use(express.static(__dirname + "/app"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.post("/piglatin", function(req, res) {
  console.log(req);
  console.log(req.body);
 var firstname = piglatinify(req.body.firstname);
 var lastname = piglatinify(req.body.lastname);
 var piglatined = {firstname: firstname, lastname:
 lastname};
 res.json(piglatined);
});

app.get("/joke", function(req, res) {
 var randomIndex = Math.floor(Math.random() * jokes.length);
 res.json(jokes[randomIndex]);
});

var jokes = [
 { setup: "What's the difference between a guitar and a fish?",
 punchline: "You can't tuna fish." },
 { setup: "What do you get when you cross a cow and a duck?",
 punchline: "Milk and quackers." },
 { setup: "How many tickles does it take to make an octupus laugh?",
 punchline: "Ten Tickles" }
];

// var quotes = [
// "No matter where you go, there you are.",
// "If it is a good idea, go ahead and do it"
// ];

// app.get("/quote", function (req, res){
//  var randomIndex = Math.floor(Math.random()*quotes.length);
//  res.send(quotes[randomIndex]);
// });

app.get("/Raindeezy", function(req, res) {
  res.send("hello, universe!");
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port,function() {
  console.log('server started on port ' + port);
});

function piglatinify(word) {
  var wordArray = word.split("");
  var letters;
  var changedWord; //pig latinified word we return
  //is my first letter a vowel?
  var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
  E: 1, I: 1, O: 1, U: 1};
  if (vowelHash.hasOwnProperty(wordArray[0])) {
  return word + "-hay";}
  letters = wordArray.shift();
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;
}
