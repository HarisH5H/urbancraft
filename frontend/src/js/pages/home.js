// UrbanCraft — Home Page
import { navigate } from '../router.js';

// SVG Icons used across sections
const icons = {
  arrow: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3H3v18h18V3zM3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
  star: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  grid: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  tag: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  tool: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  check: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  search: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  pen: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  settings: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  package: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
};

const categoryData = [
  {
    name: 'Living Room',
    items: 'Sofas • TV Units • Coffee Tables • Bookshelves',
    image: '/images/cat-living.png?v=2',
    filter: 'living-room',
  },
  {
    name: 'Bedroom',
    items: 'Beds • Wardrobes • Bedside Tables • Dressers',
    image: '/images/cat-bedroom.png?v=2',
    filter: 'bedroom',
  },
  {
    name: 'Dining',
    items: 'Dining Tables • Chairs • Bar Cabinets',
    image: '/images/cat-dining.png?v=2',
    filter: 'dining',
  },
  {
    name: 'Office',
    items: 'Executive Desks • Chairs • Storage Units',
    image: '/images/cat-office.png?v=2',
    filter: 'office',
  },
  {
    name: 'Hospitality',
    items: 'Hotel Suites • Restaurant Seating • Lobby Furniture',
    image: '/images/cat-hospitality.png?v=2',
    filter: 'hospitality',
  },
  {
    name: 'Custom Furniture',
    items: 'Bespoke Designs • Personalized Solutions',
    image: '/images/cat-custom.png?v=2',
    filter: 'custom',
  },
];

const whyChooseData = [
  { icon: icons.ruler, title: 'Custom Furniture', text: 'Furniture designed and built according to your exact space dimensions and style preferences.' },
  { icon: icons.star, title: 'Premium Craftsmanship', text: 'Every piece is handcrafted with meticulous attention to detail by skilled artisans.' },
  { icon: icons.grid, title: 'Smart Space Solutions', text: 'Maximum functionality through intelligent design that makes every inch count.' },
  { icon: icons.tag, title: 'Factory Direct Pricing', text: 'Premium quality without unnecessary middlemen — from our workshop to your home.' },
  { icon: icons.tool, title: 'Professional Installation', text: 'Expert installation ensuring perfect fitting and flawless finish in your space.' },
  { icon: icons.heart, title: 'After Sales Support', text: 'Long-term relationship with dedicated maintenance and repair support.' },
];

const processSteps = [
  { num: '01', title: 'Consultation', icon: icons.search },
  { num: '02', title: 'Design', icon: icons.pen },
  { num: '03', title: 'Material Selection', icon: icons.layers },
  { num: '04', title: 'Manufacturing', icon: icons.settings },
  { num: '05', title: 'Quality Check', icon: icons.check },
  { num: '06', title: 'Delivery', icon: icons.truck },
  { num: '07', title: 'Installation', icon: icons.package },
];

export function renderHome() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <!-- ══════ HERO ══════ -->
    <section class="hero" id="hero">
      <div class="hero__bg">
        <img src="/images/home-hero.png?v=2" alt="Luxury living room with premium handcrafted furniture" loading="eager" />
      </div>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <div class="hero__inner">
          <span class="hero__label">UrbanCraft Furniture</span>
          <h1 class="hero__title">Crafted for <em>Living.</em><br/>Designed for Comfort.</h1>
          <p class="hero__desc">
            Furniture is more than decoration. Every empty space has the potential to become something meaningful — a reading chair beside the window, a dining table where families gather, a comfortable sofa where conversations begin. At UrbanCraft, we create spaces where people feel truly at home.
          </p>
          <div class="hero__btns">
            <a class="btn btn--gold btn--lg" href="#/products">Explore Collection</a>
            <a class="btn btn--outline-white btn--lg" href="#/contact">Customize Your Furniture</a>
          </div>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span>Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>

    <!-- ══════ BRAND STORY ══════ -->
    <section class="story section" id="brand-story">
      <div class="container">
        <div class="story__grid">
          <div class="story__img-wrap anim-slide-left">
            <img src="/images/carpenter.png?v=2" alt="Master carpenter crafting furniture in workshop" />
            <div class="story__img-accent"></div>
          </div>
          <div class="story__content anim-slide-right">
            <span class="section-label">Our Story</span>
            <h2 class="section-title">Every Home Begins with a Story</h2>
            <p class="story__text">
              Every home begins as an empty space. But an empty house is not a home until it is filled with comfort, warmth, and memories. At UrbanCraft Furniture, we believe furniture is never just wood, steel, or fabric.
            </p>
            <p class="story__text">
              It becomes part of everyday life. It is where children grow. Families gather. Friends laugh. Dreams begin. Memories are created.
            </p>
            <blockquote class="story__quote">
              "People don't buy furniture. They buy comfort, trust, and something that becomes part of their lives."
            </blockquote>
            <p class="story__text">
              Today we combine traditional craftsmanship with modern design to create furniture that is elegant, functional, durable, and made specifically for the people who use it.
            </p>
            <a class="btn btn--outline-gold" href="#/about">Read Our Full Story</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════ PRODUCT CATEGORIES ══════ -->
    <section class="categories section" id="product-categories">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Our Collection</span>
          <h2 class="section-title">Furniture Designed Around Your Lifestyle</h2>
          <p class="section-subtitle">Every family lives differently. That's why every furniture solution should be unique. We design and manufacture furniture that complements modern living while preserving timeless craftsmanship.</p>
        </div>
        <div class="categories__grid anim-stagger">
          ${categoryData.map(cat => `
            <a class="category-card" href="#/products" data-filter="${cat.filter}">
              <img class="category-card__img" src="${cat.image}" alt="${cat.name} furniture" loading="lazy" />
              <div class="category-card__overlay">
                <h3 class="category-card__name">${cat.name}</h3>
                <p class="category-card__items">${cat.items}</p>
                <div class="category-card__arrow">${icons.arrow}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ══════ CONSULTATION CTA ══════ -->
    <section class="consult-cta" id="consultation-cta">
      <div class="consult-cta__bg">
        <img src="/images/interior-consult.png?v=2" alt="Beautiful modern interior" />
      </div>
      <div class="consult-cta__overlay"></div>
      <div class="consult-cta__content anim-fade-up">
        <span class="section-label">Free Consultation</span>
        <h2 class="section-title">Your Space. Your Lifestyle.<br/>Your Furniture.</h2>
        <p>Before creating furniture, we first understand your space, lifestyle, budget, and interior theme. Our design experts will guide you from concept to completion.</p>
        <div class="consult-cta__features">
          <div class="consult-cta__feature">${icons.check}<span>Space Analysis</span></div>
          <div class="consult-cta__feature">${icons.check}<span>Lifestyle Matching</span></div>
          <div class="consult-cta__feature">${icons.check}<span>Budget Planning</span></div>
          <div class="consult-cta__feature">${icons.check}<span>3D Visualization</span></div>
        </div>
        <a class="btn btn--gold btn--lg" href="#/contact">Book Free Consultation</a>
      </div>
    </section>

    <!-- ══════ WHY CHOOSE ══════ -->
    <section class="why-choose section" id="why-choose">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Why UrbanCraft</span>
          <h2 class="section-title">More Than Furniture. Complete Living Solutions.</h2>
          <p class="section-subtitle">We believe furniture should solve problems — not create them. Every design starts by understanding your space, your lifestyle, and your daily needs.</p>
        </div>
        <div class="why-choose__grid anim-stagger">
          ${whyChooseData.map(item => `
            <div class="why-card">
              <div class="why-card__icon">${item.icon}</div>
              <h3 class="why-card__title">${item.title}</h3>
              <p class="why-card__text">${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ══════ PROCESS TIMELINE ══════ -->
    <section class="process section" id="manufacturing-process">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Our Process</span>
          <h2 class="section-title">From Concept to Creation</h2>
          <p class="section-subtitle">Every UrbanCraft piece follows a meticulous seven-step journey from your initial consultation to professional installation.</p>
        </div>
        <div class="process__timeline anim-stagger">
          ${processSteps.map(step => `
            <div class="process__step">
              <div class="process__step-number">${step.num}</div>
              <div class="process__step-icon">${step.icon}</div>
              <div class="process__step-title">${step.title}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
