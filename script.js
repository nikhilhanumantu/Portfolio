document.addEventListener('DOMContentLoaded', function () {
    // --- Element Selection ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');
    const form = document.getElementById('contact-form');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const particlesContainer = document.getElementById('particles-js');
    const heroNameElement = document.getElementById('hero-name');

    // --- Particle Animation ---
    function createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 4 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`; // Start at random height
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // --- Typing Effect for Hero Name ---
    const nameToType = "HANUMANTU NIKHIL";
    let i = 0;
    function typeWriter() {
        if (i < nameToType.length) {
            heroNameElement.innerHTML = nameToType.substring(0, i + 1) + '<span class="cursor">&nbsp;</span>';
            i++;
            setTimeout(typeWriter, 120);
        } else {
            // Hide cursor after typing is complete
            const cursor = heroNameElement.querySelector('.cursor');
            if(cursor) cursor.style.display = 'none';
        }
    }
    typeWriter();

    // --- Mobile Navigation Toggle ---
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Project Filtering ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;

            // Show/hide project cards
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Smooth Scroll for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty links
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu on link click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});