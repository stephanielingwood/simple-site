// Will translate your name into piglatin
// WORKS PPERFECTLY FOR SINGLE LAST NAMES
module.exports = function(word) {

// FROM CLASS SHOULD WORK
var wordArray = word.split("");
  var letters = [];
  var changedWord;
  // Is my first letter a vowel?
  var vowelHash = {a : 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1};
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }

  var count = 0;
  while (!(vowelHash.hasOwnProperty(wordArray[0]))) {
    letters[count] = wordArray.shift();
    count++;
  }

  var firstLetter = wordArray.shift().toUpperCase();
  changedWord = firstLetter + wordArray.join("") + "-" + letters.join("").toLowerCase() + "ay";
  return changedWord;

};
