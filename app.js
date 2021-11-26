/*
components to design: 
1.navbar finished
2.apps showcase and github tracking
3.article showcase card 
3.article and comments component 

*/
let lines = "crossed";
document.getElementById("nav-toggle-button").addEventListener("click",() => {
    console.log(document.getElementById("nav-toggle-link").classList);
    document.getElementById("nav-toggle-link").classList.toggle("noLinks");
    if (lines == "notcrossed") {
        document.getElementById("todeleteButton").style.display = "none";
        lines = "crossed"
        document.getElementById("torotatebutton1").classList.add("x1");
        document.getElementById("torotatebutton2").classList.add("x2");
    }else {
        document.getElementById("todeleteButton").style.display = "block";
        document.getElementById("torotatebutton1").classList.remove("x1");
        document.getElementById("torotatebutton2").classList.remove("x2");
        lines = "notcrossed";
    }
    
});
window.onload = () => {
    document.getElementById("todeleteButton").style.display = "none";
        lines = "crossed"
        document.getElementById("torotatebutton1").classList.add("x1");
        document.getElementById("torotatebutton2").classList.add("x2");
}

// scrolling fixing
window.onscroll = function() {scrollFunction()};


const navbar = document.getElementById("navbar");
function scrollFunction() {
    if(window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");
    }
}