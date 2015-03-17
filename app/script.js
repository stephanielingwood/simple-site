// //Quiz 5

$(function() {
 $("button#joke").click(function() {
 $.get("./joke", function(response) {
 var joke = response.setup + " ... " + response.punchline;
 $("body").text(joke);
 });
 });
});

$(function() {
 $("button#quote").click(function() {
 $.get("./quote", function(response) {
 $("body").text(response);
 });
 });
});

$(function() {
 $("button#random").click(function() {
 $.get("./random", function(response) {
 $("body").text(response);
 });
 });
});

$("#piglatin").on("submit", function(e) {
  e.preventDefault();
  var firstname = $("input[name=firstname]").val();
  var lastname = $("input[name=lastname]").val();
  var name = { firstname: firstname, lastname: lastname };
  $.post("piglatin", name, function(response) {
 var piglatinified = response.firstname + " " +
 response.lastname;
 $("#piglatinified").text(piglatinified);
 });
});

$("#randomLetters").on("submit", function(e) {
  e.preventDefault();
  var numberEntry = $("input[name=numberEntry]").val();
  $.post("randomLetters", numberEntry, function(response) {
 var descrambled = response[0] + response[0];
 $("#descrambled").text(descrambled);
 });
});
