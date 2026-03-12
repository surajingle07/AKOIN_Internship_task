document.addEventListener('DOMContentLoaded', () => {
    // Basic setup
    document.getElementById('year').textContent = new Date().getFullYear();

    // Elements
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navbar = document.getElementById('navbar');

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Animate hamburger to cross could be added here
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Sticky Navbar shadow effect on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            navbar.style.boxShadow = 'none';
        }
    });
});
