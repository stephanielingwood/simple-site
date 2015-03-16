var _ = require("lodash");
module.exports = function(name) {
var nameArray = name.toLowerCase().split('');
 var letters = [];
 var changedName; //the pig-latinified name we return
 var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
E: 1, I: 1, O: 1, U: 1};
//array methods: pop, push, shift, unshift, join
for (i=0; i<nameArray.length; i++) {
if (vowelHash.hasOwnProperty(nameArray[0])) {
 return _.capitalize(name) + "-hay";
 } else {
 	letters[i] = nameArray.shift();
 	console.log(letters);
 }
 }
 	changedName = nameArray.join("") + "-" + letters + "ay";
	return changedName;
	// letters = nameArray.shift();
	// changedName = nameArray.join("") + "-" + letters + "ay";
	// return changedName;
};

