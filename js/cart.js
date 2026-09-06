/* ===================== Grambandhan — Cart & Checkout ===================== */

function gbCartKey(userId) { return 'gb_cart_' + userId; }

function gbGetCart(userId) {
  try { return JSON.parse(localStorage.getItem(gbCartKey(userId))) || {}; } catch (e) { return {}; }
}

function gbSaveCart(userId, cart) {
  localStorage.setItem(gbCartKey(userId), JSON.stringify(cart));
}

function gbAddToCart(userId, listingId, qty) {
  const cart = gbGetCart(userId);
  cart[listingId] = (cart[listingId] || 0) + qty;
  gbSaveCart(userId, cart);
}

function gbSetCartQty(userId, listingId, qty) {
  const cart = gbGetCart(userId);
  if (qty <= 0) delete cart[listingId]; else cart[listingId] = qty;
  gbSaveCart(userId, cart);
}

function gbClearCart(userId) { gbSaveCart(userId, {}); }

function gbCartItemCount(userId) {
  return Object.values(gbGetCart(userId)).reduce((s, q) => s + q, 0);
}

function gbCartLines(userId) {
  const cart = gbGetCart(userId);
  return Object.entries(cart).map(([listingId, qty]) => {
    const listing = gbGetById('productListings', listingId);
    return listing ? { listing, qty, subtotal: listing.price * qty } : null;
  }).filter(Boolean);
}

function gbCartTotal(userId) {
  return gbCartLines(userId).reduce((s, l) => s + l.subtotal, 0);
}

/**
 * Simulated checkout: creates one Order per cart line, a Transaction record,
 * decrements listing quantity, notifies each seller, and clears the cart.
 */
function gbCheckout(userId, paymentMethod) {
  const lines = gbCartLines(userId);
  if (!lines.length) return { ok: false, error: 'Your cart is empty.' };

  const total = lines.reduce((s, l) => s + l.subtotal, 0);
  const fakeTxnId = paymentMethod.toUpperCase().slice(0, 3) + '-' + Math.floor(Math.random() * 900000 + 100000);

  lines.forEach(l => {
    gbInsert('orders', {
      buyerId: userId, listingId: l.listing.id, qty: l.qty, totalPrice: l.subtotal, status: 'PLACED',
    });
    gbUpdate('productListings', l.listing.id, { qty: Math.max(0, l.listing.qty - l.qty) });
    gbAddNotification(l.listing.producerId, 'ORDER_PLACED', `New order: ${l.qty} × "${l.listing.name}" placed.`);
  });

  gbInsert('transactions', { userId, type: 'PURCHASE', amount: total, method: paymentMethod.toUpperCase(), status: 'SUCCESS', refId: fakeTxnId });
  gbClearCart(userId);
  return { ok: true, txnId: fakeTxnId, total };
}
