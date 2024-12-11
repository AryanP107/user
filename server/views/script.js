// // script.js

// const themeToggleButton = document.getElementById('theme-toggle');

// // Check for stored theme preference in localStorage
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   document.documentElement.setAttribute('data-theme', savedTheme);
// }

// // Toggle the theme
// themeToggleButton.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');

//   if (currentTheme === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light'); // Save preference
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark'); // Save preference
//   }
// });







// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Typing effect for "About Me" section
const typingElement = document.getElementById('typing-effect');
let typingText = typingElement.textContent;
typingElement.textContent = ''; // Clear initial text
let i = 0;
function typeWriter() {
  if (i < typingText.length) {
    typingElement.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Adjust speed here
  }
}
typeWriter();

// Automatic Scrolling Functionality
let currentSection = 0;
const sections = document.querySelectorAll('section');
const scrollInterval = setInterval(() => {
  if (currentSection < sections.length) {
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    currentSection++;
  } else {
    clearInterval(scrollInterval); // Stop when all sections have been scrolled through
  }
}, 3000); // Change interval time for auto scroll speed
