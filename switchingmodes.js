document.addEventListener("index.html", switchingmodes()); 

var darkButton = document.createElement("button");
darkButton.innerHTML = "Dark Mode";
darkButton.className = "cdma, cdmd, cdmh";

darkButton.onclick = switchingmodes();
function switchingmodes() {
    var pageState = document.body;
    pageState.classList.toggle(darkButton.className);
};

var toAddDark = document.getElementById("dark mode");
toAddDark.appendChild(darkButton);