const burger = document.querySelector(".burger");
const nav_menu = document.querySelector(".nav_menu");

burger.onclick = function () {
  burger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  document.body.classList.toggle("lock");
};
