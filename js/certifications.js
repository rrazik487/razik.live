document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const currentlyOpen = document.querySelector(".accordion-header.active");
      if (currentlyOpen && currentlyOpen !== header) {
        currentlyOpen.classList.remove("active");
        currentlyOpen.nextElementSibling.style.display = "none";
      }

      header.classList.toggle("active");
      const body = header.nextElementSibling;
      body.style.display = body.style.display === "block" ? "none" : "block";
    });
  });
});
//       chatbotContainer.classList.add("show");  
//     }, 500);