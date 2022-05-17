const header = document.querySelector(".header");
const menuBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".navigation");

menuBurger.onclick = function() {
  menu.classList.toggle("navigation--active");
  header.classList.toggle("header--active");
}
