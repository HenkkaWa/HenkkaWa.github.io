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

// Function to switch to dark mode
function switchToDarkMode() {
    // Add the 'dark-mode' class to the body
    document.body.classList.add('dark-mode');
    
    // Save the user's preference to local storage
    localStorage.setItem('theme', 'dark');
}

// Event listener for dark mode button
document.getElementById('dark-mode-btn').addEventListener('click', function() {
    // Switch to dark mode
    switchToDarkMode();
});

// Function to switch to dark mode
function switchToDarkMode() {
    // Add the 'dark-mode' class to the body
    document.body.classList.add('dark-mode');
    
    // Save the user's preference to local storage
    localStorage.setItem('theme', 'dark');
}

// Event listener for dark mode button
document.getElementById('dark-mode-btn').addEventListener('click', function() {
    // Switch to dark mode
    switchToDarkMode();
});

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

// Check if user has set a preference for dark mode previously
const preferredTheme = localStorage.getItem('theme');

// If dark mode was preferred, enable it
if (preferredTheme === 'dark') {
    switchToDarkMode();
} else {
    switchToLightMode(); // Default to light mode if no preference is set
}
