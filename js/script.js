// Smooth Scrolling untuk Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Validasi
    if (name && email && message) {
        // Simulasi pengiriman form
        console.log('Form submitted:', { name, email, message });
        alert('Terima kasih! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.');
        this.reset();
    } else {
        alert('Silakan isi semua field form.');
    }
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer untuk project cards dan skill items
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// Dark Mode Toggle (Optional Feature)
const createThemeToggle = () => {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    toggle.addEventListener('click', () => {
        document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
    });
    
    document.body.appendChild(toggle);
};

// Uncomment untuk mengaktifkan dark mode toggle
// createThemeToggle();

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Parallax Effect (Optional)
const parallaxElements = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
        const scrollPosition = window.scrollY;
        const elementOffset = el.offsetTop;
        const distance = scrollPosition - elementOffset;
        el.style.transform = `translateY(${distance * 0.5}px)`;
    });
});

console.log('Portfolio script loaded successfully!');
