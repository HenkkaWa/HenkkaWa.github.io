// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference to local storage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Event listeners for mode buttons
document.getElementById('light-mode-btn').addEventListener('click', function() {
    // Set light mode
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', false);
});

document.getElementById('dark-mode-btn').addEventListener('click', function() {
    // Set dark mode
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', true);
});

// Check if user has set a preference for dark mode previously
const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';

// If dark mode was preferred, enable it
if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
}
