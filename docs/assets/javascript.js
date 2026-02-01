// Function to display mobile nav
function displayMobileNav() {
  const toggleButton = document.getElementById("mobile-toggle");
  const closeButton = document.getElementById("mobile-close");
  const contentToToggle = document.getElementById("mobile-nav");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        contentToToggle.classList.toggle("show");
    });
     closeButton.addEventListener("click", () => {
        contentToToggle.classList.toggle("show");
    });
  }
}

// Run the function when the page loads
window.onload = displayMobileNav;