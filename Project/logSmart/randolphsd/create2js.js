let createB = document.getElementById("createB");

function newUser(){
	let fn = document.getElementsByName("fn")["0"].value;
	let ln = document.getElementsByName("ln")["0"].value;
	let em = document.getElementsByName("email")["0"].value;
	let pw = document.getElementsByName("pw")["0"].value;
	let rpw = document.getElementsByName("pwr")["0"].value;
	let rl = document.getElementById("acctype").value;

	if(pw === rpw){
		var newppl = new people(fn,ln,em,pw,rl);
		document.getElementById("PWunmatch").innerHTML = "New account created, <a href='login2.html'>login</a> here";
		document.getElementById("PWunmatch").style.color = "green";
	}
	else{
		document.getElementById("PWunmatch").innerHTML = "Unmatched passwords";
		document.getElementById("PWunmatch").style.color = "red";
	}

	console.log(newppl);
}

function addItemAfterClick(){
	newUser();
}

createB. addEventListener("click", addItemAfterClick)