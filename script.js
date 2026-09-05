const themeButton = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeButton.addEventListener("click", function () {
  const page = document.documentElement;
  const isDark = page.getAttribute("data-bs-theme") === "dark";

  page.setAttribute("data-bs-theme", isDark ? "light" : "dark");
  themeIcon.className = isDark ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  window.alert("Message sent! Thank you for contacting us.");
  contactForm.reset();
});