// Works for two last names
// But the secondName variable doesn't let grunt pass.
module.exports = function(string) {

  // Variable declarations/initializations
  var letters = [];
  var changedWord;
  var vowelHash = { a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
I: 1, O: 1, U: 1 };
  var wordArray = string.split("");
  var twoNames  = { " ": 1, "-": 1 };
  var arrayLength = wordArray.length;

  // Will run through the word array and find
  // any spaces or hyphens indicating there are
  // two names
  for (i = 0; i < arrayLength; i++) {
    if (twoNames.hasOwnProperty(wordArray[i])) {
      wordArray[i] = "";
      var secondName = [];
      var counter = 0;
      for (j = i + 1; j < arrayLength; j++) {
        secondName[counter] = wordArray.pop();
        counter++;
      }
    }
  }

// If there is two names then they are sent to the
// morePigLatin function to be translated into piglatin
// and then returned in the apporpriate order
if (secondName !== undefined) {
  secondName = secondName.reverse();
  var pigged = morePigLatin(secondName);
  var pigged2 = morePigLatin(wordArray);
  return pigged2 + " " + pigged;
}

// If there is not second name, send to the pig latin translator
// and return the result
if (secondName === undefined) {
  return morePigLatin(wordArray);
}

// PIGLATINIFIES WORDS
function morePigLatin(word) {

  // If the first letter is a vowel, the letter is
  // capitalized and attached to the piglatined word
  if (vowelHash.hasOwnProperty(word[0])) {
    var firstLetterVowel = word.shift().toUpperCase();
    return firstLetterVowel + word.join("") + "-hay";
  }

  // If the first letter is not a vowel, this loop
  // will continue to remove the consonants and store them
  // in letters until a vowel is reached.
  var count = 0;
  while (!(vowelHash.hasOwnProperty(word[0]))) {
    letters[count] = word.shift();
    count++;
  }

  // Ensures the first letter of the piglatined word is capitalized
  // and the rest are lower case and formatted correctly. Returns
  // the piglatined word.
  var firstLetter = word.shift().toUpperCase();
  changedWord = firstLetter + word.join("") + "-" + letters.join("").toLowerCase() + "ay";
  return changedWord;
}
};
