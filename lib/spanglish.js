module.exports = function spanglish(sentence) {
	var sentenceArray = sentence.split(" ");
	for(var i=0; i < sentenceArray.length; i++) {
		sentenceArray[i] = sentenceArray[i].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		sentenceArray[i] = sentenceArray[i] + "-o";
	}
	sentenceArray = sentenceArray.join(" ");
	return sentenceArray;
}
