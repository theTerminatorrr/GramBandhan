/**
 * =========================================================================
 * GRAMBONDHON INVESTOR CONTROLLER (Join as Investor & Investor Portal)
 * Feature Domain: Investor Registration, Auth & Portfolio Onboarding
 * 
 * Dedicated file for "Join as Investor" workflow, investor verification,
 * demo login, Shariah investment agreements, and investor session management.
 * =========================================================================
 */

import { authManager } from './auth';
import { ActiveProjectsController } from './active-projects';

export class JoinAsInvestorController {
  private closeAuthBtn: HTMLElement | null = null;
  private formLogin: HTMLFormElement | null = null;
  private demoLoginBtn: HTMLElement | null = null;
  private becomeInvestorBtn: HTMLElement | null = null;
  private navInvestBtn: HTMLElement | null = null;
  private bannerCtaBtn: HTMLElement | null = null;

  private projectsController: ActiveProjectsController;
  private onToastNotification?: (message: string) => void;

  constructor(projectsController: ActiveProjectsController, onToast?: (message: string) => void) {
    this.projectsController = projectsController;
    this.onToastNotification = onToast;
  }

  public init(): void {
    this.bindElements();
    this.setupEventListeners();
  }

  private bindElements(): void {
    this.closeAuthBtn = document.getElementById('close-auth-modal');
    this.formLogin = document.getElementById('form-login') as HTMLFormElement;
    this.demoLoginBtn = document.getElementById('btn-demo-login');
    this.becomeInvestorBtn = document.getElementById('cta-become-investor');
    this.navInvestBtn = document.getElementById('nav-invest-btn');
    this.bannerCtaBtn = document.getElementById('cta-invest-banner');
  }

  private setupEventListeners(): void {
    // "Become an Investor" CTA in hero section
    this.becomeInvestorBtn?.addEventListener('click', () => {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    });

    // Nav "Sign Up / Invest" button
    this.navInvestBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      authManager.clearPendingProject();
      this.openInvestorModal();
    });

    // Final Banner CTA
    this.bannerCtaBtn?.addEventListener('click', () => {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    });

    // Close Modal Button
    this.closeAuthBtn?.addEventListener('click', () => {
      this.closeInvestorModal();
    });

    // 1-Click Quick Demo Login as Verified Investor
    this.demoLoginBtn?.addEventListener('click', () => {
      const user = authManager.demoLogin();
      this.handlePostAuthSuccess(user.name);
    });

    // Form submit Login / Registration
    this.formLogin?.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email') as HTMLInputElement;
      const email = emailInput?.value.trim() || 'investor@grambondhon.bd';
      const user = authManager.login(email);
      this.handlePostAuthSuccess(user.name);
    });
  }

  public openInvestorModal(projectId?: string, directInvest: boolean = false): void {
    this.projectsController.openAuthModal(projectId, directInvest);
  }

  public closeInvestorModal(): void {
    this.projectsController.closeAuthModal();
  }

  public handlePostAuthSuccess(userName: string): void {
    this.closeInvestorModal();
    this.notifyToast(`Welcome, ${userName}! Logged in as Verified Ethical Investor.`);

    const pendingProjectId = authManager.getPendingProject();
    if (pendingProjectId) {
      authManager.clearPendingProject();
      setTimeout(() => {
        this.projectsController.openProjectDetailsModal(pendingProjectId);
      }, 350);
    }
  }

  private notifyToast(message: string): void {
    if (this.onToastNotification) {
      this.onToastNotification(message);
    }
  }
}
