/* ===================== Grambandhan — Notifications ===================== */

function gbAddNotification(userId, type, message) {
  return gbInsert('notifications', { userId, type, message, isRead: false });
}

function gbUserNotifications(userId) {
  return gbWhere('notifications', n => n.userId === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function gbUnreadCount(userId) {
  return gbUserNotifications(userId).filter(n => !n.isRead).length;
}

function gbMarkAllRead(userId) {
  const db = gbLoadDB();
  db.notifications.forEach(n => { if (n.userId === userId) n.isRead = true; });
  gbSaveDB(db);
}

function gbRenderBell(user) {
  const unread = gbUnreadCount(user.id);
  const notifs = gbUserNotifications(user.id).slice(0, 8);

  const itemsHtml = notifs.length
    ? notifs.map(n => `
        <div class="gb-notif-item ${n.isRead ? '' : 'unread'}">
          <div>${gbEsc(n.message)}</div>
          <div class="gb-notif-time">${gbTimeAgo(n.createdAt)}</div>
        </div>`).join('')
    : `<div class="gb-notif-item">You're all caught up — no notifications yet.</div>`;

  return `
    <div class="gb-bell-wrap">
      <button class="gb-bell-btn" id="gb-bell-btn" title="Notifications" aria-label="Notifications">
        🔔
        ${unread > 0 ? '<span class="gb-bell-dot"></span>' : ''}
      </button>
      <div class="glass-panel-solid gb-bell-dropdown" id="gb-bell-dropdown">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <strong>Notifications</strong>
          <button class="gb-btn gb-btn-ghost gb-btn-sm" style="color:var(--gb-text-dark);border-color:#D6E4EC;" id="gb-mark-read-btn">Mark all read</button>
        </div>
        ${itemsHtml}
      </div>
    </div>`;
}

function gbWireBell(user) {
  const btn = document.getElementById('gb-bell-btn');
  const dd = document.getElementById('gb-bell-dropdown');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dd.classList.toggle('open');
  });
  document.addEventListener('click', () => dd.classList.remove('open'));
  dd.addEventListener('click', (e) => e.stopPropagation());
  const markBtn = document.getElementById('gb-mark-read-btn');
  if (markBtn) markBtn.addEventListener('click', () => {
    gbMarkAllRead(user.id);
    gbRefreshNav();
  });
}
