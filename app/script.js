// This script gives it functionality, it's what is interacting
// with the user. It will send requests for data
// from our server file.

// Now when buttons are clicked When you click the button, Ajax will make an http request
//to your server; the response will be inserted in that <p>
//tag.

$(function() {
$( "button" ).click(function() {
  // Looks for the button tag and on click the function
  // will be executed
  var url = $(this).attr("id");
  // This assigns to url the ID of the button that was clicked
 // $(this).css("color", "blue");
   $.get(url, function(response) {
    // This then sends an AJAX get request in order to
    // acquire the wanted item.
    var resText;

    if (url === "jokes") {
      resText = response.setup + ": " + response.punchline;

} else if (url === "translator") {
  resText = response.English + " is " + response.Spanish + " in spanish.";

    }else {
      resText = response;
    }
 $("#ajax-text").text(resText);
 // This places the response text into the p tag
 // in the html file that has the ajax-text ID
//   var newWord = array[Math.floor(Math.random() * array.length)];
});
});

// Even handler that fires when the form is submitted
$("#piglatin").on("submit", function(e) {
  //The e.preventDefault() keeps the page from refreshing when the
  //form is submitted.
 e.preventDefault();
 var firstname = $("input[name=firstname]").val();
 var lastname = $("input[name=lastname]").val();
 var name = { firstname: firstname, lastname: lastname };

// Submit the obtained data via a post request
$.post("piglatin", name, function(response) {
 var piglatinified = response.firstname + " " +
 response.lastname;
 $("#piglatinified").text(piglatinified);
});
});

$("#devowel").on("submit", function(e) {
  e.preventDefault();
  var random = $("input[name=randomword]").val();
  var form = { thestring: random };
  $.post("devowel", form, function(response) {
    var devoweled = "The word without vowels is: " + response.Voweless + " and the number of vowels removed is: " + response.Count;
    $("#devoweled").text(devoweled);
  });
});
});
