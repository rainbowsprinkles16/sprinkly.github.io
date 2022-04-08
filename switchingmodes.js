document.addEventListener("button", switchingmodes()); 

var darkButton = document.createElement("button");
darkButton.className = ".buttonpos";

darkButton.onclick = switchingmodes();
function switchingmodes() {
    var pageState = document.body;
    pageState.classList.toggle("cdma");
    pageState.classList.toggle("cdmd");
    pageState.classList.toggle("cdmh");
};

var toAddDark = document.getElementById("dark mode");
toAddDark.appendChild(darkButton);