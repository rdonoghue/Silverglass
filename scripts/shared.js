"use strict";

const hamburgerButton = document.querySelector(".hamburger");
const navElement = document.getElementById("navigator");
const overlayElement = document.querySelector(".overlay");
var coll = document.getElementsByClassName("collapsible");

hamburgerButton.addEventListener("click", showNav);
overlayElement.addEventListener("click", hideNav);
window.onresize = reportWindowSize;

addEventListener("resize", (event) => {});

reportWindowSize();

function showNav() {
  console.log("Clicked the burger");
  navElement.style.visibility = "visible";
  overlayElement.style.visibility = "visible";
}

function hideNav() {
  console.log("Clicked the burger");
  navElement.style.visibility = "hidden";
  overlayElement.style.visibility = "hidden";
}

function reportWindowSize() {
  console.log("Height: " + window.innerHeight);
  console.log("Width: " + window.innerWidth);
}

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
