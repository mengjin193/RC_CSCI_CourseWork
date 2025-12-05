// start build calender----------------------------------------------------------------

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["January", "Feburary", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
let monthAndYear = document.getElementById("monthAndYear");

showCalender(currentMonth, currentYear); 

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalender(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
}

function showCalender(month,year)	{
	let firstDay = (new Date(year,month)).getDay();
	let daysInMonth = 32 - new Date(year, month, 32).getDate();
	let tbl = document.getElementById("calender-body");

	tbl.innerHTML = "";
	monthAndYear.innerHTML = months[month] + " " + year;

	let date = 1; 
	for(let i = 0; i < 6; i++){ /* total 6 rows */
		let row = document.createElement("tr");

		for(let j = 0; j < 7; j++)	{ /* total 7 days/columns */

			if(i === 0 && j < firstDay || date > daysInMonth)	{
				let cell = document.createElement("td");
				let cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			else	{
				let cell = document.createElement("td");
				let cellText = document.createTextNode(date);
				//let addNew = document.createElement("input");
					//addNew.type = "button";
					//addNew.className = "addNew";
					//addNew.value = " + ";
					//addNew.id = "calender-btn";
				// Popup window for log
				var popup = document.querySelector(".popup");
				var close = document.querySelector(".popup-exit");
				
				function togglePopup() {
					popup.classList.toggle("show-popup");
				}

				function windowOnClick(event) {
					if (event.target == popup) {
						togglePopup();
						console.log("Window was toggled.");
					}
				}
				
				cell.addEventListener("click", togglePopup);
				close.addEventListener("click", togglePopup);
				window.addEventListener("click", windowOnClick);

				if(date===today.getDate() && year==today.getFullYear() && month===today.getMonth() )	{
					cell.classList.add("bg-info");
				}
				cell.appendChild(cellText);
				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}
}
// finish build up the calender -----------------------------------------------------
// Start update log popup -----------------------------------------------------------
/*var update = document.querySelectorAll("#table td");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-exit");

function togglePopup() {
	popup.classList.toggle("show-popup");
}
function windowOnClick(event) {
	if (event.target == popup)
	{
		togglePopup();
	}
}
update.addEventListener("click", togglePopup);
close.addEventListener("click", togglePopup);
window.addEventListener("click", togglePopup);*/

// finish update lop popup ----------------------------------------------------------
// Start popup displays --------------------------------------------------------------
var popupd = document.querySelector(".popup-deadlines");
var popupm = document.querySelector(".popup-messages");
var popupc = document.querySelector(".popup-contact");
var trigger = document.querySelectorAll("#popupbutton");
var closede = document.querySelector(".popup-exitd");
var closem = document.querySelector(".popup-exitm");
var closec = document.querySelector(".popup-exitc");

function togglePopupd()
{
	popupd.classList.toggle("show-popupd");
}

function windowOnClick1(event) {
    if (event.target === popupd) {
        togglePopupd();
    }
}

function togglePopupm()
{
	popupm.classList.toggle("show-popupm");
}

function windowOnClick2(event) {
    if (event.target === popupm) {
        togglePopupm();
    }
}

function togglePopupc()
{
    popupc.classList.toggle("show-popupc");
}

function windowOnClick3(event) {
    if (event.target === popupc) {
        togglePopupc();
    }
}


for (i=0; i < trigger.length; i++){
    switch (i){
        case 0:
            trigger[0].addEventListener("click", togglePopupd);
            closede.addEventListener("click", togglePopupd);
            window.addEventListener("click", windowOnClick1);
            break;
        case 1:
            trigger[1].addEventListener("click", togglePopupm);
            closem.addEventListener("click", togglePopupm);
            window.addEventListener("click", windowOnClick2);
            break;
        case 2:
            trigger[2].addEventListener("click", togglePopupc);
            closec.addEventListener("click", togglePopupc);
            window.addEventListener("click", windowOnClick3);
            break;
    }
}
// finsh deadlines/messages popups --------------------------------------------------
// start sign out confirmation ------------------------------------------------------
var signout = document.querySelector("#signoutbutton");

function logout(){
        var reallyLogout=confirm("Are you sure you want to sign out?");
        if(reallyLogout){
            location.href="login2.html";
        }
}
signout.addEventListener("click", logout);
// end sign out confirmation --------------------------------------------------------