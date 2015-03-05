$(function(){
	$("button").click(function(){
		var url = $(this).attr("id");

		$.get(url, function(response){
			var resText;

			if (typeof response === "object") {
				resText = response.setup + ": " + response.punchline;
			} else {
				resText = response;
			}
			$("#ajax-text").text(resText);
		});
	});
});

// $ (function(){
// function randomFrom(array){
// 	return array[Math.floor(Math.random()* array.length)];
// };
// function buttonPressed(){
// $("#quote").text(randomFrom(quotes));
// };
// var elButton = document.getElementById("quote");
// elButton.addEventListener("click", buttonPressed, false);
// });

