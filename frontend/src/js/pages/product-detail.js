// UrbanCraft — Product Detail Page
import { getProductById, products, formatPrice } from '../data/products.js';
import { addToCart } from '../store/cart.js';
import { isWishlisted, toggleWishlist } from '../store/wishlist.js';
import { showToast } from '../components/cart-drawer.js';

export function renderProductDetail(params) {
  const page = document.getElementById('page-content');
  const productId = params[0];
  const product = getProductById(productId);

  if (!product) {
    page.innerHTML = `
      <section class="product-detail">
        <div class="container text-center" style="padding-top: 200px;">
          <h2>Product Not Found</h2>
          <p style="margin: 16px 0 24px;">The product you're looking for doesn't exist.</p>
          <a class="btn btn--gold" href="#/products">Browse Products</a>
        </div>
      </section>
    `;
    return;
  }

  // Get related products (same category, excluding current)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  page.innerHTML = `
    <section class="product-detail">
      <div class="container">
        <a class="product-detail__back" href="#/products">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Products
        </a>

        <div class="product-detail__grid">
          <!-- Gallery -->
          <div class="product-detail__gallery anim-fade-up">
            <img class="product-detail__main-img" id="main-product-img" src="${product.images[0]}" alt="${product.name}" />
            ${product.images.length > 1 ? `
              <div class="product-detail__thumbnails">
                ${product.images.map((img, i) => `
                  <img class="product-detail__thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name} view ${i + 1}" data-img-idx="${i}" />
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Info -->
          <div class="product-detail__info anim-fade-up" style="transition-delay: 150ms;">
            <div class="product-detail__category">${product.categoryLabel}</div>
            <h1 class="product-detail__name">${product.name}</h1>
            <div class="product-detail__price">${formatPrice(product.price)}</div>
            <p class="product-detail__desc">${product.description}</p>

            <div class="product-detail__specs">
              <div class="product-detail__spec">
                <span class="product-detail__spec-label">Material</span>
                <span class="product-detail__spec-value">${product.material}</span>
              </div>
              <div class="product-detail__spec">
                <span class="product-detail__spec-label">Dimensions</span>
                <span class="product-detail__spec-value">${product.dimensions}</span>
              </div>
              <div class="product-detail__spec">
                <span class="product-detail__spec-label">Customizable</span>
                <span class="product-detail__spec-value">${product.customizable ? 'Yes — request custom modifications' : 'Standard design'}</span>
              </div>
              ${product.badge ? `
                <div class="product-detail__spec">
                  <span class="product-detail__spec-label">Tag</span>
                  <span class="product-detail__spec-value"><span class="badge badge--gold">${product.badge}</span></span>
                </div>
              ` : ''}
            </div>

            <div class="product-detail__actions">
              ${product.price > 0 ? `
                <button class="btn btn--gold" id="add-to-cart-detail">Add to Cart</button>
              ` : `
                <a class="btn btn--gold" href="#/contact">Request Quote</a>
              `}
              ${product.customizable ? `
                <a class="btn btn--outline" href="#/contact">Customize This</a>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    </section>

    ${related.length > 0 ? `
      <section class="related-products">
        <div class="container">
          <h2 class="section-title">You May Also Like</h2>
          <div class="related-products__grid">
            ${related.map(p => `
              <div class="product-card" data-product-id="${p.id}" style="cursor:pointer;">
                <div class="product-card__img-wrap">
                  <img class="product-card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
                </div>
                <div class="product-card__body">
                  <div class="product-card__category">${p.categoryLabel}</div>
                  <h3 class="product-card__name">${p.name}</h3>
                  <div class="product-card__footer">
                    <div class="product-card__price">${formatPrice(p.price)}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;

  // Bind events
  // Thumbnail gallery
  document.querySelectorAll('.product-detail__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.imgIdx);
      document.getElementById('main-product-img').src = product.images[idx];
      document.querySelectorAll('.product-detail__thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Add to cart
  document.getElementById('add-to-cart-detail')?.addEventListener('click', () => {
    addToCart(product);
    showToast(`${product.name} added to cart`);
  });

  // Related product clicks
  document.querySelectorAll('.related-products .product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.productId;
      window.location.hash = `/product/${id}`;
    });
  });
}
