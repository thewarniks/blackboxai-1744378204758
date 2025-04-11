document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        // Redirect to chat page on successful login
        window.location.href = 'chat.html';
    } else {
        alert('Please enter both username and password.');
    }
});
