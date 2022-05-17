"use strict";

const siteList = document.querySelector(".site-list");
const mainNavToggle = document.querySelector(".main-nav-toggle");

mainNavToggle.classList.remove("main-nav-toggle--nojs");
siteList.classList.remove("site-list--nojs");

mainNavToggle.addEventListener("click", () => {
  mainNavToggle.classList.toggle("main-nav-toggle--open");
  siteList.classList.toggle("site-list--open");
})
