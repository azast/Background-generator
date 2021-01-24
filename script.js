var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var CSS = document.querySelector("h3");
var body = document.getElementById("body1");

function setBody1(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	CSS.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBody1);

color2.addEventListener("input", setBody1);