//active link on scroll
import { activateScrollSpy, closeHeaderOnClickOutside } from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation__link");
  const sections = document.querySelectorAll(".section");

  activateScrollSpy(navLinks, sections);
});

document.addEventListener("DOMContentLoaded", closeHeaderOnClickOutside);
