/*
====================
Theme Name: Aegean
Author: David N Huang
Author URI: www.davidnhuang.com
Version: 1
Description: Theme that supersedes Euler. It aims to improve legibility, depth, and typographic dynamism
====================
*/

var slideNumber = [1,1,1,1,1,1];
var slideshowID = ['slideshow1', 'slideshow2', 'slideshow3', 'slideshow4', 'slideshow5', 'slideshow6']
var exampleID = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
var lofiIndex = 1;
var midfiIndex = 1;

showDivs(1, 0); //slideshow1
showDivs(1, 1); //slideshow2
showDivs(1, 2); //slideshow3
showDivs(1, 3); //slideshow4
showLofi(lofiIndex);
showMidfi(midfiIndex);

function plusDivs(n, no) {
  showDivs(slideNumber[no] += n, no); //add the n value to the starting position and return it
}

function showDivs(n/*this is the slide increment*/, no/*this is which slideshow is targeted*/) {
  var i;
  var slidesIndex = document.getElementsByClassName(slideshowID[no]);
  //returns a list of all the objects classed as slideshow[no]

  if (n > slidesIndex.length) { //if the number of slides exceeds the the total amount of slides
    slideNumber[no] = 1 //reset the slide to the first slide
  }

  if (n < 1) { //if the number of slides is goes below the first slide
    slideNumber[no] = slidesIndex.length //reset it to the last slide (x.length returns3 a number)
  }

  for (i = 0; i < slidesIndex.length; i++) { //from i=0 to the index length, at the increment of 1
     slidesIndex[i].classList.remove("active","fadeIn"); //this basically sets everything to display:none
  }

  var current_slide = slidesIndex[slideNumber[no]-1]
  current_slide.classList.add("active","fadeIn");

}

function showExample(n) {
    var x = document.getElementById("example"+exampleID[n]);
    var y = document.getElementById("description"+exampleID[n]);

    if (x.style.display == "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function showCurrentLofi(n) {
  showLofi(lofiIndex = n);
}

function showCurrentMidfi(n) {
  showMidfi(midfiIndex = n);
}

function showLofi(n) {
  var i;
  var x = document.getElementsByClassName("lofiSlideshow");
  var dots = document.getElementsByClassName("lofiSlideshowTab");
  if (n > x.length) {lofiIndex = 1}
  if (n < 1) {lofiIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  x[lofiIndex-1].style.display = "block";
  dots[lofiIndex-1].className += " active";
}

function showMidfi(n) {
  var i;
  var x = document.getElementsByClassName("midfiSlideshow");
  var dots = document.getElementsByClassName("midfiSlideshowTab");
  if (n > x.length) {midfiIndex = 1}
  if (n < 1) {midfiIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  x[midfiIndex-1].style.display = "block";
  dots[midfiIndex-1].className += " active";
}
