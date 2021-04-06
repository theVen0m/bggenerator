var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
  body.style.background =
  "Linear-Gradient(To Right,"
   + color1.value
   + ","
   + color2.value
   ;
   css.textContent = body.style.background;

}

color1.addEventListener("input", setGradient);
    
color2.addEventListener("input", setGradient); 

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom() {
  var randomOne = getRandomColor()
  var randomTwo = getRandomColor()
  body.style.background =
  "linear-gradient(to right,"
   + randomOne
   + ","
   + randomTwo
   + ")";
   css.textContent = body.style.background + ";";
   color1.value = randomOne;
   color2.value = randomTwo;

}

button.addEventListener("click", function() {
    setRandom()
})
