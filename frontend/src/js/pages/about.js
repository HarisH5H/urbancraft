// UrbanCraft — About Page

export function renderAbout() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <!-- Hero -->
    <section class="about-hero">
      <div class="container text-center">
        <span class="section-label">About UrbanCraft</span>
        <h1 class="about-hero__title">From My Father's Workshop<br/>to Your Home</h1>
        <p class="about-hero__subtitle">Where traditional craftsmanship meets modern design — creating furniture that becomes part of your everyday life.</p>
      </div>
    </section>

    <!-- Founder Story -->
    <section class="founder section">
      <div class="container">
        <div class="founder__grid">
          <div class="founder__img-wrap anim-slide-left">
            <img src="/images/carpenter.png?v=2" alt="Carpenter working in workshop" />
            <div class="founder__img-badge">Since 2015</div>
          </div>
          <div class="founder__content anim-slide-right">
            <span class="section-label">The Founder's Story</span>
            <h2 class="section-title">Hello, I'm Harish</h2>
            <p class="founder__text">
              My journey began in my father's workshop. For years, I watched him transform raw wood into furniture that became part of people's everyday lives. He never believed furniture was just a business. He believed every piece should make someone's life more comfortable.
            </p>
            <p class="founder__text">
              That philosophy shaped who I am. Growing up, I watched my father — a skilled carpenter — transform ordinary wood into extraordinary furniture. He often told me:
            </p>
            <blockquote class="founder__quote">
              "People don't buy furniture. They buy comfort, trust, and something that becomes part of their lives."
            </blockquote>
            <p class="founder__text">
              Those words became the foundation of UrbanCraft. Today we combine traditional craftsmanship with modern design to create furniture that is elegant, functional, durable, and made specifically for the people who use it.
            </p>
            <p class="founder__text">
              Our goal isn't simply to manufacture furniture. Our goal is to create homes that feel warm, functional, beautiful, and comfortable. For us, success isn't measured by sales — it's measured by the happiness of every family that welcomes our furniture into their home.
            </p>
            <p class="founder__signature">— Harish, Founder</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vm-section section">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Our Purpose</span>
          <h2 class="section-title">What Drives Us Every Day</h2>
        </div>
        <div class="vm-grid anim-stagger">
          <div class="vm-card">
            <div class="vm-card__icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <h3 class="vm-card__title">Our Vision</h3>
            <p class="vm-card__text">
              Transform every house into a comfortable, functional, and beautiful home through thoughtfully designed furniture. We envision a world where every person comes home to a space that truly reflects who they are — a sanctuary of comfort and beauty.
            </p>
          </div>
          <div class="vm-card">
            <div class="vm-card__icon">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 class="vm-card__title">Our Mission</h3>
            <p class="vm-card__text">
              UrbanCraft does not simply manufacture furniture. We create personalized living solutions by understanding customer lifestyle, space requirements, comfort needs, and interior style. Every furniture piece should improve the way people live.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values / Stats -->
    <section class="values section">
      <div class="container">
        <div class="text-center">
          <span class="section-label">Our Impact</span>
          <h2 class="section-title">Numbers That Reflect Our Passion</h2>
        </div>
        <div class="values__grid anim-stagger">
          <div class="value-item">
            <div class="value-item__number">2500+</div>
            <div class="value-item__label">Happy Families</div>
            <div class="value-item__text">Homes furnished with love</div>
          </div>
          <div class="value-item">
            <div class="value-item__number">10+</div>
            <div class="value-item__label">Years of Craft</div>
            <div class="value-item__text">Decade of excellence</div>
          </div>
          <div class="value-item">
            <div class="value-item__number">50+</div>
            <div class="value-item__label">Expert Craftsmen</div>
            <div class="value-item__text">Skilled artisans at work</div>
          </div>
          <div class="value-item">
            <div class="value-item__number">100+</div>
            <div class="value-item__label">Business Partners</div>
            <div class="value-item__text">Hotels, offices & builders</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
