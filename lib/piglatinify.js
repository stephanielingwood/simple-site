var _ = require("lodash");
module.exports = function(name) {
var nameArray = name.toLowerCase().split('');
 var letters = [];
 var changedName; //the pig-latinified name we return
 var forIteration = nameArray.length;
 var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
E: 1, I: 1, O: 1, U: 1};
//available array methods: pop, push, shift, unshift, join
for (i=0; i<=forIteration; i++) {
if (vowelHash.hasOwnProperty(nameArray[0])) {
	console.log("after return: " + letters);
  return _.capitalize(nameArray.join("")) + "-" + letters.join("") + "ay";
 } else {
 	letters[i] = nameArray.shift();
 }
 }
 }

