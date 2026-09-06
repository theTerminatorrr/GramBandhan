/* ===================== Grambandhan — Auth ===================== */

const GB_SESSION_KEY = 'gb_session_v1';

function gbGetSession() {
  try { return JSON.parse(localStorage.getItem(GB_SESSION_KEY)); } catch (e) { return null; }
}

function gbSetSession(userId) {
  localStorage.setItem(GB_SESSION_KEY, JSON.stringify({ userId, at: gbNowISO() }));
}

function gbClearSession() {
  localStorage.removeItem(GB_SESSION_KEY);
}

function gbCurrentUser() {
  const s = gbGetSession();
  if (!s) return null;
  return gbGetById('users', s.userId);
}

/**
 * Guards a page to a set of allowed roles. Call at top of page script.
 * If not logged in -> redirect to login. If wrong role -> redirect to their own dashboard.
 */
function gbRequireRole(allowedRoles) {
  const user = gbCurrentUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  if (user.status === 'BANNED') {
    gbClearSession();
    alert('Your account has been suspended. Contact support.');
    window.location.href = 'login.html';
    return null;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    window.location.href = 'dashboard.html';
    return null;
  }
  return user;
}

function gbLogin(email, password) {
  const user = gbFind('users', u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return { ok: false, error: 'No account found with that email.' };
  if (user.passwordHash !== gbDemoHash(password)) return { ok: false, error: 'Incorrect password.' };
  if (user.status === 'BANNED') return { ok: false, error: 'This account has been suspended.' };
  gbSetSession(user.id);
  return { ok: true, user };
}

function gbLogout() {
  gbClearSession();
  window.location.href = 'index.html';
}

function gbSignup(data) {
  const existing = gbFind('users', u => u.email.toLowerCase() === data.email.toLowerCase());
  if (existing) return { ok: false, error: 'An account with that email already exists.' };

  const user = gbInsert('users', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    role: data.role,
    passwordHash: gbDemoHash(data.password),
    kycStatus: 'PENDING',
    isVerified: false,
    status: 'ACTIVE',
    avatarSeed: data.name,
  });

  if (data.role === 'FARMER') {
    gbInsert('farmerProfiles', {
      userId: user.id, landSize: data.landSize || 'Not specified',
      location: data.location || 'Not specified', cropsGrown: data.cropsGrown || 'Not specified',
      rating: 0, completedProjects: 0, isWomenLed: !!data.isWomenLed,
    });
  } else if (data.role === 'INVESTOR') {
    gbInsert('investorProfiles', {
      userId: user.id, totalInvested: 0, walletBalance: 50000, riskProfile: 'MODERATE',
    });
  }

  gbAddNotification(user.id, 'WELCOME', 'Welcome to Grambandhan, ' + data.name.split(' ')[0] + '! Complete your profile to get started.');
  gbSetSession(user.id);
  return { ok: true, user };
}

function gbDashboardForRole(role) {
  return 'dashboard.html';
}
