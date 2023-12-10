var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for(tablink of tabLinks){
        tablink.classList.remove("active-link")
    }
}

function openTab(tabname) {
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }
}