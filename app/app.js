$('button#randomStringButton').on('click', function () {
	var $sentenceInput = $('textarea#sentenceText').val();
	var $sentenceArray = $sentenceInput.split(" ");
	$('div#printString').text("Your random word from your sentence is: " + randomArray($sentenceArray));
})

function randomArray(array) {
	var randomString = array[Math.floor(Math.random() * array.length)];
	return randomString;
}