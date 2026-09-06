/* ===================================================================
   Grambandhan — Mock Database Layer
   ---------------------------------------------------------------
   This simulates the Node/Express + Prisma + PostgreSQL backend from
   the dev guide entirely on the client using localStorage, so the app
   runs from plain HTML/CSS/JS files with no server. Table shapes
   mirror section 3 of the guide as closely as possible.
   =================================================================== */

const GB_DB_KEY = 'gb_db_v1';

const GB_TABLES = [
  'users', 'farmerProfiles', 'investorProfiles', 'projects', 'investments',
  'progressUpdates', 'productListings', 'orders', 'ratings', 'transactions',
  'insurance', 'claims', 'fraudFlags', 'notifications'
];

function gbUid(prefix) {
  return (prefix || 'id') + '_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

function gbNowISO() { return new Date().toISOString(); }

/* Demo-only "hashing" — NOT secure, just avoids storing raw passwords in plaintext-obvious form.
   A real deployment must use bcrypt server-side, per the dev guide's Auth stack. */
function gbDemoHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; }
  return 'h' + h.toString(16);
}

function gbLoadDB() {
  const raw = localStorage.getItem(GB_DB_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { /* fall through to reseed */ }
  }
  const fresh = gbSeedDB();
  gbSaveDB(fresh);
  return fresh;
}

function gbSaveDB(db) {
  localStorage.setItem(GB_DB_KEY, JSON.stringify(db));
}

function gbResetDB() {
  localStorage.removeItem(GB_DB_KEY);
  return gbLoadDB();
}

/* ---------------------- Generic CRUD helpers ---------------------- */

function gbAll(table) {
  const db = gbLoadDB();
  return db[table] || [];
}

function gbFind(table, predicate) {
  return gbAll(table).find(predicate) || null;
}

function gbWhere(table, predicate) {
  return gbAll(table).filter(predicate);
}

function gbGetById(table, id) {
  return gbFind(table, r => r.id === id);
}

function gbInsert(table, record) {
  const db = gbLoadDB();
  if (!record.id) record.id = gbUid(table.slice(0, 3));
  if (!record.createdAt) record.createdAt = gbNowISO();
  db[table].push(record);
  gbSaveDB(db);
  return record;
}

function gbUpdate(table, id, patch) {
  const db = gbLoadDB();
  const idx = db[table].findIndex(r => r.id === id);
  if (idx === -1) return null;
  db[table][idx] = { ...db[table][idx], ...patch };
  gbSaveDB(db);
  return db[table][idx];
}

function gbRemove(table, id) {
  const db = gbLoadDB();
  db[table] = db[table].filter(r => r.id !== id);
  gbSaveDB(db);
}

/* ---------------------------- Seed data ---------------------------- */

function gbSeedDB() {
  const db = {};
  GB_TABLES.forEach(t => db[t] = []);

  // ---- Users (one of each role + a couple extra farmers/investors) ----
  const users = [
    { id: 'u_admin', name: 'Admin User', email: 'admin@grambandhan.bd', phone: '01700000000',
      role: 'ADMIN', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_farmer1', name: 'Abdul Karim', email: 'karim@grambandhan.bd', phone: '01711111111',
      role: 'FARMER', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_farmer2', name: 'Rashida Begum', email: 'rashida@grambandhan.bd', phone: '01722222222',
      role: 'FARMER', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_farmer3', name: 'Mizanur Rahman', email: 'mizanur@grambandhan.bd', phone: '01733333333',
      role: 'FARMER', kycStatus: 'PENDING', isVerified: false, status: 'ACTIVE' },
    { id: 'u_investor1', name: 'Nusrat Jahan', email: 'nusrat@grambandhan.bd', phone: '01744444444',
      role: 'INVESTOR', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_investor2', name: 'Tanvir Ahmed', email: 'tanvir@grambandhan.bd', phone: '01755555555',
      role: 'INVESTOR', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_agent1', name: 'Field Agent — Farzana Akter', email: 'farzana@grambandhan.bd', phone: '01766666666',
      role: 'FIELD_AGENT', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
    { id: 'u_buyer1', name: 'Shamsul Huda', email: 'shamsul@grambandhan.bd', phone: '01777777777',
      role: 'BUYER', kycStatus: 'VERIFIED', isVerified: true, status: 'ACTIVE' },
  ];
  users.forEach(u => {
    u.passwordHash = gbDemoHash('password123');
    u.createdAt = gbNowISO();
    u.avatarSeed = u.name;
  });
  db.users = users;

  db.farmerProfiles = [
    { id: 'fp1', userId: 'u_farmer1', landSize: '2.5 acres', location: 'Rangpur Sadar, Rangpur', cropsGrown: 'Rice, Maize', rating: 4.6, completedProjects: 3, isWomenLed: false },
    { id: 'fp2', userId: 'u_farmer2', landSize: '1.2 acres', location: 'Jhenaidah Sadar, Jhenaidah', cropsGrown: 'Vegetables, Jute', rating: 4.9, completedProjects: 5, isWomenLed: true },
    { id: 'fp3', userId: 'u_farmer3', landSize: '3.0 acres', location: 'Bogura Sadar, Bogura', cropsGrown: 'Potato', rating: 3.8, completedProjects: 1, isWomenLed: false },
  ];

  db.investorProfiles = [
    { id: 'ip1', userId: 'u_investor1', totalInvested: 45000, walletBalance: 120000, riskProfile: 'MODERATE' },
    { id: 'ip2', userId: 'u_investor2', totalInvested: 80000, walletBalance: 250000, riskProfile: 'AGGRESSIVE' },
  ];

  db.projects = [
    {
      id: 'proj1', farmerId: 'u_farmer1', title: 'Boro Rice Expansion — Rangpur',
      description: 'Expanding Boro rice cultivation on 2.5 acres with improved irrigation and certified seed to raise yield by an estimated 30%.',
      category: 'Crop Farming', cropType: 'Rice', fundGoal: 150000, fundRaised: 98000,
      budget: 150000, timelineStart: '2026-01-15', timelineEnd: '2026-06-15',
      riskScore: null, status: 'APPROVED', isWomenLed: false, location: 'Rangpur',
      image: 'linear-gradient(135deg,#2f855a,#276749)', completionPct: 55,
    },
    {
      id: 'proj2', farmerId: 'u_farmer2', title: 'Homestead Vegetable Cooperative — Jhenaidah',
      description: 'A women-led homestead vegetable cooperative supplying local markets, seeking funds for greenhouse netting and organic inputs.',
      category: 'Horticulture', cropType: 'Mixed Vegetables', fundGoal: 80000, fundRaised: 80000,
      budget: 80000, timelineStart: '2025-11-01', timelineEnd: '2026-03-01',
      riskScore: null, status: 'APPROVED', isWomenLed: true, location: 'Jhenaidah',
      image: 'linear-gradient(135deg,#b7791f,#975a16)', completionPct: 100,
    },
    {
      id: 'proj3', farmerId: 'u_farmer3', title: 'Potato Storage & Late-Season Planting — Bogura',
      description: 'Funding for cold-storage rental and late-season potato planting to hedge against price crashes at harvest.',
      category: 'Crop Farming', cropType: 'Potato', fundGoal: 200000, fundRaised: 20000,
      budget: 200000, timelineStart: '2026-02-01', timelineEnd: '2026-07-01',
      riskScore: null, status: 'PENDING', isWomenLed: false, location: 'Bogura',
      image: 'linear-gradient(135deg,#975a3a,#6b3f24)', completionPct: 5,
    },
    {
      id: 'proj4', farmerId: 'u_farmer1', title: 'Maize Drying Yard Upgrade — Rangpur',
      description: 'Building a concrete drying yard to reduce post-harvest maize spoilage.',
      category: 'Infrastructure', cropType: 'Maize', fundGoal: 60000, fundRaised: 0,
      budget: 60000, timelineStart: '2026-03-01', timelineEnd: '2026-05-01',
      riskScore: null, status: 'REJECTED', rejectionReason: 'Budget breakdown missing — please resubmit with itemized costs.',
      isWomenLed: false, location: 'Rangpur', image: 'linear-gradient(135deg,#4a5568,#2d3748)', completionPct: 0,
    },
  ];

  db.investments = [
    { id: 'inv1', investorId: 'u_investor1', projectId: 'proj1', amount: 30000, date: '2026-01-20', expectedReturn: 34500, status: 'ACTIVE', paymentMethod: 'bKash', insured: true },
    { id: 'inv2', investorId: 'u_investor2', projectId: 'proj1', amount: 68000, date: '2026-02-01', expectedReturn: 78200, status: 'ACTIVE', paymentMethod: 'Bank', insured: false },
    { id: 'inv3', investorId: 'u_investor1', projectId: 'proj2', amount: 15000, date: '2025-11-10', expectedReturn: 17250, status: 'COMPLETED', paymentMethod: 'Nagad', insured: true },
  ];

  db.progressUpdates = [
    { id: 'pu1', projectId: 'proj1', authorId: 'u_farmer1', note: 'Land prepared and irrigation channels dug.', photos: [], videoUrl: '', verifiedByAgent: true, agentId: 'u_agent1', createdAt: '2026-01-25T09:00:00.000Z' },
    { id: 'pu2', projectId: 'proj1', authorId: 'u_farmer1', note: 'Seedlings transplanted across 60% of the plot.', photos: [], videoUrl: '', verifiedByAgent: true, agentId: 'u_agent1', createdAt: '2026-02-20T09:00:00.000Z' },
    { id: 'pu3', projectId: 'proj1', authorId: 'u_farmer1', note: 'First round of fertilizer application complete.', photos: [], videoUrl: '', verifiedByAgent: false, createdAt: '2026-03-10T09:00:00.000Z' },
    { id: 'pu4', projectId: 'proj2', authorId: 'u_farmer2', note: 'Greenhouse netting installed, first harvest sold at local bazar.', photos: [], videoUrl: '', verifiedByAgent: true, agentId: 'u_agent1', createdAt: '2026-02-01T09:00:00.000Z' },
  ];

  db.productListings = [
    { id: 'prod1', producerId: 'u_farmer2', name: 'Organic Mixed Vegetables Basket (5kg)', price: 350, qty: 40, category: 'Vegetables', images: [], deliveryArea: 'Jhenaidah, Khulna Division', isWomenLed: true, status: 'ACTIVE' },
    { id: 'prod2', producerId: 'u_farmer1', name: 'Premium Boro Rice (25kg sack)', price: 1450, qty: 25, category: 'Grains', images: [], deliveryArea: 'Rangpur Division', isWomenLed: false, status: 'ACTIVE' },
    { id: 'prod3', producerId: 'u_farmer2', name: 'Handwoven Jute Bags (pack of 3)', price: 480, qty: 60, category: 'Handicraft', images: [], deliveryArea: 'Nationwide courier', isWomenLed: true, status: 'ACTIVE' },
  ];

  db.orders = [
    { id: 'ord1', buyerId: 'u_buyer1', listingId: 'prod1', qty: 2, totalPrice: 700, status: 'DELIVERED', createdAt: '2026-02-10T09:00:00.000Z' },
  ];

  db.ratings = [
    { id: 'rt1', fromUserId: 'u_investor1', targetType: 'PROJECT', targetId: 'proj2', stars: 5, comment: 'Transparent updates and paid out on time.', createdAt: '2026-03-02T09:00:00.000Z' },
    { id: 'rt2', fromUserId: 'u_buyer1', targetType: 'PRODUCT', targetId: 'prod1', stars: 4, comment: 'Fresh vegetables, good packaging.', createdAt: '2026-02-11T09:00:00.000Z' },
    { id: 'rt3', fromUserId: 'u_investor1', targetType: 'USER', targetId: 'u_farmer2', stars: 5, comment: 'Very reliable farmer, highly recommended.', createdAt: '2026-03-02T09:05:00.000Z' },
  ];

  db.transactions = [
    { id: 'tx1', userId: 'u_investor1', type: 'INVESTMENT', amount: 30000, method: 'bKash', status: 'SUCCESS', refId: 'BKS-88213412', createdAt: '2026-01-20T10:00:00.000Z' },
    { id: 'tx2', userId: 'u_investor2', type: 'INVESTMENT', amount: 68000, method: 'BANK', status: 'SUCCESS', refId: 'BNK-55210099', createdAt: '2026-02-01T10:00:00.000Z' },
    { id: 'tx3', userId: 'u_investor1', type: 'INVESTMENT', amount: 15000, method: 'NAGAD', status: 'SUCCESS', refId: 'NGD-11003321', createdAt: '2025-11-10T10:00:00.000Z' },
    { id: 'tx4', userId: 'u_investor1', type: 'PAYOUT', amount: 17250, method: 'NAGAD', status: 'SUCCESS', refId: 'NGD-PAYOUT-0091', createdAt: '2026-03-05T10:00:00.000Z' },
    { id: 'tx5', userId: 'u_buyer1', type: 'PURCHASE', amount: 700, method: 'bKash', status: 'SUCCESS', refId: 'BKS-99887766', createdAt: '2026-02-10T09:00:00.000Z' },
  ];

  db.insurance = [
    { id: 'ins1', projectId: 'proj1', investorId: 'u_investor1', coverageType: 'Crop Failure Cover', premium: 1500, premiumPct: 5, status: 'ACTIVE' },
  ];

  db.claims = [];

  db.fraudFlags = [
    { id: 'ff1', targetType: 'PROJECT', targetId: 'proj4', reason: 'Budget figures inconsistent with land size declared.', status: 'RESOLVED', reviewedBy: 'u_admin', raisedBy: 'u_agent1', createdAt: '2026-01-05T09:00:00.000Z' },
  ];

  db.notifications = [
    { id: 'n1', userId: 'u_farmer1', type: 'INVESTMENT_RECEIVED', message: 'Nusrat Jahan invested ৳30,000 in "Boro Rice Expansion — Rangpur".', isRead: true, createdAt: '2026-01-20T10:00:00.000Z' },
    { id: 'n2', userId: 'u_investor1', type: 'PROGRESS_UPDATE', message: 'New progress update posted on "Boro Rice Expansion — Rangpur".', isRead: false, createdAt: '2026-03-10T09:05:00.000Z' },
    { id: 'n3', userId: 'u_farmer3', type: 'PROJECT_STATUS', message: 'Your project "Potato Storage & Late-Season Planting — Bogura" is pending review.', isRead: true, createdAt: '2026-02-01T09:00:00.000Z' },
  ];

  return db;
}
