document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      // Close other open sections
      document.querySelectorAll(".accordion-header").forEach(h => {
        if (h !== header) {
          h.classList.remove("active");
          h.nextElementSibling.style.display = "none";
        }
      });

      header.classList.toggle("active");
      const body = header.nextElementSibling;
      body.style.display = body.style.display === "block" ? "none" : "block";
    });
  });
});
