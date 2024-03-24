const flipIcon = document.querySelector("#flip-icon");
const cardInner = document.querySelector(".card-inner");
const socials = document.querySelector(".socials-front");
const logo = document.querySelector(".logo");

flipIcon.addEventListener("click", () => {
  cardInner.classList.toggle("is-flipped");
  socials.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  logo.classList.add("spin-in");
});
