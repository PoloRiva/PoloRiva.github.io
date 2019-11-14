// $(function() {
//     $("#nav-placeholder").load("navbar.html");
// });

// window.onscroll = function() {
//     console.log('Hi');
// }

// var a = document.getElementsByClassName("bg-white rounded shadow bg-white rounded");
// console.log(a);
// $(document.getElementsByClassName("bg-white rounded shadow bg-white rounded")).on('hide.bs.collapse', myFunction());
// function myFunction() {
//     console.log('Hi');
// }

$(document).ready(function () {
    var url = window.location;
    var pos = window.p
    $('ul.navbar-nav a[href=' + url + '"]').parent().addClass('active');
    $('ul.navbar-nav a').filter(function() {
        return this.href == url;
    }).parent.addClass('active');
});

//This functions are useful to remove and add classes to elements
// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

// 2. For the "Back to Top" button
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