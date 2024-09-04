// Function to toggle visibility of the about section
function toggleAboutSection() {
    var aboutSection = document.getElementById('aboutSection');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}

// Function to display an alert when the "Read More" button is clicked
function readMoreAlert() {
    alert('You clicked the "Read More" button!');
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the "Read More" buttons
    var readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', readMoreAlert);
    });

    // Attach event listener to the About section toggle button (if you add one)
    var toggleButton = document.getElementById('toggleAboutButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleAboutSection);
    }
});
