// Password validation (for login page)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === PASSWORD) { // Reference PASSWORD from config.js
            window.location.href = 'content.html';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
}

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

    // Auto-scroll logic
    let isAutoScrolling = true; // Flag to track if auto-scroll is active
    const scrollSpeed = 1; // Pixels per step
    const scrollInterval = 20; // Milliseconds per step (50px/sec)

    const autoScroll = setInterval(() => {
        if (!isAutoScrolling) return; // Stop if user interrupted or bottom reached

        window.scrollBy(0, scrollSpeed);

        // Check if at bottom of page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            isAutoScrolling = false;
            clearInterval(autoScroll);
        }
    }, scrollInterval);

    // Stop auto-scroll on user interaction
    const stopAutoScroll = () => {
        if (isAutoScrolling) {
            isAutoScrolling = false;
            clearInterval(autoScroll);
        }
    };

    // Listen for user interactions
    window.addEventListener('wheel', stopAutoScroll, { once: true });
    window.addEventListener('touchmove', stopAutoScroll, { once: true });
    window.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.key)) {
            stopAutoScroll();
        }
    }, { once: true });
}