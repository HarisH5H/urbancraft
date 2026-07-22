// UrbanCraft — Contact Page
import { showToast } from '../components/cart-drawer.js';

// ── Contact Data ──
const PHONE = '+91 93608 68232';
const PHONE_RAW = '+919360868232';
const EMAIL = 'hello@urbancraft.in';
const EMAIL_SUBJECT = encodeURIComponent('Furniture Consultation Request');
const EMAIL_BODY = encodeURIComponent('Hello UrbanCraft,\n\nI would like to know more about your furniture.\n\nThank you.');
const INSTAGRAM = 'haryz_786_';
const MAPS_URL = 'https://maps.google.com/?q=9.894984990205124,78.1091660753482';
const WHATSAPP_URL = 'https://wa.me/919360868232?text=' + encodeURIComponent('Hello UrbanCraft Furniture,\n\nI would like to know more about your furniture collection.');

// ── SVG Icons ──
const contactIcons = {
  location: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
  externalLink: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
};

export function renderContact() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <!-- Hero -->
    <section class="contact-hero">
      <div class="container">
        <span class="section-label">Get In Touch</span>
        <h1 class="contact-hero__title">Let's Build Your<br/>Dream Space Together</h1>
        <p class="contact-hero__text">
          Whether you're furnishing a new home, renovating an existing space, or looking for custom-made furniture, we're here to help. From consultation and design to manufacturing and installation, our team will guide you through every step.
        </p>
        <div class="contact-hero__btns">
          <a class="btn btn--gold btn--lg" href="#contact-form-section">Book Consultation</a>
          <a class="btn btn--outline btn--lg" href="#contact-form-section">Request Custom Design</a>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content" id="contact-form-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info Cards -->
          <div class="contact-info anim-slide-left">
            <!-- Address -->
            <div class="contact-info-card">
              <div class="contact-info-card__icon">
                ${contactIcons.location}
              </div>
              <div>
                <h4 class="contact-info-card__title">Visit Our Workshop</h4>
                <p class="contact-info-card__text">UrbanCraft Furniture Workshop<br/>Furniture Market Road, Industrial Area<br/>City, State — 400001</p>
                <a href="${MAPS_URL}" target="_blank" rel="noopener noreferrer" aria-label="Open workshop location in Google Maps" style="font-size: 0.8rem; color: var(--color-gold); margin-top: 8px; display: inline-flex; align-items: center; gap: 4px;">
                  View on Map
                  <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-info-card">
              <div class="contact-info-card__icon">
                ${contactIcons.phone}
              </div>
              <div>
                <h4 class="contact-info-card__title">Call Us</h4>
                <p class="contact-info-card__text">
                  <a href="tel:${PHONE_RAW}" aria-label="Call UrbanCraft at ${PHONE}">${PHONE}</a><br/>
                  Mon – Sat, 10 AM – 7 PM
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-info-card">
              <div class="contact-info-card__icon">
                ${contactIcons.email}
              </div>
              <div>
                <h4 class="contact-info-card__title">Email Us</h4>
                <p class="contact-info-card__text">
                  <a href="mailto:${EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}" aria-label="Email UrbanCraft at ${EMAIL}">${EMAIL}</a>
                </p>
              </div>
            </div>

            <!-- Instagram -->
            <div class="contact-info-card">
              <div class="contact-info-card__icon">
                ${contactIcons.instagram}
              </div>
              <div>
                <h4 class="contact-info-card__title">Follow Us</h4>
                <p class="contact-info-card__text">
                  <a href="https://instagram.com/${INSTAGRAM}" target="_blank" rel="noopener noreferrer" aria-label="Visit UrbanCraft on Instagram">@${INSTAGRAM}</a>
                </p>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="contact-info-card">
              <div class="contact-info-card__icon">
                ${contactIcons.clock}
              </div>
              <div>
                <h4 class="contact-info-card__title">Working Hours</h4>
                <p class="contact-info-card__text">Monday – Saturday: 10:00 AM – 7:00 PM<br/>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrap anim-slide-right">
            <h3 class="contact-form__title">Send Us a Message</h3>
            <form id="contact-form">
              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Full Name *</label>
                  <input class="form-input" type="text" id="contact-name" required placeholder="Your full name" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email">Email *</label>
                  <input class="form-input" type="email" id="contact-email" required placeholder="your@email.com" />
                </div>
              </div>
              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label" for="contact-phone">Phone</label>
                  <input class="form-input" type="tel" id="contact-phone" placeholder="+91 98765 43210" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-service">Service Type</label>
                  <select class="form-select" id="contact-service">
                    <option value="" disabled selected>Select a service</option>
                    <option value="consultation">Interior Consultation</option>
                    <option value="custom-design">Custom Furniture Design</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="installation">Installation Service</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="business">Business / Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">Message *</label>
                <textarea class="form-textarea" id="contact-message" required placeholder="Tell us about your project, requirements, or questions..." rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn--gold btn--lg" style="width: 100%;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map -->
    <section class="contact-map">
      <div class="container">
        <div class="contact-map__frame anim-fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3930.4672634952744!2d78.1091660753482!3d9.894984990205124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTMnNDIuMCJOIDc4wrAwNic0Mi4zIkU!5e0!3m2!1sen!2sin!4v1784607605552!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="UrbanCraft Furniture Workshop Location"
            aria-label="Google Maps showing UrbanCraft Furniture Workshop location">
          </iframe>
          <div class="contact-map__info">
            <div class="contact-map__coords">
              <div class="contact-map__coord">
                <span class="contact-map__coord-label">Latitude</span>
                <span class="contact-map__coord-value">9.894984990205124</span>
              </div>
              <div class="contact-map__coord">
                <span class="contact-map__coord-label">Longitude</span>
                <span class="contact-map__coord-value">78.1091660753482</span>
              </div>
            </div>
            <div class="contact-map__cta">
              <a class="btn btn--gold" href="${MAPS_URL}" target="_blank" rel="noopener noreferrer" aria-label="Open location in Google Maps">
                ${contactIcons.mapPin}
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Form submission → API
  document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'contact',
          name: form.querySelector('#contact-name').value,
          email: form.querySelector('#contact-email').value,
          phone: form.querySelector('#contact-phone').value,
          service_type: form.querySelector('#contact-service').value,
          message: form.querySelector('#contact-message').value,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      showToast('Thank you! We\'ll get back to you within 24 hours.');
      form.reset();
    } catch (err) {
      showToast(err.message || 'Something went wrong. Please try again.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
