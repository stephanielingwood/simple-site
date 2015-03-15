module.exports = function(input) {
	var inputArray = input.split("");
	var letters;
	var changeInput;

	var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

	if (vowelHash.hasOwnProperty(inputArray[0])) {
		return input + "-ub";
	}

	letters = inputArray.unshift();
	changeInput = inputArray.join('') + "ub" + letters;
	return changeInput;
};