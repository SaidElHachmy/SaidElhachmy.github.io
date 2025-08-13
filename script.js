// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Function to add new projects dynamically
function addProject(title, description) {
  const projectList = document.getElementById('project-list');
  const card = document.createElement('div');
  card.className = 'card';
  card.textContent = `${title} — ${description}`;
  projectList.appendChild(card);
}

// Theme toggling with persistence
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Initialize theme from localStorage or system preference
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
})();

// Mobile menu toggle + auto-close on link click
function toggleMenu() {
  const nav = document.getElementById('primary-nav');
  const btn = document.querySelector('.menu-toggle');
  nav.classList.toggle('show');
  btn.setAttribute('aria-expanded', nav.classList.contains('show'));
}

// Close the menu when a nav link is clicked on small screens
document.querySelectorAll('#primary-nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
      const nav = document.getElementById('primary-nav');
      const btn = document.querySelector('.menu-toggle');
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Optional: close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
  const nav = document.getElementById('primary-nav');
  const btn = document.querySelector('.menu-toggle');
  if (window.innerWidth <= 700 && nav.classList.contains('show')) {
    const clickInside = nav.contains(e.target) || btn.contains(e.target);
    if (!clickInside) {
      nav.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  }
});