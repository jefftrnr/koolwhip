// Define the email parts
const user = "mcdaniel-family";
const domain = "att.net";
const fullEmail = user + "@" + domain;

const areaCode = "415";
const localPhone = "259";
const localPhone2 = "1828";

// Function to display the email address
function displayEmail() {
  const emailSpan = document.getElementById("email-address");
  if (emailSpan) {
    emailSpan.textContent = fullEmail;
  }

  const phoneSpan = document.getElementById("phone-num");
  if (phoneSpan) {
    phoneSpan.textContent = "1 (" + areaCode + ") " + localPhone + "-" + localPhone2;
  }
  
  const emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.href = "mailto:" + fullEmail;
    emailLink.textContent = fullEmail;
  }
}

// Run the function when the page loads
window.onload = displayEmail;