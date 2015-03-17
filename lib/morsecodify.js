module.exports = function(word) {
var wordArray = word.toUpperCase().split("");
var letters;
var changedWord = []; //the pig-latinified name we return
var codeHash = { A:".-", B:"-...", C:"-.-.", D:"-..", E:".", F:"..-.", G:"--.",
H:"....", I:"..", J:".---", K:"-.-", L:".-..", M:"--", N:"-.", O:"---", P:".--.",
Q:"--.-", R:".-.", S:"...", T:"-", U:"..-", V:"...-", W:".--", X:"-..-",
Y:"-.--", Z:"--..", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....",
"6":"-....", "7":"--...", "8":"---..", "9":"----.", "0":"-----" };
// go through each letter in wordArray
for (i = 0; i < wordArray.length; i++) {
//get letter from wordArray
var letter = wordArray[i];
//get value of that letter from codeHash
var morse = codeHash[letter];
//put into a new array
changedWord.push(morse);
}
//return a string created from the array
return (changedWord.join(" "));
};
