/* ===================== Grambandhan — Dashboard ===================== */

(function () {
  const user = gbInitPage(null, 'dashboard.html');
  if (!user) return;

  const content = document.getElementById('dash-content');

  const renderers = {
    FARMER: renderFarmerDashboard,
    INVESTOR: renderInvestorDashboard,
    FIELD_AGENT: renderAgentDashboard,
    BUYER: renderBuyerDashboard,
    ADMIN: renderAdminDashboard,
  };

  content.innerHTML = (renderers[user.role] || renderFallback)(user);
  wireCommon();

  // ------------------------------------------------------------------

  function renderFarmerDashboard(user) {
    const myProjects = gbWhere('projects', p => p.farmerId === user.id);
    const approved = myProjects.filter(p => p.status === 'APPROVED');
    const pending = myProjects.filter(p => p.status === 'PENDING');
    const totalRaised = myProjects.reduce((s, p) => s + p.fundRaised, 0);
    const myListings = gbWhere('productListings', l => l.producerId === user.id);
    const profile = gbFind('farmerProfiles', fp => fp.userId === user.id);

    return `
      <h2>Welcome back, ${gbEsc(user.name.split(' ')[0])} 🌾</h2>
      <p style="opacity:0.85;">Here's how your projects and marketplace listings are doing.</p>

      <div class="gb-grid gb-grid-4" style="margin-bottom:20px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${myProjects.length}</div><div class="gb-stat-label">Total projects</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${pending.length}</div><div class="gb-stat-label">Pending approval</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(totalRaised)}</div><div class="gb-stat-label">Total funds raised</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${profile ? profile.rating.toFixed(1) : '—'} ★</div><div class="gb-stat-label">Farmer rating</div></div>
      </div>

      <div class="gb-grid gb-grid-2">
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3>My projects</h3>
            <a class="gb-btn gb-btn-primary gb-btn-sm" href="project-form.html">+ New project</a>
          </div>
          ${myProjects.length ? myProjects.map(p => `
            <div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
              <div style="display:flex; justify-content:space-between;">
                <a href="projects.html?id=${p.id}" style="font-weight:700;">${gbEsc(p.title)}</a>
                <span class="gb-badge ${gbBadgeClass(p.status)}">${p.status}</span>
              </div>
              <div class="gb-progress-track" style="margin-top:8px;"><div class="gb-progress-fill" style="width:${Math.min(100, Math.round(p.fundRaised / p.fundGoal * 100))}%;"></div></div>
              <div style="font-size:12.5px; opacity:0.8; margin-top:4px;">${gbCurrency(p.fundRaised)} of ${gbCurrency(p.fundGoal)} raised</div>
            </div>`).join('') : `<div class="gb-empty"><div class="icon">🌱</div>No projects yet — create your first one to start raising funds.</div>`}
        </div>

        <div class="glass-card">
          <h3>Marketplace listings</h3>
          <a class="gb-btn gb-btn-ghost gb-btn-sm" href="product-form.html" style="margin-bottom:12px; display:inline-block;">+ List a product</a>
          ${myListings.length ? myListings.map(l => `
            <div style="padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.12); display:flex; justify-content:space-between;">
              <span>${gbEsc(l.name)}</span><span>${gbCurrency(l.price)} · Qty ${l.qty}</span>
            </div>`).join('') : `<div class="gb-empty"><div class="icon">🛒</div>No products listed yet.</div>`}
        </div>
      </div>
    `;
  }

  function renderInvestorDashboard(user) {
    const myInvestments = gbWhere('investments', i => i.investorId === user.id);
    const profile = gbFind('investorProfiles', ip => ip.userId === user.id);
    const active = myInvestments.filter(i => i.status === 'ACTIVE');
    const totalExpected = myInvestments.reduce((s, i) => s + i.expectedReturn, 0);
    const approvedProjects = gbWhere('projects', p => p.status === 'APPROVED').slice(0, 3);

    return `
      <h2>Welcome back, ${gbEsc(user.name.split(' ')[0])} 💼</h2>
      <p style="opacity:0.85;">Your portfolio at a glance.</p>

      <div class="gb-grid gb-grid-4" style="margin-bottom:20px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(profile ? profile.walletBalance : 0)}</div><div class="gb-stat-label">Wallet balance</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(profile ? profile.totalInvested : 0)}</div><div class="gb-stat-label">Total invested</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${active.length}</div><div class="gb-stat-label">Active investments</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(totalExpected)}</div><div class="gb-stat-label">Total expected return</div></div>
      </div>

      <div class="gb-grid gb-grid-2">
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3>Recommended projects</h3>
            <a class="gb-btn gb-btn-ghost gb-btn-sm" href="projects.html">Browse all</a>
          </div>
          ${approvedProjects.map(p => `
            <div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
              <a href="projects.html?id=${p.id}" style="font-weight:700;">${gbEsc(p.title)}</a>
              <div style="font-size:12.5px; opacity:0.8;">${gbEsc(p.category)} · ${gbEsc(p.location)}</div>
              <div class="gb-progress-track" style="margin-top:6px;"><div class="gb-progress-fill" style="width:${Math.min(100, Math.round(p.fundRaised / p.fundGoal * 100))}%;"></div></div>
            </div>`).join('')}
        </div>
        <div class="glass-card">
          <h3>My investments</h3>
          ${myInvestments.length ? myInvestments.map(i => {
            const p = gbGetById('projects', i.projectId);
            return `<div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12); display:flex; justify-content:space-between;">
              <div><a href="projects.html?id=${i.projectId}" style="font-weight:700;">${gbEsc(p ? p.title : 'Project')}</a>
              <div style="font-size:12.5px; opacity:0.8;">${gbCurrency(i.amount)} invested</div></div>
              <span class="gb-badge ${gbBadgeClass(i.status)}">${i.status}</span>
            </div>`;
          }).join('') : `<div class="gb-empty"><div class="icon">💼</div>No investments yet.</div>`}
          <a class="gb-btn gb-btn-primary gb-btn-sm" href="portfolio.html" style="margin-top:12px; display:inline-block;">View full portfolio</a>
        </div>
      </div>
    `;
  }

  function renderAgentDashboard(user) {
    const allProjects = gbAll('projects').filter(p => p.status === 'APPROVED');
    const unverified = gbAll('progressUpdates').filter(u => !u.verifiedByAgent);

    return `
      <h2>Welcome back, ${gbEsc(user.name.split(' ')[0])} 🧭</h2>
      <p style="opacity:0.85;">Field verification queue and active projects.</p>

      <div class="gb-grid gb-grid-3" style="margin-bottom:20px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${allProjects.length}</div><div class="gb-stat-label">Active projects</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${unverified.length}</div><div class="gb-stat-label">Updates awaiting verification</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbAll('fraudFlags').filter(f => f.status !== 'RESOLVED').length}</div><div class="gb-stat-label">Open fraud flags</div></div>
      </div>

      <div class="glass-card">
        <h3>Progress updates awaiting verification</h3>
        ${unverified.length ? unverified.map(u => {
          const p = gbGetById('projects', u.projectId);
          const author = gbGetById('users', u.authorId);
          return `<div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
            <div style="display:flex; justify-content:space-between;">
              <span><strong>${gbEsc(p ? p.title : '')}</strong> — ${gbEsc(author ? author.name : '')}</span>
              <a class="gb-btn gb-btn-ghost gb-btn-sm" href="projects.html?id=${u.projectId}">Review</a>
            </div>
            <div style="font-size:13px; opacity:0.85; margin-top:4px;">${gbEsc(u.note)}</div>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">✅</div>Nothing pending verification.</div>`}
      </div>
    `;
  }

  function renderBuyerDashboard(user) {
    const myOrders = gbWhere('orders', o => o.buyerId === user.id);
    const listings = gbAll('productListings').filter(l => l.status === 'ACTIVE').slice(0, 3);

    return `
      <h2>Welcome back, ${gbEsc(user.name.split(' ')[0])} 🛒</h2>
      <p style="opacity:0.85;">Fresh from the marketplace.</p>

      <div class="gb-grid gb-grid-3" style="margin-bottom:20px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${myOrders.length}</div><div class="gb-stat-label">Total orders</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${myOrders.filter(o => o.status === 'DELIVERED').length}</div><div class="gb-stat-label">Delivered</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(myOrders.reduce((s, o) => s + o.totalPrice, 0))}</div><div class="gb-stat-label">Total spent</div></div>
      </div>

      <div class="glass-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3>Featured products</h3>
          <a class="gb-btn gb-btn-ghost gb-btn-sm" href="marketplace.html">Browse marketplace</a>
        </div>
        <div class="gb-grid gb-grid-3" style="margin-top:12px;">
          ${listings.map(l => `
            <div class="glass-panel-solid" style="padding:14px;">
              <strong>${gbEsc(l.name)}</strong>
              <div style="font-size:13px; color:#557;">${gbCurrency(l.price)}</div>
            </div>`).join('')}
        </div>
      </div>
    `;
  }

  function renderAdminDashboard(user) {
    const pendingProjects = gbWhere('projects', p => p.status === 'PENDING');
    const openFlags = gbWhere('fraudFlags', f => f.status !== 'RESOLVED');
    const totalUsers = gbAll('users').length;
    const totalVolume = gbAll('transactions').reduce((s, t) => s + t.amount, 0);

    return `
      <h2>Admin overview 🛡️</h2>
      <p style="opacity:0.85;">Platform health at a glance.</p>

      <div class="gb-grid gb-grid-4" style="margin-bottom:20px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${totalUsers}</div><div class="gb-stat-label">Total users</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${pendingProjects.length}</div><div class="gb-stat-label">Projects awaiting approval</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${openFlags.length}</div><div class="gb-stat-label">Open fraud flags</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(totalVolume)}</div><div class="gb-stat-label">Total transaction volume</div></div>
      </div>

      <div class="glass-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3>Quick actions</h3>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
          <a class="gb-btn gb-btn-primary" href="admin.html#approvals">Review pending projects (${pendingProjects.length})</a>
          <a class="gb-btn gb-btn-ghost" href="admin.html#fraud">Fraud queue (${openFlags.length})</a>
          <a class="gb-btn gb-btn-ghost" href="admin.html#users">Manage users</a>
          <a class="gb-btn gb-btn-ghost" href="sdg.html">View impact dashboard</a>
        </div>
      </div>
    `;
  }

  function renderFallback() {
    return `<div class="glass-card">Unknown role.</div>`;
  }

  function wireCommon() {
    // no-op placeholder for future shared wiring
  }
})();
