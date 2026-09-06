/* ===================== Grambandhan — Projects (browse + detail) ===================== */

(function () {
  const user = gbInitPage(null, 'projects.html');
  if (!user) return;

  const content = document.getElementById('projects-content');
  const projectId = gbQS('id');

  if (projectId) {
    renderDetailPage(projectId);
  } else {
    renderBrowsePage();
  }

  // ------------------------------------------------------------------
  // Shared helpers

  function farmerProfileFor(farmerId) {
    return gbFind('farmerProfiles', fp => fp.userId === farmerId);
  }

  function riskFor(project) {
    const profile = farmerProfileFor(project.farmerId);
    const completionRate = profile && profile.completedProjects > 0 ? profile.rating / 5 : null;
    return gbComputeRisk({
      cropType: project.cropType, budget: project.budget,
      timelineStart: project.timelineStart, timelineEnd: project.timelineEnd,
      completionRate, location: project.location,
    });
  }

  function fundPct(p) { return Math.min(100, Math.round((p.fundRaised / p.fundGoal) * 100)); }

  // ------------------------------------------------------------------
  // Browse

  function renderBrowsePage() {
    const isFarmer = user.role === 'FARMER';
    const baseList = isFarmer
      ? gbWhere('projects', p => p.farmerId === user.id)
      : gbWhere('projects', p => p.status === 'APPROVED');

    const categories = [...new Set(gbAll('projects').map(p => p.category))];

    content.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <h2>${isFarmer ? 'My Projects' : 'Browse Projects'}</h2>
        ${isFarmer ? '<a class="gb-btn gb-btn-primary" href="project-form.html">+ New project</a>' : ''}
      </div>

      ${!isFarmer ? `
      <div class="glass-card" style="margin-bottom:18px;">
        <div class="gb-grid gb-grid-4">
          <div class="gb-field" style="margin:0;">
            <label>Search</label>
            <input class="gb-input" id="f-search" placeholder="Title or crop...">
          </div>
          <div class="gb-field" style="margin:0;">
            <label>Category</label>
            <select class="gb-select" id="f-category"><option value="">All</option>${categories.map(c => `<option>${gbEsc(c)}</option>`).join('')}</select>
          </div>
          <div class="gb-field" style="margin:0;">
            <label>Risk level</label>
            <select class="gb-select" id="f-risk"><option value="">All</option><option value="LOW">Low</option><option value="MEDIUM">Medium</option><option value="HIGH">High</option></select>
          </div>
          <div class="gb-field" style="margin:0; display:flex; flex-direction:column; justify-content:flex-end;">
            <label style="display:flex; align-items:center; gap:8px; margin-bottom:0;">
              <input type="checkbox" id="f-women" style="width:auto;"> Women-led only
            </label>
          </div>
        </div>
      </div>` : ''}

      <div class="gb-grid gb-grid-3" id="projects-grid"></div>
    `;

    function applyFilters() {
      let list = baseList;
      if (!isFarmer) {
        const search = (document.getElementById('f-search').value || '').toLowerCase();
        const cat = document.getElementById('f-category').value;
        const risk = document.getElementById('f-risk').value;
        const womenOnly = document.getElementById('f-women').checked;
        list = list.filter(p => {
          if (search && !(p.title.toLowerCase().includes(search) || p.cropType.toLowerCase().includes(search))) return false;
          if (cat && p.category !== cat) return false;
          if (risk && riskFor(p).level !== risk) return false;
          if (womenOnly && !p.isWomenLed) return false;
          return true;
        });
      }
      renderGrid(list);
    }

    function renderGrid(list) {
      const grid = document.getElementById('projects-grid');
      if (!list.length) {
        grid.innerHTML = `<div class="gb-empty" style="grid-column:1/-1;"><div class="icon">🌱</div>No projects match yet.</div>`;
        return;
      }
      grid.innerHTML = list.map(p => {
        const risk = riskFor(p);
        return `
        <a href="projects.html?id=${p.id}" class="glass-card gb-project-card">
          <div class="gb-card-media" style="background:${p.image};">
            ${p.isWomenLed ? '<span class="gb-badge gb-badge-women">Women-led</span>' : ''}
          </div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h4 style="margin:0;">${gbEsc(p.title)}</h4>
            <span class="gb-badge ${gbBadgeClass(p.status)}">${p.status}</span>
          </div>
          <div style="font-size:12.5px; opacity:0.8;">${gbEsc(p.category)} · ${gbEsc(p.location)}</div>
          <div class="gb-progress-track"><div class="gb-progress-fill" style="width:${fundPct(p)}%;"></div></div>
          <div style="display:flex; justify-content:space-between; font-size:12.5px;">
            <span>${gbCurrency(p.fundRaised)} raised</span><span>${fundPct(p)}%</span>
          </div>
          <span class="gb-badge ${gbBadgeClass(risk.level)}">${risk.level} risk</span>
        </a>`;
      }).join('');
    }

    if (!isFarmer) {
      ['f-search', 'f-category', 'f-risk', 'f-women'].forEach(id => {
        document.getElementById(id).addEventListener('input', applyFilters);
      });
    }
    applyFilters();
  }

  // ------------------------------------------------------------------
  // Detail

  function renderDetailPage(id) {
    const project = gbGetById('projects', id);
    if (!project) { content.innerHTML = `<div class="glass-card">Project not found.</div>`; return; }

    const farmer = gbGetById('users', project.farmerId);
    const profile = farmerProfileFor(project.farmerId);
    const risk = riskFor(project);
    const isOwner = user.role === 'FARMER' && user.id === project.farmerId;
    const flag = gbFind('fraudFlags', f => f.targetType === 'PROJECT' && f.targetId === project.id && f.status !== 'RESOLVED');

    content.innerHTML = `
      <a href="projects.html" style="font-size:13px; opacity:0.8;">← Back to projects</a>
      <div class="glass-card" style="margin-top:10px;">
        <div class="gb-card-media" style="background:${project.image}; height:170px; margin-bottom:14px;"></div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
          <div>
            <h2 style="margin-bottom:4px;">${gbEsc(project.title)}</h2>
            <div style="font-size:13.5px; opacity:0.85;">
              By <strong>${gbEsc(farmer ? farmer.name : 'Unknown')}</strong>
              ${profile ? ` · ${gbStars(profile.rating)} (${profile.rating.toFixed(1)})` : ''}
              ${profile && profile.isWomenLed ? ' · <span class="gb-badge gb-badge-women">Women-led</span>' : ''}
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="gb-badge ${gbBadgeClass(project.status)}">${project.status}</span>
            <span class="gb-badge ${gbBadgeClass(risk.level)}">${risk.level} risk</span>
            ${flag ? '<span class="gb-badge gb-badge-flagged">Flagged</span>' : ''}
          </div>
        </div>

        ${project.status === 'REJECTED' && project.rejectionReason ? `<div class="gb-error-text" style="margin-top:10px;">Rejection reason: ${gbEsc(project.rejectionReason)}</div>` : ''}

        <p style="margin-top:14px;">${gbEsc(project.description)}</p>

        <div class="gb-grid gb-grid-4" style="margin:14px 0;">
          <div><div class="gb-stat-label">Category</div><div>${gbEsc(project.category)}</div></div>
          <div><div class="gb-stat-label">Crop type</div><div>${gbEsc(project.cropType)}</div></div>
          <div><div class="gb-stat-label">Location</div><div>${gbEsc(project.location)}</div></div>
          <div><div class="gb-stat-label">Timeline</div><div>${gbDate(project.timelineStart)} → ${gbDate(project.timelineEnd)}</div></div>
        </div>

        <div class="gb-progress-track"><div class="gb-progress-fill" style="width:${fundPct(project)}%;"></div></div>
        <div style="display:flex; justify-content:space-between; margin-top:6px; font-size:13.5px;">
          <span>${gbCurrency(project.fundRaised)} raised of ${gbCurrency(project.fundGoal)}</span>
          <span>${fundPct(project)}% funded</span>
        </div>

        <div class="glass-panel-solid" style="margin-top:16px; padding:14px;">
          <strong style="color:var(--gb-navy-deep);">Risk suggestion (rule-based heuristic, not a trained model)</strong>
          <ul style="margin:8px 0 0 18px; color:var(--gb-text-dark); font-size:13.5px;">
            ${risk.suggestions.map(s => `<li>${gbEsc(s)}</li>`).join('')}
          </ul>
        </div>

        <div id="detail-actions" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:16px;"></div>
      </div>

      <div class="gb-tabs" style="margin-top:20px;">
        <div class="gb-tab active" data-tab="progress">Progress Timeline</div>
        <div class="gb-tab" data-tab="ratings">Ratings & Feedback</div>
      </div>
      <div id="tab-progress"></div>
      <div id="tab-ratings" style="display:none;"></div>
    `;

    renderActions();
    renderProgressTab();
    renderRatingsTab();
    wireTabs();

    // ---------------- Actions per role ----------------
    function renderActions() {
      const el = document.getElementById('detail-actions');
      let html = '';

      if (isOwner) {
        if (project.status === 'PENDING' || project.status === 'REJECTED') {
          html += `<a class="gb-btn gb-btn-ghost" href="project-form.html?id=${project.id}">Edit project</a>`;
          html += `<button class="gb-btn gb-btn-danger" id="btn-delete">Delete project</button>`;
        }
        html += `<button class="gb-btn gb-btn-primary" id="btn-post-update">Post progress update</button>`;
      }

      if (user.role === 'INVESTOR' && project.status === 'APPROVED' && fundPct(project) < 100) {
        html += `<button class="gb-btn gb-btn-gold" id="btn-invest">Invest now</button>`;
      }

      if (user.role === 'INVESTOR') {
        const hasInvestment = gbFind('investments', i => i.investorId === user.id && i.projectId === project.id);
        const hasRated = gbFind('ratings', r => r.fromUserId === user.id && r.targetType === 'PROJECT' && r.targetId === project.id);
        if (hasInvestment && !hasRated) {
          html += `<button class="gb-btn gb-btn-ghost" id="btn-rate">Rate this project</button>`;
        }
      }

      if (user.role === 'FIELD_AGENT' && project.status === 'APPROVED') {
        html += `<button class="gb-btn gb-btn-primary" id="btn-post-update">Post site-visit update</button>`;
      }

      if (user.role === 'ADMIN') {
        if (project.status === 'PENDING') {
          html += `<button class="gb-btn gb-btn-primary" id="btn-approve">Approve</button>`;
          html += `<button class="gb-btn gb-btn-danger" id="btn-reject">Reject</button>`;
        }
        if (!flag) html += `<button class="gb-btn gb-btn-ghost" id="btn-flag">Flag for review</button>`;
      }

      el.innerHTML = html || '<span style="opacity:0.7; font-size:13.5px;">No actions available for your role right now.</span>';

      bindIfExists('btn-delete', () => {
        if (confirm('Delete this project? This cannot be undone.')) {
          gbRemove('projects', project.id);
          gbToast('Project deleted.', 'success');
          window.location.href = 'projects.html';
        }
      });
      bindIfExists('btn-post-update', openProgressModal);
      bindIfExists('btn-invest', openInvestModal);
      bindIfExists('btn-rate', openRatingModal);
      bindIfExists('btn-approve', () => {
        gbUpdate('projects', project.id, { status: 'APPROVED' });
        gbAddNotification(project.farmerId, 'PROJECT_STATUS', `Your project "${project.title}" was approved!`);
        gbToast('Project approved.', 'success');
        window.location.reload();
      });
      bindIfExists('btn-reject', openRejectModal);
      bindIfExists('btn-flag', openFraudModal);
    }

    function bindIfExists(id, fn) {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', fn);
    }

    // ---------------- Progress tab ----------------
    function renderProgressTab() {
      const updates = gbWhere('progressUpdates', u => u.projectId === project.id)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      document.getElementById('tab-progress').innerHTML = `
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h3 style="margin:0;">Timeline</h3>
            <div style="min-width:140px;">
              <div class="gb-progress-track"><div class="gb-progress-fill" style="width:${project.completionPct}%;"></div></div>
              <div style="font-size:12px; text-align:right; margin-top:2px;">${project.completionPct}% complete</div>
            </div>
          </div>
          <div class="gb-timeline">
            ${updates.length ? updates.map(u => {
              const author = gbGetById('users', u.authorId);
              return `<div class="gb-timeline-item ${u.verifiedByAgent ? 'verified' : ''}">
                <div style="display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                  <strong>${gbEsc(author ? author.name : 'Unknown')}</strong>
                  <span style="font-size:12px; opacity:0.75;">${gbDateTime(u.createdAt)}</span>
                </div>
                <p style="margin:4px 0 6px;">${gbEsc(u.note)}</p>
                ${u.verifiedByAgent
                  ? '<span class="gb-badge gb-badge-verified">✓ Field Verified</span>'
                  : (user.role === 'FIELD_AGENT'
                      ? `<button class="gb-btn gb-btn-ghost gb-btn-sm" data-verify="${u.id}">Verify this update</button>`
                      : '<span class="gb-badge gb-badge-pending">Awaiting verification</span>')}
              </div>`;
            }).join('') : '<div class="gb-empty"><div class="icon">📋</div>No progress updates posted yet.</div>'}
          </div>
        </div>
      `;

      document.querySelectorAll('[data-verify]').forEach(btn => {
        btn.addEventListener('click', () => {
          gbUpdate('progressUpdates', btn.dataset.verify, { verifiedByAgent: true, agentId: user.id });
          gbAddNotification(project.farmerId, 'PROGRESS_UPDATE', `Your progress update on "${project.title}" was field-verified.`);
          gbToast('Update verified.', 'success');
          renderProgressTab();
        });
      });
    }

    // ---------------- Ratings tab ----------------
    function renderRatingsTab() {
      const ratings = gbWhere('ratings', r => r.targetType === 'PROJECT' && r.targetId === project.id)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      const avg = ratings.length ? (ratings.reduce((s, r) => s + r.stars, 0) / ratings.length) : 0;

      document.getElementById('tab-ratings').innerHTML = `
        <div class="glass-card">
          <h3>${ratings.length ? `${avg.toFixed(1)} ★ average (${ratings.length} review${ratings.length > 1 ? 's' : ''})` : 'No ratings yet'}</h3>
          ${ratings.map(r => {
            const from = gbGetById('users', r.fromUserId);
            return `<div style="padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
              <div class="gb-stars">${gbStars(r.stars)}</div>
              <div style="font-size:13.5px; margin:4px 0;">${gbEsc(r.comment)}</div>
              <div style="font-size:12px; opacity:0.7;">— ${gbEsc(from ? from.name : 'Anonymous')} · ${gbDate(r.createdAt)}</div>
            </div>`;
          }).join('')}
        </div>
      `;
    }

    function wireTabs() {
      document.querySelectorAll('.gb-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.gb-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          document.getElementById('tab-progress').style.display = tab.dataset.tab === 'progress' ? 'block' : 'none';
          document.getElementById('tab-ratings').style.display = tab.dataset.tab === 'ratings' ? 'block' : 'none';
        });
      });
    }

    // ---------------- Invest modal ----------------
    function openInvestModal() {
      const remaining = project.fundGoal - project.fundRaised;
      document.getElementById('invest-modal-body').innerHTML = `
        <div class="gb-field-dark gb-field">
          <label>Amount to invest (max ${gbCurrency(remaining)})</label>
          <input class="gb-input" type="number" id="inv-amount" min="500" max="${remaining}" placeholder="e.g. 10000">
        </div>
        <div class="gb-field-dark gb-field">
          <label>Payment method (simulated)</label>
          <select class="gb-select" id="inv-method">
            <option value="bKash">bKash</option>
            <option value="Nagad">Nagad</option>
            <option value="Bank">Bank transfer</option>
          </select>
        </div>
        <div class="gb-field-dark gb-field" style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="inv-insure" style="width:auto;">
          <label style="margin:0;" for="inv-insure">Add Crop Failure insurance (5% premium)</label>
        </div>
        <div id="inv-summary" class="gb-hint"></div>
        <div id="inv-error" class="gb-error-text" style="display:none;"></div>
        <div style="display:flex; gap:10px; margin-top:14px;">
          <button class="gb-btn gb-btn-primary" id="inv-confirm-btn" style="flex:1;">Confirm investment</button>
          <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('invest-modal')">Cancel</button>
        </div>
      `;
      gbOpenModal('invest-modal');

      const amountEl = document.getElementById('inv-amount');
      const insureEl = document.getElementById('inv-insure');
      function updateSummary() {
        const amt = Number(amountEl.value) || 0;
        const premium = insureEl.checked ? Math.round(amt * 0.05) : 0;
        document.getElementById('inv-summary').textContent = amt
          ? `Expected return (15% over term): ${gbCurrency(Math.round(amt * 1.15))}${premium ? ' · Insurance premium: ' + gbCurrency(premium) : ''}`
          : '';
      }
      amountEl.addEventListener('input', updateSummary);
      insureEl.addEventListener('change', updateSummary);

      document.getElementById('inv-confirm-btn').addEventListener('click', () => {
        const amount = Number(amountEl.value);
        const method = document.getElementById('inv-method').value;
        const errEl = document.getElementById('inv-error');
        if (!amount || amount < 500) { errEl.textContent = 'Enter an amount of at least ৳500.'; errEl.style.display = 'block'; return; }
        if (amount > remaining) { errEl.textContent = 'Amount exceeds the remaining funding goal.'; errEl.style.display = 'block'; return; }

        const fakeTxnId = method.toUpperCase().slice(0, 3) + '-' + Math.floor(Math.random() * 900000 + 100000);
        const expectedReturn = Math.round(amount * 1.15);

        gbInsert('investments', {
          investorId: user.id, projectId: project.id, amount, date: new Date().toISOString().slice(0, 10),
          expectedReturn, status: 'ACTIVE', paymentMethod: method, insured: insureEl.checked,
        });
        gbInsert('transactions', {
          userId: user.id, type: 'INVESTMENT', amount, method: method.toUpperCase(), status: 'SUCCESS', refId: fakeTxnId,
        });
        if (insureEl.checked) {
          gbInsert('insurance', {
            projectId: project.id, investorId: user.id, coverageType: 'Crop Failure Cover',
            premium: Math.round(amount * 0.05), premiumPct: 5, status: 'ACTIVE',
          });
        }
        gbUpdate('projects', project.id, { fundRaised: project.fundRaised + amount });

        const ip = gbFind('investorProfiles', p => p.userId === user.id);
        if (ip) gbUpdate('investorProfiles', ip.id, { totalInvested: ip.totalInvested + amount, walletBalance: Math.max(0, ip.walletBalance - amount) });

        gbAddNotification(project.farmerId, 'INVESTMENT_RECEIVED', `${user.name} invested ${gbCurrency(amount)} in "${project.title}".`);

        gbCloseModal('invest-modal');
        gbToast(`Investment confirmed — transaction ${fakeTxnId}`, 'success');
        window.location.reload();
      });
    }

    // ---------------- Progress update modal ----------------
    function openProgressModal() {
      document.getElementById('progress-modal-body').innerHTML = `
        <div class="gb-field-dark gb-field">
          <label>What's the update?</label>
          <textarea class="gb-textarea" id="pu-note" placeholder="e.g. Seedlings transplanted across 60% of the plot."></textarea>
        </div>
        <div class="gb-field-dark gb-field" style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="pu-photo" style="width:auto;">
          <label style="margin:0;" for="pu-photo">Attach a photo (simulated — no real upload in this demo)</label>
        </div>
        <div class="gb-field-dark gb-field">
          <label>Update overall completion % (optional)</label>
          <input class="gb-input" type="number" min="0" max="100" id="pu-pct" placeholder="${project.completionPct}">
        </div>
        <div id="pu-error" class="gb-error-text" style="display:none;"></div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="gb-btn gb-btn-primary" id="pu-submit" style="flex:1;">Post update</button>
          <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('progress-modal')">Cancel</button>
        </div>
      `;
      gbOpenModal('progress-modal');

      document.getElementById('pu-submit').addEventListener('click', () => {
        const note = document.getElementById('pu-note').value.trim();
        const errEl = document.getElementById('pu-error');
        if (!note) { errEl.textContent = 'Please describe the update.'; errEl.style.display = 'block'; return; }
        const isAgent = user.role === 'FIELD_AGENT';
        gbInsert('progressUpdates', {
          projectId: project.id, authorId: user.id, note,
          photos: document.getElementById('pu-photo').checked ? ['(simulated photo)'] : [],
          videoUrl: '', verifiedByAgent: isAgent, agentId: isAgent ? user.id : undefined,
        });
        const pctVal = Number(document.getElementById('pu-pct').value);
        if (pctVal >= 0 && pctVal <= 100) gbUpdate('projects', project.id, { completionPct: pctVal });

        const investors = [...new Set(gbWhere('investments', i => i.projectId === project.id).map(i => i.investorId))];
        investors.forEach(iid => gbAddNotification(iid, 'PROGRESS_UPDATE', `New progress update posted on "${project.title}".`));

        gbCloseModal('progress-modal');
        gbToast('Progress update posted.', 'success');
        window.location.reload();
      });
    }

    // ---------------- Rating modal ----------------
    function openRatingModal() {
      let stars = 5;
      document.getElementById('rating-modal-body').innerHTML = `
        <div class="gb-star-input" id="rt-stars">${[1,2,3,4,5].map(n => `<span data-n="${n}" class="${n <= stars ? 'on' : ''}">★</span>`).join('')}</div>
        <div class="gb-field-dark gb-field" style="margin-top:10px;">
          <label>Comment</label>
          <textarea class="gb-textarea" id="rt-comment" placeholder="How was your experience with this project?"></textarea>
        </div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="gb-btn gb-btn-primary" id="rt-submit" style="flex:1;">Submit rating</button>
          <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('rating-modal')">Cancel</button>
        </div>
      `;
      gbOpenModal('rating-modal');
      document.querySelectorAll('#rt-stars span').forEach(s => {
        s.addEventListener('click', () => {
          stars = Number(s.dataset.n);
          document.querySelectorAll('#rt-stars span').forEach(x => x.classList.toggle('on', Number(x.dataset.n) <= stars));
        });
      });
      document.getElementById('rt-submit').addEventListener('click', () => {
        gbInsert('ratings', { fromUserId: user.id, targetType: 'PROJECT', targetId: project.id, stars, comment: document.getElementById('rt-comment').value.trim() });

        // recompute farmer aggregate rating across their projects
        if (profile) {
          const allRatings = gbWhere('ratings', r => r.targetType === 'PROJECT' &&
            gbAll('projects').some(p => p.id === r.targetId && p.farmerId === project.farmerId));
          const avg = allRatings.reduce((s, r) => s + r.stars, 0) / allRatings.length;
          gbUpdate('farmerProfiles', profile.id, { rating: Math.round(avg * 10) / 10 });
        }
        gbAddNotification(project.farmerId, 'RATING', `${user.name} left a ${stars}-star rating on "${project.title}".`);
        gbCloseModal('rating-modal');
        gbToast('Thanks for your feedback!', 'success');
        window.location.reload();
      });
    }

    // ---------------- Reject modal ----------------
    function openRejectModal() {
      document.getElementById('reject-modal-body').innerHTML = `
        <div class="gb-field-dark gb-field">
          <label>Reason for rejection</label>
          <textarea class="gb-textarea" id="rej-reason" placeholder="Explain what the farmer should fix..."></textarea>
        </div>
        <div id="rej-error" class="gb-error-text" style="display:none;"></div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="gb-btn gb-btn-danger" id="rej-submit" style="flex:1;">Reject project</button>
          <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('reject-modal')">Cancel</button>
        </div>
      `;
      gbOpenModal('reject-modal');
      document.getElementById('rej-submit').addEventListener('click', () => {
        const reason = document.getElementById('rej-reason').value.trim();
        if (!reason) { const e = document.getElementById('rej-error'); e.textContent = 'Please provide a reason.'; e.style.display = 'block'; return; }
        gbUpdate('projects', project.id, { status: 'REJECTED', rejectionReason: reason });
        gbAddNotification(project.farmerId, 'PROJECT_STATUS', `Your project "${project.title}" was rejected: ${reason}`);
        gbCloseModal('reject-modal');
        gbToast('Project rejected.', 'success');
        window.location.reload();
      });
    }

    // ---------------- Fraud flag modal ----------------
    function openFraudModal() {
      document.getElementById('fraud-modal-body').innerHTML = `
        <div class="gb-field-dark gb-field">
          <label>Reason for flagging</label>
          <textarea class="gb-textarea" id="fr-reason" placeholder="Describe the suspicious activity..."></textarea>
        </div>
        <div id="fr-error" class="gb-error-text" style="display:none;"></div>
        <div style="display:flex; gap:10px; margin-top:10px;">
          <button class="gb-btn gb-btn-danger" id="fr-submit" style="flex:1;">Submit flag</button>
          <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC;" onclick="gbCloseModal('fraud-modal')">Cancel</button>
        </div>
      `;
      gbOpenModal('fraud-modal');
      document.getElementById('fr-submit').addEventListener('click', () => {
        const reason = document.getElementById('fr-reason').value.trim();
        if (!reason) { const e = document.getElementById('fr-error'); e.textContent = 'Please describe the concern.'; e.style.display = 'block'; return; }
        gbInsert('fraudFlags', { targetType: 'PROJECT', targetId: project.id, reason, status: 'PENDING', raisedBy: user.id });
        gbToast('Flagged for admin review.', 'success');
        gbCloseModal('fraud-modal');
        window.location.reload();
      });
    }
  }
})();
