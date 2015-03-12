module.exports = function characters() {
	var characters = [
		{
			"character": "Jean ValJean",
			"story": "Les Miserables"
		},
		{
			"character": "Atticus Finch",
			"story": "To Kill A Mockingbird"
		},
		{
			"character": "Sherlock Holmes",
			"story": "The Adventures of Sherlock Holmes"
		}
	];
	var randomIndex = Math.floor(Math.random() * characters.length);
	var thisCharacter = characters[randomIndex];
	return thisCharacter;
}
