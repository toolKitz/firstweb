// This file contains the JavaScript code for the Hello World application.

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');
    const loginContainer = document.querySelector('.login-container');

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if credentials match
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        // Store logged in user
        localStorage.setItem('currentUser', username);

        // Redirect to welcome page first
        window.location.href = 'welcome.html';
    } else {
        message.style.color = 'red';
        message.innerHTML = 'Invalid username or password.<br><span class="register-hint">Don\'t have an account? Click "Register" to create one!</span>';
    }
});

document.getElementById('registerBtn').addEventListener('click', function () {
    window.location.href = 'register.html';
});