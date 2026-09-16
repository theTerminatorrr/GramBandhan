import { authManager } from './auth';
import { HeroSectionController } from './hero-section';
import { JoinAsInvestorController } from './join-as-investor';
import { ActiveProjectsController } from './active-projects';
import { MarketplaceController } from './marketplace';
import { JoinAsFarmerController } from './join-as-farmer';

/**
 * =========================================================================
 * GRAMBONDHON MAIN ORCHESTRATOR
 * 
 * Easily understand which file manages which sector:
 * - hero-section.ts       -> Hero Section (slideshow, text, chat)
 * - join-as-investor.ts   -> Investor Sector (join as investor, auth, KYC)
 * - active-projects.ts    -> Active Projects Sector (30 projects grid, returns)
 * - marketplace.ts        -> Marketplace Sector (crafts, products, cart)
 * - join-as-farmer.ts     -> Farmer Sector (join as farmer, women artisans, portal)
 * =========================================================================
 */

class GramBondhonApp {
  private heroSection: HeroSectionController;
  private joinAsInvestor: JoinAsInvestorController;
  private activeProjects: ActiveProjectsController;
  private marketplace: MarketplaceController;
  private joinAsFarmer: JoinAsFarmerController;

  constructor() {
    this.heroSection = new HeroSectionController();
    this.activeProjects = new ActiveProjectsController();
    this.marketplace = new MarketplaceController();
    this.joinAsFarmer = new JoinAsFarmerController(this.showToast.bind(this));
    this.joinAsInvestor = new JoinAsInvestorController(this.activeProjects, this.showToast.bind(this));
  }

  public init(): void {
    // 1. Initialize all sector controllers
    this.heroSection.init();
    this.activeProjects.init();
    this.marketplace.init();
    this.joinAsFarmer.init();
    this.joinAsInvestor.init();

    // 2. Setup Navigation & Shared Global Handlers
    this.setupNavbar();
    this.setupProjectsAndHeroButtons();
    this.setupModalEscapeKeys();
    this.setupSmoothScroll();

    console.log('🌾 GramBondhon (গ্রামীণ বন্ধন) initialized successfully with sector modules.');
  }

  private setupNavbar(): void {
    const navLoginBtn = document.getElementById('nav-login-btn');
    const navUserBadge = document.getElementById('nav-user-badge');
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');

    // Auth state reactivity in Navbar
    authManager.onAuthChange((user) => {
      if (user) {
        if (navLoginBtn) navLoginBtn.style.display = 'none';
        if (navUserBadge) {
          navUserBadge.style.display = 'inline-flex';
          navUserBadge.innerHTML = `
            <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">TR</span>
            <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${user.name}</span>
            <button class="user-logout-btn" id="logout-btn" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
          `;

          document.getElementById('logout-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            authManager.logout();
            this.showToast('Logged out successfully');
          });
        }
      } else {
        if (navLoginBtn) navLoginBtn.style.display = 'inline-block';
        if (navUserBadge) navUserBadge.style.display = 'none';
      }
    });

    // Nav Login button click
    navLoginBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      authManager.clearPendingProject();
      this.joinAsInvestor.openInvestorModal();
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  private setupProjectsAndHeroButtons(): void {
    // "View All Projects" toggle link
    const viewAllBtn = document.getElementById('btn-view-all-projects');
    viewAllBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      this.activeProjects.toggleShowAllProjects();
      const isAll = this.activeProjects.isShowingAll();
      this.showToast(isAll ? 'Showing all 30 verified Bangladeshi projects' : 'Showing top 4 projects');
    });

    // Project Details Modal Close button
    const closeDetailBtn = document.getElementById('close-project-detail');
    closeDetailBtn?.addEventListener('click', () => {
      this.activeProjects.closeProjectDetailsModal();
    });
  }

  private setupModalEscapeKeys(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.activeProjects.closeAuthModal();
        this.activeProjects.closeProjectDetailsModal();
        this.marketplace.closeMarketplaceModal();
        this.joinAsFarmer.closePortal();
      }
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  public showToast(message: string): void {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new GramBondhonApp();
  app.init();
});
