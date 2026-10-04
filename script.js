// 1. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. FAQ Accordion Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// 3. Modal Popup Toggle
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const quoteModal = document.getElementById('quoteModal');

openModalBtn.addEventListener('click', () => {
    quoteModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    quoteModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
        quoteModal.style.display = 'none';
    }
});

// 4. Contact Form Front-End Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please type your message.';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        contactForm.reset();
        setTimeout(() => {
            successMessage.textContent = '';
        }, 5000);
    }
});