var resetB = document.getElementById("resetB");

function resetPw(){
	let pw = document.getElementsByName("newpw")["0"].value;
	let repw = document.getElementsByName("newpwr")["0"].value;
	let passWord;

	// console.log(pw);
	// console.log(repw);

	if(pw === repw){
		passWord = pw;
		document.getElementById("pwReseted").innerHTML = "Password reseted, please log in with new password.";
	}
	else{
		document.getElementById("pwReseted").innerHTML = "Passwords entered do not match";
	}
}

function addItemAfterClick() {
	resetPw();
}

resetB.addEventListener("click", addItemAfterClick)