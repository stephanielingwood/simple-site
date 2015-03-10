// //Quiz 5
// $(function() {
//  $("button").click(function() {
//  var url = $(this).attr("id");
//  $.get(url, function(response) {
//  var resText;
//  if (typeof response === "object") {
//  resText = response.setup + ": " + response.punchline;
//  } else {
//  resText = response;
//  }
//  $("#ajax-text").text(resText);
//  });
//  });
// });

var stringArray = ["Fifty", "Shades", "Of", "Grey"];

$(document).ready(function() {
  $("#myButton").click(function() {
    randomString(stringArray);
  });
});

function randomString(arr) {
  alert(arr[Math.floor(Math.random()*4)]);
}

// $(function() {
//  $("button").click(function() {
//  $("#ajax-text").text("hello, world");
//  });
// });

// $.get("http://localhost:3000/quote", function (response) {
//  $("body").text(response);
// });

// $(function() {
//  $("button").click(function() {
//  $.get("http://localhost:3000/quote", function(response) {
//  $("#ajax-text").text(response);
//  });
//  });
// });

// $(function() {
//  $("button").click(function() {
//  var url = $(this).attr("id");
//  $.get(url, function(response) {
//  var resText;
//  if (typeof response === "object") {
//  resText = response.setup + ": " + response.punchline;
//  } else {
//  resText = response;
//  }
//  $("#ajax-text").text(resText);
//  });
//  });
// });

//***************************************************************

$("#piglatin").on("submit", function(e) {
  e.preventDefault();
  var firstname = $('input[name=firstname]').val();
  var lastname = $('input[name=lastname]').val();
  var name = {firstname: firstname, lastname: lastname};
  $.post("piglatin", name, function(response) {
 var piglatinified = response.firstname + " " +
 response.lastname;
 $("#piglatinified").text(piglatinified);

 });

});


