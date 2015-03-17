module.exports = function(word) {
  var wordArray = word.split("");
  var letters;
  var changedWord;

  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  //if there's a vowel
  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  }

  //otherise, it starts with a consonant
  letters = wordArray.shift();
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;
};