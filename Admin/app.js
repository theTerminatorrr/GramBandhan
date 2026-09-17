/* ==========================================================================
   Grambandhan — Admin module
   Covers the SRS admin scope: verify users, approve or reject project
   listings, monitor every transaction and disbursement, run fraud and
   dispute handling, settle insurance claims, moderate the marketplace and
   generate reports. Every state change is written to an audit log.
   Storage: localStorage. No backend required.
   ========================================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const KEY = 'grambandhan.admin.v1';
  const uid = (p) => p + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const taka = (n) => '৳' + Number(n || 0).toLocaleString('en-IN');
  const pct = (a, b) => (!b ? 0 : Math.min(100, Math.round((a / b) * 100)));
  const nice = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const stamp = (d) => new Date(d).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  const ago = (d) => {
    const m = Math.round((Date.now() - new Date(d)) / 60000);
    return m < 60 ? m + ' min ago' : m < 1440 ? Math.round(m / 60) + ' hr ago' : Math.round(m / 1440) + ' d ago';
  };
  const d = (days) => new Date(Date.now() - days * 864e5).toISOString();

  const CAT = { Crop: '🌾', Vegetable: '🥬', Poultry: '🐓', Fisheries: '🐟', Cattle: '🐄', Handicraft: '🧺' };

  function toast(msg, bad) {
    const t = document.createElement('div');
    t.className = 'toast' + (bad ? ' toast--bad' : '');
    t.textContent = msg;
    $('#toasts').appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  let S = null;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const load = () => { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } };

  /* Audit log — every admin decision lands here */
  function log(action, target, note) {
    S.audit.unshift({ id: uid('LOG'), at: new Date().toISOString(), by: S.admin.id, action, target, note: note || '' });
    if (S.audit.length > 400) S.audit.length = 400;
  }
  function alertMsg(text, sev) {
    S.alerts.unshift({ id: uid('AL'), at: new Date().toISOString(), text, sev: sev || 'low', read: false });
    paintBell();
  }

  /* ------------------------------------------------------------ seed data */
  function seed() {
    const users = [
      { id: 'USR-1001', name: 'Rahima Khatun', role: 'Farmer', phone: '01712345678', district: 'Bogura', kyc: 'verified', joined: d(320), rating: 4.8, projects: 3, flagged: false, status: 'active' },
      { id: 'USR-1002', name: 'Muhutasim Bin Sadik', role: 'Investor', phone: '01822334455', district: 'Dhaka', kyc: 'verified', joined: d(260), rating: 4.9, invested: 385000, flagged: false, status: 'active' },
      { id: 'USR-1003', name: 'Shamia Akter Tasfi', role: 'Investor', phone: '01911223344', district: 'Dhaka', kyc: 'verified', joined: d(240), rating: 4.7, invested: 210000, flagged: false, status: 'active' },
      { id: 'USR-1004', name: 'Nusrat Jahan', role: 'Field agent', phone: '01677889900', district: 'Bogura', kyc: 'verified', joined: d(300), rating: 4.9, visits: 62, flagged: false, status: 'active' },
      { id: 'USR-1005', name: 'Karimul Islam Shezan', role: 'Farmer', phone: '01711111111', district: 'Sirajganj', kyc: 'pending', joined: d(4), rating: 0, projects: 1, flagged: false, status: 'active' },
      { id: 'USR-1006', name: 'Fariha Tithy', role: 'Artisan', phone: '01533445566', district: 'Rangpur', kyc: 'pending', joined: d(2), rating: 0, projects: 1, flagged: false, status: 'active' },
      { id: 'USR-1007', name: 'Jasim Uddin', role: 'Farmer', phone: '01399887766', district: 'Jamalpur', kyc: 'rejected', joined: d(11), rating: 0, projects: 2, flagged: true, status: 'suspended' },
      { id: 'USR-1008', name: 'Toufiq Imroz Khan', role: 'Buyer', phone: '01744556677', district: 'Dhaka', kyc: 'verified', joined: d(90), rating: 4.5, flagged: false, status: 'active' }
    ];

    const projects = [
      { id: 'PRJ-2401', title: 'Aman Rice Cultivation — 2 acres', owner: 'Rahima Khatun', ownerId: 'USR-1001', category: 'Crop', district: 'Bogura', goal: 145000, raised: 145000, months: 5, status: 'active', risk: 25, riskLevel: 'low', createdAt: d(46), docs: ['land-deed.pdf'], updates: 3, insured: true, disbursed: 142100, escrow: 0 },
      { id: 'PRJ-2402', title: 'Organic Tomato Tunnel Farm', owner: 'Rahima Khatun', ownerId: 'USR-1001', category: 'Vegetable', district: 'Bogura', goal: 90000, raised: 32800, months: 4, status: 'funding', risk: 31, riskLevel: 'low', createdAt: d(12), docs: [], updates: 0, insured: false, disbursed: 0, escrow: 32800 },
      { id: 'PRJ-2403', title: 'Mango Orchard Expansion', owner: 'Rahima Khatun', ownerId: 'USR-1001', category: 'Crop', district: 'Bogura', goal: 60000, raised: 0, months: 12, status: 'pending', risk: 44, riskLevel: 'medium', createdAt: d(2), docs: ['orchard-photo.jpg'], updates: 0, insured: false, disbursed: 0, escrow: 0 },
      { id: 'PRJ-2404', title: 'Boro Rice on 2 acres', owner: 'Karimul Islam Shezan', ownerId: 'USR-1005', category: 'Crop', district: 'Sirajganj', goal: 120000, raised: 0, months: 5, status: 'pending', risk: 58, riskLevel: 'medium', createdAt: d(1), docs: [], updates: 0, insured: false, disbursed: 0, escrow: 0 },
      { id: 'PRJ-2405', title: 'Nakshi Kantha Womens Collective', owner: 'Fariha Tithy', ownerId: 'USR-1006', category: 'Handicraft', district: 'Rangpur', goal: 45000, raised: 0, months: 6, status: 'pending', risk: 22, riskLevel: 'low', createdAt: d(1), docs: ['group-registration.pdf'], updates: 0, insured: false, disbursed: 0, escrow: 0 },
      { id: 'PRJ-2406', title: 'Meghna River Gold Prawn', owner: 'Jasim Uddin', ownerId: 'USR-1007', category: 'Fisheries', district: 'Jamalpur', goal: 480000, raised: 0, months: 8, status: 'pending', risk: 81, riskLevel: 'high', createdAt: d(3), docs: [], updates: 0, insured: false, disbursed: 0, escrow: 0 },
      { id: 'PRJ-2407', title: 'Layer Poultry Shed — 800 birds', owner: 'Rahima Khatun', ownerId: 'USR-1001', category: 'Poultry', district: 'Bogura', goal: 210000, raised: 210000, months: 6, status: 'active', risk: 38, riskLevel: 'medium', createdAt: d(70), docs: ['shed-plan.pdf'], updates: 7, insured: true, disbursed: 205800, escrow: 0 },
      { id: 'PRJ-2408', title: 'Bogura Premium Red Chilli', owner: 'Rahima Khatun', ownerId: 'USR-1001', category: 'Crop', district: 'Bogura', goal: 75000, raised: 75000, months: 5, status: 'completed', risk: 27, riskLevel: 'low', createdAt: d(190), docs: ['land-deed.pdf'], updates: 9, insured: true, disbursed: 73500, escrow: 0 },
      { id: 'PRJ-2409', title: 'Cattle Fattening — 6 head', owner: 'Jasim Uddin', ownerId: 'USR-1007', category: 'Cattle', district: 'Jamalpur', goal: 300000, raised: 0, months: 4, status: 'rejected', risk: 76, riskLevel: 'high', createdAt: d(9), docs: [], updates: 0, insured: false, disbursed: 0, escrow: 0, note: 'No ownership document and the budget did not match the stated herd size.' }
    ];

    const tx = [
      { id: 'TXN-90121', at: d(0.2), type: 'investment', from: 'Muhutasim Bin Sadik', to: 'Escrow — PRJ-2402', method: 'bKash', amount: 20000, fee: 400, status: 'complete', project: 'PRJ-2402' },
      { id: 'TXN-90118', at: d(1), type: 'investment', from: 'Shamia Akter Tasfi', to: 'Escrow — PRJ-2402', method: 'Nagad', amount: 12800, fee: 256, status: 'complete', project: 'PRJ-2402' },
      { id: 'TXN-90114', at: d(2), type: 'withdrawal', from: 'Rahima Khatun', to: 'bKash 017****891', method: 'bKash', amount: 5000, fee: 0, status: 'complete', project: '' },
      { id: 'TXN-90110', at: d(3), type: 'sale', from: 'Toufiq Imroz Khan', to: 'Rahima Khatun', method: 'Nagad', amount: 1800, fee: 90, status: 'complete', project: '' },
      { id: 'TXN-90104', at: d(4), type: 'disbursement', from: 'Escrow — PRJ-2407', to: 'Rahima Khatun', method: 'Bank transfer', amount: 205800, fee: 4200, status: 'complete', project: 'PRJ-2407' },
      { id: 'TXN-90099', at: d(5), type: 'premium', from: 'Rahima Khatun', to: 'Insurance pool', method: 'Wallet', amount: 5250, fee: 0, status: 'complete', project: 'PRJ-2407' },
      { id: 'TXN-90090', at: d(6), type: 'investment', from: 'Muhutasim Bin Sadik', to: 'Escrow — PRJ-2407', method: 'Bank transfer', amount: 120000, fee: 2400, status: 'complete', project: 'PRJ-2407' },
      { id: 'TXN-90081', at: d(8), type: 'payout', from: 'Escrow — PRJ-2408', to: 'Muhutasim Bin Sadik', method: 'bKash', amount: 42300, fee: 0, status: 'complete', project: 'PRJ-2408' },
      { id: 'TXN-90077', at: d(9), type: 'withdrawal', from: 'Jasim Uddin', to: 'bKash 013****766', method: 'bKash', amount: 48000, fee: 0, status: 'held', project: '' },
      { id: 'TXN-90070', at: d(12), type: 'investment', from: 'Shamia Akter Tasfi', to: 'Escrow — PRJ-2401', method: 'bKash', amount: 50000, fee: 1000, status: 'complete', project: 'PRJ-2401' },
      { id: 'TXN-90066', at: d(14), type: 'refund', from: 'Escrow — PRJ-2409', to: 'Shamia Akter Tasfi', method: 'bKash', amount: 15000, fee: 0, status: 'complete', project: 'PRJ-2409' },
      { id: 'TXN-90061', at: d(18), type: 'claim', from: 'Insurance pool', to: 'Rahima Khatun', method: 'Bank transfer', amount: 18000, fee: 0, status: 'complete', project: 'PRJ-2408' }
    ];

    const disbursements = [
      { id: 'DSB-4401', project: 'PRJ-2402', title: 'Organic Tomato Tunnel Farm', farmer: 'Rahima Khatun', amount: 32800, requested: d(1), agentVerified: true, status: 'pending' },
      { id: 'DSB-4402', project: 'PRJ-2404', title: 'Boro Rice on 2 acres', farmer: 'Karimul Islam Shezan', amount: 120000, requested: d(0.5), agentVerified: false, status: 'pending' }
    ];

    const alerts = [
      { id: uid('AL'), at: d(0.3), text: 'Jasim Uddin attempted a ৳48,000 withdrawal 6 minutes after funds landed. Payout held.', sev: 'high', read: false },
      { id: uid('AL'), at: d(1), text: 'PRJ-2406 requests ৳4,80,000 from an unverified account with no documents.', sev: 'high', read: false },
      { id: uid('AL'), at: d(2), text: 'Three accounts registered from the same device in Jamalpur within an hour.', sev: 'medium', read: false },
      { id: uid('AL'), at: d(4), text: 'PRJ-2402 has had no progress update for 12 days.', sev: 'low', read: true }
    ];

    const disputes = [
      { id: 'DSP-301', at: d(2), raisedBy: 'Shamia Akter Tasfi', against: 'Jasim Uddin', project: 'PRJ-2409', subject: 'Funds taken, no progress shown', detail: 'Invested ৳15,000 in the cattle project. No update in five weeks and the farmer does not answer calls.', status: 'open' },
      { id: 'DSP-302', at: d(6), raisedBy: 'Toufiq Imroz Khan', against: 'Rahima Khatun', project: '', subject: 'Marketplace order arrived short', detail: 'Ordered 3 packs of Chinigura rice, received 2.', status: 'open' },
      { id: 'DSP-300', at: d(20), raisedBy: 'Muhutasim Bin Sadik', against: 'Platform', project: 'PRJ-2408', subject: 'Profit split calculation query', detail: 'Asked how the 4.4% return was computed.', status: 'resolved', resolution: 'Shared the per-investor breakdown; investor satisfied.' }
    ];

    const claims = [
      { id: 'CLM-201', at: d(3), project: 'PRJ-2407', title: 'Layer Poultry Shed — 800 birds', farmer: 'Rahima Khatun', reason: 'Pest or disease outbreak', amount: 64000, agentVerified: true, status: 'pending' },
      { id: 'CLM-202', at: d(1), project: 'PRJ-2401', title: 'Aman Rice Cultivation — 2 acres', farmer: 'Rahima Khatun', reason: 'Flood damage', amount: 40000, agentVerified: false, status: 'pending' },
      { id: 'CLM-199', at: d(18), project: 'PRJ-2408', title: 'Bogura Premium Red Chilli', farmer: 'Rahima Khatun', reason: 'Crop failure', amount: 18000, agentVerified: true, status: 'paid' }
    ];

    const products = [
      { id: 'PRD-701', name: 'Premium Chinigura Rice', seller: 'Rahima Khatun', price: 600, stock: 40, sold: 26, rating: 4.8, status: 'live', reports: 0 },
      { id: 'PRD-702', name: 'Farm Fresh Brown Eggs', seller: 'Rahima Khatun', price: 240, stock: 18, sold: 54, rating: 4.6, status: 'live', reports: 0 },
      { id: 'PRD-703', name: 'Handwoven Bamboo Basket', seller: 'Fariha Tithy', price: 350, stock: 12, sold: 3, rating: 0, status: 'live', reports: 0 },
      { id: 'PRD-704', name: 'Imported Pesticide — bulk', seller: 'Jasim Uddin', price: 2400, stock: 60, sold: 0, rating: 0, status: 'live', reports: 3 }
    ];

    return {
      admin: { id: 'ADM-1042', name: 'System Administrator' },
      users, projects, tx, disbursements, alerts, disputes, claims, products,
      audit: [
        { id: uid('LOG'), at: d(9), by: 'ADM-1042', action: 'Rejected project', target: 'PRJ-2409', note: 'No ownership document.' },
        { id: uid('LOG'), at: d(11), by: 'ADM-1042', action: 'Suspended user', target: 'USR-1007', note: 'Repeated document mismatch.' },
        { id: uid('LOG'), at: d(18), by: 'ADM-1042', action: 'Approved claim', target: 'CLM-199', note: 'Field report confirmed the loss.' }
      ]
    };
  }

  /* ---------------------------------------------------------------- login */
  function setError(id, msg) {
    const el = $(`.field__error[data-for="${id}"]`);
    if (el) { el.textContent = msg; el.classList.add('is-on'); }
    const i = $('#' + id);
    if (i && i.closest('.field')) i.closest('.field').classList.add('is-bad');
  }
  function clearErrors(root) {
    $$('.field__error', root || document).forEach((e) => { e.classList.remove('is-on'); e.textContent = ''; });
    $$('.field.is-bad', root || document).forEach((f) => f.classList.remove('is-bad'));
  }

  function bindLogin() {
    $('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      let ok = true;
      if (!/^ADM-\d{4}$/i.test($('#adId').value.trim())) { setError('adId', 'Admin IDs look like ADM-1042.'); ok = false; }
      if ($('#adPass').value.length < 6) { setError('adPass', 'Password must be at least 6 characters.'); ok = false; }
      if ($('#adOtp').value.trim() !== '482913') { setError('adOtp', 'That one-time code is wrong or expired.'); ok = false; }
      if (!ok) return;
      if (!S) { S = seed(); save(); }
      enterApp();
    });
  }

  function enterApp() {
    $('#authScreen').classList.add('is-hidden');
    $('#app').classList.remove('is-hidden');
    $('#topName').textContent = S.admin.name;
    $('#topMeta').textContent = S.admin.id + ' · full access · all actions logged';
    paintBell(); paintBadges();
    if (!location.hash.startsWith('#/')) location.hash = '#/overview';
    route();
  }

  function paintBell() {
    const unread = S.alerts.filter((a) => !a.read).length;
    $('#bellDot').hidden = unread === 0;
    $('#notifList').innerHTML = S.alerts.length ? S.alerts.slice(0, 12).map((a) => `
      <div class="notif ${a.read ? '' : 'is-new'}">
        <span class="sev sev--${a.sev}" style="margin-top:7px"></span>
        <div><div>${esc(a.text)}</div><time>${ago(a.at)}</time></div>
      </div>`).join('') : '<p class="muted">No alerts.</p>';
  }

  function paintBadges() {
    const set = (el, n) => { el.textContent = n; el.classList.toggle('is-on', n > 0); };
    set($('#badgeApprovals'), S.projects.filter((p) => p.status === 'pending').length);
    set($('#badgeKyc'), S.users.filter((u) => u.kyc === 'pending').length);
    set($('#badgeFraud'), S.alerts.filter((a) => a.sev === 'high' && !a.read).length +
      S.disputes.filter((x) => x.status === 'open').length);
  }

  /* --------------------------------------------------------------- router */
  const routes = {};
  function route() {
    const [name, a] = (location.hash.replace(/^#\//, '') || 'overview').split('/');
    const view = routes[name] || routes.overview;
    $$('[data-nav]').forEach((el) => el.classList.toggle('is-on', el.dataset.nav === name));
    $('#main').innerHTML = view(a);
    $('#rail').classList.remove('is-open');
    paintBadges();
    window.scrollTo(0, 0);
    if (view.after) view.after(a);
    bindRowActions();
  }

  const tag = (s) => {
    const map = {
      pending: ['pending', 'Awaiting review'], funding: ['active', 'Raising funds'],
      active: ['active', 'Running'], completed: ['completed', 'Completed'],
      rejected: ['rejected', 'Rejected'], verified: ['active', 'Verified'],
      suspended: ['rejected', 'Suspended'], open: ['pending', 'Open'],
      resolved: ['completed', 'Resolved'], paid: ['completed', 'Paid'],
      held: ['pending', 'Held'], complete: ['completed', 'Complete'],
      live: ['active', 'Live'], removed: ['rejected', 'Removed'], approved: ['active', 'Approved']
    };
    const [cls, label] = map[s] || ['draft', s];
    return `<span class="tag tag--${cls}">${label}</span>`;
  };

  /* --------------------------------------------------------------- totals */
  function totals() {
    const inflow = S.tx.filter((t) => ['investment', 'sale', 'premium'].includes(t.type) && t.status === 'complete')
      .reduce((a, t) => a + t.amount, 0);
    const outflow = S.tx.filter((t) => ['disbursement', 'payout', 'refund', 'claim', 'withdrawal'].includes(t.type) && t.status === 'complete')
      .reduce((a, t) => a + t.amount, 0);
    const fees = S.tx.reduce((a, t) => a + (t.fee || 0), 0);
    const escrow = S.projects.reduce((a, p) => a + (p.escrow || 0), 0);
    const held = S.tx.filter((t) => t.status === 'held').reduce((a, t) => a + t.amount, 0);
    return { inflow, outflow, fees, escrow, held };
  }

  /* ------------------------------------------------------------- overview */
  routes.overview = function () {
    const T = totals();
    const pend = S.projects.filter((p) => p.status === 'pending').length;
    const kyc = S.users.filter((u) => u.kyc === 'pending').length;
    const openD = S.disputes.filter((x) => x.status === 'open').length;
    const highA = S.alerts.filter((a) => a.sev === 'high').length;
    const funded = S.projects.reduce((a, p) => a + p.raised, 0);
    const goalAll = S.projects.reduce((a, p) => a + p.goal, 0);

    const byDistrict = {};
    S.projects.forEach((p) => { byDistrict[p.district] = (byDistrict[p.district] || 0) + p.raised; });

    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'];
    const flow = [180000, 240000, 310000, 268000, 420000, 352000];
    const max = Math.max.apply(null, flow);

    const roles = ['Farmer', 'Investor', 'Field agent', 'Artisan', 'Buyer']
      .map((r) => ({ r, n: S.users.filter((u) => u.role === r).length }));
    const colours = ['#1B6B3A', '#2C6E8F', '#C8881A', '#7A4FA3', '#B8482C'];

    return `
      <div class="pagehead">
        <div><h1 class="h1">Platform overview</h1>
          <p>${S.users.length} accounts · ${S.projects.length} projects · ${S.tx.length} transactions on record</p></div>
        <div class="row">
          <a class="btn btn--ghost" href="#/reports">Generate report</a>
          <a class="btn btn--primary" href="#/approvals">Review queue (${pend})</a>
        </div>
      </div>

      ${(pend || kyc || openD || highA) ? `<div class="box" style="background:var(--gold-100);border-color:#EBD9AE;margin-bottom:18px">
        <h3 class="h3">Waiting on you</h3>
        <div class="row" style="margin-top:8px">
          ${pend ? `<a class="btn btn--sm btn--ghost" href="#/approvals">${pend} project${pend > 1 ? 's' : ''} to approve</a>` : ''}
          ${kyc ? `<a class="btn btn--sm btn--ghost" href="#/users/pending">${kyc} KYC check${kyc > 1 ? 's' : ''}</a>` : ''}
          ${S.disbursements.filter((x) => x.status === 'pending').length ? `<a class="btn btn--sm btn--ghost" href="#/finance">${S.disbursements.filter((x) => x.status === 'pending').length} disbursement requests</a>` : ''}
          ${openD ? `<a class="btn btn--sm btn--ghost" href="#/fraud">${openD} open dispute${openD > 1 ? 's' : ''}</a>` : ''}
          ${S.claims.filter((c) => c.status === 'pending').length ? `<a class="btn btn--sm btn--ghost" href="#/claims">${S.claims.filter((c) => c.status === 'pending').length} insurance claims</a>` : ''}
        </div></div>` : ''}

      <dl class="cards cols-4" style="margin-bottom:18px">
        <div class="stat stat--green"><dt>Total funded</dt><dd>${taka(funded)}</dd><small>${pct(funded, goalAll)}% of all goals</small></div>
        <div class="stat"><dt>Held in escrow</dt><dd>${taka(T.escrow)}</dd><small>not yet released</small></div>
        <div class="stat stat--gold"><dt>Platform revenue</dt><dd>${taka(T.fees)}</dd><small>commission and fees</small></div>
        <div class="stat"><dt>Flagged for review</dt><dd>${highA + S.tx.filter((t) => t.status === 'held').length}</dd><small>${taka(T.held)} on hold</small></div>
      </dl>

      <div class="cards cols-2" style="margin-bottom:16px">
        <section class="box">
          <div class="box__head"><h3>Money moved through the platform</h3><span class="pcard__meta">last 6 months</span></div>
          <div class="chart">
            ${flow.map((v, i) => `<div class="chart__col">
              <span class="pcard__meta">${Math.round(v / 1000)}k</span>
              <div class="chart__bar" style="height:${Math.round(v / max * 100)}%"></div>
              <span class="chart__lbl">${months[i]}</span></div>`).join('')}
          </div>
        </section>
        <section class="box">
          <div class="box__head"><h3>Who is on the platform</h3></div>
          <div class="split">${roles.map((x, i) =>
            `<span style="flex:${x.n || 0.001};background:${colours[i]}"></span>`).join('')}</div>
          <div class="legend">${roles.map((x, i) =>
            `<span><i style="background:${colours[i]}"></i>${x.r} · ${x.n}</span>`).join('')}</div>
          <div class="box__head" style="margin-top:20px"><h3>Funding by district</h3></div>
          <div class="map">${Object.entries(byDistrict).sort((a, b) => b[1] - a[1]).map(([k, v]) =>
            `<div>${esc(k)}<b>${taka(v)}</b></div>`).join('')}</div>
        </section>
      </div>

      <div class="cards cols-2">
        <section class="box">
          <div class="box__head"><h3>Latest transactions</h3><a class="link" href="#/finance">Open finance</a></div>
          ${txTable(S.tx.slice(0, 5), true)}
        </section>
        <section class="box">
          <div class="box__head"><h3>Audit log</h3><a class="link" href="#/reports">Full log</a></div>
          <ul class="audit">${S.audit.slice(0, 7).map((l) => `<li>
            <time>${stamp(l.at)}</time><div><b>${esc(l.action)}</b> ${esc(l.target)}
            ${l.note ? `<div class="pcard__meta">${esc(l.note)}</div>` : ''}</div></li>`).join('')}</ul>
        </section>
      </div>`;
  };

  function txTable(rows, compact) {
    if (!rows.length) return '<div class="empty"><b>Nothing matches</b>Try a different filter.</div>';
    if (compact) {
      return `<div style="overflow-x:auto"><table><thead><tr>
        <th>Transaction</th><th>Type</th><th class="num">Amount</th><th>Status</th></tr></thead><tbody>
        ${rows.map((t) => `<tr>
          <td><b>${t.id}</b><div class="pcard__meta">${esc(t.from)} → ${esc(t.to)}</div>
            <div class="pcard__meta">${stamp(t.at)}</div></td>
          <td>${t.type}</td>
          <td class="num" style="font-weight:600">${taka(t.amount)}</td>
          <td>${tag(t.status)}</td></tr>`).join('')}</tbody></table></div>`;
    }
    return `<div style="overflow-x:auto"><table><thead><tr>
      <th>ID</th><th>When</th><th>Type</th><th>From \u2192 to</th><th>Method</th>
      <th class="num">Fee</th><th class="num">Amount</th><th>Status</th><th></th>
      </tr></thead><tbody>${rows.map((t) => `<tr>
        <td>${t.id}</td><td>${stamp(t.at)}</td><td>${t.type}</td>
        <td>${esc(t.from)} \u2192 ${esc(t.to)}</td>
        <td>${esc(t.method)}</td><td class="num">${t.fee ? taka(t.fee) : '\u2014'}</td>
        <td class="num" style="font-weight:600">${taka(t.amount)}</td>
        <td>${tag(t.status)}</td>
        <td>${t.status === 'held'
          ? `<button class="btn btn--ghost btn--sm" data-release="${t.id}">Release</button>`
          : `<button class="btn btn--ghost btn--sm" data-txview="${t.id}">View</button>`}</td>
      </tr>`).join('')}</tbody></table></div>`;
  }

  /* ------------------------------------------------------------ approvals */
  routes.approvals = function () {
    const q = S.projects.filter((p) => p.status === 'pending');
    return `
      <div class="pagehead"><div><h1 class="h1">Approval queue</h1>
        <p>Nothing reaches investors until it is approved here. Aim for a 48-hour turnaround.</p></div></div>
      ${q.length ? q.map((p) => {
        const owner = S.users.find((u) => u.id === p.ownerId) || {};
        return `<div class="queue">
          <span class="queue__ico">${CAT[p.category]}</span>
          <div class="queue__main">
            <h4>${esc(p.title)}</h4>
            <div class="pcard__meta">${p.id} · ${esc(p.owner)} (${owner.kyc === 'verified' ? 'KYC verified' : 'KYC ' + owner.kyc}) · ${esc(p.district)} · submitted ${ago(p.createdAt)}</div>
            <div class="row" style="margin-top:8px">
              <span class="tag">Asking ${taka(p.goal)}</span>
              <span class="tag">${p.months} months</span>
              <span class="tag risk-${p.riskLevel}">Risk ${p.risk} — ${p.riskLevel}</span>
              <span class="tag tag--${p.docs.length ? 'active' : 'rejected'}">${p.docs.length ? p.docs.length + ' document(s)' : 'No documents'}</span>
            </div>
            ${p.riskLevel === 'high' || !p.docs.length || owner.kyc !== 'verified' ? `
              <p class="pcard__meta" style="color:var(--clay);margin-top:8px">
                ${[p.riskLevel === 'high' ? 'high risk score' : '', !p.docs.length ? 'no supporting document' : '',
                   owner.kyc !== 'verified' ? 'owner not KYC verified' : ''].filter(Boolean).join(' · ')}
              </p>` : ''}
          </div>
          <div class="queue__acts">
            <button class="btn btn--ghost btn--sm" data-inspect="${p.id}">Inspect</button>
            <button class="btn btn--danger btn--sm" data-reject="${p.id}">Reject</button>
            <button class="btn btn--primary btn--sm" data-approve="${p.id}">Approve</button>
          </div>
        </div>`;
      }).join('')
      : '<div class="empty"><b>Queue is clear</b>Every submitted project has been reviewed.</div>'}`;
  };

  /* ------------------------------------------------------------- projects */
  routes.projects = function (filter) {
    const f = filter || 'all';
    const list = S.projects.filter((p) => f === 'all' || p.status === f);
    return `
      <div class="pagehead"><div><h1 class="h1">All projects</h1>
        <p>Every listing on the platform, at any stage.</p></div>
        <button class="btn btn--ghost" data-export="projects">Export CSV</button></div>
      <div class="tabs">${[['all', 'All'], ['pending', 'Pending'], ['funding', 'Raising'], ['active', 'Running'],
        ['completed', 'Completed'], ['rejected', 'Rejected']].map(([k, l]) =>
        `<button class="${f === k ? 'is-on' : ''}" onclick="location.hash='#/projects/${k}'">${l}</button>`).join('')}</div>
      ${list.length ? `<div class="box"><div style="overflow-x:auto"><table><thead><tr>
        <th>Project</th><th>Owner</th><th>District</th><th class="num">Goal</th><th class="num">Raised</th>
        <th>Risk</th><th>Status</th><th></th></tr></thead><tbody>
        ${list.map((p) => `<tr>
          <td><b>${CAT[p.category]} ${esc(p.title)}</b><div class="pcard__meta">${p.id}</div></td>
          <td>${esc(p.owner)}</td><td>${esc(p.district)}</td>
          <td class="num">${taka(p.goal)}</td>
          <td class="num">${taka(p.raised)}<div class="pcard__meta">${pct(p.raised, p.goal)}%</div></td>
          <td><span class="tag risk-${p.riskLevel}">${p.risk}</span></td>
          <td>${tag(p.status)}</td>
          <td><button class="btn btn--ghost btn--sm" data-inspect="${p.id}">Open</button></td>
        </tr>`).join('')}</tbody></table></div></div>`
        : '<div class="empty"><b>No projects in this state</b>Try another tab.</div>'}`;
  };

  /* ---------------------------------------------------------------- users */
  routes.users = function (filter) {
    const f = filter || 'all';
    const list = S.users.filter((u) => f === 'all' ? true : f === 'pending' ? u.kyc === 'pending'
      : f === 'flagged' ? u.flagged : u.role.toLowerCase().indexOf(f) === 0);
    return `
      <div class="pagehead"><div><h1 class="h1">Users and verification</h1>
        <p>Approve KYC, suspend accounts, and see who is behind every project.</p></div>
        <button class="btn btn--ghost" data-export="users">Export CSV</button></div>
      <div class="tabs">${[['all', 'All'], ['pending', 'KYC pending'], ['farmer', 'Farmers'], ['investor', 'Investors'],
        ['field', 'Field agents'], ['flagged', 'Flagged']].map(([k, l]) =>
        `<button class="${f === k ? 'is-on' : ''}" onclick="location.hash='#/users/${k}'">${l}</button>`).join('')}</div>
      ${list.length ? `<div class="box"><div style="overflow-x:auto"><table><thead><tr>
        <th>User</th><th>Role</th><th>District</th><th>Joined</th><th>KYC</th><th>Account</th><th></th>
        </tr></thead><tbody>${list.map((u) => `<tr>
          <td><b>${esc(u.name)}</b><div class="pcard__meta">${u.id} · ${esc(u.phone)}${u.flagged ? ' · <span style="color:var(--clay)">flagged</span>' : ''}</div></td>
          <td>${esc(u.role)}</td><td>${esc(u.district)}</td><td>${nice(u.joined)}</td>
          <td>${u.kyc === 'verified' ? tag('verified') : u.kyc === 'pending' ? tag('pending') : tag('rejected')}</td>
          <td>${tag(u.status)}</td>
          <td><div class="row">
            ${u.kyc === 'pending' ? `<button class="btn btn--primary btn--sm" data-kyc="${u.id}">Review KYC</button>` : ''}
            <button class="btn btn--ghost btn--sm" data-user="${u.id}">Open</button>
          </div></td></tr>`).join('')}</tbody></table></div></div>`
        : '<div class="empty"><b>No users here</b>Try another tab.</div>'}`;
  };

  /* -------------------------------------------------------------- finance */
  routes.finance = function () {
    const T = totals();
    const pend = S.disbursements.filter((x) => x.status === 'pending');
    return `
      <div class="pagehead"><div><h1 class="h1">Finance</h1>
        <p>Every taka in, out and sitting in escrow.</p></div>
        <button class="btn btn--ghost" data-export="transactions">Export CSV</button></div>

      <dl class="cards cols-4" style="margin-bottom:18px">
        <div class="stat stat--green"><dt>Money in</dt><dd>${taka(T.inflow)}</dd><small>investments, sales, premiums</small></div>
        <div class="stat"><dt>Money out</dt><dd>${taka(T.outflow)}</dd><small>disbursements, payouts, claims</small></div>
        <div class="stat"><dt>In escrow</dt><dd>${taka(T.escrow)}</dd><small>awaiting release</small></div>
        <div class="stat stat--gold"><dt>Platform revenue</dt><dd>${taka(T.fees)}</dd><small>2% on funded amounts</small></div>
      </dl>

      <section class="box" style="margin-bottom:16px">
        <div class="box__head"><h3>Disbursement queue</h3>
          <span class="pcard__meta">Release only after a field agent confirms the site</span></div>
        ${pend.length ? pend.map((x) => `<div class="queue">
          <span class="queue__ico">💸</span>
          <div class="queue__main">
            <h4>${taka(x.amount)} → ${esc(x.farmer)}</h4>
            <div class="pcard__meta">${x.id} · ${esc(x.title)} (${x.project}) · requested ${ago(x.requested)}</div>
            <div class="row" style="margin-top:8px">
              <span class="tag tag--${x.agentVerified ? 'active' : 'pending'}">
                ${x.agentVerified ? 'Field agent verified' : 'No field verification yet'}</span>
              <span class="tag">Fee ${taka(Math.round(x.amount * 0.02))}</span>
            </div>
          </div>
          <div class="queue__acts">
            <button class="btn btn--danger btn--sm" data-dsbhold="${x.id}">Hold</button>
            <button class="btn btn--primary btn--sm" data-dsbrelease="${x.id}">Release funds</button>
          </div></div>`).join('')
          : '<div class="empty"><b>No requests waiting</b>Released disbursements appear in the ledger below.</div>'}
      </section>

      <section class="box">
        <div class="box__head"><h3>Transaction ledger</h3></div>
        <div class="filters">
          <input id="fqText" placeholder="Search name, ID or project">
          <select id="fqType"><option value="">All types</option>
            ${['investment', 'disbursement', 'withdrawal', 'sale', 'payout', 'premium', 'claim', 'refund']
              .map((t) => `<option>${t}</option>`).join('')}</select>
          <select id="fqStatus"><option value="">Any status</option><option>complete</option><option>held</option></select>
          <button class="btn btn--ghost btn--sm" id="fqClear">Clear</button>
        </div>
        <div id="ledger">${txTable(S.tx)}</div>
      </section>`;
  };

  routes.finance.after = function () {
    const apply = () => {
      const q = $('#fqText').value.trim().toLowerCase();
      const ty = $('#fqType').value, st = $('#fqStatus').value;
      const rows = S.tx.filter((t) =>
        (!ty || t.type === ty) && (!st || t.status === st) &&
        (!q || [t.id, t.from, t.to, t.project, t.method].join(' ').toLowerCase().includes(q)));
      $('#ledger').innerHTML = txTable(rows);
      bindRowActions();
    };
    ['fqText', 'fqType', 'fqStatus'].forEach((id) => $('#' + id).addEventListener('input', apply));
    $('#fqClear').addEventListener('click', () => {
      $('#fqText').value = ''; $('#fqType').value = ''; $('#fqStatus').value = ''; apply();
    });
  };

  /* ----------------------------------------------------- fraud & disputes */
  routes.fraud = function () {
    const open = S.disputes.filter((x) => x.status === 'open');
    const closed = S.disputes.filter((x) => x.status !== 'open');
    return `
      <div class="pagehead"><div><h1 class="h1">Fraud and disputes</h1>
        <p>Signals raised by the system, plus complaints raised by people.</p></div></div>

      <section class="box" style="margin-bottom:16px">
        <div class="box__head"><h3>Security alerts</h3>
          <span class="pcard__meta">${S.alerts.filter((a) => a.sev === 'high').length} high severity</span></div>
        ${S.alerts.map((a) => `<div class="queue">
          <span class="queue__ico">${a.sev === 'high' ? '🚨' : a.sev === 'medium' ? '⚠️' : 'ℹ️'}</span>
          <div class="queue__main">
            <h4><span class="sev sev--${a.sev}"></span>${esc(a.text)}</h4>
            <div class="pcard__meta">${a.id} · ${ago(a.at)} · ${a.sev} severity</div>
          </div>
          <div class="queue__acts">
            <button class="btn btn--ghost btn--sm" data-dismiss="${a.id}">Dismiss</button>
            <button class="btn btn--danger btn--sm" data-escalate="${a.id}">Freeze account</button>
          </div></div>`).join('')}
      </section>

      <section class="box">
        <div class="box__head"><h3>Disputes</h3><span class="pcard__meta">${open.length} open</span></div>
        ${[...open, ...closed].map((x) => `<div class="queue">
          <span class="queue__ico">⚖️</span>
          <div class="queue__main">
            <h4>${esc(x.subject)} ${tag(x.status)}</h4>
            <div class="pcard__meta">${x.id} · ${esc(x.raisedBy)} against ${esc(x.against)}${x.project ? ' · ' + x.project : ''} · ${ago(x.at)}</div>
            <p style="margin:8px 0 0;color:var(--ink-2);font-size:14px">${esc(x.detail)}</p>
            ${x.resolution ? `<p class="pcard__meta" style="margin-top:6px">Resolution: ${esc(x.resolution)}</p>` : ''}
          </div>
          ${x.status === 'open' ? `<div class="queue__acts">
            <button class="btn btn--primary btn--sm" data-resolve="${x.id}">Resolve</button></div>` : ''}
        </div>`).join('')}
      </section>`;
  };

  /* ------------------------------------------------------ insurance claims */
  routes.claims = function () {
    const pool = S.tx.filter((t) => t.type === 'premium').reduce((a, t) => a + t.amount, 0);
    const paid = S.claims.filter((c) => c.status === 'paid').reduce((a, c) => a + c.amount, 0);
    return `
      <div class="pagehead"><div><h1 class="h1">Insurance claims</h1>
        <p>Claims are paid from the central pool once a field agent confirms the loss.</p></div></div>
      <dl class="cards cols-3" style="margin-bottom:18px">
        <div class="stat stat--green"><dt>Pool balance</dt><dd>${taka(pool - paid)}</dd><small>${taka(pool)} collected</small></div>
        <div class="stat"><dt>Paid out</dt><dd>${taka(paid)}</dd></div>
        <div class="stat stat--gold"><dt>Awaiting decision</dt><dd>${S.claims.filter((c) => c.status === 'pending').length}</dd></div>
      </dl>
      ${S.claims.map((c) => `<div class="queue">
        <span class="queue__ico">🛡️</span>
        <div class="queue__main">
          <h4>${taka(c.amount)} — ${esc(c.reason)} ${tag(c.status)}</h4>
          <div class="pcard__meta">${c.id} · ${esc(c.title)} (${c.project}) · ${esc(c.farmer)} · filed ${ago(c.at)}</div>
          <div class="row" style="margin-top:8px">
            <span class="tag tag--${c.agentVerified ? 'active' : 'pending'}">
              ${c.agentVerified ? 'Loss verified on site' : 'Field visit not done'}</span></div>
        </div>
        ${c.status === 'pending' ? `<div class="queue__acts">
          <button class="btn btn--danger btn--sm" data-claimreject="${c.id}">Reject</button>
          <button class="btn btn--primary btn--sm" data-claimpay="${c.id}" ${c.agentVerified ? '' : 'disabled title="Needs field verification first"'}>Approve payout</button>
        </div>` : ''}
      </div>`).join('')}`;
  };

  /* ---------------------------------------------------------- marketplace */
  routes.market = function () {
    const gmv = S.products.reduce((a, p) => a + p.price * p.sold, 0);
    return `
      <div class="pagehead"><div><h1 class="h1">Marketplace moderation</h1>
        <p>Listings from farmers and artisans. Reported items come to the top.</p></div></div>
      <dl class="cards cols-3" style="margin-bottom:18px">
        <div class="stat"><dt>Live listings</dt><dd>${S.products.filter((p) => p.status === 'live').length}</dd></div>
        <div class="stat stat--green"><dt>Goods sold</dt><dd>${taka(gmv)}</dd></div>
        <div class="stat"><dt>Reported</dt><dd>${S.products.filter((p) => p.reports > 0).length}</dd></div>
      </dl>
      <div class="box"><div style="overflow-x:auto"><table><thead><tr>
        <th>Product</th><th>Seller</th><th class="num">Price</th><th class="num">Stock</th>
        <th class="num">Sold</th><th>Reports</th><th>Status</th><th></th></tr></thead><tbody>
        ${[...S.products].sort((a, b) => b.reports - a.reports).map((p) => `<tr>
          <td><b>${esc(p.name)}</b><div class="pcard__meta">${p.id}</div></td>
          <td>${esc(p.seller)}</td><td class="num">${taka(p.price)}</td>
          <td class="num">${p.stock}</td><td class="num">${p.sold}</td>
          <td>${p.reports ? `<span class="tag tag--rejected">${p.reports}</span>` : '—'}</td>
          <td>${tag(p.status)}</td>
          <td>${p.status === 'live'
            ? `<button class="btn btn--danger btn--sm" data-takedown="${p.id}">Take down</button>`
            : `<button class="btn btn--ghost btn--sm" data-restore="${p.id}">Restore</button>`}</td>
        </tr>`).join('')}</tbody></table></div></div>`;
  };

  /* ------------------------------------------------------ reports & audit */
  routes.reports = function () {
    const T = totals();
    return `
      <div class="pagehead"><div><h1 class="h1">Reports and audit log</h1>
        <p>Export platform data, or read back every decision made in this console.</p></div></div>
      <div class="cards cols-3" style="margin-bottom:18px">
        ${[['projects', 'Projects', 'Every listing with owner, goal, raised amount, risk and status.'],
           ['users', 'Users and KYC', 'Accounts with role, district, verification and account state.'],
           ['transactions', 'Transaction ledger', 'All money movements with fees, methods and status.']]
          .map(([k, t, d2]) => `<section class="box">
            <h3 class="h3">${t}</h3><p class="pcard__meta" style="margin:6px 0 12px">${d2}</p>
            <button class="btn btn--ghost btn--sm" data-export="${k}">Download CSV</button></section>`).join('')}
      </div>

      <section class="box" style="margin-bottom:16px">
        <div class="box__head"><h3>Quarterly summary</h3></div>
        <dl class="kv">
          <dt>Total inflow</dt><dd>${taka(T.inflow)}</dd>
          <dt>Total outflow</dt><dd>${taka(T.outflow)}</dd>
          <dt>Escrow held</dt><dd>${taka(T.escrow)}</dd>
          <dt>Platform revenue</dt><dd>${taka(T.fees)}</dd>
          <dt>Projects funded</dt><dd>${S.projects.filter((p) => p.raised >= p.goal && p.goal > 0).length} of ${S.projects.length}</dd>
          <dt>Approval rate</dt><dd>${pct(S.projects.filter((p) => p.status !== 'rejected' && p.status !== 'pending').length,
            S.projects.filter((p) => p.status !== 'pending').length)}%</dd>
          <dt>Claims paid</dt><dd>${taka(S.claims.filter((c) => c.status === 'paid').reduce((a, c) => a + c.amount, 0))}</dd>
        </dl>
      </section>

      <section class="box">
        <div class="box__head"><h3>Audit log</h3><span class="pcard__meta">${S.audit.length} entries</span></div>
        <ul class="audit">${S.audit.map((l) => `<li><time>${stamp(l.at)}</time>
          <div><b>${esc(l.action)}</b> ${esc(l.target)} <span class="pcard__meta">by ${esc(l.by)}</span>
          ${l.note ? `<div class="pcard__meta">${esc(l.note)}</div>` : ''}</div></li>`).join('')}</ul>
      </section>`;
  };

  /* ------------------------------------------------------------- actions */
  function modal(title, body, onOpen) {
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = body;
    $('#modal').hidden = false;
    if (onOpen) onOpen();
  }
  const closeModal = () => { $('#modal').hidden = true; };
  const P = (id) => S.projects.find((x) => x.id === id);
  const U = (id) => S.users.find((x) => x.id === id);

  function on(attr, fn, root) {
    $$('[data-' + attr + ']', root || document).forEach((b) =>
      b.addEventListener('click', () => fn(b.dataset[attr], b)));
  }

  function bindRowActions() {
    on('approve', approveProject);
    on('reject', rejectProject);
    on('inspect', inspectProject);
    on('kyc', kycModal);
    on('user', userModal);
    on('dsbrelease', releaseDisbursement);
    on('dsbhold', (id) => {
      const x = S.disbursements.find((y) => y.id === id);
      x.status = 'held';
      log('Held disbursement', x.id, 'Held pending field verification.');
      alertMsg('Disbursement ' + x.id + ' held by admin.', 'medium');
      save(); toast('Disbursement held.'); route();
    });
    on('release', (id) => {
      const t = S.tx.find((x) => x.id === id);
      t.status = 'complete';
      log('Released held payment', t.id, taka(t.amount) + ' to ' + t.to);
      save(); toast('Payment released.'); route();
    });
    on('txview', (id) => {
      const t = S.tx.find((x) => x.id === id);
      modal('Transaction ' + t.id, `<dl class="kv">
        <dt>Type</dt><dd>${t.type}</dd><dt>When</dt><dd>${stamp(t.at)}</dd>
        <dt>From</dt><dd>${esc(t.from)}</dd><dt>To</dt><dd>${esc(t.to)}</dd>
        <dt>Method</dt><dd>${esc(t.method)}</dd><dt>Amount</dt><dd>${taka(t.amount)}</dd>
        <dt>Platform fee</dt><dd>${t.fee ? taka(t.fee) : 'None'}</dd>
        <dt>Project</dt><dd>${t.project || '—'}</dd><dt>Status</dt><dd>${t.status}</dd></dl>`);
    });
    on('dismiss', (id) => {
      S.alerts = S.alerts.filter((a) => a.id !== id);
      log('Dismissed alert', id, '');
      save(); paintBell(); toast('Alert dismissed.'); route();
    });
    on('escalate', freezeModal);
    on('resolve', resolveModal);
    on('claimpay', payClaim);
    on('claimreject', rejectClaim);
    on('takedown', (id) => {
      const p = S.products.find((x) => x.id === id);
      p.status = 'removed';
      log('Removed listing', p.id, esc(p.name));
      save(); toast('Listing taken down.'); route();
    });
    on('restore', (id) => {
      const p = S.products.find((x) => x.id === id);
      p.status = 'live'; p.reports = 0;
      log('Restored listing', p.id, esc(p.name));
      save(); toast('Listing restored.'); route();
    });
    on('export', exportCsv);
  }

  function approveProject(id) {
    const p = P(id);
    const owner = U(p.ownerId) || {};
    const warn = [];
    if (owner.kyc !== 'verified') warn.push('the owner is not KYC verified');
    if (!p.docs.length) warn.push('no supporting document is attached');
    if (p.riskLevel === 'high') warn.push('the risk score is ' + p.risk);
    modal('Approve ' + p.id, `
      <p class="muted">Approving publishes this listing to every investor immediately.</p>
      <dl class="kv" style="margin-bottom:14px">
        <dt>Project</dt><dd>${esc(p.title)}</dd>
        <dt>Owner</dt><dd>${esc(p.owner)}</dd>
        <dt>Asking</dt><dd>${taka(p.goal)} over ${p.months} months</dd>
        <dt>Risk</dt><dd>${p.risk} (${p.riskLevel})</dd></dl>
      ${warn.length ? `<div class="box" style="background:var(--clay-100);border-color:#EFC9BE;margin-bottom:14px">
        <b>Approve anyway?</b><p style="margin:6px 0 0">Blocking issues: ${warn.join(', ')}.</p></div>` : ''}
      <label class="field"><span class="field__label">Note for the audit log</span>
        <input id="apNote" placeholder="Optional"></label>
      <button class="btn btn--primary btn--block" id="apGo">Approve and publish</button>`, () => {
      $('#apGo').addEventListener('click', () => {
        p.status = 'funding';
        log('Approved project', p.id, $('#apNote').value.trim() || 'Published to investors.');
        save(); closeModal(); toast(p.id + ' approved and published.'); route();
      });
    });
  }

  function rejectProject(id) {
    const p = P(id);
    modal('Reject ' + p.id, `
      <p class="muted">The farmer sees your reason and can fix and resubmit.</p>
      <label class="field"><span class="field__label">Reason</span>
        <select id="rjReason">
          <option>Missing ownership or land document</option>
          <option>Budget does not match the stated work</option>
          <option>Owner identity not verified</option>
          <option>Risk too high for the requested amount</option>
          <option>Duplicate of an existing listing</option>
          <option>Suspected fraudulent listing</option>
        </select></label>
      <label class="field"><span class="field__label">What should they change?</span>
        <textarea id="rjNote" placeholder="Be specific — this is the only guidance they get."></textarea>
        <span class="field__error" data-for="rjNote"></span></label>
      <button class="btn btn--danger btn--block" id="rjGo">Reject listing</button>`, () => {
      $('#rjGo').addEventListener('click', () => {
        clearErrors($('#modalBody'));
        if ($('#rjNote').value.trim().length < 12) { setError('rjNote', 'Write at least a sentence of guidance.'); return; }
        p.status = 'rejected';
        p.note = $('#rjReason').value + ' — ' + $('#rjNote').value.trim();
        log('Rejected project', p.id, p.note);
        save(); closeModal(); toast(p.id + ' rejected.'); route();
      });
    });
  }

  function inspectProject(id) {
    const p = P(id);
    const owner = U(p.ownerId) || {};
    const money = S.tx.filter((t) => t.project === p.id);
    modal(p.id + ' — ' + p.title, `
      <dl class="kv" style="margin-bottom:14px">
        <dt>Category</dt><dd>${CAT[p.category]} ${p.category}</dd>
        <dt>Owner</dt><dd>${esc(p.owner)} · ${owner.kyc || 'unknown'} · ${owner.status || ''}</dd>
        <dt>District</dt><dd>${esc(p.district)}</dd>
        <dt>Goal</dt><dd>${taka(p.goal)}</dd>
        <dt>Raised</dt><dd>${taka(p.raised)} (${pct(p.raised, p.goal)}%)</dd>
        <dt>In escrow</dt><dd>${taka(p.escrow)}</dd>
        <dt>Disbursed</dt><dd>${taka(p.disbursed)}</dd>
        <dt>Risk score</dt><dd>${p.risk} (${p.riskLevel})</dd>
        <dt>Progress updates</dt><dd>${p.updates}</dd>
        <dt>Insurance</dt><dd>${p.insured ? 'Covered' : 'None'}</dd>
        <dt>Documents</dt><dd>${p.docs.length ? p.docs.map(esc).join(', ') : 'None attached'}</dd>
        <dt>Status</dt><dd>${p.status}</dd>
      </dl>
      ${p.note ? `<p class="hint">Review note: ${esc(p.note)}</p>` : ''}
      <h4 class="h3" style="margin-top:6px">Money on this project</h4>
      ${money.length ? txTable(money, true) : '<p class="muted">No transactions yet.</p>'}
      <div class="row" style="margin-top:14px">
        ${p.status === 'pending' ? `<button class="btn btn--primary btn--sm" data-approve="${p.id}">Approve</button>
          <button class="btn btn--danger btn--sm" data-reject="${p.id}">Reject</button>` : ''}
        ${['funding', 'active'].includes(p.status) ? `<button class="btn btn--danger btn--sm" data-suspendp="${p.id}">Suspend project</button>` : ''}
      </div>`, () => {
      const box = $('#modalBody');
      on('suspendp', (pid) => {
        const pr = P(pid);
        pr.status = 'rejected';
        pr.note = 'Suspended by admin after publication.';
        log('Suspended project', pr.id, 'Removed from the investor feed.');
        alertMsg(pr.id + ' suspended by admin.', 'medium');
        save(); closeModal(); toast('Project suspended.'); route();
      }, box);
      on('approve', (pid) => { closeModal(); approveProject(pid); }, box);
      on('reject', (pid) => { closeModal(); rejectProject(pid); }, box);
    });
  }

  function kycModal(id) {
    const u = U(id);
    modal('KYC review — ' + u.name, `
      <p class="muted">Check the NID photo against the name and phone on the account.</p>
      <dl class="kv" style="margin-bottom:14px">
        <dt>Name</dt><dd>${esc(u.name)}</dd><dt>Role</dt><dd>${esc(u.role)}</dd>
        <dt>Phone</dt><dd>${esc(u.phone)}</dd><dt>District</dt><dd>${esc(u.district)}</dd>
        <dt>Joined</dt><dd>${nice(u.joined)}</dd>
        <dt>NID on file</dt><dd>Uploaded, legible</dd></dl>
      <div class="thumbs" style="margin-bottom:14px"><span class="thumb">🪪</span><span class="thumb">🧑</span></div>
      <label class="field"><span class="field__label">Note</span><input id="kyNote" placeholder="Optional"></label>
      <div class="row">
        <button class="btn btn--danger" id="kyNo">Reject</button>
        <button class="btn btn--primary" id="kyYes">Verify account</button></div>`, () => {
      $('#kyYes').addEventListener('click', () => {
        u.kyc = 'verified';
        log('Verified user', u.id, $('#kyNote').value.trim() || 'NID matched.');
        save(); closeModal(); toast(u.name + ' is verified.'); route();
      });
      $('#kyNo').addEventListener('click', () => {
        u.kyc = 'rejected';
        log('Rejected KYC', u.id, $('#kyNote').value.trim() || 'Document did not match.');
        save(); closeModal(); toast('KYC rejected.', true); route();
      });
    });
  }

  function userModal(id) {
    const u = U(id);
    const own = S.projects.filter((p) => p.ownerId === u.id);
    const money = S.tx.filter((t) => t.from === u.name || t.to === u.name);
    modal(u.name, `
      <dl class="kv" style="margin-bottom:14px">
        <dt>User ID</dt><dd>${u.id}</dd><dt>Role</dt><dd>${esc(u.role)}</dd>
        <dt>Phone</dt><dd>${esc(u.phone)}</dd><dt>District</dt><dd>${esc(u.district)}</dd>
        <dt>KYC</dt><dd>${u.kyc}</dd><dt>Account</dt><dd>${u.status}</dd>
        <dt>Joined</dt><dd>${nice(u.joined)}</dd>
        <dt>Rating</dt><dd>${u.rating || '—'}</dd>
        ${u.invested ? `<dt>Invested</dt><dd>${taka(u.invested)}</dd>` : ''}
        ${u.visits ? `<dt>Field visits</dt><dd>${u.visits}</dd>` : ''}</dl>
      ${own.length ? `<h4 class="h3">Projects</h4><ul class="audit">${own.map((p) =>
        `<li><time>${nice(p.createdAt)}</time><div><b>${esc(p.title)}</b> ${p.status} · ${taka(p.goal)}</div></li>`).join('')}</ul>` : ''}
      <h4 class="h3" style="margin-top:14px">Money</h4>
      ${money.length ? txTable(money.slice(0, 6), true) : '<p class="muted">No transactions.</p>'}
      <div class="row" style="margin-top:14px">
        ${u.status === 'active'
          ? `<button class="btn btn--danger btn--sm" id="suspU">Suspend account</button>`
          : `<button class="btn btn--primary btn--sm" id="restU">Restore account</button>`}
      </div>`, () => {
      const s = $('#suspU'), r = $('#restU');
      if (s) s.addEventListener('click', () => {
        u.status = 'suspended'; u.flagged = true;
        log('Suspended user', u.id, 'Account frozen by admin.');
        alertMsg(u.name + ' was suspended.', 'medium');
        save(); closeModal(); toast('Account suspended.', true); route();
      });
      if (r) r.addEventListener('click', () => {
        u.status = 'active'; u.flagged = false;
        log('Restored user', u.id, 'Account reinstated.');
        save(); closeModal(); toast('Account restored.'); route();
      });
    });
  }

  function releaseDisbursement(id) {
    const x = S.disbursements.find((y) => y.id === id);
    const p = P(x.project);
    modal('Release ' + taka(x.amount), `
      <p class="muted">Money leaves escrow and reaches the farmer's wallet immediately.</p>
      <dl class="kv" style="margin-bottom:14px">
        <dt>Project</dt><dd>${esc(x.title)} (${x.project})</dd>
        <dt>Farmer</dt><dd>${esc(x.farmer)}</dd>
        <dt>Gross</dt><dd>${taka(x.amount)}</dd>
        <dt>Platform fee</dt><dd>${taka(Math.round(x.amount * 0.02))}</dd>
        <dt>Net to farmer</dt><dd>${taka(x.amount - Math.round(x.amount * 0.02))}</dd>
        <dt>Field verification</dt><dd>${x.agentVerified ? 'Done' : 'Not done'}</dd></dl>
      ${x.agentVerified ? '' : `<div class="box" style="background:var(--clay-100);border-color:#EFC9BE;margin-bottom:14px">
        <b>No field report on file.</b><p style="margin:6px 0 0">Releasing without verification goes against policy and is recorded against your ID.</p></div>`}
      <label class="field"><span class="field__label">Send via</span>
        <select id="dsMethod"><option>bKash</option><option>Nagad</option><option>Bank transfer</option></select></label>
      <button class="btn btn--primary btn--block" id="dsGo">Release funds</button>`, () => {
      $('#dsGo').addEventListener('click', () => {
        const fee = Math.round(x.amount * 0.02);
        const net = x.amount - fee;
        x.status = 'released';
        if (p) { p.escrow = Math.max(0, p.escrow - x.amount); p.disbursed += net; }
        S.disbursements = S.disbursements.filter((y) => y.id !== x.id);
        S.tx.unshift({
          id: uid('TXN'), at: new Date().toISOString(), type: 'disbursement',
          from: 'Escrow — ' + x.project, to: x.farmer, method: $('#dsMethod').value,
          amount: net, fee, status: 'complete', project: x.project
        });
        log('Released disbursement', x.id, taka(net) + ' to ' + x.farmer +
          (x.agentVerified ? '' : ' (no field verification)'));
        save(); closeModal(); toast('Funds released.'); route();
      });
    });
  }

  function freezeModal(alertId) {
    const a = S.alerts.find((x) => x.id === alertId);
    modal('Freeze an account', `
      <p class="muted">${esc(a.text)}</p>
      <label class="field"><span class="field__label">Account to freeze</span>
        <select id="fzUser">${S.users.map((u) => `<option value="${u.id}">${esc(u.name)} — ${u.role}</option>`).join('')}</select></label>
      <label class="field"><span class="field__label">Reason for the log</span>
        <textarea id="fzNote" placeholder="What the signal was and why freezing is proportionate."></textarea>
        <span class="field__error" data-for="fzNote"></span></label>
      <button class="btn btn--danger btn--block" id="fzGo">Freeze account and hold payouts</button>`, () => {
      $('#fzGo').addEventListener('click', () => {
        clearErrors($('#modalBody'));
        if ($('#fzNote').value.trim().length < 12) { setError('fzNote', 'Record why — this is a serious action.'); return; }
        const u = U($('#fzUser').value);
        u.status = 'suspended'; u.flagged = true;
        S.tx.filter((t) => t.from === u.name && t.type === 'withdrawal' && t.status !== 'complete')
          .forEach((t) => { t.status = 'held'; });
        a.read = true;
        log('Froze account', u.id, $('#fzNote').value.trim());
        save(); closeModal(); toast(u.name + ' frozen, payouts held.', true); route();
      });
    });
  }

  function resolveModal(id) {
    const x = S.disputes.find((y) => y.id === id);
    modal('Resolve ' + x.id, `
      <p class="muted">${esc(x.subject)} — ${esc(x.raisedBy)} against ${esc(x.against)}</p>
      <label class="field"><span class="field__label">Outcome</span>
        <select id="dsOut">
          <option>Refund the complainant from escrow</option>
          <option>Warning issued to the other party</option>
          <option>Account suspended pending investigation</option>
          <option>No action — complaint not upheld</option>
          <option>Settled between the parties</option>
        </select></label>
      <label class="field"><span class="field__label">What you decided and why</span>
        <textarea id="dsNote"></textarea><span class="field__error" data-for="dsNote"></span></label>
      <button class="btn btn--primary btn--block" id="dsRes">Close dispute</button>`, () => {
      $('#dsRes').addEventListener('click', () => {
        clearErrors($('#modalBody'));
        if ($('#dsNote').value.trim().length < 12) { setError('dsNote', 'Both parties see this. Write a proper explanation.'); return; }
        x.status = 'resolved';
        x.resolution = $('#dsOut').value + ' — ' + $('#dsNote').value.trim();
        log('Resolved dispute', x.id, x.resolution);
        save(); closeModal(); toast('Dispute closed.'); route();
      });
    });
  }

  function payClaim(id) {
    const c = S.claims.find((x) => x.id === id);
    modal('Approve claim ' + c.id, `
      <dl class="kv" style="margin-bottom:14px">
        <dt>Project</dt><dd>${esc(c.title)}</dd><dt>Farmer</dt><dd>${esc(c.farmer)}</dd>
        <dt>Cause</dt><dd>${esc(c.reason)}</dd><dt>Payout</dt><dd>${taka(c.amount)}</dd>
        <dt>Field report</dt><dd>${c.agentVerified ? 'Loss confirmed on site' : 'Missing'}</dd></dl>
      <label class="field"><span class="field__label">Assessor note</span>
        <input id="clNote" placeholder="Optional"></label>
      <button class="btn btn--primary btn--block" id="clGo">Pay ${taka(c.amount)} from the pool</button>`, () => {
      $('#clGo').addEventListener('click', () => {
        c.status = 'paid';
        S.tx.unshift({
          id: uid('TXN'), at: new Date().toISOString(), type: 'claim',
          from: 'Insurance pool', to: c.farmer, method: 'Bank transfer',
          amount: c.amount, fee: 0, status: 'complete', project: c.project
        });
        log('Approved claim', c.id, taka(c.amount) + ' paid — ' + ($('#clNote').value.trim() || c.reason));
        save(); closeModal(); toast('Claim paid.'); route();
      });
    });
  }

  function rejectClaim(id) {
    const c = S.claims.find((x) => x.id === id);
    modal('Reject claim ' + c.id, `
      <label class="field"><span class="field__label">Why the claim fails</span>
        <textarea id="crNote" placeholder="The farmer sees this and can appeal once."></textarea>
        <span class="field__error" data-for="crNote"></span></label>
      <button class="btn btn--danger btn--block" id="crGo">Reject claim</button>`, () => {
      $('#crGo').addEventListener('click', () => {
        clearErrors($('#modalBody'));
        if ($('#crNote').value.trim().length < 12) { setError('crNote', 'Give a reason the farmer can act on.'); return; }
        c.status = 'rejected';
        log('Rejected claim', c.id, $('#crNote').value.trim());
        save(); closeModal(); toast('Claim rejected.', true); route();
      });
    });
  }

  /* ----------------------------------------------------------- CSV export */
  function exportCsv(kind) {
    const sets = {
      projects: {
        head: ['id', 'title', 'owner', 'category', 'district', 'goal', 'raised', 'risk', 'status'],
        rows: S.projects.map((p) => [p.id, p.title, p.owner, p.category, p.district, p.goal, p.raised, p.risk, p.status])
      },
      users: {
        head: ['id', 'name', 'role', 'phone', 'district', 'kyc', 'status', 'joined'],
        rows: S.users.map((u) => [u.id, u.name, u.role, u.phone, u.district, u.kyc, u.status, u.joined.slice(0, 10)])
      },
      transactions: {
        head: ['id', 'date', 'type', 'from', 'to', 'method', 'amount', 'fee', 'status', 'project'],
        rows: S.tx.map((t) => [t.id, t.at.slice(0, 10), t.type, t.from, t.to, t.method, t.amount, t.fee || 0, t.status, t.project])
      }
    };
    const set = sets[kind];
    if (!set) return;
    const csv = [set.head, ...set.rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    log('Exported report', kind, set.rows.length + ' rows');
    save();
    try {
      const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'grambandhan-' + kind + '-' + new Date().toISOString().slice(0, 10) + '.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast(kind + ' report downloaded.');
    } catch (e) {
      modal('Report — ' + kind, `<p class="muted">Downloads are blocked here. Copy the CSV below.</p>
        <textarea class="inp" rows="12" readonly>${esc(csv)}</textarea>`);
    }
  }

  /* ------------------------------------------------------- global search */
  function globalSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) return;
    const hits = [];
    S.projects.filter((p) => (p.id + p.title + p.owner).toLowerCase().includes(q))
      .forEach((p) => hits.push(['Project', p.title, p.id, () => inspectProject(p.id)]));
    S.users.filter((u) => (u.id + u.name + u.phone).toLowerCase().includes(q))
      .forEach((u) => hits.push(['User', u.name, u.id, () => userModal(u.id)]));
    S.tx.filter((t) => (t.id + t.from + t.to).toLowerCase().includes(q))
      .forEach((t) => hits.push(['Transaction', t.type + ' ' + taka(t.amount), t.id, null]));
    modal('Search results for "' + q + '"', hits.length
      ? `<ul class="audit">${hits.slice(0, 20).map((h, i) => `<li>
          <time>${h[0]}</time><div><b>${esc(h[1])}</b> <span class="pcard__meta">${h[2]}</span>
          ${h[3] ? `<button class="link" data-hit="${i}" style="margin-left:8px">Open</button>` : ''}</div></li>`).join('')}</ul>`
      : '<p class="muted">Nothing matched. Try an ID, a name or a phone number.</p>', () => {
      $$('[data-hit]').forEach((b) => b.addEventListener('click', () => {
        const fn = hits[+b.dataset.hit][3];
        closeModal(); if (fn) fn();
      }));
    });
  }

  /* ----------------------------------------------------------------- boot */
  function boot() {
    try {
      const t = localStorage.getItem(KEY + '.theme');
      if (t) document.documentElement.setAttribute('data-theme', t);
    } catch (e) {}
    bindLogin();
    S = load();

    $('#menuBtn').addEventListener('click', () => $('#rail').classList.toggle('is-open'));
    $('#bellBtn').addEventListener('click', () => { $('#notifPanel').hidden = !$('#notifPanel').hidden; });
    $('#notifClose').addEventListener('click', () => { $('#notifPanel').hidden = true; });
    $('#notifClear').addEventListener('click', () => {
      S.alerts.forEach((a) => { a.read = true; });
      save(); paintBell(); paintBadges(); toast('Alerts marked as read.');
    });
    $('#logoutBtn').addEventListener('click', () => {
      $('#app').classList.add('is-hidden');
      $('#authScreen').classList.remove('is-hidden');
      $('#adOtp').value = '';
    });
    $('#globalSearch').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') globalSearch(e.target.value);
    });
    $('#modalClose').addEventListener('click', closeModal);
    $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { closeModal(); $('#notifPanel').hidden = true; }
    });
    window.addEventListener('hashchange', () => { if (S) route(); });

    if (S && S.admin) enterApp();
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
