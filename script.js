// Menu toggle
function toggleMenu() {
  document.querySelector('.dropdown-menu').classList.toggle('show');
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', themeToggle.checked);
});

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  themeToggle.checked = true;
  document.body.classList.add('dark-mode');
} 