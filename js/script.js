// Password validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === '123qwe!@#QWE') {
        window.location.href = 'content.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Animation on scroll (for content page)
if (window.location.pathname.endsWith('content.html')) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animateClass = entry.target.getAttribute('data-animate');
                if (animateClass) {
                    entry.target.classList.add('animate__' + animateClass);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}