// UrbanCraft — Services Page

const servicesData = [
  {
    num: '01',
    title: 'Interior Consultation',
    text: 'Our design experts visit your space to understand your requirements, lifestyle, and aesthetics. We analyze room dimensions, natural light, existing décor, and your daily routines to create furniture solutions that truly fit your life.',
    features: ['Free home visit', 'Space analysis & measurement', 'Lifestyle assessment', 'Budget-friendly recommendations', 'Mood board & concept presentation'],
    image: '/images/interior-consult.png?v=2',
  },
  {
    num: '02',
    title: 'Custom Design',
    text: 'Once we understand your needs, our design team creates detailed plans and 3D visualizations of your custom furniture. Every design is tailored to your exact specifications — from wood grain selection to handle style.',
    features: ['Personalized furniture blueprints', '3D design visualization', 'Material & finish selection', 'Ergonomic considerations', 'Unlimited revisions until perfect'],
    image: '/images/cat-custom.png?v=2',
  },
  {
    num: '03',
    title: 'Manufacturing',
    text: 'Your furniture comes to life in our state-of-the-art workshop. Skilled craftsmen combine traditional woodworking techniques with modern precision tools to deliver premium quality at every stage.',
    features: ['Handcrafted by expert artisans', 'Premium sustainably-sourced materials', 'Quality control at every stage', 'Regular progress updates', 'Built to last generations'],
    image: '/images/carpenter.png?v=2',
  },
  {
    num: '04',
    title: 'Delivery & Installation',
    text: 'Our professional installation team ensures every piece is perfectly placed, fitted, and aligned in your space. White-glove delivery with zero hassle for you.',
    features: ['Scheduled delivery slots', 'Professional assembly team', 'Precise fitting & alignment', 'Complete cleanup after installation', 'Walk-through demonstration'],
    image: '/images/delivery.png?v=2',
  },
  {
    num: '05',
    title: 'Maintenance & Support',
    text: 'Our relationship doesn\'t end at delivery. We provide long-term maintenance, repair, and support services to keep your furniture looking and functioning beautifully for years.',
    features: ['Annual maintenance visits', 'Repair & restoration services', 'Upholstery refresh options', 'Product warranty support', 'Priority customer service'],
    image: '/images/maintenance.png?v=2',
  },
];

export function renderServices() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <!-- Hero -->
    <section class="services-hero">
      <div class="container text-center">
        <span class="section-label">Our Services</span>
        <h1 class="section-title">Complete Furniture Solutions<br/>From Idea to Installation</h1>
        <p class="section-subtitle" style="margin: 0 auto;">UrbanCraft is more than a furniture brand. We guide you through every step — from understanding your lifestyle to delivering furniture that transforms your space.</p>
      </div>
    </section>

    <!-- Service Rows -->
    <section class="section">
      <div class="container">
        <div class="services__grid">
          ${servicesData.map((svc, i) => `
            <div class="service-row ${i % 2 === 1 ? '' : ''}">
              <div class="service-row__img-wrap anim-${i % 2 === 0 ? 'slide-left' : 'slide-right'}">
                <img class="service-row__img" src="${svc.image}" alt="${svc.title}" loading="lazy" />
              </div>
              <div class="service-row__content anim-${i % 2 === 0 ? 'slide-right' : 'slide-left'}">
                <span class="service-row__number">${svc.num}</span>
                <h3 class="service-row__title">${svc.title}</h3>
                <p class="service-row__text">${svc.text}</p>
                <div class="service-row__features">
                  ${svc.features.map(f => `
                    <div class="service-row__feature">
                      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>${f}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Customer Journey Flow -->
    <section class="journey">
      <div class="container">
        <span class="section-label">Your Journey</span>
        <h2 class="section-title">The UrbanCraft Experience</h2>
        <div class="journey__flow anim-stagger">
          ${[
            { label: 'Discovery', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
            { label: 'Consultation', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
            { label: 'Design', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>' },
            { label: 'Manufacturing', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
            { label: 'Installation', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
            { label: 'Support', icon: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
          ].map((step, i, arr) => `
            <div class="journey__step">
              <div class="journey__step-circle">${step.icon}</div>
              <span class="journey__step-label">${step.label}</span>
            </div>
            ${i < arr.length - 1 ? '<span class="journey__arrow">→</span>' : ''}
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section text-center">
      <div class="container">
        <span class="section-label">Get Started</span>
        <h2 class="section-title">Ready to Transform Your Space?</h2>
        <p class="section-subtitle" style="margin: 0 auto var(--space-2xl);">Let our experts guide you from concept to creation. Book a free consultation today.</p>
        <div style="display: flex; gap: var(--space-lg); justify-content: center; flex-wrap: wrap;">
          <a class="btn btn--gold btn--lg" href="#/contact">Book Free Consultation</a>
          <a class="btn btn--outline btn--lg" href="#/products">Explore Products</a>
        </div>
      </div>
    </section>
  `;
}
