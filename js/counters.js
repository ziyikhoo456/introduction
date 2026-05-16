// Animated Number Counters Module
export function initCounters() {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length) return;

  // Easing function (easeOutQuart)
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function formatNumber(num, suffix, prefix) {
    prefix = prefix || '';
    suffix = suffix || '';

    if (num >= 1000000) {
      return prefix + (num / 1000000).toFixed(0) + suffix;
    } else if (num >= 1000) {
      return prefix + num.toLocaleString() + suffix;
    } else if (Number.isInteger(num)) {
      return prefix + num + suffix;
    } else {
      return prefix + num.toFixed(2) + suffix;
    }
  }

  function animateCounter(element) {
    const target = parseFloat(element.dataset.countTo);
    const suffix = element.dataset.countSuffix || '';
    const prefix = element.dataset.countPrefix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = target * easedProgress;

      element.textContent = formatNumber(currentValue, suffix, prefix);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatNumber(target, suffix, prefix);
      }
    }

    requestAnimationFrame(update);
  }

  // Observe counters
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}
