let settingMenu = document.querySelector(".setting-menu");
let darkBtn = document.getElementById("btn-dark");


function settingsMenuToggle(){

    settingMenu .classList.toggle("settings-menu-height")

}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-them");
}