// UrbanCraft — Products Page
import { products, categories, getProductsByCategory, searchProducts, formatPrice } from '../data/products.js';
import { addToCart } from '../store/cart.js';
import { isWishlisted, toggleWishlist, onWishlistChange } from '../store/wishlist.js';
import { showToast } from '../components/cart-drawer.js';
import { navigate } from '../router.js';

let activeCategory = 'all';
let searchQuery = '';
let sortBy = 'default';

export function renderProducts() {
  const page = document.getElementById('page-content');
  activeCategory = 'all';
  searchQuery = '';
  sortBy = 'default';

  page.innerHTML = `
    <section class="products-hero">
      <div class="container">
        <span class="section-label">Our Collection</span>
        <h1 class="section-title">Furniture Designed Around Your Lifestyle</h1>
        <p class="section-subtitle" style="margin: 0 auto;">Whether your home is compact or spacious, we create furniture that fits perfectly into your lifestyle.</p>
      </div>
    </section>

    <section class="section" style="padding-top: 0;">
      <div class="container">
        <!-- Toolbar -->
        <div class="products-toolbar">
          <div class="products-search">
            <svg class="products-search__icon" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input class="products-search__input" type="text" placeholder="Search furniture..." id="product-search" />
          </div>
          <div class="products-sort">
            <span class="products-sort__label">Sort by:</span>
            <select class="products-sort__select" id="product-sort">
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="products-filters" id="product-filters">
          ${categories.map(cat => `
            <button class="filter-chip ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">${cat.name}</button>
          `).join('')}
        </div>

        <!-- Product Grid -->
        <div class="products-grid" id="products-grid"></div>
      </div>
    </section>
  `;

  renderProductGrid();
  bindEvents();
}

function getFilteredProducts() {
  let filtered = activeCategory === 'all' ? [...products] : getProductsByCategory(activeCategory);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  }

  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}

function renderProductGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="products-empty">
        <div class="products-empty__icon">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="8" x2="14" y2="14"/><line x1="14" y1="8" x2="8" y2="14"/>
          </svg>
        </div>
        <p class="products-empty__text">No furniture found. Try a different search or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-product-id="${p.id}">
      <div class="product-card__img-wrap">
        <img class="product-card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <button class="product-card__wishlist ${isWishlisted(p.id) ? 'active' : ''}" data-wishlist-id="${p.id}" title="Add to wishlist">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        ${p.badge ? `<span class="badge badge--gold product-card__badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${p.categoryLabel}</div>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__material">${p.material}</div>
        <div class="product-card__footer">
          <div class="product-card__price">${formatPrice(p.price)} ${p.price > 0 ? '' : ''}</div>
          ${p.price > 0 ? `
            <button class="product-card__add-btn" data-add-cart-id="${p.id}" title="Add to cart">
              <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          ` : `
            <a class="btn btn--sm btn--outline-gold" href="#/contact">Get Quote</a>
          `}
        </div>
      </div>
    </div>
  `).join('');

  // Bind card click
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.product-card__wishlist') || e.target.closest('.product-card__add-btn') || e.target.closest('.btn')) return;
      const id = card.dataset.productId;
      window.location.hash = `/product/${id}`;
    });
  });

  // Bind add to cart
  grid.querySelectorAll('[data-add-cart-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.addCartId;
      const product = products.find(p => p.id === id);
      if (product) {
        addToCart(product);
        showToast(`${product.name} added to cart`);
      }
    });
  });

  // Bind wishlist
  grid.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.wishlistId;
      const added = toggleWishlist(id);
      btn.classList.toggle('active', added);
      showToast(added ? 'Added to wishlist' : 'Removed from wishlist');
    });
  });
}

function bindEvents() {
  // Search
  const searchInput = document.getElementById('product-search');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProductGrid();
  });

  // Sort
  const sortSelect = document.getElementById('product-sort');
  sortSelect?.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProductGrid();
  });

  // Filters
  const filters = document.getElementById('product-filters');
  filters?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    activeCategory = chip.dataset.category;
    filters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderProductGrid();
  });
}
