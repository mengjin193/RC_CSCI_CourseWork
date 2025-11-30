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
	} else if (em === "" && pw === ""){
		document.getElementById("EMPWunmatch").innerHTML = "Please fill in the fields to login.";
		document.getElementById("EMPWunmatch").style.color = "#FF0000";
	}else{
		document.getElementById("EMPWunmatch").innerHTML = "Incorrect email or password.";
		document.getElementById("EMPWunmatch").style.color = "#FF0000";
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
