document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const toTopBtn = document.getElementById("toTopBtn");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    toTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  console.log("Certifications page JS loaded.");
});
