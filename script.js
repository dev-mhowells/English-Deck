const button = document.getElementById("button");
const card = document.querySelector(".nav");
const card2 = document.querySelector(".nav-dec");
const bookImg = document.querySelector(".book-image");
const getInfo = document.querySelector(".log-in-btn");
const navMenu = document.querySelector(".nav-menu");

window.addEventListener("scroll", function () {
  console.log(bookImg.getBoundingClientRect().y);
  if (bookImg.getBoundingClientRect().y < 20) {
    bookImg.classList.add("book-up-one");
    bookImg.classList.remove("book-up");
  } else if (bookImg.getBoundingClientRect().y < 100) {
    bookImg.classList.add("book-up");
    bookImg.classList.remove("book-up-one");
  } else {
    bookImg.classList.remove("book-up");
  }
});

let navOpen = false;

button.addEventListener("click", function () {
  navOpen = !navOpen;
  if (navOpen === true) {
    card.classList.add("nav-moved");
    card2.style.transitionDuration = "400ms";
    card2.classList.add("nav-dec-moved");

    navMenu.classList.add("show-nav-menu");
    navMenu.style.display = "flex";
  } else {
    card.classList.remove("nav-moved");
    card2.style.transitionDuration = "550ms";
    card2.classList.remove("nav-dec-moved");

    navMenu.style.display = "none";
    navMenu.classList.remove("show-nav-menu");
  }
});
