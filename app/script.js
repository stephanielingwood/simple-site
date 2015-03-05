<script>
function randomFrom(array){return array[Math.floor(Math.random()* array.length)];}
function buttonPressed(){
$("#randomText").text(randomFrom(['apple','banana','cherry']));
}
var elButton = document.getElementById("superButton");
elButton.addEventListener("click", buttonPressed, false);

</script>
