// UrbanCraft — Wishlist Store (localStorage)

const WL_KEY = 'urbancraft_wishlist';
const listeners = [];

function getWL() {
  try {
    return JSON.parse(localStorage.getItem(WL_KEY)) || [];
  } catch {
    return [];
  }
}

function saveWL(wl) {
  localStorage.setItem(WL_KEY, JSON.stringify(wl));
  listeners.forEach(fn => fn(wl));
}

export function onWishlistChange(fn) {
  listeners.push(fn);
}

export function getWishlist() {
  return getWL();
}

export function isWishlisted(productId) {
  return getWL().includes(productId);
}

export function toggleWishlist(productId) {
  const wl = getWL();
  const idx = wl.indexOf(productId);
  if (idx > -1) {
    wl.splice(idx, 1);
  } else {
    wl.push(productId);
  }
  saveWL(wl);
  return idx === -1; // returns true if added
}
