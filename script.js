// ====================================
// TeamTacles Landing Page JavaScript
// ====================================

// ====================================
// Mobile Menu Toggle
// ====================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');

    // Change icon and aria attributes
    const icon = mobileMenuToggle.querySelector('ion-icon');
    if (isActive) {
        icon.setAttribute('name', 'close-outline');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.setAttribute('aria-label', 'Fechar menu de navegação');
    } else {
        icon.setAttribute('name', 'menu-outline');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('ion-icon');
            icon.setAttribute('name', 'menu-outline');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('ion-icon');
        icon.setAttribute('name', 'menu-outline');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
});

// ====================================
// Navbar Scroll Effect
// ====================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ====================================
// Smooth Scroll for Anchor Links
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// Scroll Reveal Animation
// ====================================

let revealElements = [];

const revealOnScroll = () => {
    // Update reveal elements list dynamically
    revealElements = document.querySelectorAll('.reveal');

    const windowHeight = window.innerHeight;
    const revealPoint = 200; // Increased from 150 for earlier reveal

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Add reveal class to elements that should animate on scroll
const addRevealClass = () => {
    // Add js-loaded class to body for progressive enhancement
    document.body.classList.add('js-loaded');

    // Feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Steps
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.add('reveal');
        step.style.transitionDelay = `${index * 0.2}s`;
    });

    // Benefits
    document.querySelectorAll('.benefit-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Testimonials
    document.querySelectorAll('.testimonial-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
};

// Initialize reveal animations
addRevealClass();

// Trigger initial reveal check immediately
revealOnScroll();

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial check on page load (backup)
window.addEventListener('load', revealOnScroll);

// Safety fallback: Force reveal all elements after 2 seconds if still not visible
setTimeout(() => {
    const hiddenElements = document.querySelectorAll('.reveal:not(.active)');
    if (hiddenElements.length > 0) {
        console.log('⚠️ Forcing reveal for', hiddenElements.length, 'hidden elements');
        hiddenElements.forEach(element => {
            element.classList.add('active');
        });
    }
}, 2000);

// ====================================
// Back to Top Button
// ====================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// Animated Counters for Stats
// ====================================

const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16); // 60 FPS
    const isInfinity = target === Infinity;

    const timer = setInterval(() => {
        if (isInfinity) {
            clearInterval(timer);
            return;
        }

        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 100 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
        }
    }, 16);
};

// Trigger counter animation when stats come into view
const statsSection = document.querySelector('.hero-stats');
let statsAnimated = false;

const animateStatsOnScroll = () => {
    if (statsAnimated || !statsSection) return;

    const statsPosition = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (statsPosition < windowHeight) {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach((stat, index) => {
            const text = stat.textContent.trim();

            if (text.includes('∞')) {
                // Keep infinity symbol as is
                return;
            }

            // Extract number from text (e.g., "8+", "100%")
            const numericValue = parseInt(text.replace(/\D/g, ''));
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');

            if (!isNaN(numericValue)) {
                // Clear the initial value
                stat.textContent = '0' + (hasPercent ? '%' : hasPlus ? '+' : '');

                // Animate with delay based on index
                setTimeout(() => {
                    animateCounter(stat, numericValue, 1500);
                }, index * 200);
            }
        });

        statsAnimated = true;
    }
};

window.addEventListener('scroll', animateStatsOnScroll);
window.addEventListener('load', animateStatsOnScroll);

// ====================================
// Animated Progress Bars
// ====================================

const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.stat-bar-fill');

    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barPosition < windowHeight - 100) {
            const width = bar.style.width;
            bar.style.width = '0';

            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Trigger once when in view
let progressBarsAnimated = false;

const checkProgressBars = () => {
    if (progressBarsAnimated) return;

    const benefitsCard = document.querySelector('.benefits-card');
    if (!benefitsCard) return;

    const cardPosition = benefitsCard.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardPosition < windowHeight - 100) {
        animateProgressBars();
        progressBarsAnimated = true;
    }
};

window.addEventListener('scroll', checkProgressBars);
window.addEventListener('load', checkProgressBars);

// ====================================
// Parallax Effect for Hero Image (Optimized)
// ====================================

const heroImage = document.querySelector('.hero-image-container');
let ticking = false;

if (heroImage) {
    const applyParallax = () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3; // Reduced for smoother performance

        if (scrolled < window.innerHeight) {
            requestAnimationFrame(() => {
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        }
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(applyParallax);
        }
    });
}

// ====================================
// Active Navigation Link Highlight
// ====================================

const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ====================================
// Form Validation (if contact form exists)
// ====================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Add your form submission logic here
        console.log('Form submitted:', data);

        // Show success message
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}

// ====================================
// Loading Animation
// ====================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    requestAnimationFrame(() => {
        setTimeout(() => {
            revealOnScroll();
            animateStatsOnScroll();
            checkProgressBars();
        }, 100);
    });
});

// ====================================
// Prevent Default on Hash Links
// ====================================

window.addEventListener('hashchange', (e) => {
    e.preventDefault();
});

// ====================================
// Lazy Loading for Images (if needed)
// ====================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                }

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px' // Start loading 50px before entering viewport
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ====================================
// Keyboard Navigation Support
// ====================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('ion-icon');
        icon.setAttribute('name', 'menu-outline');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
        mobileMenuToggle.focus(); // Return focus to toggle button
    }
});

// ====================================
// Performance Optimization: Throttle Scroll Events
// ====================================

function throttle(func, limit = 16) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll handlers for better performance
const throttledReveal = throttle(revealOnScroll, 100);
const throttledHighlight = throttle(highlightNavigation, 100);

window.removeEventListener('scroll', revealOnScroll);
window.removeEventListener('scroll', highlightNavigation);

window.addEventListener('scroll', throttledReveal, { passive: true });
window.addEventListener('scroll', throttledHighlight, { passive: true });

// ====================================
// Console Welcome Message
// ====================================

console.log(
    '%c🐙 TeamTacles Landing Page',
    'font-size: 20px; font-weight: bold; color: #EB5F1C;'
);
console.log(
    '%cOrganize seus projetos com a inteligência de um polvo!',
    'font-size: 14px; color: #B0B0B0;'
);
console.log(
    '%cInteressado em fazer parte da equipe? Entre em contato!',
    'font-size: 12px; color: #808080;'
);

// ====================================
// Analytics Tracking (placeholder)
// ====================================

// Add your analytics tracking code here
// Example: Google Analytics, Mixpanel, etc.

const trackEvent = (category, action, label) => {
    console.log('Event tracked:', { category, action, label });

    // Add your tracking service here
    // Example: gtag('event', action, { event_category: category, event_label: label });
};

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'click', btn.textContent.trim());
    });
});

// Track feature card interactions
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.feature-title').textContent;
        trackEvent('Feature', 'view', title);
    });
});

// ====================================
// Easter Egg - Konami Code
// ====================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        const mascots = document.querySelectorAll('.mascot-image, .benefits-mascot');

        mascots.forEach(mascot => {
            mascot.style.transition = 'transform 1s ease';
            mascot.style.transform = 'rotate(360deg) scale(1.2)';

            setTimeout(() => {
                mascot.style.transform = 'rotate(0deg) scale(1)';
            }, 1000);
        });

        console.log('%c🎉 Você encontrou o Easter Egg! 🐙', 'font-size: 24px; color: #EB5F1C; font-weight: bold;');
        console.log('%cO polvo ficou feliz! 🎊', 'font-size: 16px; color: #FF7A3D;');

        konamiCode = [];
    }
});

// ====================================
// Initialize Everything
// ====================================

console.log('✅ TeamTacles Landing Page initialized successfully!');
