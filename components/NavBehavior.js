import { useEffect } from 'react';

export default function NavBehavior() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a[href^='#']");
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`nav a[href="#${id}"]`);
          if (entry.isIntersecting) {
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            if (link) link.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    // Back to Top
    const topBtn = document.getElementById("backToTop");
    const handleScroll = () => {
      if (!topBtn) return;
      if (window.scrollY > 300) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    if (topBtn) topBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (topBtn) topBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return null;
}
