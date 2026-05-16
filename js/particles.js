// Particle System - Canvas-based geometric background
export function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let width, height;

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 35 : 70;
  const CONNECTION_DISTANCE = isMobile ? 100 : 150;
  const MOUSE_RADIUS = 120;

  let mouse = { x: null, y: null };

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  function getColors() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      return {
        particle: 'rgba(56, 189, 248, 0.7)',
        line: 'rgba(125, 211, 252, 0.12)',
        glow: 'rgba(56, 189, 248, 0.3)'
      };
    }
    return {
      particle: 'rgba(26, 54, 93, 0.6)',
      line: 'rgba(43, 108, 176, 0.12)',
      glow: 'rgba(43, 108, 176, 0.2)'
    };
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2.5 + 1;
      this.opacity = Math.random() * 0.5 + 0.3;
      // Some particles are geometric shapes
      this.shape = Math.random() > 0.8 ? 'triangle' : 'circle';
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;

      // Mouse interaction
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
          this.vx += dx * force;
          this.vy += dy * force;
        }
      }

      // Damping
      this.vx *= 0.99;
      this.vy *= 0.99;

      // Bounds
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      this.x = Math.max(0, Math.min(width, this.x));
      this.y = Math.max(0, Math.min(height, this.y));
    }

    draw(ctx, color) {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = color;

      if (this.shape === 'triangle') {
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        const size = this.radius * 2.5;
        ctx.moveTo(0, -size);
        ctx.lineTo(-size * 0.87, size * 0.5);
        ctx.lineTo(size * 0.87, size * 0.5);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections(colors) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = 1 - (dist / CONNECTION_DISTANCE);
          ctx.beginPath();
          ctx.strokeStyle = colors.line;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const colors = getColors();

    particles.forEach(p => {
      p.update();
      p.draw(ctx, colors.particle);
    });

    drawConnections(colors);
    animationId = requestAnimationFrame(animate);
  }

  // Event listeners
  window.addEventListener('resize', () => {
    resize();
    // Re-position particles that are now out of bounds
    particles.forEach(p => {
      if (p.x > width) p.x = width * Math.random();
      if (p.y > height) p.y = height * Math.random();
    });
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  init();
  animate();

  // Cleanup function
  return () => {
    cancelAnimationFrame(animationId);
  };
}
