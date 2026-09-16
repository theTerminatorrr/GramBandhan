/**
 * =========================================================================
 * GRAMBONDHON FARMER & PRODUCER CONTROLLER
 * Feature Domain: Farmer & Women Artisan Portal (Teammate's Workspace)
 * 
 * Separated into this independent module so that the Farmer feature team
 * can build registration, harvest submission, GPS verification, and producer
 * dashboards without creating Git merge conflicts with Marketplace or Investor modules.
 * =========================================================================
 */

export class JoinAsFarmerController {
  private portalModal: HTMLElement | null = null;
  private closeBtn: HTMLElement | null = null;
  private navFarmerLink: HTMLElement | null = null;
  private joinFarmerBtn: HTMLElement | null = null;
  private tabFarmer: HTMLElement | null = null;
  private tabArtisan: HTMLElement | null = null;
  private contentFarmer: HTMLElement | null = null;
  private contentArtisan: HTMLElement | null = null;
  private dashboard: HTMLElement | null = null;
  private btnDemoFarmer: HTMLElement | null = null;
  private btnDemoArtisan: HTMLElement | null = null;
  private formFarmer: HTMLElement | null = null;
  private formArtisan: HTMLElement | null = null;
  private btnProducerLogout: HTMLElement | null = null;
  private btnProducerNew: HTMLElement | null = null;
  private chatBtn: HTMLElement | null = null;

  private onToastNotification?: (message: string) => void;

  constructor(onToast?: (message: string) => void) {
    this.onToastNotification = onToast;
  }

  public init(): void {
    this.bindElements();
    this.setupEventListeners();
  }

  private bindElements(): void {
    this.portalModal = document.getElementById('farmer-women-modal');
    this.closeBtn = document.getElementById('close-farmer-modal');
    this.navFarmerLink = document.getElementById('nav-farmer-women-link');
    this.joinFarmerBtn = document.getElementById('cta-join-farmer');
    this.tabFarmer = document.getElementById('tab-btn-farmer');
    this.tabArtisan = document.getElementById('tab-btn-artisan');
    this.contentFarmer = document.getElementById('tab-content-farmer');
    this.contentArtisan = document.getElementById('tab-content-artisan');
    this.dashboard = document.getElementById('producer-dashboard');
    this.btnDemoFarmer = document.getElementById('btn-demo-farmer');
    this.btnDemoArtisan = document.getElementById('btn-demo-artisan');
    this.formFarmer = document.getElementById('form-farmer-login');
    this.formArtisan = document.getElementById('form-artisan-login');
    this.btnProducerLogout = document.getElementById('btn-producer-logout');
    this.btnProducerNew = document.getElementById('btn-producer-new-project');
    this.chatBtn = document.getElementById('hero-chat-btn');
  }

  private setupEventListeners(): void {
    // Open portal on clicking "Farmers & Women" in Nav or "Join as Farmer" in Hero
    this.navFarmerLink?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openPortal('farmer');
    });

    this.joinFarmerBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openPortal('farmer');
    });

    this.closeBtn?.addEventListener('click', () => this.closePortal());

    this.tabFarmer?.addEventListener('click', () => this.switchTab('farmer'));
    this.tabArtisan?.addEventListener('click', () => this.switchTab('artisan'));

    // 1-Click Demo Farmer
    this.btnDemoFarmer?.addEventListener('click', () => {
      this.showProducerDashboard(
        'মোঃ রফিকুল ইসলাম (Md. Rafiqul Islam)',
        '🌾 Bio-Secure Poultry Farmer • Gazipur Upazila',
        'Gazipur Broiler Poultry Shed #GB-2026-04',
        '45% Backed by 12 Investors (৳1,20,000 Goal)',
        'bKash Merchant Verified • 01712-345678'
      );
      this.notifyToast('🌾 Welcome, Md. Rafiqul Islam! Logged in as Verified Farmer.');
    });

    // 1-Click Demo Artisan
    this.btnDemoArtisan?.addEventListener('click', () => {
      this.showProducerDashboard(
        'ফাতেমা বেগম (Fatima Begum)',
        '🧵 Rural Nakshi Kantha Artisan • Islampur, Jamalpur',
        'Jamalpur Women Artisan Handicraft Collective',
        '24 Hand-Stitched Quilts Live in Marketplace',
        'Nagad Verified • 01823-456789'
      );
      this.notifyToast('🧵 Welcome, Fatima Begum! Logged in as Verified Rural Artisan.');
    });

    // Forms
    this.formFarmer?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = (document.getElementById('farmer-name') as HTMLInputElement)?.value.trim() || 'Md. Rafiqul Islam';
      const district = (document.getElementById('farmer-district') as HTMLSelectElement)?.value || 'Gazipur';
      const category = (document.getElementById('farmer-category') as HTMLSelectElement)?.value || 'Poultry';
      this.showProducerDashboard(
        nameInput,
        `🌾 ${category} Producer • ${district} Hub`,
        `${district} ${category} Development Project`,
        'Under Agronomist Review (GPS Verified)',
        'bKash Account Verified'
      );
      this.notifyToast(`🌾 Proposal submitted successfully! Welcome, ${nameInput}.`);
    });

    this.formArtisan?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = (document.getElementById('artisan-name') as HTMLInputElement)?.value.trim() || 'Fatima Begum';
      const district = (document.getElementById('artisan-district') as HTMLSelectElement)?.value || 'Jamalpur';
      const craft = (document.getElementById('artisan-craft') as HTMLSelectElement)?.value || 'Nakshi Kantha';
      this.showProducerDashboard(
        nameInput,
        `🧵 ${craft} Artisan • ${district}`,
        `${district} Handcrafted Collection`,
        'Active Marketplace Storefront',
        'bKash / Nagad Verified'
      );
      this.notifyToast(`🧵 Store opened successfully! Welcome, ${nameInput}.`);
    });

    this.btnProducerLogout?.addEventListener('click', () => {
      this.resetProducerState();
      this.notifyToast('Logged out of Producer account');
    });

    this.btnProducerNew?.addEventListener('click', () => {
      this.switchTab('farmer');
      this.notifyToast('Ready for new project submission');
    });

    this.chatBtn?.addEventListener('click', () => {
      this.notifyToast('GramBondhon Advisory: Investment & Producer support team is online.');
    });
  }

  public openPortal(defaultTab: 'farmer' | 'artisan' = 'farmer'): void {
    if (!this.portalModal) return;
    this.portalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.switchTab(defaultTab);
  }

  public closePortal(): void {
    if (!this.portalModal) return;
    this.portalModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  public switchTab(tab: 'farmer' | 'artisan'): void {
    if (this.dashboard) this.dashboard.style.display = 'none';
    if (tab === 'farmer') {
      this.tabFarmer?.classList.add('active');
      this.tabArtisan?.classList.remove('active');
      if (this.contentFarmer) this.contentFarmer.style.display = 'block';
      if (this.contentArtisan) this.contentArtisan.style.display = 'none';
    } else {
      this.tabArtisan?.classList.add('active');
      this.tabFarmer?.classList.remove('active');
      if (this.contentArtisan) this.contentArtisan.style.display = 'block';
      if (this.contentFarmer) this.contentFarmer.style.display = 'none';
    }
  }

  public showProducerDashboard(name: string, role: string, project: string, status: string, wallet: string): void {
    if (this.contentFarmer) this.contentFarmer.style.display = 'none';
    if (this.contentArtisan) this.contentArtisan.style.display = 'none';
    if (this.dashboard) this.dashboard.style.display = 'block';

    const elName = document.getElementById('dash-producer-name');
    const elRole = document.getElementById('dash-producer-role');
    const elProject = document.getElementById('dash-project-title');
    const elStatus = document.getElementById('dash-funding-status');
    const elWallet = document.getElementById('dash-payout-wallet');

    if (elName) elName.textContent = name;
    if (elRole) elRole.textContent = role;
    if (elProject) elProject.textContent = project;
    if (elStatus) elStatus.textContent = status;
    if (elWallet) elWallet.textContent = wallet;

    // Update navbar badge
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navUserBadge = document.getElementById('nav-user-badge');
    if (navLoginBtn) navLoginBtn.style.display = 'none';
    if (navUserBadge) {
      navUserBadge.style.display = 'inline-flex';
      navUserBadge.innerHTML = `
        <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">🌾</span>
        <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${name.split(' ')[0]} (Producer)</span>
        <button class="user-logout-btn" id="logout-producer-nav" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
      `;
      document.getElementById('logout-producer-nav')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.resetProducerState();
        this.notifyToast('Logged out of Producer session');
      });
    }
  }

  public resetProducerState(): void {
    if (this.dashboard) this.dashboard.style.display = 'none';
    this.switchTab('farmer');
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navUserBadge = document.getElementById('nav-user-badge');
    if (navLoginBtn) navLoginBtn.style.display = 'inline-block';
    if (navUserBadge) navUserBadge.style.display = 'none';
  }

  private notifyToast(message: string): void {
    if (this.onToastNotification) {
      this.onToastNotification(message);
    }
  }
}
