document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const themeToggle = document.getElementById("themeToggle");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const icon = themeToggle.querySelector("i");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    });
  }
});
