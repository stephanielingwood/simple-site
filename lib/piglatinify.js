var _ = require("lodash");
module.exports = function(name) {
var nameArray = name.toLowerCase().split('');
 var letters = [];
 var changedName; //the pig-latinified name we return
 var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
E: 1, I: 1, O: 1, U: 1};
//available array methods: pop, push, shift, unshift, join
for (i=0; i<=nameArray.length; i++) {
if (vowelHash.hasOwnProperty(nameArray[0])) {
  return _.capitalize(nameArray.join("")) + "-" + letters.join("") + "ay";
  console.log("after return: " + changedName);
 } else {
 	letters[i] = nameArray.shift();
 	console.log("letters iterations: " + changedName);
 	// changedName = _.capitalize(nameArray.join("")) + "-" + letters.join("") + "ay";
 	// console.log("before the end of the else: " + changedName);
 }
 }
 // return changedName;
 }

