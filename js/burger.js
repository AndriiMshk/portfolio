const burger = document.querySelector(".burger");
const nav_menu = document.querySelector(".nav_menu");
const navMenu = document.querySelector(".nav_menu ul");

burger.onclick = function () {
  burger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  document.body.classList.toggle("lock");
};

navMenu.onclick = function () {
  burger.classList.remove("active");
  nav_menu.classList.remove("active");
  document.body.classList.remove("lock");
};
