// Get the modal
var modal = document.getElementById("myModal");
var book1modal = document.getElementById("book1Modal");
var book2modal = document.getElementById("book2Modal");
var book3modal = document.getElementById("book3Modal");
var winmodal = document.getElementById("winModal");

// Get the button that opens the modal
var paper = document.getElementsByClassName("nada")[0];
var lamp = document.getElementsByClassName("nada")[1];
var bottle = document.getElementsByClassName("nada")[2];
var pens = document.getElementsByClassName("nada")[3];
var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var book3 = document.getElementById("book3");
var bookkey = document.getElementById("bookkey")

// Get the <button> element that closes the modal
var backbtn = document.getElementsByClassName("backbutton")[0];
var backbook1 = document.getElementsByClassName("backbutton")[1];
var backbook2 = document.getElementsByClassName("backbutton")[2];
var backbook3 = document.getElementsByClassName("backbutton")[3];

// Get the <img> instructions element
var instructions = document.getElementById("instructions");

// When the user clicks the button, open the modal 
paper.onclick = function() {
  modal.style.display = "flex";
  instructions.style.display = "none";
}

lamp.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

bottle.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

pens.onclick = function() {
    modal.style.display = "flex";
    instructions.style.display = "none";
}

book1.onclick = function() {
    book1modal.style.display = "flex";
    instructions.style.display = "none";
}

book2.onclick = function() {
    book2modal.style.display = "flex";
    instructions.style.display = "none";
}

book3.onclick = function() {
    book3modal.style.display = "flex";
    instructions.style.display = "none";
}

bookkey.onclick = function() {
    winmodal.style.display = "flex";
    instructions.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
backbtn.onclick = function() {
  modal.style.display = "none";
  instructions.style.display = "flex";
}

backbook1.onclick = function() {
    book1modal.style.display = "none";
    instructions.style.display = "flex";
}

backbook2.onclick = function() {
    book2modal.style.display = "none";
    instructions.style.display = "flex";
}

backbook3.onclick = function() {
    book3modal.style.display = "none";
    instructions.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    instructions.style.display = "flex";
  }
}