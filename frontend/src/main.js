// UrbanCraft — Main Entry Point
import { registerRoute, initRouter } from './js/router.js';
import { renderNavbar, updateActiveLink } from './js/components/navbar.js';
import { renderFooter } from './js/components/footer.js';
import { initCartDrawer } from './js/components/cart-drawer.js';
import { renderWhatsAppButton } from './js/components/whatsapp-button.js';
import { observeNewElements, initLazyImages } from './js/animations.js';

// Pages
import { renderHome } from './js/pages/home.js';
import { renderAbout } from './js/pages/about.js';
import { renderProducts } from './js/pages/products.js';
import { renderProductDetail } from './js/pages/product-detail.js';
import { renderServices } from './js/pages/services.js';
import { renderBusiness } from './js/pages/business.js';
import { renderContact } from './js/pages/contact.js';
import { renderAdmin } from './js/pages/admin.js';

// ── Initialize App ──
function init() {
  // Render persistent components
  renderNavbar();
  renderFooter();
  initCartDrawer();
  renderWhatsAppButton();
  initLazyImages();

  // Register routes
  registerRoute('/', () => {
    renderHome();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/about', () => {
    renderAbout();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/products', () => {
    renderProducts();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/product', (params) => {
    renderProductDetail(params);
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/services', () => {
    renderServices();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/business', () => {
    renderBusiness();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/contact', () => {
    renderContact();
    observeNewElements();
    updateActiveLink();
  });

  registerRoute('/admin', () => {
    renderAdmin();
    observeNewElements();
    updateActiveLink();
  });

  // Start router
  initRouter();
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
