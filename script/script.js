// Responsive Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Simple Form Validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('form-message');

    if (!name || !email || !message) {
      formMsg.textContent = "⚠️ Please fill in all fields.";
      formMsg.style.color = "red";
      return;
    }

    formMsg.textContent = "✅ Message sent successfully! We'll get back to you soon.";
    formMsg.style.color = "green";
    form.reset();
  });
}
