let menu = document.querySelector(".header__menu");
let navbar = document.querySelector(".header__middle");
let close = document.querySelector(".header__close");

AOS.init();

menu.addEventListener("click", function(e) {
  setTimeout(function() {
    if (e.target.className === "header__menu") {
      navbar.style.display = "block";
    } else if (e.target.className === "close") {
      navbar.style.display = "none";
    }
  }, 200);
});

close.addEventListener("click", function(e) {
  if (e.target.className === "header__close") {
    navbar.animate(
      [{ transform: "translateY(0px)" }, { transform: "translateY(-2000px)" }],
      {
        duration: 500
      },

      "linear"
    );
    setTimeout(function() {
      navbar.style.display = "none";
    }, 500);
  }
});
