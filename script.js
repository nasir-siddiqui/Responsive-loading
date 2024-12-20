const menu = document.querySelector(".nav_menu");

const toggle_menu = document.querySelector("#nav_toggle");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

gsap.from(".logo, .nav_toggle_btn", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 10,
});

gsap.from(".nav_menu_list_item", {
  opacity: 0,
  duration: 0.75,
  delay: 2.1,
  y: 5,
  stagger: 0.2,
});

gsap.from(".home__offer", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".home__title", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});
gsap.from(".home__desc", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".home__cta", {
  opacity: 0,
  duration: 1,
  delay: 2.3,
  y: 20,
});
