document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  // const themeToggle = document.getElementById('theme-toggle');
  // const body = document.body;
  
  // Check for saved theme preference or use preferred color scheme
  // const savedTheme = localStorage.getItem('theme') || 
  //                   (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  // // Apply the saved theme
  // if (savedTheme === 'light') {
  //   body.classList.add('light-theme');
  //   themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  // } else {
  //   themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  // }
  
  // Theme toggle button click event
  // themeToggle.addEventListener('click', function() {
  //   body.classList.toggle('light-theme');
  //   const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
  //   localStorage.setItem('theme', theme);
    
  //   if (theme === 'light') {
  //     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  //     gsap.to(".hero-img-border", { borderColor: "#0d6efd", duration: 0.3 });
  //   } else {
  //     themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  //     gsap.to(".hero-img-border", { borderColor: "#0d6efd", duration: 0.3 });
  //   }
  // });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });
  
  // Initialize GSAP animations
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from(".hero-section h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out"
    });
    
    gsap.from(".hero-section h2", {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(".hero-section p", {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
    
    gsap.from(".hero-section .btn", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.9,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    gsap.from(".hero-img", {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
    
    gsap.from(".hero-img-border", {
      opacity: 0,
      x: 70,
      duration: 1,
      delay: 0.8,
      ease: "power3.out"
    });
    
    // Section title animations
    gsap.utils.toArray(".section-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      });
    });
    
    // About section animations
    gsap.from(".flip-card", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power3.out"
    });
    
    gsap.from("#about h3, #about p, #about .info-list, #about .btn", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    // Skills section animations
    gsap.utils.toArray(".skill-item").forEach((skill, i) => {
      gsap.from(skill, {
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power3.out"
      });
    });
    
    // Project card animations
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 70%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power3.out"
      });
    });
    
    // Contact section animations
    gsap.from(".contact-info-item", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    gsap.from(".social-links a", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power3.out"
    });
  }
  
  // Animate progress bars when they come into view
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(bar, {
              width: width,
              duration: 1.5,
              ease: "power3.out"
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(bar);
    });
  };
  
  animateProgressBars();
  
  // Form submission handling
 const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log('Submitting data:', data);

    // UI feedback - disable and show loading
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

    // Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbwjG7Gf8stu2Mptor_GkKepJerQbruNhV5m2sx0G9FwgiAI1zYv8dKevugL8hvab2RL/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.result === "success") {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
        alert("Submitted successfully!");
        contactForm.reset();
      } else {
        alert("Something went wrong. Please try again.");
        submitButton.innerHTML = originalText;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message.");
      submitButton.innerHTML = originalText;
    }

    // Re-enable button after 2 seconds
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 2000);
  });
}

  
  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
  
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Remove any existing ripple
      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }
      
      // Create ripple element
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      // Get click position
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Position the ripple
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      // Add ripple to button
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add scroll to top button
  // const scrollToTopButton = document.createElement('button');
  // scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  // scrollToTopButton.classList.add('btn', 'btn-primary', 'scroll-to-top');
  // document.body.appendChild(scrollToTopButton);
  
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 300) {
  //     scrollToTopButton.style.opacity = '1';
  //     scrollToTopButton.style.visibility = 'visible';
  //   } else {
  //     scrollToTopButton.style.opacity = '0';
  //     scrollToTopButton.style.visibility = 'hidden';
  //   }
  // });
  
  // scrollToTopButton.addEventListener('click', () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Add animation to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
});
// Experience section animations
gsap.utils.toArray(".timeline-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.2,
    ease: "power3.out"
  });
});
   const texts = ["Full Stack Developer", "Web Developer & Designer", "App Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById("animated-text");

  function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    element.innerText = currentText.substring(0, charIndex);

    // typing speed
    let speed = isDeleting ? 50 : 100;

    // pause before deleting
    if (!isDeleting && charIndex === currentText.length) {
      speed = 1500;
      isDeleting = true;
    }

    // move to next text
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  showNextText(); // show first
  setInterval(showNextText, 3000)
// Tech Stack animations
gsap.utils.toArray(".tech-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: "#techstack",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    delay: i * 0.1,
    ease: "back.out(1.7)"
  });
});

gsap.from(".tech-stack-progress", {
  scrollTrigger: {
    trigger: "#techstack",
    start: "top 70%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
});
