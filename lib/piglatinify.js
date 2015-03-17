var _ = require('lodash');
module.exports = function(word) {
var wordArray = word.split(/[ ]/);
var answer = "";
for(var i = 0; i < wordArray.length; i++) {
  answer += (" " + vowelChecker(wordArray[i]))
}
return answer;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  function vowelChecker(array) {
  var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1, I: 1, O: 1, U: 1};
  var intoArray = array.split("");
  var counter = 0;
  var letters = "";
  var changedWord;
  if (vowelHash.hasOwnProperty(intoArray[0])) {
    return intoArray.join("") + "-hay";
    }
  _.forEach(intoArray, function(val) {
    if (!vowelHash.hasOwnProperty(val)) {
      letters += val;
      counter++;
    }
    if (vowelHash.hasOwnProperty(val)) {
     return false;
    }
  });
  while (counter > 0){
    counter--;
    intoArray.shift();
  }
    changedWord = capitalizeFirstLetter(intoArray.join("")) + "-" + lowercaseFirstLetter(letters) + "ay";
    return changedWord;
  };
}

// module.exports = function(word) {
//   var wordArray = word.split("");
//   var letters;
//   var changedWord;
//   var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
//   E: 1, I: 1, O: 1, U: 1};
//   if (vowelHash.hasOwnProperty(wordArray[0])) {
//   return word + "-hay";}
//   letters = wordArray.shift();
//   changedWord = wordArray.join("") + "-" + letters + "ay";
//   return changedWord;
// };
