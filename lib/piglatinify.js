// Will translate your name into piglatin
// WORKS PPERFECTLY FOR SINGLE LAST NAMES
// Not used in heroku app
module.exports = function(word) {
  var wordArray = word.split("");
  var letters = [];
  var changedWord;
  // Checks it the first letter is a vowel
  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }

  // Will continue checking the first letter
  // and removing it (and storing it in letters)
  // until a vowel is reached.
  var count = 0;
  while (!(vowelHash.hasOwnProperty(wordArray[0]))) {
    letters[count] = wordArray.shift();
    count++;
  }

  // Formatting of the final piglatinified word
  var firstLetter = wordArray.shift().toUpperCase();
  changedWord = firstLetter + wordArray.join("") + "-" + letters.join("").toLowerCase() + "ay";
  return changedWord;

};
