// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.connect-mobile-menu');
const navLinks = document.querySelector('.connect-nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        // Update aria-expanded
        const isExpanded = navLinks.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.connect-nav')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.connect-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Account for fixed header height
            const headerHeight = document.querySelector('.connect-nav')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Pricing toggle (monthly/annual)
const pricingToggle = document.querySelector('.connect-pricing-toggle');
const monthlyBtn = document.querySelector('[data-period="monthly"]');
const annualBtn = document.querySelector('[data-period="annual"]');
const priceElements = document.querySelectorAll('.connect-price');

if (pricingToggle) {
    monthlyBtn?.addEventListener('click', () => {
        monthlyBtn.classList.add('active');
        annualBtn?.classList.remove('active');

        // Update prices to monthly
        priceElements.forEach(el => {
            const monthly = el.dataset.monthly;
            if (monthly) {
                el.textContent = monthly;
            }
        });

        // Hide annual savings badges
        document.querySelectorAll('.connect-annual-badge').forEach(badge => {
            badge.style.display = 'none';
        });
    });

    annualBtn?.addEventListener('click', () => {
        annualBtn.classList.add('active');
        monthlyBtn?.classList.remove('active');

        // Update prices to annual
        priceElements.forEach(el => {
            const annual = el.dataset.annual;
            if (annual) {
                el.textContent = annual;
            }
        });

        // Show annual savings badges
        document.querySelectorAll('.connect-annual-badge').forEach(badge => {
            badge.style.display = 'inline-block';
        });
    });
}

// Animate stats on scroll (using Intersection Observer)
const animateValue = (element, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }

        // Format number with appropriate suffix
        if (element.dataset.suffix) {
            element.textContent = Math.floor(current) + element.dataset.suffix;
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
};

// Set up Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumber = entry.target.querySelector('.connect-stat-number');
            if (statNumber) {
                const endValue = parseInt(statNumber.dataset.value);
                animateValue(statNumber, 0, endValue, 2000);
            }
        }
    });
}, { threshold: 0.5 });

// Observe all stat items
document.querySelectorAll('.connect-stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Add scroll effects to navigation
let lastScroll = 0;
const nav = document.querySelector('.connect-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (nav) {
        // Add shadow on scroll
        if (currentScroll > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide/show nav on scroll (optional - uncomment if desired)
        /*
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        */
    }

    lastScroll = currentScroll;
});

// Form validation (if contact form exists)
const contactForm = document.querySelector('.connect-contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Basic validation
        let isValid = true;
        const errors = [];

        if (!data.email || !data.email.includes('@')) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        if (!data.name || data.name.length < 2) {
            errors.push('Please enter your name');
            isValid = false;
        }

        if (!data.message || data.message.length < 10) {
            errors.push('Message must be at least 10 characters');
            isValid = false;
        }

        if (isValid) {
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'connect-form-success';
            successMsg.textContent = 'Thank you! We\'ll be in touch soon.';
            contactForm.appendChild(successMsg);

            // Reset form
            contactForm.reset();

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        } else {
            // Show errors
            const errorMsg = document.createElement('div');
            errorMsg.className = 'connect-form-error';
            errorMsg.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
            contactForm.appendChild(errorMsg);

            // Remove error message after 5 seconds
            setTimeout(() => {
                errorMsg.remove();
            }, 5000);
        }
    });
}

// Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
}, { rootMargin: '50px' });

// Observe all lazy images
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add hover effect to cards
document.querySelectorAll('.connect-feature-card, .connect-pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('Connect page loaded! 💜');
