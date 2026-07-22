// UrbanCraft — Footer Component

// ── Contact Data ──
const PHONE = '+91 93608 68232';
const PHONE_RAW = '+919360868232';
const EMAIL = 'hello@urbancraft.in';
const EMAIL_SUBJECT = encodeURIComponent('Furniture Consultation Request');
const EMAIL_BODY = encodeURIComponent('Hello UrbanCraft,\n\nI would like to know more about your furniture.\n\nThank you.');
const INSTAGRAM = 'haryz_786_';
const MAPS_URL = 'https://maps.google.com/?q=9.894984990205124,78.1091660753482';
const WHATSAPP_URL = 'https://wa.me/919360868232?text=' + encodeURIComponent('Hello UrbanCraft Furniture,\n\nI would like to know more about your furniture collection.');

export function renderFooter() {
  const footer = document.getElementById('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <!-- Brand Column -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="/logo.png" alt="UrbanCraft" />
          </div>
          <p><strong>UrbanCraft Furniture</strong></p>
          <p><em>Crafted with Passion. Built for Comfort. Designed for Life.</em></p>
          <p style="margin-top: var(--space-sm);">We transform empty spaces into meaningful places through handcrafted furniture and personalized design solutions.</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          <div class="footer__link-list">
            <a class="footer__link" href="#/">Home</a>
            <a class="footer__link" href="#/about">About Us</a>
            <a class="footer__link" href="#/products">Products</a>
            <a class="footer__link" href="#/services">Services</a>
            <a class="footer__link" href="#/business">Business</a>
            <a class="footer__link" href="#/contact">Contact</a>
            <a class="footer__link" href="#/admin" style="opacity: 0.6; font-size: 0.85em;">Admin</a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="footer__heading">Services</h4>
          <div class="footer__link-list">
            <a class="footer__link" href="#/services">Interior Consultation</a>
            <a class="footer__link" href="#/services">Custom Design</a>
            <a class="footer__link" href="#/services">Manufacturing</a>
            <a class="footer__link" href="#/services">Installation</a>
            <a class="footer__link" href="#/services">Maintenance</a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="footer__heading">Contact Us</h4>

          <!-- Address -->
          <div class="footer__contact-item">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>UrbanCraft Workshop, Furniture Market, City</span>
          </div>

          <!-- Phone (click-to-call) -->
          <a class="footer__contact-link" href="tel:${PHONE_RAW}" aria-label="Call UrbanCraft at ${PHONE}">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${PHONE}</span>
          </a>

          <!-- Email (mailto) -->
          <a class="footer__contact-link" href="mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}" aria-label="Email UrbanCraft at ${EMAIL}">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>${EMAIL}</span>
          </a>

          <!-- Google Maps Link -->
          <a class="footer__contact-link" href="${MAPS_URL}" target="_blank" rel="noopener noreferrer" aria-label="Open UrbanCraft location on Google Maps">
            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>View on Google Maps</span>
          </a>

          <!-- WhatsApp Link -->
          <a class="footer__contact-link" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat with UrbanCraft on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style="width:18px;height:18px;fill:var(--color-gold);">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.97-.32-1.67-.64-2.95-1.31-4.87-4.27-5.02-4.47-.15-.2-1.22-1.63-1.22-3.11 0-1.48.78-2.21 1.06-2.51.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.29 1.68 2.09 1.15.98 2.13 1.33 2.43 1.48.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.07.12.07.71-.17 1.39z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <div class="footer__divider"></div>

      <div class="footer__bottom">
        <p class="footer__copy">© ${new Date().getFullYear()} UrbanCraft Furniture. All rights reserved. Crafted with ❤ in India.</p>
        <div class="footer__social">
          <!-- Instagram -->
          <a class="footer__social-link footer__social-link--instagram" href="https://instagram.com/${INSTAGRAM}" target="_blank" rel="noopener noreferrer" aria-label="Visit UrbanCraft on Instagram">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <!-- WhatsApp -->
          <a class="footer__social-link footer__social-link--whatsapp" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Chat with UrbanCraft on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.14.11-1.84-.12-.42-.14-.97-.32-1.67-.64-2.95-1.31-4.87-4.27-5.02-4.47-.15-.2-1.22-1.63-1.22-3.11 0-1.48.78-2.21 1.06-2.51.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.83 2.03.9 2.18.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.29 1.68 2.09 1.15.98 2.13 1.33 2.43 1.48.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.07.12.07.71-.17 1.39z"/></svg>
          </a>
          <!-- YouTube -->
          <a class="footer__social-link" href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}
