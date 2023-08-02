

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const registerToggle = document.getElementById('registerToggle');
    const loginToggle = document.getElementById('loginToggle');
    const loginCard = document.querySelector('.auth-card:not(.hidden)');
    const registerCard = document.querySelector('.auth-card.hidden');

    registerToggle.addEventListener('click', function (e) {
        e.preventDefault();
        loginCard.classList.add('hidden');
        registerCard.classList.remove('hidden');
    });

    loginToggle.addEventListener('click', function (e) {
        e.preventDefault();
        registerCard.classList.add('hidden');
        loginCard.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform login form submission and validation here
    });

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Perform registration form submission and validation here
    });
    
        });
