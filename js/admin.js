/* ===================== Grambandhan — Admin Panel ===================== */

(function () {
  const user = gbInitPage(['ADMIN'], 'admin.html');
  if (!user) return;

  const tabs = ['approvals', 'users', 'fraud', 'reports', 'disputes'];
  wireTabs();
  renderApprovals();
  renderUsers();
  renderFraud();
  renderReports();
  renderDisputes();

  const initial = (window.location.hash || '#approvals').slice(1);
  goToTab(tabs.includes(initial) ? initial : 'approvals');

  function wireTabs() {
    document.querySelectorAll('.gb-tab').forEach(tab => {
      tab.addEventListener('click', () => goToTab(tab.dataset.tab));
    });
  }
  function goToTab(name) {
    document.querySelectorAll('.gb-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    tabs.forEach(t => document.getElementById('tab-' + t).style.display = t === name ? 'block' : 'none');
  }

  // ---------------- Approvals ----------------
  function renderApprovals() {
    const pending = gbWhere('projects', p => p.status === 'PENDING');
    document.getElementById('tab-approvals').innerHTML = `
      <div class="glass-card">
        <h3>Pending projects (${pending.length})</h3>
        ${pending.length ? pending.map(p => {
          const farmer = gbGetById('users', p.farmerId);
          return `<div style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; align-items:flex-start;">
              <div>
                <a href="projects.html?id=${p.id}" style="font-weight:700;">${gbEsc(p.title)}</a>
                <div style="font-size:12.5px; opacity:0.8;">By ${gbEsc(farmer ? farmer.name : '')} · ${gbEsc(p.category)} · Goal ${gbCurrency(p.fundGoal)}</div>
              </div>
              <div style="display:flex; gap:8px;">
                <button class="gb-btn gb-btn-primary gb-btn-sm" data-approve="${p.id}">Approve</button>
                <button class="gb-btn gb-btn-danger gb-btn-sm" data-reject="${p.id}">Reject</button>
              </div>
            </div>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">✅</div>No projects awaiting approval.</div>`}
      </div>
    `;
    document.querySelectorAll('[data-approve]').forEach(btn => btn.addEventListener('click', () => {
      const p = gbGetById('projects', btn.dataset.approve);
      gbUpdate('projects', p.id, { status: 'APPROVED' });
      gbAddNotification(p.farmerId, 'PROJECT_STATUS', `Your project "${p.title}" was approved!`);
      gbToast('Project approved.', 'success');
      renderApprovals();
    }));
    document.querySelectorAll('[data-reject]').forEach(btn => btn.addEventListener('click', () => openRejectModal(btn.dataset.reject)));
  }

  function openRejectModal(projectId) {
    document.getElementById('admin-reject-body').innerHTML = `
      <div class="gb-field-dark gb-field">
        <label>Reason for rejection</label>
        <textarea class="gb-textarea" id="ar-reason" placeholder="Explain what the farmer should fix..."></textarea>
      </div>
      <div id="ar-error" class="gb-error-text" style="display:none;"></div>
      <div style="display:flex; gap:10px; margin-top:10px;">
        <button class="gb-btn gb-btn-danger" id="ar-submit" style="flex:1;">Reject project</button>
        <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('admin-reject-modal')">Cancel</button>
      </div>
    `;
    gbOpenModal('admin-reject-modal');
    document.getElementById('ar-submit').addEventListener('click', () => {
      const reason = document.getElementById('ar-reason').value.trim();
      if (!reason) { const e = document.getElementById('ar-error'); e.textContent = 'Please provide a reason.'; e.style.display = 'block'; return; }
      const p = gbGetById('projects', projectId);
      gbUpdate('projects', projectId, { status: 'REJECTED', rejectionReason: reason });
      gbAddNotification(p.farmerId, 'PROJECT_STATUS', `Your project "${p.title}" was rejected: ${reason}`);
      gbCloseModal('admin-reject-modal');
      gbToast('Project rejected.', 'success');
      renderApprovals();
    });
  }

  // ---------------- Users ----------------
  function renderUsers() {
    const users = gbAll('users').filter(u => u.role !== 'ADMIN');
    document.getElementById('tab-users').innerHTML = `
      <div class="glass-card">
        <h3>All users (${users.length})</h3>
        <input class="gb-input" id="user-search" placeholder="Search by name or email..." style="margin-bottom:12px; max-width:320px;">
        <div id="user-rows"></div>
      </div>
    `;
    function draw(list) {
      document.getElementById('user-rows').innerHTML = list.map(u => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12); flex-wrap:wrap; gap:8px;">
          <div>
            <strong>${gbEsc(u.name)}</strong> <span class="gb-badge gb-badge-info">${u.role.replace('_',' ')}</span>
            <div style="font-size:12.5px; opacity:0.8;">${gbEsc(u.email)} · ${gbEsc(u.phone)}</div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <span class="gb-badge ${u.isVerified ? 'gb-badge-verified' : 'gb-badge-pending'}">${u.isVerified ? 'Verified' : 'KYC ' + u.kycStatus}</span>
            <span class="gb-badge ${u.status === 'BANNED' ? 'gb-badge-banned' : 'gb-badge-approved'}">${u.status}</span>
            ${!u.isVerified ? `<button class="gb-btn gb-btn-primary gb-btn-sm" data-verify="${u.id}">Verify</button>` : ''}
            ${u.status === 'BANNED'
              ? `<button class="gb-btn gb-btn-ghost gb-btn-sm" data-unban="${u.id}">Unban</button>`
              : `<button class="gb-btn gb-btn-danger gb-btn-sm" data-ban="${u.id}">Ban</button>`}
          </div>
        </div>
      `).join('') || `<div class="gb-empty"><div class="icon">👤</div>No users match.</div>`;

      document.querySelectorAll('[data-verify]').forEach(b => b.addEventListener('click', () => {
        gbUpdate('users', b.dataset.verify, { isVerified: true, kycStatus: 'VERIFIED' });
        gbAddNotification(b.dataset.verify, 'KYC', 'Your account has been verified by the admin team.');
        gbToast('User verified.', 'success'); renderUsers();
      }));
      document.querySelectorAll('[data-ban]').forEach(b => b.addEventListener('click', () => {
        if (confirm('Ban this user? They will be unable to log in.')) { gbUpdate('users', b.dataset.ban, { status: 'BANNED' }); gbToast('User banned.', 'success'); renderUsers(); }
      }));
      document.querySelectorAll('[data-unban]').forEach(b => b.addEventListener('click', () => {
        gbUpdate('users', b.dataset.unban, { status: 'ACTIVE' }); gbToast('User unbanned.', 'success'); renderUsers();
      }));
    }
    draw(users);
    document.getElementById('user-search').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      draw(users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)));
    });
  }

  // ---------------- Fraud ----------------
  function renderFraud() {
    const flags = gbAll('fraudFlags').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    document.getElementById('tab-fraud').innerHTML = `
      <div class="glass-card">
        <h3>Fraud review queue</h3>
        ${flags.length ? flags.map(f => {
          const target = f.targetType === 'PROJECT' ? gbGetById('projects', f.targetId) : gbGetById('users', f.targetId);
          const raiser = gbGetById('users', f.raisedBy);
          return `<div style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <div>
                <strong>${gbEsc(f.targetType)}:</strong> ${gbEsc(target ? (target.title || target.name) : 'Unknown')}
                <div style="font-size:12.5px; opacity:0.8;">${gbEsc(f.reason)} — raised by ${gbEsc(raiser ? raiser.name : 'system')}</div>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <span class="gb-badge ${gbBadgeClass(f.status === 'RESOLVED' ? 'RESOLVED' : 'FLAGGED')}">${f.status}</span>
                ${f.status !== 'RESOLVED' ? `<button class="gb-btn gb-btn-primary gb-btn-sm" data-resolve="${f.id}">Mark resolved</button>` : ''}
              </div>
            </div>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">🛡️</div>No fraud flags raised.</div>`}
      </div>
    `;
    document.querySelectorAll('[data-resolve]').forEach(b => b.addEventListener('click', () => {
      gbUpdate('fraudFlags', b.dataset.resolve, { status: 'RESOLVED', reviewedBy: user.id });
      gbToast('Flag marked resolved.', 'success'); renderFraud();
    }));
  }

  // ---------------- Reports ----------------
  function renderReports() {
    const txns = gbAll('transactions');
    const byType = {};
    txns.forEach(t => { byType[t.type] = (byType[t.type] || 0) + t.amount; });
    const total = txns.reduce((s, t) => s + t.amount, 0);
    const maxVal = Math.max(1, ...Object.values(byType));

    document.getElementById('tab-reports').innerHTML = `
      <div class="gb-grid gb-grid-3" style="margin-bottom:18px;">
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(total)}</div><div class="gb-stat-label">Total platform volume</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${txns.length}</div><div class="gb-stat-label">Total transactions</div></div>
        <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbAll('projects').filter(p=>p.status==='APPROVED').length}</div><div class="gb-stat-label">Active projects</div></div>
      </div>
      <div class="glass-card" style="margin-bottom:18px;">
        <h3>Volume by transaction type</h3>
        ${Object.entries(byType).map(([type, amt]) => `
          <div style="margin-bottom:12px;">
            <div style="display:flex; justify-content:space-between; font-size:13.5px; margin-bottom:4px;"><span>${gbEsc(type)}</span><span>${gbCurrency(amt)}</span></div>
            <div class="gb-progress-track"><div class="gb-progress-fill" style="width:${Math.round(amt / maxVal * 100)}%;"></div></div>
          </div>`).join('')}
      </div>
      <div class="glass-card">
        <h3>Recent transactions</h3>
        ${txns.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0, 15).map(t => {
          const u = gbGetById('users', t.userId);
          return `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.1); font-size:13.5px;">
            <span>${gbEsc(u ? u.name : 'Unknown')} · ${gbEsc(t.type)} · ${gbEsc(t.method)}</span><span>${gbCurrency(t.amount)}</span>
          </div>`;
        }).join('')}
      </div>

      <div class="glass-card" style="margin-top:18px;">
        <h3>Demo data</h3>
        <p style="font-size:13.5px; opacity:0.85;">Everything in this app lives in your browser's local storage — nothing is sent to a server. Use this if the demo data gets into a confusing state.</p>
        <button class="gb-btn gb-btn-danger" id="btn-reset-demo">Reset all demo data</button>
      </div>
    `;
    document.getElementById('btn-reset-demo').addEventListener('click', () => {
      if (confirm('This will erase all projects, investments, orders and accounts you created, and restore the original seed data. Continue?')) {
        gbResetDB();
        gbToast('Demo data reset.', 'success');
        window.location.href = 'dashboard.html';
      }
    });
  }

  // ---------------- Disputes (insurance claims resolution) ----------------
  function renderDisputes() {
    const claims = gbAll('claims').sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    document.getElementById('tab-disputes').innerHTML = `
      <div class="glass-card">
        <h3>Insurance claims / disputes</h3>
        ${claims.length ? claims.map(c => {
          const ins = gbGetById('insurance', c.insuranceId);
          const investor = ins ? gbGetById('users', ins.investorId) : null;
          return `<div style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <div>
                <strong>${gbEsc(investor ? investor.name : 'Unknown investor')}</strong>
                <div style="font-size:12.5px; opacity:0.8;">${gbEsc(c.reason)} — evidence: ${gbEsc(c.evidenceUrl)}</div>
              </div>
              <div style="display:flex; gap:8px; align-items:center;">
                <span class="gb-badge ${gbBadgeClass(c.status === 'APPROVED' ? 'APPROVED' : c.status === 'DENIED' ? 'REJECTED' : 'PENDING')}">${c.status.replace('_',' ')}</span>
                ${c.status === 'UNDER_REVIEW' ? `
                  <button class="gb-btn gb-btn-primary gb-btn-sm" data-claim-approve="${c.id}">Approve</button>
                  <button class="gb-btn gb-btn-danger gb-btn-sm" data-claim-deny="${c.id}">Deny</button>` : ''}
              </div>
            </div>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">⚖️</div>No disputes or claims filed.</div>`}
      </div>
    `;
    document.querySelectorAll('[data-claim-approve]').forEach(b => b.addEventListener('click', () => {
      gbUpdate('claims', b.dataset.claimApprove, { status: 'APPROVED' });
      gbToast('Claim approved.', 'success'); renderDisputes();
    }));
    document.querySelectorAll('[data-claim-deny]').forEach(b => b.addEventListener('click', () => {
      gbUpdate('claims', b.dataset.claimDeny, { status: 'DENIED' });
      gbToast('Claim denied.', 'success'); renderDisputes();
    }));
  }
})();
