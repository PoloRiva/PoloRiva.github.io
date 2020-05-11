/* Set the width of the side navigation to 250px */
document.addEventListener('DOMContentLoaded', function() {
  getMyAge();
}, false);


function getMyAge() {
  datetimeToday = new Date().getFullYear();
  datetimeBirth = 1992;
  diff = datetimeToday-datetimeBirth;
  document.getElementById("myCurrentAge").textContent = diff;
  document.getElementById("myCurrentAge").style = "color:black";
}
