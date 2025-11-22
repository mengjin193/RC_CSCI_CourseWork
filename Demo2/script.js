// function highlightTitle()
// {
// 	var x = document.getElementById("part1");
// 	x.style.background="yellow";
// 	console.log("testing");
// }

// function changeTitle()
// {
// 	var x = document.getElementById("part1");
// 	x.innerHTML = "Hi!!";
// }

var button = document.getElementsByTagName("button")[0];
var count = 0;

button.addEventListener("mouseenter", function(){
	console.log("testing");
	count++;
	if(count >=3) console.log("new" + count)}
)

// var title = document.getElementById("part1");
// title.addEventListener("mouseenter", highlightTitle(),);

