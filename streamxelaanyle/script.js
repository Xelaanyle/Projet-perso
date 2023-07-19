function toggleIconVisibility() {
  var iconlist = document.getElementById("iconlist");
  iconlist.style.display = "none";
}

var circle = document.querySelector(".circle");
circle.addEventListener("click", toggleIconVisibility);

window.addEventListener('load', function () {
  var header = document.querySelector('.header');
  header.classList.add('header-appear');

  setTimeout(function () {
    var iconList = document.querySelector('.icon');
    iconList.classList.add('icon-appear');
  }, 5000); // 5 secondes en millisecondes
});

function openPopup() {
  window.open('http://localhost/traitement.php', '_blank', 'width=900,height=180');

  var myForm = document.getElementById('myForm');
    myForm.reset();

  return false;
}