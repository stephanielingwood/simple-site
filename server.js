var express = require("express");
var app = express();
var bodyparser = require("body-parser");
// var __ = require("lodash");
// // var __app = lodash();
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var jokeLib = require("./lib/jokes.js");
var quoteLib = require("./lib/quote.js");
var batAvgLib = require("./lib/battingAverage.js");
var morseCodify = require("./lib/morsecodify.js");

app.use(function (req, res, next) {
    res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
    next();
});  //tribute to Terry Pratchet, keep him alive in the "clacks"

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res){
	res.sendFile(index.html)
});

app.post("/piglatin", function(req, res) {
 var plFirstname = piglatinify(req.body.firstname);
 var plLastname = piglatinify(req.body.lastname);
 var piglatined = {firstname: plFirstname, lastname: plLastname};
 res.json(piglatined);
});

app.post("/morseCode", function (req, res) {
console.log("server.js says: ");
console.log(req.body);
var mc = morseCodify(req.body.textToConvert);
var morseConverted = {converted: mc};
res.json(morseConverted);
});

app.get("/quote", function (req, res){
 var quoteSend = quoteLib();
 res.send(quoteSend);
});

app.get("/joke", function(req, res) {
 var jokeGen = jokeLib();
 res.json(jokeGen);
});

app.get("/battingAvg", function(req, res) {
 var avgGen = batAvgLib();
 res.json(avgGen);
});
 
app.listen(port, function(){
	console.log("server started on port " + port);
});


