var h3 = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementsByTagName("body")[0];

// console.log(h3);
// console.log(color1);
// console.log(color2);
//console.log(body);

function setGradient()
{
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+", "
	+color2.value
	+")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

