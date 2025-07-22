document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('registerMessage');

    // Get existing users or initialize empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        message.style.color = 'red';
        message.textContent = 'Username already exists!';
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match!';
        return;
    }

    // Add new user
    users.push({
        username: username,
        password: password  // Note: In a real app, never store plaintext passwords
    });

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    message.style.color = 'green';
    message.textContent = 'Registration successful! Redirecting to login...';

    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});