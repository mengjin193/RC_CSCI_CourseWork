// start popup displays --------------------------------------------------------------
var popupd = document.querySelector(".popup-deadlines");
var popupm = document.querySelector(".popup-messages");
var popupc = document.querySelector(".popup-contact");
var trigger = document.querySelectorAll("#popupbutton");
var closede = document.querySelector(".popup-exitd");
var closem = document.querySelector(".popup-exitm");
var closec = document.querySelector(".popup-exitc")

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
            trigger[0].addEventListener("click", togglePopupc);
            closec.addEventListener("click", togglePopupc);
            window.addEventListener("click", windowOnClick3);
            break;
        case 1:
            trigger[1].addEventListener("click", togglePopupd);
            closede.addEventListener("click", togglePopupd);
            window.addEventListener("click", windowOnClick1);
            break;
        case 2:
            trigger[2].addEventListener("click", togglePopupm);
            closem.addEventListener("click", togglePopupm);
            window.addEventListener("click", windowOnClick2);
            break;
    }
}

// end popup displays --------------------------------------------------------------
// start sign out confirmation -----------------------------------------------------
var signout = document.querySelectorAll("#signoutbutton");

function logout(){
        var reallyLogout=confirm("Are you sure you want to sign out?");
        if(reallyLogout){
            location.href="login2.html";
        }
        else
            null;
}
for (i=0; i < signout.length; i++) {
    signout[i].addEventListener("click", logout);
}
// end sign out confirmation -------------------------------------------------------