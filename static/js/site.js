function responsiveMenu() {
  var x = document.getElementById("menu");
  if (x.className === "container") {
    x.className += " active";
  } else {
    x.className = "container";
  }
}

window.onscroll = function() {fixeNav()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function fixeNav() {
   if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
}