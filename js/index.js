document.addEventListener('DOMContentLoaded', function() {
  getMyAge();
  alertNewView();
}, false);

function getMyAge() {
  datetimeToday = new Date().getFullYear();
  datetimeBirth = 1992;
  diff = datetimeToday-datetimeBirth;
  document.getElementById("myCurrentAge").textContent = diff;
  document.getElementById("myCurrentAge").style = "color:black";
}

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
  $("#myModal").modal();
  setTimeout(function() {
    $("#myModal").modal("hide");
  }, 2000);
  // TODO: disable the submit button for 5 seconds after clicking
};

function alertNewView() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.telegram.org/bot1058992317:AAHy2ExAPseR-kqVoKTqebLvmg8SCTfxaTI/sendMessage", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
  chat_id: "258936",
  parse_mod: "markdown",
  text: "New visitor"
  }));
}

function alertNewDownload() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.telegram.org/bot1058992317:AAHy2ExAPseR-kqVoKTqebLvmg8SCTfxaTI/sendMessage", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
  chat_id: "258936",
  parse_mod: "markdown",
  text: "CV viewed"
  }));
}