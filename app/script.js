
$(function() {

  $( "button" ).click(function() {
    var url = $(this).attr("id");
    $.get(url, function(response) {

      var resText;
      if (url === "jokes") {
        resText = response.setup + ": " + response.punchline;
      } else if (url === "translator") {
        resText = response.English + " is " + response.Spanish + " in spanish.";
      } else {
        resText = response;
      }

      $("#ajax-text").text(resText);
   });
});

  $("#piglatin").on("submit", function(e) {
    e.preventDefault();

    if ($("input[name=firstname]").val() !== "" && $("input[name=lastname]").val() !== "") {

      var firstname = $("input[name=firstname]").val();
      var lastname = $("input[name=lastname]").val();
      var name = { firstname: firstname, lastname: lastname };

      $.post("piglatin", name, function(response) {
        var piglatinified = response.firstname + " " + response.lastname;
        $("#piglatinified").text(piglatinified);
      });

    } else {

      $("#piglatinified").text("Enter both a last and first name, please.");
    }
  });

  $("#devowel").on("submit", function(e) {
    e.preventDefault();

    var random = $("input[name=randomword]").val();
    var toBeDevowled = { randomWord: random };

    $.post("devowel", toBeDevowled, function(response) {
      var devoweled = "The string without vowels is: \"" + response.Voweless + "\" and the number of vowels removed is: " + response.Count;
      $("#devoweled").text(devoweled);
    });
  });
});
