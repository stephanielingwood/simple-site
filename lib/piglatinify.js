// Will translate your name into piglatin
module.exports = function(string) {

  // Variable declarations/initializations
  var letters = [];
  var changedWord;
  var vowelHash = { a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
I: 1, O: 1, U: 1 };
  var wordArray = string.split("");
  var twoNames  = { " ": 1, "-": 1 };
  var arrayLength = wordArray.length;

  for (i = 0; i < arrayLength; i++) {

    if (twoNames.hasOwnProperty(wordArray[i])) {
      wordArray[i] = "";
      secondName = [];
      var counter = 0;
      for (j = i + 1; j < arrayLength; j++) {
        secondName[counter] = wordArray.pop();
        counter++;
      }
    }
  }

if (secondName !== undefined) {
  secondName = secondName.reverse();
  var pigged = morePigLatin(secondName);
  var pigged2 = morePigLatin(wordArray);
  return pigged2 + " " + pigged;
}

if (secondName === undefined) {
  return morePigLatin(wordArray);
}

// PIGLATINS WORDS
function morePigLatin(word) {

  if (vowelHash.hasOwnProperty(word[0])) {
    var firstLetterVowel = word.shift().toUpperCase();
    return firstLetterVowel + word.join("") + "-hay";
  }

  var count = 0;
  while (!(vowelHash.hasOwnProperty(word[0]))) {
    letters[count] = word.shift();
    count++;
  }

  var firstLetter = word.shift().toUpperCase();
  changedWord = firstLetter + word.join("") + "-" + letters.join("").toLowerCase() + "ay";
  return changedWord;
}
};
