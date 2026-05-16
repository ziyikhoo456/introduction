// Timeline Interactivity Module
export function initTimeline() {
  const cards = document.querySelectorAll('.timeline-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Toggle expanded state
      const isExpanded = card.classList.contains('expanded');

      // Close all other cards
      cards.forEach(c => {
        if (c !== card) c.classList.remove('expanded');
      });

      // Toggle current
      card.classList.toggle('expanded', !isExpanded);
    });
  });

  // Expand the first (current) card by default
  if (cards.length > 0) {
    cards[0].classList.add('expanded');
  }
}
