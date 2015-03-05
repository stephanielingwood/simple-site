$('button').on('click', function() {
	var url = $(this).attr('id');
	$.get(url, function(response) {
		var resText;
		if (typeof response === 'object') {
			resText = response.setup + ": " + response.punchline;
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