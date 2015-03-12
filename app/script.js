$(document).ready(function() {

	$('button').on('click', function() {
		var url = $(this).attr('id'); //captures the button's id that's clicked

		$.get(url, function(response) {
			var resText;

			/*this if statement looks for whether the response output
			is an object (JSON). if so, it will format the output
			accordingly (print the setup and answer properties*/
			if (typeof response === "object") {
				resText = response.setup + " Answer: " + response.answer;
			} else {
				resText = response;
			}
			/*the respond call back is part of the res.send(quotes[randomIndex]);
			line in the server.js*/
			$('#ajax-text').text(resText);
		}); // end GET method
	}); // end button on click event

	$('#piglatin').on('submit', function(e) {
		e.preventDefault();

		var firstname = $('input[name=firstname]').val();
		var lastname = $('input[name=lastname]').val();
		var name = { firstname: firstname, lastname: lastname };
		console.log(name);

		$.post('piglatin', name, function(response) {
			var piglatinfied = response.firstname + " " + response.lastname;
			$('#piglatinified').text(piglatinfied);
		}); //end post method
	}); // end piglatin form submit event

	$('#madlib').on('submit', function(e) {
		e.preventDefault();

		var noun = $('input[name=noun]').val();
		var verbEd = $('input[name=verb_ed]').val();
		var verb = $('input[name=verb]').val();
		var noun2 = $('input[name=noun2]').val();
		var adjective = $('input[name=adjective]').val();
		var verbIng = $('input[name=verb_ing]').val();
		var userinput = { noun: noun, verbEd: verbEd, verb: verb, noun2: noun2, adjective: adjective, verbIng: verbIng };
		console.log(userinput);

		$.post('madlib', userinput, function(response) {
			var madlibgame = "The " + response.noun + ", drunk or stupefied, " + response.verbEd + " the rim of the rain barrel. I didn't " + response.verb + " why it walked around and around: a " + response.noun2 + ". I filled " + response.adjective + " bucket and left it to its " + response.verbIng + ".";
			$('#madlibgame').text(madlibgame);
		});//end post method
	});// end madlib form submit event

}); // end on ready
