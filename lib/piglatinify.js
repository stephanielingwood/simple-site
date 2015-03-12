module.exports = function(word) {
	var wordArray = word.split("");
	var	letters;
	var	changedWord;
	var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
	function capitalizeFirstLetter(array) {
		return array.charAt(0).toUpperCase() + array.slice(1); 
	}
	function lowercaseFirstLetter(string) {
		return string.charAt(0).toLowerCase() + string.slice(1);
	}
	if(vowelHash.hasOwnProperty(wordArray[0])) {
		return wordArray.join("") + "-hay";
	} else {
		letters = "";
		while(!vowelHash.hasOwnProperty(wordArray[0])) {
			letters += wordArray.shift();
		}
		wordArray = wordArray.join("");
		wordArray = capitalizeFirstLetter(wordArray);
		letters = lowercaseFirstLetter(letters);
		changedWord = wordArray + "-" + letters + "ay";
		return changedWord;
	}
};

