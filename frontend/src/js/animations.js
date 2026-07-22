// UrbanCraft — Scroll Animations (Intersection Observer)

let observer = null;

export function initAnimations() {
  // Disconnect previous observer if exists
  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  });

  // Observe all animated elements
  const targets = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-in, .anim-slide-left, .anim-slide-right, .anim-scale-in, .anim-stagger, .anim-img-reveal, .anim-line'
  );

  targets.forEach(el => observer.observe(el));
}

export function observeNewElements() {
  // Call this after page content changes to observe newly added animated elements
  setTimeout(() => initAnimations(), 50);
}

// ── Lazy Image Fade-In ──
// Observes img[loading="lazy"] elements and fades them in on load
export function initLazyImages() {
  // Use MutationObserver to catch dynamically added images
  const mutObs = new MutationObserver(() => {
    attachLazyFade();
  });

  mutObs.observe(document.body, { childList: true, subtree: true });
  attachLazyFade();
}

function attachLazyFade() {
  const imgs = document.querySelectorAll('img[loading="lazy"]:not([data-lazy-observed])');
  imgs.forEach(img => {
    img.setAttribute('data-lazy-observed', 'true');
    img.classList.add('img-lazy-fade');

    if (img.complete && img.naturalWidth > 0) {
      // Already loaded
      img.classList.add('img-lazy-loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('img-lazy-loaded');
      }, { once: true });
    }
  });
}
