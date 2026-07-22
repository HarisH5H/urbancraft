// UrbanCraft — Admin Dashboard Page
import { showToast } from '../components/cart-drawer.js';

let currentFilter = 'all';
let enquiries = [];

export async function renderAdmin() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <section class="admin-page">
      <div class="container">
        <div class="admin-header">
          <div class="admin-header__top">
            <h1 class="admin-header__title">Enquiry Dashboard</h1>
            <div class="admin-header__stats" id="admin-stats"></div>
          </div>

          <div class="admin-filters" id="admin-filters">
            <button class="admin-filter-btn active" data-filter="all">All</button>
            <button class="admin-filter-btn" data-filter="contact">Contact</button>
            <button class="admin-filter-btn" data-filter="business">Business</button>
          </div>
        </div>

        <div class="admin-table-wrap">
          <div id="admin-table-container">
            <div class="admin-empty">
              <p>Loading enquiries...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Bind filter tabs
  document.getElementById('admin-filters')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.admin-filter-btn');
    if (!btn) return;

    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.admin-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTable();
  });

  // Fetch data
  await fetchEnquiries();
}

async function fetchEnquiries() {
  try {
    const API_URL = import.meta.env.VITE_API_URL || '';
    const res = await fetch(`${API_URL}/api/enquiries`);
    if (!res.ok) throw new Error('Failed to fetch');
    enquiries = await res.json();
    renderStats();
    renderTable();
  } catch (err) {
    console.error('Failed to load enquiries:', err);
    document.getElementById('admin-table-container').innerHTML = `
      <div class="admin-empty">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <p>Could not load enquiries.</p>
        <p style="font-size: 0.8rem; margin-top: 8px;">Make sure the backend server is running (npm run server)</p>
      </div>
    `;
  }
}

function renderStats() {
  const stats = document.getElementById('admin-stats');
  if (!stats) return;

  const total = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'new').length;
  const contactCount = enquiries.filter(e => e.form_type === 'contact').length;
  const businessCount = enquiries.filter(e => e.form_type === 'business').length;

  stats.innerHTML = `
    <div class="admin-stat">
      <span class="admin-stat__count">${total}</span>
      <span class="admin-stat__label">Total</span>
    </div>
    <div class="admin-stat">
      <span class="admin-stat__count">${newCount}</span>
      <span class="admin-stat__label">New</span>
    </div>
    <div class="admin-stat">
      <span class="admin-stat__count">${contactCount}</span>
      <span class="admin-stat__label">Contact</span>
    </div>
    <div class="admin-stat">
      <span class="admin-stat__count">${businessCount}</span>
      <span class="admin-stat__label">Business</span>
    </div>
  `;
}

function renderTable() {
  const container = document.getElementById('admin-table-container');
  if (!container) return;

  const filtered = currentFilter === 'all'
    ? enquiries
    : enquiries.filter(e => e.form_type === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="admin-empty">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <p>No enquiries found.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="admin-table-scroll">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service / Project</th>
            <th>Message</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(e => {
            const date = new Date(e.created_at);
            const dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            const serviceOrProject = e.form_type === 'business'
              ? (e.project_type || '—')
              : (e.service_type || '—');
            const displayMsg = e.message
              ? (e.message.length > 60 ? e.message.substring(0, 60) + '…' : e.message)
              : '—';

            return `
              <tr data-id="${e.id}">
                <td class="admin-cell-date">${dateStr}<br/>${timeStr}</td>
                <td><span class="admin-badge admin-badge--${e.form_type}">${e.form_type}</span></td>
                <td class="admin-cell-name">${e.name}${e.company ? `<br/><span style="font-size:0.75rem;color:var(--color-text-lighter);">${e.company}</span>` : ''}</td>
                <td class="admin-cell-email"><a href="mailto:${e.email}">${e.email}</a></td>
                <td class="admin-cell-phone">${e.phone ? `<a href="tel:${e.phone}">${e.phone}</a>` : '—'}</td>
                <td>${serviceOrProject}</td>
                <td class="admin-cell-message" title="${e.message || ''}">${displayMsg}</td>
                <td>
                  <select class="admin-status-select" data-id="${e.id}" data-action="status">
                    <option value="new" ${e.status === 'new' ? 'selected' : ''}>New</option>
                    <option value="read" ${e.status === 'read' ? 'selected' : ''}>Read</option>
                    <option value="replied" ${e.status === 'replied' ? 'selected' : ''}>Replied</option>
                  </select>
                </td>
                <td>
                  <div class="admin-actions">
                    <button class="admin-action-btn admin-action-btn--delete" data-action="delete" data-id="${e.id}" title="Delete enquiry">
                      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Bind status change
  container.querySelectorAll('[data-action="status"]').forEach(select => {
    select.addEventListener('change', async (e) => {
      const id = select.dataset.id;
      const status = select.value;
      try {
        const API_URL = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${API_URL}/api/enquiries/${id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status }),
        });
        if (!res.ok) throw new Error();
        // Update local data
        const item = enquiries.find(en => en.id == id);
        if (item) item.status = status;
        renderStats();
        showToast('Status updated.');
      } catch {
        showToast('Failed to update status.');
      }
    });
  });

  // Bind delete
  container.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (!confirm('Delete this enquiry?')) return;
      try {
        const API_URL = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${API_URL}/api/enquiries/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error();
        enquiries = enquiries.filter(en => en.id != id);
        renderStats();
        renderTable();
        showToast('Enquiry deleted.');
      } catch {
        showToast('Failed to delete enquiry.');
      }
    });
  });
}
