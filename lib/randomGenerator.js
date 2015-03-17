module.exports = function() {
  var jokes = [
  {setup: "What's the difference between a guitar and a fish?", answer: "You can't tuna fish."},
  {setup: "What do you get when you cross a cow and a duck?", answer: "Milk and quackers."},
  {setup: "How many tickles does it take to make an octopus laugh?", answer: "Ten Tickles"}
  ];
  //random generator
  var randomIndex = Math.floor(Math.random() * jokes.length);
  //get random item from array
  var returnVal = jokes[randomIndex];
  //return item
  return returnVal;
};