// UrbanCraft — Business (B2B) Page
import { showToast } from '../components/cart-drawer.js';

const clientTypes = [
  {
    title: 'Hotels & Resorts',
    text: 'Complete room packages, lobby furniture, and custom hospitality solutions designed for durability and guest comfort.',
    icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  },
  {
    title: 'Offices & Corporates',
    text: 'Ergonomic workstations, conference tables, executive furniture, and reception setups for productive workspaces.',
    icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  },
  {
    title: 'Builders & Developers',
    text: 'Bulk furniture solutions for residential projects, model flats, and township developments with competitive pricing.',
    icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  },
  {
    title: 'Architects & Designers',
    text: 'Partnership with interior professionals to bring custom designs to life with precision craftsmanship and reliable timelines.',
    icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  },
];

const benefits = [
  'Competitive bulk pricing',
  'Dedicated project manager',
  'Custom design support',
  'Reliable delivery timelines',
  'Quality warranty on all products',
  'Professional installation team',
  'After-sales maintenance',
  'Flexible payment terms',
];

export function renderBusiness() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <!-- Hero -->
    <section class="business-hero">
      <div class="business-hero__bg-pattern"></div>
      <div class="container" style="position:relative; z-index:1;">
        <span class="section-label">Business Solutions</span>
        <h1 class="section-title">Premium Furniture for<br/>Your Commercial Projects</h1>
        <p class="section-subtitle">From luxury hotels to modern offices, UrbanCraft delivers custom bulk furniture solutions with premium quality and competitive pricing.</p>
      </div>
    </section>

    <!-- Client Types -->
    <section class="b2b-clients section">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Who We Serve</span>
          <h2 class="section-title">Trusted by Businesses Across Industries</h2>
        </div>
        <div class="b2b-clients__grid anim-stagger">
          ${clientTypes.map(client => `
            <div class="b2b-client-card">
              <div class="b2b-client-card__icon">${client.icon}</div>
              <h3 class="b2b-client-card__title">${client.title}</h3>
              <p class="b2b-client-card__text">${client.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="b2b-benefits section">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Partner Benefits</span>
          <h2 class="section-title">Why Businesses Choose UrbanCraft</h2>
        </div>
        <div class="b2b-benefits__list anim-stagger">
          ${benefits.map(b => `
            <div class="b2b-benefit">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${b}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section class="b2b-form-section section">
      <div class="container text-center">
        <span class="section-label">Get Started</span>
        <h2 class="section-title">Submit Your Project Inquiry</h2>
        <p class="section-subtitle" style="margin: 0 auto;">Fill in your project details and our business team will contact you within 24 hours with a customized proposal.</p>

        <div class="b2b-form-wrap">
          <form id="b2b-inquiry-form">
            <div class="b2b-form__row">
              <div class="form-group">
                <label class="form-label" for="b2b-company">Company Name *</label>
                <input class="form-input" type="text" id="b2b-company" required placeholder="Your company name" />
              </div>
              <div class="form-group">
                <label class="form-label" for="b2b-contact">Contact Person *</label>
                <input class="form-input" type="text" id="b2b-contact" required placeholder="Full name" />
              </div>
            </div>
            <div class="b2b-form__row">
              <div class="form-group">
                <label class="form-label" for="b2b-email">Email *</label>
                <input class="form-input" type="email" id="b2b-email" required placeholder="business@email.com" />
              </div>
              <div class="form-group">
                <label class="form-label" for="b2b-phone">Phone *</label>
                <input class="form-input" type="tel" id="b2b-phone" required placeholder="+91 98765 43210" />
              </div>
            </div>
            <div class="b2b-form__row">
              <div class="form-group">
                <label class="form-label" for="b2b-project-type">Project Type *</label>
                <select class="form-select" id="b2b-project-type" required>
                  <option value="" disabled selected>Select project type</option>
                  <option value="hotel">Hotel / Resort</option>
                  <option value="office">Office / Corporate</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="builder">Builder / Developer</option>
                  <option value="school">School / College</option>
                  <option value="hospital">Hospital / Clinic</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="b2b-budget">Budget Range</label>
                <select class="form-select" id="b2b-budget">
                  <option value="" disabled selected>Select budget range</option>
                  <option value="5-10">₹5 Lakh – ₹10 Lakh</option>
                  <option value="10-25">₹10 Lakh – ₹25 Lakh</option>
                  <option value="25-50">₹25 Lakh – ₹50 Lakh</option>
                  <option value="50+">₹50 Lakh+</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="b2b-quantity">Estimated Quantity</label>
              <input class="form-input" type="text" id="b2b-quantity" placeholder="e.g., 50 desks + 50 chairs" />
            </div>
            <div class="form-group">
              <label class="form-label" for="b2b-requirements">Project Requirements</label>
              <textarea class="form-textarea" id="b2b-requirements" placeholder="Describe your project requirements, timelines, and any specific needs..." rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn--gold btn--lg" style="width:100%;">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  `;

  // Form submission → API
  document.getElementById('b2b-inquiry-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'business',
          name: form.querySelector('#b2b-contact').value,
          email: form.querySelector('#b2b-email').value,
          phone: form.querySelector('#b2b-phone').value,
          company: form.querySelector('#b2b-company').value,
          project_type: form.querySelector('#b2b-project-type').value,
          budget: form.querySelector('#b2b-budget').value,
          quantity: form.querySelector('#b2b-quantity').value,
          message: form.querySelector('#b2b-requirements').value,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      showToast('Thank you! Our business team will contact you within 24 hours.');
      form.reset();
    } catch (err) {
      showToast(err.message || 'Something went wrong. Please try again.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
