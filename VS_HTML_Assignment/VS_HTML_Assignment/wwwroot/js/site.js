// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
document.addEventListener('DOMContentLoaded', function () {
    // Get the flashing text element
    const flashingText = document.getElementById('flashingText');

    // Set up a flashing interval
    const flashingInterval = setInterval(() => {
        // Toggle the visibility by changing the color
        flashingText.style.color = (flashingText.style.color === 'red') ? 'transparent' : 'red';
    }, 500); // Change the interval time (in milliseconds) to adjust the flashing speed

    // Optionally, stop the flashing after a certain duration (e.g., 5000 milliseconds or 5 seconds)
    setTimeout(() => {
        clearInterval(flashingInterval);
        flashingText.style.color = 'white'; // Set to a non-flashing color
    }, 5000);
});
