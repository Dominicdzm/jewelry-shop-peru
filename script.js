// JavaScript for Jewelry Shop

document.addEventListener("DOMContentLoaded", () => {
    // Placeholder functionality for form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        alert("Thank you for contacting us! We'll get back to you soon.");
        form.reset(); // Clear form fields
    });

    // Placeholder functionality for gallery images
    const galleryImages = document.querySelectorAll(".gallery-container img");
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            alert(`You clicked on Gallery Image ${index + 1}`);
        });
    });
});