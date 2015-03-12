module.exports = function() {
	var mlbTrivia = [
		{setup: "Who was the last Major Leaguer to play all nine positions in one game?", punchline: "The Tiger's Shane Halter (10/1/2000)"	},
		{setup: "Who are the only two players with at least 20 home runs in each of the last 11 seasons?", punchline: "David Ortiz (last 13 seasons) and Miguel Cabrera (last 11 seasons)" },
		{setup: "Who holds the Rockies' record for RBIs in a season?", punchline: "Andres Galarraga (150 in 1996)" },
		{setup: "Who did Reggie Jackson pinch-hit for when he homered in the 1971 All-Star Game?", A: "Vida Blue" },
		{setup: "Who was the most recent active position player whose career covered four different decades?", punchline: "Shortstop Omar Vizsetupuel (1989-2012)" },
		{setup: "Who is the oldest pitcher in MLB history to throw a shutout?", punchline: "Jamie Moyer (7-0 win over the Braves on 5/7/10)" }
	];

	var randomIndex = Math.floor(Math.random() * mlbTrivia.length);
	var returnVal = mlbTrivia[randomIndex];
	return returnVal;
};