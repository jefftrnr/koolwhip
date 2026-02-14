// Define photo number
const urlParams = new URLSearchParams(window.location.search);
const photoValue = urlParams.get('photo');

// Function to display the email address
function displayImage() {
  if (photoValue && Number.isInteger(parseFloat(photoValue))) {
    const img = document.querySelector('[data-testid="gallery-photo-' + photoValue + '"]');
    const galleryImg = document.getElementById('gallery-image');

    if (img && galleryImg) {
      galleryImg.src = img.src;
    }
  }
}

// Run the function when the page loads
window.onload = displayImage;