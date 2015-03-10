$('button').on('click', function() {
	var url = $(this).attr('id');
	$.get(url, function(response) {
		var resText;
		if (typeof response === 'object' && url == 'joke') {
			resText = response.setup + ": " + response.punchline;
		} else if (typeof response === 'object' && url == 'characters'){
			resText = response.character + " is a character from " + response.story;
		} else {
			resText = response;
		}
		$('#ajax-text').text(resText);
	});
});

function randomArray(array) {
	var randomString = array[Math.floor(Math.random() * array.length)];
	return randomString;
}

$(document).ready(function() {
	$.get('characters', function(response) {
		var resText = response.character + " from the book " + response.story;
		$('#daily-character').text(resText);
	});
});

$(document).ready(function() {
	$("#piglatin").on("submit", function(e) {
		e.preventDefault();
		
		var firstname = $("input[name=firstname]").val();
		var lastname = $("input[name=lastname]").val();
		var name = { firstname: firstname, lastname: lastname };
		console.log(name);
		$.post("piglatin", name, function(response) {
			var piglatinified = response.firstname + " " + response.lastname;
			console.log(piglatinified);
			$("#piglatinified").text(piglatinified);
		});
	});
});