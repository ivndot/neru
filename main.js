// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    stikyNavBar();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stikyNavBar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.style.backgroundColor = "rgba(22, 33, 62,1)"; //change the background color
        //navbar.style.boxShadow="0px 5px 10px rgba(10, 15, 29, 1)";
        navbar.style.transition = "0.5s"; //set a transition
    } else {
        navbar.classList.remove("sticky");
        navbar.style.backgroundColor = "rgba(22, 33, 62,0)"; //change the background color
        //navbar.style.boxShadow="0px 5px 10px rgba(10, 15, 29,0)";
        navbar.style.transition = "0.5s"; //set a transition
    }
}
//Show content
document
    .getElementById("zoom-in")
    .addEventListener("mouseenter", showContent);
function showContent() {
    document.getElementById("bannerContent").style.display = "inline-block";
    document.getElementById("bannerContent").style.transition = "0.3s ease";
}
//Hidde content
document
    .getElementById("zoom-in")
    .addEventListener("mouseleave", hiddeContent);
function hiddeContent() {
    document.getElementById("bannerContent").style.display = "none";
    document.getElementById("bannerContent").style.transition = "0.3s ease";
}
