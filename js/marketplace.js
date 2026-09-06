/* ===================== Grambandhan — Marketplace ===================== */

(function () {
  const user = gbInitPage(null, 'marketplace.html');
  if (!user) return;

  const canBuy = ['BUYER', 'INVESTOR'].includes(user.role);
  const canSell = user.role === 'FARMER';

  renderActions();
  renderFilters();
  renderGrid(gbAll('productListings').filter(l => l.status === 'ACTIVE'));

  function renderActions() {
    const el = document.getElementById('marketplace-actions');
    let html = '';
    if (canSell) html += `<a class="gb-btn gb-btn-primary" href="product-form.html">+ List a product</a>`;
    if (canBuy) html += `<button class="gb-btn gb-btn-gold" id="btn-cart">🛒 Cart (<span id="cart-count">${gbCartItemCount(user.id)}</span>)</button>`;
    el.innerHTML = html;
    if (canBuy) document.getElementById('btn-cart').addEventListener('click', openCartModal);
  }

  function renderFilters() {
    const categories = [...new Set(gbAll('productListings').map(l => l.category))];
    const catSelect = document.getElementById('m-category');
    categories.forEach(c => catSelect.insertAdjacentHTML('beforeend', `<option>${gbEsc(c)}</option>`));

    ['m-search', 'm-category', 'm-women'].forEach(id => {
      document.getElementById(id).addEventListener('input', applyFilters);
    });
  }

  function applyFilters() {
    const search = document.getElementById('m-search').value.toLowerCase();
    const cat = document.getElementById('m-category').value;
    const womenOnly = document.getElementById('m-women').checked;
    const list = gbAll('productListings').filter(l => {
      if (l.status !== 'ACTIVE') return false;
      if (search && !l.name.toLowerCase().includes(search)) return false;
      if (cat && l.category !== cat) return false;
      if (womenOnly && !l.isWomenLed) return false;
      return true;
    });
    renderGrid(list);
  }

  function renderGrid(list) {
    const grid = document.getElementById('marketplace-grid');
    if (!list.length) {
      grid.innerHTML = `<div class="gb-empty" style="grid-column:1/-1;"><div class="icon">🛒</div>No products match yet.</div>`;
      return;
    }
    grid.innerHTML = list.map(l => {
      const producer = gbGetById('users', l.producerId);
      return `
      <div class="glass-card gb-product-card">
        <div class="gb-card-media" style="background:linear-gradient(135deg,#0284C7,#0C4A6E); align-items:flex-start;">
          ${l.isWomenLed ? '<span class="gb-badge gb-badge-women">Women-led</span>' : ''}
        </div>
        <h4 style="margin:0;">${gbEsc(l.name)}</h4>
        <div style="font-size:12.5px; opacity:0.8;">${gbEsc(l.category)} · by ${gbEsc(producer ? producer.name : 'Unknown')}</div>
        <div style="font-size:12px; opacity:0.7;">Delivery: ${gbEsc(l.deliveryArea)}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
          <strong style="font-size:17px;">${gbCurrency(l.price)}</strong>
          <span style="font-size:12.5px; opacity:0.8;">${l.qty} in stock</span>
        </div>
        ${canBuy ? `<button class="gb-btn gb-btn-primary gb-btn-sm" data-add="${l.id}" ${l.qty === 0 ? 'disabled' : ''}>${l.qty === 0 ? 'Out of stock' : 'Add to cart'}</button>` : ''}
      </div>`;
    }).join('');

    document.querySelectorAll('[data-add]').forEach(btn => {
      btn.addEventListener('click', () => {
        gbAddToCart(user.id, btn.dataset.add, 1);
        document.getElementById('cart-count').textContent = gbCartItemCount(user.id);
        gbToast('Added to cart.', 'success');
      });
    });
  }

  function openCartModal() {
    renderCartModal();
    gbOpenModal('cart-modal');
  }

  function renderCartModal() {
    const lines = gbCartLines(user.id);
    const total = gbCartTotal(user.id);
    document.getElementById('cart-modal-body').innerHTML = `
      ${lines.length ? lines.map(l => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #E2ECF2;">
          <div>
            <div style="font-weight:700;">${gbEsc(l.listing.name)}</div>
            <div style="font-size:12.5px; color:#557;">${gbCurrency(l.listing.price)} × ${l.qty}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button class="gb-btn gb-btn-ghost gb-btn-sm" style="color:var(--gb-text-dark); border-color:#D6E4EC;" data-dec="${l.listing.id}">−</button>
            <span>${l.qty}</span>
            <button class="gb-btn gb-btn-ghost gb-btn-sm" style="color:var(--gb-text-dark); border-color:#D6E4EC;" data-inc="${l.listing.id}">+</button>
          </div>
        </div>`).join('') : `<div class="gb-empty" style="color:var(--gb-text-dark);"><div class="icon">🛒</div>Your cart is empty.</div>`}

      ${lines.length ? `
        <div style="display:flex; justify-content:space-between; margin-top:14px; font-weight:700; color:var(--gb-text-dark);">
          <span>Total</span><span>${gbCurrency(total)}</span>
        </div>
        <div class="gb-field-dark gb-field" style="margin-top:12px;">
          <label>Payment method (simulated)</label>
          <select class="gb-select" id="checkout-method">
            <option value="bKash">bKash</option><option value="Nagad">Nagad</option><option value="Bank">Bank transfer</option>
          </select>
        </div>
        <button class="gb-btn gb-btn-primary" id="checkout-btn" style="width:100%; margin-top:6px;">Place order</button>
      ` : ''}
      <button class="gb-btn gb-btn-ghost" style="color:var(--gb-text-dark); border-color:#D6E4EC; width:100%; margin-top:10px;" onclick="gbCloseModal('cart-modal')">Close</button>
    `;

    document.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => {
      const cart = gbGetCart(user.id); gbSetCartQty(user.id, b.dataset.inc, (cart[b.dataset.inc] || 0) + 1);
      renderCartModal(); document.getElementById('cart-count').textContent = gbCartItemCount(user.id);
    }));
    document.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => {
      const cart = gbGetCart(user.id); gbSetCartQty(user.id, b.dataset.dec, (cart[b.dataset.dec] || 0) - 1);
      renderCartModal(); document.getElementById('cart-count').textContent = gbCartItemCount(user.id);
    }));
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
      const method = document.getElementById('checkout-method').value;
      const result = gbCheckout(user.id, method);
      if (!result.ok) { gbToast(result.error, 'error'); return; }
      gbCloseModal('cart-modal');
      gbToast(`Order placed — transaction ${result.txnId}`, 'success');
      document.getElementById('cart-count').textContent = gbCartItemCount(user.id);
      applyFilters();
    });
  }
})();
