// UrbanCraft — Navbar Component
import { navigate, getCurrentRoute } from '../router.js';
import { getCartCount, onCartChange } from '../store/cart.js';

const navLinks = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Products', route: '/products' },
  { label: 'Services', route: '/services' },
  { label: 'Business', route: '/business' },
  { label: 'Contact', route: '/contact' },
];

export function renderNavbar() {
  const nav = document.getElementById('navbar');
  nav.className = 'navbar navbar--transparent';

  const current = getCurrentRoute();

  nav.innerHTML = `
    <div class="navbar__inner">
      <a class="navbar__logo" data-route="/" href="#/">
        <img src="/logo.png" alt="UrbanCraft Furniture Logo" />
      </a>

      <div class="navbar__links" id="nav-links">
        ${navLinks.map(l => `
          <a class="navbar__link ${current === l.route ? 'active' : ''}"
             data-route="${l.route}"
             href="#${l.route}">
            ${l.label}
          </a>
        `).join('')}
      </div>

      <div class="navbar__actions">
        <button class="navbar__cart-btn" id="cart-toggle-btn" aria-label="Open Cart">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span class="navbar__cart-count ${getCartCount() === 0 ? 'hidden' : ''}" id="cart-count">${getCartCount()}</span>
        </button>

        <div class="navbar__menu-btn" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;

  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const navLinksEl = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinksEl.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu on link click
  navLinksEl.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      navLinksEl.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });

  // Scroll behaviour: transparent -> solid
  initScrollBehavior(nav);

  // Cart count updates
  onCartChange(() => {
    const count = getCartCount();
    const badge = document.getElementById('cart-count');
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  });
}

function initScrollBehavior(nav) {
  const updateNav = () => {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('navbar--transparent', !scrolled);
    nav.classList.toggle('navbar--solid', scrolled);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

export function updateActiveLink() {
  const current = getCurrentRoute();
  document.querySelectorAll('.navbar__link').forEach(link => {
    const route = link.getAttribute('data-route');
    link.classList.toggle('active', route === current);
  });
}
