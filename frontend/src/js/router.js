// UrbanCraft — SPA Router
const routes = {};
let currentRoute = '';

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  return currentRoute;
}

export function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash.slice(1) || '/';
    const [path, ...paramParts] = hash.split('/').filter(Boolean);
    const route = '/' + (path || '');
    currentRoute = route;

    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    // Page transition
    pageContent.classList.remove('page-enter');
    void pageContent.offsetWidth; // force reflow
    pageContent.classList.add('page-enter');

    // Try exact match first, then with params
    if (routes[route]) {
      routes[route](paramParts);
    } else if (routes[hash] || routes['#' + hash]) {
      (routes[hash] || routes['#' + hash])(paramParts);
    } else if (routes['/']) {
      routes['/'](paramParts);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update nav active
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('data-route');
      link.classList.toggle('active', href === route);
    });
  };

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
