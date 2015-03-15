/*Original story is:
The hornet, drunk or stupefied, walked the rim of the rain barrel. I didn't understand why it walked around and around: a peculiarity. I filled another bucket and left it to its circling.*/
module.exports = function(input) {
	var inputArray = input.split('');
	// var letters;
	var changeInput;

	var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

	if (vowelHash.hasOwnProperty(inputArray[0])) {
		return input + "-ub";
	}

	// letters = inputArray.shift();
	changeInput = inputArray.join('') + "-" + "ub";
	return changeInput;
};