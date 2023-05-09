
const email = document.getElementById('email');
const password = document.getElementById('pass');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    const errors = [];

    if (email.value === '') {
        errors.push('Please fill in your email');
    }

    if (password.value.length < 4) {
        errors.push('Password must be at least 4 characters');
    }

    if (password.value.length > 10) {
        errors.push('Password must be less than 10 characters');
    }

    if (password.value === 'password') {
        errors.push('Password cannot be "password"');
    }

    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.removeAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
    }
});
