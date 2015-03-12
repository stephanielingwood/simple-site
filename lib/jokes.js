module.exports = function jokes() {
	var jokes = [
		{
			"setup": "What did the comedian say when he was hung for bad jokes?",
			"punchline": "You gotta be chokin\' me."
		},
		{
			"setup": "Did you hear about the two peanuts walking down the street?",
			"punchline": "One was a-salted."
		},
		{
			"setup": "Two men walk into a bar.",
			"punchline": "Ouch!"
		}
	];
	var randomIndex = Math.floor(Math.random() * jokes.length);	
	var thisJoke = jokes[randomIndex];
	return thisJoke;
}