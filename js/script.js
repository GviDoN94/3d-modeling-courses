"use strict";

const burgerBtn = document.querySelector(".burger");
const navMenu = document.querySelector(".nav");
const navMenuLinks = navMenu.querySelectorAll("nav__link");
const bodyEl = document.querySelector(".body");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger--active");
  navMenu.classList.toggle("nav--active");
  bodyEl.classList.toggle("stop-scroll");

  if (burgerBtn.classList.contains("burger--active")) {
    burgerBtn.ariaLabel = "закрыть меню навигации";
  } else {
    burgerBtn.ariaLabel = "открыть меню навигации";
  }
});

navMenu.addEventListener("click", (event) => {
  if (!event.target.classList.contains("nav__link")) {
    return;
  }

  burgerBtn.classList.remove("burger--active");
  navMenu.classList.remove("nav--active");
  bodyEl.classList.remove("stop-scroll");

  if (burgerBtn.classList.contains("burger--active")) {
    burgerBtn.ariaLabel = "закрыть меню навигации";
  } else {
    burgerBtn.ariaLabel = "открыть меню навигации";
  }
});
