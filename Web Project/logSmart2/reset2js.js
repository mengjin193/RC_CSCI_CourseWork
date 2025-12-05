var resetB = document.getElementById("resetB");

function resetPw(){
	let pw = document.getElementsByName("newpw")["0"].value;
	let repw = document.getElementsByName("newpwr")["0"].value;
	let passWord;

	// console.log(pw);
	// console.log(repw);

	//if (pw = "" || repw = ""){
		//document.getElementById("pwReseted").innerHTML = "Please fill in both fields to reset password.";
		//document.getElementById("pwReseted").style.color = "#FF0000";
	//} 
	if(pw === repw && pw != ""){
		passWord = pw;
		document.getElementById("pwReseted").innerHTML = "Your password has been reset. Please <a href='login2.html'' class='resetlogin'>login</a> with new password.";
		document.getElementById("pwReseted").style.color = "#008000";
	} else if (pw === ""){
		document.getElementById("pwReseted").innerHTML = "Please fill in both fields to reset password.";
		document.getElementById("pwReseted").style.color = "#FF0000";
	} else{
		document.getElementById("pwReseted").innerHTML = "The passwords entered do not match.";
		document.getElementById("pwReseted").style.color = "#FF0000";
	}
}

function addItemAfterClick() {
	resetPw();
}

resetB.addEventListener("click", addItemAfterClick);