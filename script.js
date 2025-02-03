
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector(".navbar-toggle-btn");
  const navbarNav = document.querySelector(".navbar-nav");

  toggleButton.addEventListener("click", function() {
      navbarNav.classList.toggle("active");
      toggleButton.classList.toggle("active");
  });
});
