module.exports = function(word) {

 var vowelHash = { a: 1, e: 1, i: 1, o:1, u:1, A: 1, E: 1,
 I: 1, O: 1, U: 1 };
 var wordArray = word.split("");

 var count = 0;
 for (i = 0; i < wordArray.length; i++) {
   if (vowelHash.hasOwnProperty(wordArray[i])) {
    count += 1;
    wordArray[i] = "";
   }
 }

 var returnedObject = { Voweless: wordArray.join(""), Count: count };
 return returnedObject;
};
