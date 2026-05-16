// Theme Toggle Module
export function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const sunIcon = toggle.querySelector('.icon-sun');
  const moonIcon = toggle.querySelector('.icon-moon');
  const html = document.documentElement;

  // Load saved theme
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
  updateIcons(saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcons(next);
  });

  function updateIcons(theme) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
}
