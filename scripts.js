// FILE: scripts.js
// Save this as scripts.js in root directory

// ========== GA4 SETUP & COOKIE CONSENT ==========
function initGA4() {
  if (sessionStorage.getItem('ga4Loaded')) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HFCKN1H30C';
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-HFCKN1H30C');
  sessionStorage.setItem('ga4Loaded', 'true');
  
  // Track page view
  gtag('event', 'page_view');
}

// Cookie Consent Banner
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');
  
  // Show banner if no consent stored
  if (!sessionStorage.getItem('cookieConsent')) {
    banner.style.display = 'flex';
  }
  
  acceptBtn.addEventListener('click', () => {
    sessionStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
    initGA4();
    gtag('event', 'cookie_consent', {'consent_type': 'accepted'});
  });
  
  rejectBtn.addEventListener('click', () => {
    sessionStorage.setItem('cookieConsent', 'rejected');
    banner.style.display = 'none';
  });
  
  // Load GA if previously accepted
  if (sessionStorage.getItem('cookieConsent') === 'accepted') {
    initGA4();
  }
}

// ========== EVENT TRACKING ==========
function trackEvent(eventName, eventData = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData);
  }
}

// Track button clicks
document.querySelectorAll('.hero-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('cta_click', {
      'button': 'hero_cta',
      'destination': btn.getAttribute('href')
    });
  });
});

// Track Calendly button
document.getElementById('calendlyBtn')?.addEventListener('click', () => {
  trackEvent('calendly_initiated', {'source': 'calendly_section'});
  Calendly.initPopupWidget({url: 'https://calendly.com/calendly-gurujitechglobal'});
});

// ========== FORM VALIDATION & SUBMISSION ==========
function initFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');
  
  // Real-time validation
  document.getElementById('name').addEventListener('blur', () => {
    validateName();
  });
  
  document.getElementById('email').addEventListener('blur', () => {
    validateEmail();
  });
  
  document.getElementById('message').addEventListener('blur', () => {
    validateMessage();
  });
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateName() || !validateEmail() || !validateMessage()) {
      formMessage.textContent = 'Please fix the errors above.';
      formMessage.className = 'form-message error';
      formMessage.style.display = 'block';
      return;
    }
    
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      // Track form submission
      trackEvent('contact_form_submit', {
        'service': document.getElementById('service').value
      });
      
      // Submit form via fetch API
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        formMessage.textContent = 'Thank you! We\'ll be in touch within 24 hours.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formMessage.textContent = 'Error sending message. Please try again.';
      formMessage.className = 'form-message error';
      formMessage.style.display = 'block';
      console.error('Form error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

function validateName() {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Name must be at least 2 characters';
    return false;
  }
  nameError.textContent = '';
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    return false;
  }
  emailError.textContent = '';
  return true;
}

function validateMessage() {
  const messageInput = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    return false;
  }
  messageError.textContent = '';
  return true;
}

// ========== NAVIGATION ==========
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const mobileLinks = navLinks.querySelectorAll('a');
  const header = document.getElementById('mainHeader');
  
  // Toggle menu
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  
  // Close menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      
      // Track navigation
      trackEvent('navigation_click', {
        'section': link.getAttribute('href')
      });
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
}

// ========== TYPEWRITER EFFECT ==========
function initTypewriter() {
  const words = ["Manage Your", "Support Your", "Secure Your", "Modernise Your"];
  let i = 0, j = 0, current = "", isDeleting = false;
  
  function type() {
    const element = document.getElementById("typewriter");
    const word = words[i];
    current = word.slice(0, j);
    element.textContent = current;
    
    if (!isDeleting && j < word.length) {
      j++;
      setTimeout(type, 120);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, 70);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % words.length;
      setTimeout(type, 1200);
    }
  }
  
  window.addEventListener('load', type);
}

// ========== LAZY LOAD VIDEOS ==========
function initLazyLoadVideos() {
  const serviceCards = document.querySelectorAll('.service-poster-bg');
  
  serviceCards.forEach(poster => {
    poster.addEventListener('click', () => {
      const videoSrc = poster.getAttribute('data-video');
      if (!videoSrc) return;
      
      // Track video interaction
      trackEvent('service_video_play', {
        'service': poster.textContent
      });
      
      // Create video element
      const video = document.createElement('video');
      video.className = 'service-video-bg';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
      
      // Replace poster with video
      poster.replaceWith(video);
    });
  });
}

// ========== AOS INITIALIZATION ==========
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();
  initNavigation();
  initBackToTop();
  initTypewriter();
  initFormHandler();
  initLazyLoadVideos();
  initAOS();
});

// Initialize GA4 if already consented
if (sessionStorage.getItem('cookieConsent') === 'accepted') {
  initGA4();
}
