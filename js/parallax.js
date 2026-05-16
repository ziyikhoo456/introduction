// Parallax Effects Module
export function initParallax() {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Only on desktop
  if (window.innerWidth < 768) return;

  const hero = document.querySelector('.hero-content');
  const scrollIndicator = document.querySelector('.hero-scroll-indicator');

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Hero parallax (content moves up slower)
        if (hero && scrollY < windowHeight) {
          const progress = scrollY / windowHeight;
          hero.style.transform = `translateY(${scrollY * 0.3}px)`;
          hero.style.opacity = 1 - progress * 1.2;
        }

        // Hide scroll indicator
        if (scrollIndicator) {
          scrollIndicator.style.opacity = Math.max(0, 1 - (scrollY / 200));
        }

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
