/* ===================== Grambandhan — Nav / Shell renderer ===================== */

const GB_NAV_LINKS = {
  FARMER: [
    ['dashboard.html', '🏠', 'Dashboard'],
    ['projects.html', '🌾', 'My Projects'],
    ['project-form.html', '➕', 'New Project'],
    ['marketplace.html', '🛒', 'Marketplace'],
    ['profile.html', '👤', 'Profile'],
  ],
  INVESTOR: [
    ['dashboard.html', '🏠', 'Dashboard'],
    ['projects.html', '🌾', 'Browse Projects'],
    ['portfolio.html', '💼', 'Portfolio'],
    ['marketplace.html', '🛒', 'Marketplace'],
    ['sdg.html', '🌍', 'Impact Dashboard'],
    ['profile.html', '👤', 'Profile'],
  ],
  FIELD_AGENT: [
    ['dashboard.html', '🏠', 'Dashboard'],
    ['projects.html', '🌾', 'Assigned Projects'],
    ['profile.html', '👤', 'Profile'],
  ],
  BUYER: [
    ['dashboard.html', '🏠', 'Dashboard'],
    ['marketplace.html', '🛒', 'Marketplace'],
    ['orders.html', '📦', 'My Orders'],
    ['profile.html', '👤', 'Profile'],
  ],
  ADMIN: [
    ['dashboard.html', '🏠', 'Dashboard'],
    ['admin.html', '🛡️', 'Admin Panel'],
    ['sdg.html', '🌍', 'Impact Dashboard'],
    ['profile.html', '👤', 'Profile'],
  ],
};

const GB_ROLE_LABEL = {
  FARMER: 'Farmer', INVESTOR: 'Investor', FIELD_AGENT: 'Field Agent', BUYER: 'Buyer', ADMIN: 'Admin',
};

function gbActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function gbRenderShell(user, activeOverride) {
  const links = GB_NAV_LINKS[user.role] || [];
  const active = activeOverride || gbActivePage();

  document.getElementById('gb-sidebar').innerHTML = `
    <div class="gb-brand"><span class="dot"></span> Grambandhan</div>
    ${links.map(([href, icon, label]) => `
      <a class="gb-sidebar-link ${href === active ? 'active' : ''}" href="${href}">
        <span>${icon}</span><span>${label}</span>
      </a>`).join('')}
    <div style="flex:1"></div>
    <a class="gb-sidebar-link" href="#" id="gb-logout-link"><span>🚪</span><span>Log out</span></a>
  `;

  document.getElementById('gb-topbar').innerHTML = `
    <div class="gb-navbar" style="width:100%;">
      <div>
        <strong>${gbEsc(user.name)}</strong>
        <span class="gb-badge gb-badge-info" style="margin-left:8px;">${GB_ROLE_LABEL[user.role]}</span>
        ${user.isVerified ? '<span class="gb-badge gb-badge-verified" style="margin-left:6px;">✓ Verified</span>' : '<span class="gb-badge gb-badge-pending" style="margin-left:6px;">KYC Pending</span>'}
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        ${gbRenderBell(user)}
      </div>
    </div>
  `;

  document.getElementById('gb-logout-link').addEventListener('click', (e) => {
    e.preventDefault();
    gbLogout();
  });

  gbWireBell(user);
}

function gbRefreshNav() {
  const user = gbCurrentUser();
  if (user) gbRenderShell(user);
}

/**
 * Standard boilerplate every authenticated page calls:
 * const user = gbInitPage(['FARMER','INVESTOR'], 'projects.html');
 */
function gbInitPage(allowedRoles, activeOverride) {
  const user = gbRequireRole(allowedRoles);
  if (!user) return null;
  gbRenderShell(user, activeOverride);
  return user;
}
