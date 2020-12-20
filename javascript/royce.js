// Get the modal
var modal = document.getElementById("myModal");
var leavesmodal = document.getElementById("leavesModal");
var bookmodal = document.getElementById("bookModal");
var winmodal = document.getElementById("winModal");

// Get the button that opens the modal
var cloud1 = document.getElementsByClassName("nada")[0];
var cloud2 = document.getElementsByClassName("nada")[1];
var leftarch = document.getElementsByClassName("nada")[2];
var centerarch = document.getElementsByClassName("nada")[3];
var rightarch = document.getElementsByClassName("nada")[4];
var royceside = document.getElementsByClassName("nada")[5];
var tree = document.getElementById("tree");
var book = document.getElementById("book");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");

// Get the <button> element that closes the modal
var backbtn = document.getElementsByClassName("backbutton")[0];
var backleaves = document.getElementsByClassName("backbutton")[1];
var backbook = document.getElementsByClassName("backbutton")[2];

// Get the <img> instructions element
var instructions = document.getElementById("instructions");

// When the user clicks the button, open the modal 
cloud1.onclick = function() {
  modal.style.display = "flex";
  instructions.style.display = "none";
}

cloud2.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

leftarch.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

centerarch.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

rightarch.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

royceside.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

tree.onclick = function() {
    leavesmodal.style.display = "flex";
    instructions.style.display = "none";
}

book.onclick = function() {
    bookmodal.style.display = "flex";
    instructions.style.display = "none";
}

f1.onclick = function() {
    winmodal.style.display = "flex";
    instructions.style.display = "none";
}

f2.onclick = function() {
    winmodal.style.display = "flex";
    instructions.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
backbtn.onclick = function() {
  modal.style.display = "none";
  instructions.style.display = "flex";
}

backleaves.onclick = function() {
    leavesmodal.style.display = "none";
    instructions.style.display = "flex";
}

backbook.onclick = function() {
    bookmodal.style.display = "none";
    instructions.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    leavesmodal.style.display = "none";
    bookmodal.style.display = "none";
    instructions.style.display = "flex";
  }
}