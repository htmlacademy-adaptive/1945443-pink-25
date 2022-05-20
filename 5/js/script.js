const header = document.querySelector(".header");
const menuBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__navigation");

menuBurger.onclick = function() {
  menu.classList.toggle("header__navigation--active");
  header.classList.toggle("header--active");
  menuBurger.classList.toggle("header__burger--active")
}
