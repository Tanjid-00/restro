const navBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const main = document.getElementById("main");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("expand");
  main.classList.toggle("mainChange");
  header.classList.toggle("headerChange");
});
