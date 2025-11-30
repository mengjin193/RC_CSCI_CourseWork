const email = "1";
const password = "1";

var loginB = document.getElementById("loginB");

function logIn(){
	let em = document.getElementsByName("email")["0"].value;
	let pw = document.getElementsByName("pw")["0"].value;

	console.log(em);
	console.log(pw);

	if(em === email && pw === password){
		window.open("home2.html","_self");
	}
	else{
		document.getElementById("EMPWunmatch").innerHTML = "Unmatched email and password";
	}		
}

function addItemAfterClick(){
	logIn();
}

// function addItemAfterEnterKey(){
// 	if(event.which === 13){
// 		logIn();
// 	}
// }

loginB.addEventListener("click", addItemAfterClick)
// loginB.addEventListener("keypress", addItemAfterEnterKey)
