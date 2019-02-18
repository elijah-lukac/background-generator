//document variables
var css = document.getElementById("cssCode");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGenerator = document.getElementById("random");
var copyGradient = document.getElementById("copyGrad");
var linearTb = document.getElementById("linear-tb");
var linearRl = document.getElementById("linear-rl");
var radial = document.getElementById("radial");
var left = document.getElementById("left");
var right = document.getElementById("right");
var swap = document.getElementById("swap");

//gradient constructor variables

var gradientType = setGradientType();
var gradientColor1 = document.querySelector(".color1");
var gradientColor2 = document.querySelector(".color2");
var gradient = gradientType + gradientColor1 + ", " + gradientColor2 + ")";

//BEGIN FUNCTIONS
//Generates random hex code for color

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Sets website background and updates text

function setGradient() {
		createGradient();
		body.style.background = gradient;
		css.value = "background: " + gradient + ";";
}

//Creates new gradient string

function createGradient() {
	gradientType = setGradientType();
	gradientColor1 = color1.value;
	gradientColor2 = color2.value;
	//update gradient string with new values
	gradient = gradientType + gradientColor1 + ", " + gradientColor2 + ")";
}

//Checks to see what gradient type is selected and changes (linear LR, linear TB, Radial)

function setGradientType() {
	if (document.getElementById("linear-rl").checked) {
		return "linear-gradient(to right, ";
	} else if (document.getElementById("linear-tb").checked){
		return "linear-gradient(to bottom, ";
	} else {
		return "radial-gradient(circle, ";
	}
}

//Randomly changes left color

function changeOneColorL() {
		color1.value = getRandomColor();
		setGradient();
}

//Randomly changes right color

function changeOneColorR() {
		color2.value = getRandomColor();
		setGradient();
}

//Randomly changes both colors

function randomGradient() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

//swap colors

function swapColors() {
		var currentColor1 = color1.value;
		color1.value = color2.value;
		color2.value = currentColor1;
		setGradient();
}

//copy gradient code

function copyGradientText() {
  /* Select the text field */
  css.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Update tooltip */
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}

//Reset tooltip text after copying

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

//END FUNCTIONS

//set current page background and add click events

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomGenerator.addEventListener("click", randomGradient);
copyGradient.addEventListener("click", copyGradientText);
linearTb.addEventListener("click", setGradient);
linearRl.addEventListener("click", setGradient);
radial.addEventListener("click", setGradient);
left.addEventListener("click", changeOneColorL);
right.addEventListener("click", changeOneColorR);
swap.addEventListener("click", swapColors);