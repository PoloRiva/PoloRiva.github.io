// ---------- This functions are useful to remove and add classes to elements ----------
// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

// ---------- For the "Back to Top" button ----------
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ---------- For the button for downloading the CV ----------
//btn-outline-primary
// TODO: change "onmouseover" to enter and do the reverse action for exiting

// var myDownBtn = document.getElementById("DownloadBtn");

// myDownBtn.onmouseover = function() {
//     changeClassBtn();
// }

// function changeClassBtn() {
//     myDownBtn.classList.remove("btn-primary");
//     myDownBtn.classList.add("btn-outline-primary");
// }

// ---------- For the button for downloading the CV v2 ----------
//FIXME: the enter and exit thing needs some work | myDownBtn is getted as a set ¿? | because fontAwesome change the html before sending it
var myDownBtn = document.getElementById("myBtn").getElementsByTagName("svg");
console.log(myDownBtn);
var myDownBtn2 = document.getElementById("myBtn");
var hasEntered = false;


myDownBtn2.onmouseenter = function() {
  if (!hasEntered) {
    mouseEntered();
  }
}
myDownBtn2.onmouseout = function() {
  if (hasEntered) {
    mouseLeft();
  }
}

function mouseEntered() {
  console.log("entered");
  hasEntered = true;
  myDownBtn[0].setAttribute("data-prefix", "far");
}

function mouseLeft() {
  console.log("exited");
  hasEntered = false;
  myDownBtn[0].setAttribute("data-prefix", "fas");
}
