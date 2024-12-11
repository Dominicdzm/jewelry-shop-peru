
// Function to open modal
function openModal(productId) {
    document.getElementById(productId).style.display = "block";
}

// Function to close modal
function closeModal(productId) {
    document.getElementById(productId).style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
