// Function to switch to light mode
function switchToLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
}

// Function to switch to dark mode
function switchToDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
}

// Event listener for light mode button
document.getElementById('light-mode-btn').addEventListener('click', switchToLightMode);

// Event listener for dark mode button
document.getElementById('dark-mode-btn').addEventListener('click', switchToDarkMode);

// Check user's theme preference
const preferredTheme = localStorage.getItem('theme');

if (preferredTheme === 'dark') {
    switchToDarkMode();
} else {
    switchToLightMode(); // Default to light mode
}
