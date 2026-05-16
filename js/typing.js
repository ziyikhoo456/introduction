// Typing Effect Module - Language-aware
export function initTyping() {
  const element = document.getElementById('typingText');
  if (!element) return;

  const phrasesByLang = {
    en: [
      'Java Engineer',
      'Fintech & Cross-Border Payments',
      'AI Tooling Builder',
      'Distributed Systems Architect'
    ],
    cn: [
      'Java工程师',
      '金融科技 & 跨境支付',
      'AI工具开发者',
      '分布式系统架构师'
    ]
  };

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function getLang() {
    return localStorage.getItem('lang') || 'en';
  }

  function getPhrases() {
    return phrasesByLang[getLang()] || phrasesByLang.en;
  }

  let typeTimer = null;

  function stopTyping() {
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
  }

  function type() {
    const phrases = getPhrases();
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (isPaused) {
      typeTimer = setTimeout(type, 50);
      return;
    }

    if (!isDeleting) {
      // Typing
      element.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        // Pause at end
        isPaused = true;
        typeTimer = setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          type();
        }, 2000);
        return;
      }

      typeTimer = setTimeout(type, 60 + Math.random() * 40);
    } else {
      // Deleting
      element.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % getPhrases().length;
        typeTimer = setTimeout(type, 400);
        return;
      }

      typeTimer = setTimeout(type, 30);
    }
  }

  // Listen for language changes - reset and restart typing
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      stopTyping();
      charIndex = 0;
      isDeleting = false;
      isPaused = false;
      phraseIndex = 0;
      element.textContent = '';
      typeTimer = setTimeout(type, 300);
    });
  });

  // Start after a brief delay
  setTimeout(type, 800);
}
