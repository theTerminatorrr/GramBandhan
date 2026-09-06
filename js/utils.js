/* ===================== Grambandhan — Shared Utilities ===================== */

function gbCurrency(n) {
  const num = Number(n) || 0;
  return '৳' + num.toLocaleString('en-BD', { maximumFractionDigits: 0 });
}

function gbDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function gbDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) + ' · ' +
    d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function gbTimeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm ago';
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + 'h ago';
  const days = Math.floor(hrs / 24);
  if (days < 30) return days + 'd ago';
  return gbDate(iso);
}

function gbQS(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function gbEsc(str) {
  const d = document.createElement('div');
  d.textContent = str == null ? '' : String(str);
  return d.innerHTML;
}

function gbToast(message, type) {
  let host = document.getElementById('gb-toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'gb-toast-host';
    document.body.appendChild(host);
  }
  const el = document.createElement('div');
  el.className = 'gb-toast' + (type ? ' ' + type : '');
  el.textContent = message;
  host.appendChild(el);
  setTimeout(() => el.remove(), 3400);
}

function gbStars(n) {
  const full = Math.round(n || 0);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function gbInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
}

function gbOpenModal(id) {
  document.getElementById(id).classList.add('open');
}
function gbCloseModal(id) {
  document.getElementById(id).classList.remove('open');
}
// close modal when clicking the overlay itself
document.addEventListener('click', (e) => {
  if (e.target.classList && e.target.classList.contains('gb-modal-overlay')) {
    e.target.classList.remove('open');
  }
});

function gbBadgeClass(status) {
  const map = {
    APPROVED: 'gb-badge-approved', ACTIVE: 'gb-badge-approved', VERIFIED: 'gb-badge-verified',
    COMPLETED: 'gb-badge-completed', DELIVERED: 'gb-badge-completed', SUCCESS: 'gb-badge-paid',
    RESOLVED: 'gb-badge-approved',
    PENDING: 'gb-badge-pending', PLACED: 'gb-badge-pending',
    REJECTED: 'gb-badge-rejected', FLAGGED: 'gb-badge-flagged', BANNED: 'gb-badge-banned', FAILED: 'gb-badge-rejected',
    LOW: 'gb-badge-low', MEDIUM: 'gb-badge-medium', HIGH: 'gb-badge-high',
  };
  return map[status] || 'gb-badge-info';
}
