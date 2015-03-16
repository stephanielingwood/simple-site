$(function() { //start a jQuery function
	$("button").click(function() { //this is a button click function
		var url = $(this).attr("id"); //set the variable url to whatever is at the button"s id

		$.get(url, function(response) { //get url from above, this generates a response
			var resText;  //declare a variable called resText

			switch (url) {  //this is a switch that tests for where the button above is looking. This is easier than a long if/else loop
				case "quote":
				resText = response;
				break;

				case "morseCode":
				resText = response;
				break;

				case "joke":
				resText = response.setup + "    " + response.punchline;
				break;

				case "battingAvg":
				resText = response.player + "     " + response.avg;
				break;
			}

	$("#ajax-text").text(resText); //this calls back to the location "ajax-text" and get the text in resText
	});
	});

		$("#piglatin").on("submit", function(e) { //goes to the location piglatin. when the "submit" button is pressed it does the function e
		 e.preventDefault(); //e prevents the page from refreshing. Thanks jQuery
		var firstname = $("input[name=firstname]").val(); //creates a variable called firstname and extracts the value from the location
														  // of the "firstname" input field
		var lastname = $("input[name=lastname]").val();   // same as above
		var name = { irstname: firstname, lastname: lastname }; // creates a variable "name" and creates a json object using the firstname and lastname variables
			$.post("piglatin", name, function(response) { //sends info to the server about the "piglatin" form, and passes "name" through fucntion which does the "response" action
		 var piglatinified = response.firstname + " " +
		 response.lastname;  //the variable piglatinified is the responses for both firstname and lastname with a space between
		 $("#piglatinified").text(piglatinified); //goes to the object location "piglatinified" and gets the text from the variable above
		 });
		});
		$("#morseCode").on("submit", function(e) {
		 e.preventDefault();
		var mCO = { textToConvert: $("input[name=convertify]").val() };
		console.log(mCO);
		$.post("morseCode", mCO, function(response) {
			var morseCodified = response.converted;
			console.log(morseCodified);
		 $("#morseCodified").text(morseCodified);
		});
	});
});
