// Function to switch to light mode
function switchToLightMode() {
    // Remove the 'dark-mode' class from the body
    document.body.classList.remove('dark-mode');
    
    // Save the user's preference to local storage
    localStorage.setItem('theme', 'light');
}

// Event listener for light mode button
document.getElementById('light-mode-btn').addEventListener('click', function() {
    // Switch to light mode
    switchToLightMode();
});

