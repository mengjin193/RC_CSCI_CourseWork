// start build calender-------------------------------------------------------------

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
			if(i === 0 && j< firstDay || date > daysInMonth)	{
				let cell = document.createElement("td");
				let cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			else	{
				let cell = document.createElement("td");
				let cellText = document.createTextNode(date);
				// let addNew = document.createElement("input");
				// 	addNew.type = "button";
				// 	addNew.className = "addNew";
				// 	addNew.value = " + ";
				// 	addNew.onClick = "";

				if(date===today.getDate() && year==today.getFullYear() && month===today.getMonth() )	{
					cell.classList.add("bg-info");
			}
			cell.appendChild(cellText);
			// cell.appendChild(addNew);
			row.appendChild(cell);
			date++;
			}
		}
		tbl.appendChild(row);
	}
}


// finish build up the calender -----------------------------------------------------