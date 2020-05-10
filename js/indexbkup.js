// ---------- This sends the post request to the Telegram bot----------
// var telegramButton = document.getElementById("telegramButton");
// telegramButton.onclick(){sendTelegramPOST()};

// TODO: add a "your message was delivered" message
function sendTelegramPOST() {
  var nameTelegram = document.getElementById("nameTelegram").value;
  var companyTelegram = document.getElementById("companyTelegram").value;
  var textTelegram = document.getElementById("textTelegram").value;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.telegram.org/bot1058992317:AAHy2ExAPseR-kqVoKTqebLvmg8SCTfxaTI/sendMessage", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
  chat_id: "258936",
  parse_mod: "markdown",
  text: "name: " + nameTelegram + "\ncompany: " + companyTelegram + "\n\n" + textTelegram
  }));
  document.getElementById("nameTelegram").value = "";
  document.getElementById("companyTelegram").value = "";
  document.getElementById("textTelegram").value = "";
  // TODO: Add a cool modal giving greatings and confirming that the message has been send
  $("#myModal").modal();
  setTimeout(function() {
    $("#myModal").modal("hide");
  }, 1500);
  // TODO: disable the submit button for 5 seconds after clicking
};



// ---------- navigation bar icon change dynamically ----------
// var AboutMePosition = document.getElementById("AboutMe").getBoundingClientRect();


// function logWhatINeed() {
//   console.log(AboutMePosition.top, AboutMePosition.right, AboutMePosition.bottom, AboutMePosition.left);
// }

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

// FIXME: remove logWhatINeed() function from the scroll
window.onscroll = function() {scrollFunction()};
mybutton.onmouseenter = function() {mouseEntered();}
mybutton.onmouseout = function() {mouseLeft();}

function mouseEntered() {
  myBtnIcon[0].setAttribute("src", "./pic/arrow-alt-circle-up-regular.png");
}

function mouseLeft() {
  myBtnIcon[0].setAttribute("src", "./pic/arrow-alt-circle-up-solid.png");
}

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
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