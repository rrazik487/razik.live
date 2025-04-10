document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const toTopBtn = document.getElementById("toTopBtn");
  const toast = document.getElementById("toast");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    toTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show toast if redirected from form submission
  const params = new URLSearchParams(window.location.search);
  if (params.get("success") === "1") {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }

  console.log("Contact page loaded.");
});
// Form submission handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = `${window.location.href}?success=1`;
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});
// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    let valid = true;

    if (!nameInput.value) {
      valid = false;
      alert("Name is required.");
    }

    if (!emailInput.value || !validateEmail(emailInput.value)) {
      valid = false;
      alert("Valid email is required.");
    }

    if (!messageInput.value) {
      valid = false;
      alert("Message is required.");
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
// Smooth scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.getElementById("toTopBtn");

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});