// Radar Chart + Progress Bars Module
export function initSkillsChart() {
  initRadarChart();
  initProgressBars();
}

function initRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animated = false;
  let animationProgress = 0;
  let animationId;

  const skills = [
    { label: 'Backend', value: 0.95 },
    { label: 'Distributed', value: 0.90 },
    { label: 'AI/MCP', value: 0.85 },
    { label: 'Architecture', value: 0.85 },
    { label: 'Databases', value: 0.80 },
    { label: 'DevOps', value: 0.75 }
  ];

  function getColors() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      return {
        grid: 'rgba(148, 163, 184, 0.15)',
        text: '#cbd5e1',
        fill: 'rgba(56, 189, 248, 0.2)',
        stroke: 'rgba(56, 189, 248, 0.8)',
        dot: '#38bdf8'
      };
    }
    return {
      grid: 'rgba(26, 54, 93, 0.1)',
      text: '#475569',
      fill: 'rgba(43, 108, 176, 0.15)',
      stroke: 'rgba(43, 108, 176, 0.8)',
      dot: '#2b6cb0'
    };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxRadius = Math.min(cx, cy) * 0.7;
    const colors = getColors();
    const sides = skills.length;
    const angleStep = (Math.PI * 2) / sides;

    ctx.clearRect(0, 0, w, h);

    // Draw grid rings
    for (let ring = 1; ring <= 4; ring++) {
      const r = (maxRadius / 4) * ring;
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = angleStep * i - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw axis lines
    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxRadius, cy + Math.sin(angle) * maxRadius);
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw labels
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = colors.text;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const labelR = maxRadius + 24;
      const x = cx + Math.cos(angle) * labelR;
      const y = cy + Math.sin(angle) * labelR;
      ctx.fillText(skills[i].label, x, y);
    }

    // Draw data polygon (animated)
    const progress = easeOutCubic(animationProgress);
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const idx = i % sides;
      const angle = angleStep * idx - Math.PI / 2;
      const r = maxRadius * skills[idx].value * progress;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = colors.fill;
    ctx.fill();
    ctx.strokeStyle = colors.stroke;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw dots at vertices
    for (let i = 0; i < sides; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const r = maxRadius * skills[i].value * progress;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.dot;
      ctx.fill();
    }
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate() {
    animationProgress += 0.02;
    if (animationProgress >= 1) {
      animationProgress = 1;
      draw();
      return;
    }
    draw();
    animationId = requestAnimationFrame(animate);
  }

  // Observe for scroll trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        resize();
        animate();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(canvas);

  // Redraw on resize and theme change
  window.addEventListener('resize', () => {
    if (animated) {
      resize();
      draw();
    }
  });

  // Watch for theme changes
  const themeObserver = new MutationObserver(() => {
    if (animated) {
      draw();
    }
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

function initProgressBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.dataset.width;
        // Stagger the animation
        const index = Array.from(bars).indexOf(bar);
        setTimeout(() => {
          bar.style.width = width + '%';
          bar.classList.add('animated');
        }, index * 150);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}
