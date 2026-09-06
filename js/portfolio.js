/* ===================== Grambandhan — Investor Portfolio ===================== */

(function () {
  const user = gbInitPage(['INVESTOR'], 'portfolio.html');
  if (!user) return;

  const investments = gbWhere('investments', i => i.investorId === user.id).sort((a, b) => new Date(b.date) - new Date(a.date));
  const profile = gbFind('investorProfiles', p => p.userId === user.id);

  renderStats();
  renderInvestments();
  renderInsurance();
  renderTransactions();
  wireTabs();

  function renderStats() {
    const active = investments.filter(i => i.status === 'ACTIVE');
    const totalExpected = investments.reduce((s, i) => s + i.expectedReturn, 0);
    document.getElementById('portfolio-stats').innerHTML = `
      <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(profile ? profile.walletBalance : 0)}</div><div class="gb-stat-label">Wallet balance</div></div>
      <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(profile ? profile.totalInvested : 0)}</div><div class="gb-stat-label">Total invested</div></div>
      <div class="glass-card gb-stat-card"><div class="gb-stat-num">${active.length}</div><div class="gb-stat-label">Active investments</div></div>
      <div class="glass-card gb-stat-card"><div class="gb-stat-num">${gbCurrency(totalExpected)}</div><div class="gb-stat-label">Total expected return</div></div>
    `;
  }

  function renderInvestments() {
    document.getElementById('tab-investments').innerHTML = `
      <div class="glass-card">
        ${investments.length ? investments.map(i => {
          const p = gbGetById('projects', i.projectId);
          return `<div style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.12); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div>
              <a href="projects.html?id=${i.projectId}" style="font-weight:700;">${gbEsc(p ? p.title : 'Project')}</a>
              <div style="font-size:12.5px; opacity:0.8;">Invested ${gbCurrency(i.amount)} on ${gbDate(i.date)} via ${gbEsc(i.paymentMethod)}</div>
              <div style="font-size:12.5px; opacity:0.8;">Expected return: ${gbCurrency(i.expectedReturn)} ${i.insured ? '· 🛡️ Insured' : ''}</div>
            </div>
            <span class="gb-badge ${gbBadgeClass(i.status)}">${i.status}</span>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">💼</div>No investments yet. <a href="projects.html">Browse projects</a> to get started.</div>`}
      </div>
    `;
  }

  function renderInsurance() {
    const policies = gbWhere('insurance', ins => ins.investorId === user.id);
    const claims = gbAll('claims');
    document.getElementById('tab-insurance').innerHTML = `
      <div class="glass-card">
        ${policies.length ? policies.map(pol => {
          const p = gbGetById('projects', pol.projectId);
          const myClaims = claims.filter(c => c.insuranceId === pol.id);
          return `<div style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <div>
                <strong>${gbEsc(pol.coverageType)}</strong> — ${gbEsc(p ? p.title : '')}
                <div style="font-size:12.5px; opacity:0.8;">Premium: ${gbCurrency(pol.premium)} (${pol.premiumPct}%)</div>
              </div>
              <span class="gb-badge ${gbBadgeClass(pol.status)}">${pol.status}</span>
            </div>
            ${myClaims.map(c => `<div style="margin-top:8px; font-size:13px; padding:8px; background:rgba(255,255,255,0.08); border-radius:10px;">
              Claim: ${gbEsc(c.reason)} — <span class="gb-badge ${gbBadgeClass(c.status)}">${c.status}</span>
            </div>`).join('')}
            <button class="gb-btn gb-btn-ghost gb-btn-sm" style="margin-top:8px;" data-claim="${pol.id}">File a claim</button>
          </div>`;
        }).join('') : `<div class="gb-empty"><div class="icon">🛡️</div>No insurance policies yet. Opt in when making a new investment.</div>`}
      </div>
    `;
    document.querySelectorAll('[data-claim]').forEach(btn => btn.addEventListener('click', () => openClaimModal(btn.dataset.claim)));
  }

  function openClaimModal(insuranceId) {
    document.getElementById('claim-modal-body').innerHTML = `
      <div class="gb-field-dark gb-field">
        <label>Reason for claim</label>
        <textarea class="gb-textarea" id="claim-reason" placeholder="Describe what happened (e.g. crop failure due to flooding)"></textarea>
      </div>
      <div class="gb-field-dark gb-field">
        <label>Evidence reference (simulated)</label>
        <input class="gb-input" id="claim-evidence" placeholder="e.g. photo-report-0091.jpg">
      </div>
      <div id="claim-error" class="gb-error-text" style="display:none;"></div>
      <div style="display:flex; gap:10px; margin-top:10px;">
        <button class="gb-btn gb-btn-primary" id="claim-submit" style="flex:1;">Submit claim</button>
        <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('claim-modal')">Cancel</button>
      </div>
    `;
    gbOpenModal('claim-modal');
    document.getElementById('claim-submit').addEventListener('click', () => {
      const reason = document.getElementById('claim-reason').value.trim();
      if (!reason) { const e = document.getElementById('claim-error'); e.textContent = 'Please describe the claim.'; e.style.display = 'block'; return; }
      gbInsert('claims', {
        insuranceId, reason, evidenceUrl: document.getElementById('claim-evidence').value.trim() || '(none provided)', status: 'UNDER_REVIEW',
      });
      gbAddNotification('u_admin', 'CLAIM_FILED', `A new insurance claim was filed by ${user.name}.`);
      gbCloseModal('claim-modal');
      gbToast('Claim submitted — status: Under review.', 'success');
      renderInsurance();
    });
  }

  function renderTransactions() {
    const txns = gbWhere('transactions', t => t.userId === user.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    document.getElementById('tab-transactions').innerHTML = `
      <div class="glass-card">
        ${txns.length ? txns.map(t => `
          <div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12); display:flex; justify-content:space-between;">
            <div>
              <strong>${gbEsc(t.type)}</strong>
              <div style="font-size:12px; opacity:0.75;">${gbEsc(t.method)} · Ref: ${gbEsc(t.refId)} · ${gbDateTime(t.createdAt)}</div>
            </div>
            <div style="text-align:right;">
              <div>${gbCurrency(t.amount)}</div>
              <span class="gb-badge ${gbBadgeClass(t.status)}">${t.status}</span>
            </div>
          </div>`).join('') : `<div class="gb-empty"><div class="icon">🧾</div>No transactions yet.</div>`}
      </div>
    `;
  }

  function wireTabs() {
    document.querySelectorAll('.gb-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.gb-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        ['investments', 'insurance', 'transactions'].forEach(t => {
          document.getElementById('tab-' + t).style.display = t === tab.dataset.tab ? 'block' : 'none';
        });
      });
    });
  }
})();
