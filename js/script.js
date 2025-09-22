document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === '123qwe!@#QWE') {
        window.location.href = 'content.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
})