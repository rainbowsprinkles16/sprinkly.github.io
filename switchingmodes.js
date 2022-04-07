var darkButton = document.createElement("button");
darkButton.innerHTML = "Dark Mode";

darkButton.onclick = switchingmodes();
function switchingmodes() {
    var pageState = document.body;
    pageState.classList.toggle("custom-dark-mode");
}
