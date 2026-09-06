/* ===================== Grambandhan — Project Create/Edit Form ===================== */

(function () {
  const user = gbInitPage(['FARMER'], 'project-form.html');
  if (!user) return;

  const editId = gbQS('id');
  const existing = editId ? gbGetById('projects', editId) : null;
  if (editId && (!existing || existing.farmerId !== user.id)) {
    window.location.href = 'projects.html';
    return;
  }

  let currentStep = 1;
  const totalSteps = 3;

  if (existing) {
    document.getElementById('form-title').textContent = 'Edit Project';
    document.getElementById('title').value = existing.title;
    document.getElementById('description').value = existing.description;
    document.getElementById('category').value = existing.category;
    document.getElementById('cropType').value = existing.cropType;
    document.getElementById('location').value = existing.location;
    document.getElementById('isWomenLed').checked = !!existing.isWomenLed;
    document.getElementById('fundGoal').value = existing.fundGoal;
    document.getElementById('budget').value = existing.budget;
    document.getElementById('timelineStart').value = existing.timelineStart;
    document.getElementById('timelineEnd').value = existing.timelineEnd;
  }

  document.getElementById('steps').addEventListener('click', (e) => {
    const tab = e.target.closest('.gb-tab');
    if (!tab) return;
    goToStep(Number(tab.dataset.step));
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    if (!validateStep(currentStep)) return;
    if (currentStep === totalSteps) return;
    goToStep(currentStep + 1);
  });
  document.getElementById('btn-back').addEventListener('click', () => goToStep(currentStep - 1));

  function goToStep(n) {
    if (n < 1 || n > totalSteps) return;
    currentStep = n;
    document.querySelectorAll('.step').forEach(s => s.style.display = Number(s.dataset.step) === n ? 'block' : 'none');
    document.querySelectorAll('#steps .gb-tab').forEach(t => t.classList.toggle('active', Number(t.dataset.step) === n));
    document.getElementById('btn-back').style.visibility = n === 1 ? 'hidden' : 'visible';
    document.getElementById('btn-next').style.display = n === totalSteps ? 'none' : 'inline-flex';
    document.getElementById('btn-submit').style.display = n === totalSteps ? 'inline-flex' : 'none';
    if (n === totalSteps) renderReview();
    hideError();
  }

  function validateStep(n) {
    hideError();
    if (n === 1) {
      if (!val('title') || !val('description') || !val('location')) return showError('Please fill in all required fields.');
    }
    if (n === 2) {
      if (!val('fundGoal') || !val('budget') || !val('timelineStart') || !val('timelineEnd')) return showError('Please fill in all funding & timeline fields.');
      if (new Date(val('timelineEnd')) <= new Date(val('timelineStart'))) return showError('End date must be after the start date.');
    }
    return true;
  }

  function val(id) { return document.getElementById(id).value.trim(); }
  function showError(msg) { const e = document.getElementById('form-error'); e.textContent = msg; e.style.display = 'block'; return false; }
  function hideError() { document.getElementById('form-error').style.display = 'none'; }

  function collectData() {
    return {
      title: val('title'), description: val('description'), category: val('category'),
      cropType: val('cropType'), location: val('location'), isWomenLed: document.getElementById('isWomenLed').checked,
      fundGoal: Number(val('fundGoal')), budget: Number(val('budget')),
      timelineStart: val('timelineStart'), timelineEnd: val('timelineEnd'),
    };
  }

  function renderReview() {
    const d = collectData();
    document.getElementById('review-summary').innerHTML = `
      <strong>${gbEsc(d.title)}</strong>
      <p style="margin:6px 0;">${gbEsc(d.description)}</p>
      <div style="font-size:13.5px; display:grid; grid-template-columns:1fr 1fr; gap:6px;">
        <div><b>Category:</b> ${gbEsc(d.category)}</div>
        <div><b>Crop type:</b> ${gbEsc(d.cropType)}</div>
        <div><b>Location:</b> ${gbEsc(d.location)}</div>
        <div><b>Women-led:</b> ${d.isWomenLed ? 'Yes' : 'No'}</div>
        <div><b>Funding goal:</b> ${gbCurrency(d.fundGoal)}</div>
        <div><b>Budget:</b> ${gbCurrency(d.budget)}</div>
        <div><b>Timeline:</b> ${gbDate(d.timelineStart)} → ${gbDate(d.timelineEnd)}</div>
      </div>
    `;

    const profile = gbFind('farmerProfiles', fp => fp.userId === user.id);
    const completionRate = profile && profile.completedProjects > 0 ? profile.rating / 5 : null;
    const risk = gbComputeRisk({
      cropType: d.cropType, budget: d.budget, timelineStart: d.timelineStart, timelineEnd: d.timelineEnd,
      completionRate, location: d.location,
    });
    document.getElementById('risk-preview').innerHTML = `
      <div class="glass-panel-solid" style="padding:14px; color:var(--gb-text-dark);">
        <strong>Estimated risk level: </strong><span class="gb-badge ${gbBadgeClass(risk.level)}">${risk.level}</span>
        <ul style="margin:8px 0 0 18px; font-size:13.5px;">${risk.suggestions.map(s => `<li>${gbEsc(s)}</li>`).join('')}</ul>
        <div class="gb-hint">This is a transparent rule-based estimate shown to help you strengthen your application — not a guarantee of approval.</div>
      </div>
    `;
  }

  document.getElementById('project-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2)) return;
    const d = collectData();
    const palette = ['linear-gradient(135deg,#2f855a,#276749)', 'linear-gradient(135deg,#b7791f,#975a16)', 'linear-gradient(135deg,#975a3a,#6b3f24)', 'linear-gradient(135deg,#4a5568,#2d3748)', 'linear-gradient(135deg,#2b6cb0,#2c5282)'];

    if (existing) {
      gbUpdate('projects', existing.id, { ...d, status: 'PENDING', rejectionReason: null });
      gbToast('Project resubmitted for approval.', 'success');
    } else {
      gbInsert('projects', {
        farmerId: user.id, ...d, fundRaised: 0, status: 'PENDING', completionPct: 0,
        image: palette[Math.floor(Math.random() * palette.length)],
      });
      gbToast('Project submitted for admin approval.', 'success');
    }
    window.location.href = 'projects.html';
  });

  goToStep(1);
})();
