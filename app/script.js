$(function() {

	$('button').on('click', function() {
		var url = $(this).attr('id'); //captures the button's id that's clicked

		$.get(url, function(response) {
			var resText;

			/*this if statement looks for whether the response output
			is an object (JSON). if so, it will format the output
			accordingly (print the setup and punchline properties*/
			if (typeof response === "object") {
				resText = response.setup + " Answer: " + response.punchline;
			} else {
				resText = response;
			}
			/*the respond call back is part of the res.send(quotes[randomIndex]);
			line in the server.js*/
			$('#ajax-text').text(resText);
		});
	});

});