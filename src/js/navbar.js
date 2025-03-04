document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function changeActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove(
        "text-blue-700",
        "dark:text-blue-500",
        "bg-blue-700"
      );
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("text-blue-700", "dark:text-blue-500");
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
});
