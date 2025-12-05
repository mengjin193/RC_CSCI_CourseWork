var button = document.getElementById("submitB");
var input = document.getElementById("newInput");
var ol = document.querySelector("ol");

function getInputLength(){
	return input.value.length;
}

function addNewItem(){
	if (getInputLength() > 0){
		var li = document.createElement("li");
			li.appendChild(document.createTextNode(input.value));
			ol.appendChild(li);
			input.value="";
	}
}

function addItemAfterClick()
{
	addNewItem();
}

function addItemAfterEnterKey(event)
{
	if(event.which === 13) //if the key pressed is the EnterKey[13 is the key code of the enterkey]
	addNewItem();
}

input.addEventListener("keypress", addItemAfterEnterKey)

button.addEventListener("click", addItemAfterClick)



