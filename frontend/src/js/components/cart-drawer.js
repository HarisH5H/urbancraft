// UrbanCraft — Cart Drawer Component
import { getCartItems, getCartTotal, removeFromCart, updateQty, onCartChange } from '../store/cart.js';
import { formatPrice } from '../data/products.js';

let isOpen = false;

export function openCart() {
  isOpen = true;
  render();
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  requestAnimationFrame(() => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
  });
}

export function closeCart() {
  isOpen = false;
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  drawer.classList.remove('open');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function render() {
  const drawer = document.getElementById('cart-drawer');
  const items = getCartItems();
  const total = getCartTotal();

  drawer.innerHTML = `
    <div class="cart-drawer__header">
      <h3 class="cart-drawer__title">Your Cart</h3>
      <button class="cart-drawer__close" id="cart-close-btn">✕</button>
    </div>

    <div class="cart-drawer__items">
      ${items.length === 0 ? `
        <div class="cart-drawer__empty">
          <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <p>Your cart is empty</p>
          <p style="font-size: 0.8rem; margin-top: 8px;">Explore our collection to find something you'll love</p>
        </div>
      ` : items.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img class="cart-item__img" src="${item.image}" alt="${item.name}" />
          <div class="cart-item__info">
            <div class="cart-item__name">${item.name}</div>
            <div class="cart-item__price">${formatPrice(item.price)}</div>
            <div class="cart-item__controls">
              <button class="cart-item__qty-btn" data-action="dec" data-id="${item.id}">−</button>
              <span class="cart-item__qty">${item.qty}</span>
              <button class="cart-item__qty-btn" data-action="inc" data-id="${item.id}">+</button>
              <button class="cart-item__remove" data-action="remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    ${items.length > 0 ? `
      <div class="cart-drawer__footer">
        <div class="cart-drawer__total">
          <span class="cart-drawer__total-label">Total</span>
          <span class="cart-drawer__total-amount">${formatPrice(total)}</span>
        </div>
        <button class="btn btn--gold cart-drawer__checkout" id="checkout-btn">Proceed to Checkout</button>
      </div>
    ` : ''}
  `;

  // Bind events
  drawer.querySelector('#cart-close-btn')?.addEventListener('click', closeCart);

  drawer.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'remove') removeFromCart(id);
      if (action === 'inc') {
        const item = getCartItems().find(i => i.id === id);
        if (item) updateQty(id, item.qty + 1);
      }
      if (action === 'dec') {
        const item = getCartItems().find(i => i.id === id);
        if (item && item.qty > 1) updateQty(id, item.qty - 1);
        else if (item) removeFromCart(id);
      }
    });
  });

  drawer.querySelector('#checkout-btn')?.addEventListener('click', () => {
    showToast('Thank you! Our team will contact you to confirm your order.');
    closeCart();
  });
}

export function initCartDrawer() {
  // Close on overlay click
  document.getElementById('overlay')?.addEventListener('click', closeCart);

  // Cart button in navbar
  document.addEventListener('click', (e) => {
    if (e.target.closest('#cart-toggle-btn')) {
      openCart();
    }
  });

  // Re-render on cart change
  onCartChange(() => {
    if (isOpen) render();
  });
}

export function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
