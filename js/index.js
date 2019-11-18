// ---------- my age is calculated automatically ----------
window.onload = function() {calculateAge()};

function calculateAge() {
  var d = new Date();
  var thisYear = d.getFullYear();
  var thisMonth = d.getMonth();
  var thisDay = d.getDate();
  var myAge = thisYear-1992-1;
  if(thisMonth>=4) {
    if(thisDay>=10) {
      myAge += 1;
    }
  }
  var myAgeValue = document.getElementById("myAgeValue");
  myAgeValue.innerHTML = myAge;
}

// ---------- For the "Back to Top" button ----------
var mybutton = document.getElementById("myBtn");
var myBtnIcon = document.getElementById("myBtn").getElementsByTagName("img");

window.onscroll = function() {scrollFunction()};
mybutton.onmouseenter = function() {mouseEntered();}
mybutton.onmouseout = function() {mouseLeft();}

function mouseEntered() {
  console.log("entered");
  myBtnIcon[0].setAttribute("src", "./pic/arrow-alt-circle-up-regular.png");
}

function mouseLeft() {
  console.log("exited");
  myBtnIcon[0].setAttribute("src", "./pic/arrow-alt-circle-up-solid.png");
}

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

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

// ---------- This functions are useful to remove and add classes to elements ----------
// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });