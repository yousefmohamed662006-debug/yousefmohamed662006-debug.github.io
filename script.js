document.addEventListener('DOMContentLoaded', () => {
  // Update all copyright years
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu interactions for <details class="mobile-menu">
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    // Close menu when clicking on any link inside
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.removeAttribute('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.hasAttribute('open') && !mobileMenu.contains(e.target)) {
        mobileMenu.removeAttribute('open');
      }
    });
  }
});

