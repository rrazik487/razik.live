document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("theme-toggle");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  });
});
