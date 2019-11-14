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

// $( '#topheader .navbar-nav a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });
