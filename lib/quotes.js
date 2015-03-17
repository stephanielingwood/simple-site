module.exports = function() {

 var quotes = [
 "I know nothing with any certainty but the sight of the stars makes me dream.",
 "People are not as beautiful as they look, as they walk or as they talk. They are only as beautiful as they love, as they care and as they share.",
 "Everybody is a genius but if you judge a fish by its ability to climb a tree it will live its whole life believing that it is stupid.",
 "If you want to live a happy life, tie it to a goal, not to people or objects.",
 "We cannot solve our problems with the same thinking we used when we created them.",
 "If you can’t explain it simply, you don’t understand it well enough.",
 "A person who never made a mistake never tried anything new." ];

 var randomIndex = Math.floor(Math.random() * quotes.length);
 return quotes[randomIndex];
};
