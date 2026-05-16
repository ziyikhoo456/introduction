// App.js - Main Entry Point (Orchestrator)
import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initParticles } from './particles.js';
import { initTyping } from './typing.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initCounters } from './counters.js';
import { initTimeline } from './timeline.js';
import { initSkillsChart } from './skills-chart.js';
import { initParallax } from './parallax.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  // Core setup
  initTheme();
  initI18n();

  // Visual effects
  initParticles();
  initTyping();

  // Scroll-based features
  initScrollReveal();
  initCounters();
  initTimeline();
  initSkillsChart();
  initParallax();

  // Navigation behavior
  initNavigation();
});

function initNavigation() {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect for nav
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll('.section[id], .hero[id]');
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}
