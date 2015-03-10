//Quiz 5

// document.getElementById("superButton").addEventListener("click", superMode);
// function superMode() {
//   alert("Super mode!");
// }

// $(":button").addEventListener("mouseover", hider);
// function hoverHide() {
//   $(":button").hide();
// }

// $(":button").addEventListener("click", hider);
// function hider() {
//   $(":button").hide("slow", function() {
//     alert("I'VE HIDDEN ALL THE BUTTONS, HAHAHA")
//   });
// }

// $.each($('li'), function(){
//   console.log($(this));
// });

var stringArray = ["Fifty", "Shades", "Of", "Grey"];

$(document).ready(function() {
  $("#myButton").click(function() {
    randomString(stringArray);
  });
});

var randoms = function randomString(arr) {
  alert(arr[Math.floor(Math.random()*4)]);
}

randomString(stringArray);
