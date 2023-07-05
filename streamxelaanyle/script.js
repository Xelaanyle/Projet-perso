function toggleIconVisibility() {
    var iconlist = document.getElementById("iconlist");
    iconlist.style.display = "none";
}

var circle = document.querySelector(".circle");
circle.addEventListener("click", toggleIconVisibility);

window.addEventListener('load', function() {
    var header = document.querySelector('.header');
    header.classList.add('header-appear');
  
    setTimeout(function() {
      var iconList = document.querySelector('.icon');
      iconList.classList.add('icon-appear');
    }, 5000); // 30 secondes en millisecondes
  });
  
