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

// Validate the form inputs
function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const lessonType = document.querySelector('select[name="lesson-type"]').value;
    const preferredDate = document.querySelector('input[name="preferred-date"]').value;
    const timeSlot = document.querySelector('select[name="time-slot"]').value;

    if (!name || !email || !lessonType || !preferredDate || !timeSlot) {
        alert("Please fill in all fields.");
        return false;
    }


    if (!checkEmails(email)) {
        alert("Please enter a valid email address.");
        return false;
    }


    if (!checkDate(preferredDate)) {
        alert("Please select a valid future date.");
        return false;
    }

    return true; 
}


function checkEmails(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function checkDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return selectedDate > today; 
}


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
}); 