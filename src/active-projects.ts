import { ACTIVE_PROJECTS, FEATURED_PROJECT } from './data';
import { Project, ProjectCategory } from './types';
import { authManager } from './auth';

/**
 * GRAMBONDHON PROJECTS CONTROLLER
 * 
 * Renders rich bilingual project cards with high-visibility profit indicators,
 * full-width layout, and interactive modal simulator for investors.
 */

export class ActiveProjectsController {
  private currentFilter: ProjectCategory = 'all';
  private allProjects: Project[] = [...ACTIVE_PROJECTS, FEATURED_PROJECT];
  private showAllProjects: boolean = false;

  constructor() {
    // Initialized
  }

  public init(): void {
    this.renderActiveProjects();
    this.renderFeaturedProject();
    this.setupCategoryFilters();
    this.setupEventListeners();
  }

  public toggleShowAllProjects(): void {
    this.showAllProjects = !this.showAllProjects;
    this.renderActiveProjects();
  }

  public isShowingAll(): boolean {
    return this.showAllProjects;
  }

  private setupCategoryFilters(): void {
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    filterContainer.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('.filter-pill') as HTMLElement;
      if (!btn) return;

      const category = btn.dataset.category as ProjectCategory;
      if (!category) return;

      filterContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      this.currentFilter = category;
      this.renderActiveProjects();
    });
  }

  private setupEventListeners(): void {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      const viewBtn = target.closest('[data-action="view-project"]') as HTMLElement;
      if (viewBtn) {
        e.preventDefault();
        const projectId = viewBtn.dataset.projectId;
        if (projectId) {
          this.handleProjectClick(projectId, false);
        }
        return;
      }

      const investBtn = target.closest('[data-action="invest-project"]') as HTMLElement;
      if (investBtn) {
        e.preventDefault();
        const projectId = investBtn.dataset.projectId;
        if (projectId) {
          this.handleProjectClick(projectId, true);
        }
        return;
      }

      const viewAllLink = target.closest('#btn-view-all-projects') as HTMLElement;
      if (viewAllLink) {
        e.preventDefault();
        this.toggleShowAllProjects();
        return;
      }

      const expandBtn = target.closest('#btn-expand-projects') as HTMLElement;
      if (expandBtn) {
        e.preventDefault();
        this.toggleShowAllProjects();
        return;
      }
    });
  }

  public handleProjectClick(projectId: string, directInvest: boolean = false): void {
    if (!authManager.isAuthenticated()) {
      authManager.setPendingProject(projectId);
      this.openAuthModal(projectId, directInvest);
    } else {
      this.openProjectDetailsModal(projectId, directInvest);
    }
  }

  public openAuthModal(projectId?: string, directInvest: boolean = false): void {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    const contextBanner = document.getElementById('auth-modal-project-context');
    if (contextBanner) {
      if (projectId) {
        const project = this.allProjects.find(p => p.id === projectId);
        if (project) {
          contextBanner.style.display = 'flex';
          contextBanner.innerHTML = `
            <div class="context-icon">🔒</div>
            <div class="context-text">
              <strong>Investor Access Required</strong>
              <span>Log in to review verified financial audit & profit-sharing terms for <em>"${project.name}"</em></span>
            </div>
          `;
        }
      } else {
        contextBanner.style.display = 'none';
      }
    }

    modal.classList.add('active');
    modal.setAttribute('data-direct-invest', directInvest ? 'true' : 'false');
    document.body.style.overflow = 'hidden';
  }

  public closeAuthModal(): void {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  public renderActiveProjects(): void {
    const container = document.getElementById('active-projects-grid');
    if (!container) return;

    let filtered = ACTIVE_PROJECTS;
    if (this.currentFilter !== 'all') {
      filtered = ACTIVE_PROJECTS.filter(p => p.category === this.currentFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="padding: 40px; text-align: center; color: #5B6E66; grid-column: 1 / -1;">
          <p>No active projects found in this category right now.</p>
        </div>
      `;
      return;
    }

    // By default, display exactly 4 projects. Show all when "View All" is toggled.
    const displayedProjects = this.showAllProjects ? filtered : filtered.slice(0, 4);

    container.innerHTML = displayedProjects.map(project => {
      const percent = Math.min(100, Math.round((project.fundingRaisedBDT / project.fundingGoalBDT) * 100));
      return `
        <article class="project-card" data-project-id="${project.id}">
          <!-- Top Image Header with Overlay matching media_1789573283421.png -->
          <div class="project-card-header">
            <img src="${project.image}" alt="${project.name}" class="project-card-image" loading="lazy" />
            <div class="project-header-overlay"></div>

            <!-- Top Badges: LIVE Status & Field Verified -->
            <div class="project-header-top-tags">
              <span class="project-live-chip">
                <span class="live-dot-pulse">●</span> LIVE
              </span>
              <span class="project-verified-chip" title="100% In-Person Verified">
                ✓ Verified
              </span>
            </div>

            <!-- Title & Price Overlay at Bottom of Image matching media_1789573283421.png -->
            <div class="project-header-bottom-info">
              <div class="header-info-left">
                <h3 class="project-title-overlay">${project.name}</h3>
                <div class="project-loc-overlay">📍 ${project.location}</div>
              </div>
              <div class="header-price-right">
                <div class="unit-price-overlay">৳ ${project.minInvestmentBDT.toLocaleString()} BDT</div>
                <div class="unit-label-overlay">BDT/unit</div>
              </div>
            </div>
          </div>

          <!-- Eye-Soothing Card Body matching media_1789573283421.png -->
          <div class="project-card-body">
            <!-- Top Right Pastel Pill Badge -->
            <div class="project-tag-row">
              <span class="variable-return-pill">
                🌱 ${project.returnTypeTag || 'Variable Return'}
              </span>
            </div>

            <!-- Clean Key-Value Metrics List matching Image 2 -->
            <div class="soothing-metrics-list">
              <div class="metric-line">
                <span class="metric-key">Period</span>
                <strong class="metric-val">${project.periodText || (project.durationMonths + ' Months')}</strong>
              </div>
              <div class="metric-line">
                <span class="metric-key">Return</span>
                <strong class="metric-val return-val">${project.potentialReturn}</strong>
              </div>
              <div class="metric-line total-return-line">
                <span class="metric-key">Total return</span>
                <strong class="metric-val total-val">${project.totalReturnBDT || ('৳ ' + (project.minInvestmentBDT * 1.15).toLocaleString() + ' – ৳ ' + (project.minInvestmentBDT * 1.18).toLocaleString())}</strong>
              </div>
            </div>

            <!-- Progress & Micro-Stats matching media_1789573484322.png -->
            <div class="project-progress-container">
              <div class="progress-labels-row">
                <span class="percent-bold">${percent}% Funded</span>
                <span class="days-left">${project.duration}</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
              </div>
              <div class="goal-micro-stat">Raised: ৳${project.fundingRaisedBDT.toLocaleString()} of ৳${project.fundingGoalBDT.toLocaleString()} (DEMO)</div>
            </div>

            <!-- Card Action Buttons matching media_1789573484322.png -->
            <div class="project-card-btn-group">
              <button class="btn btn-invest-card" data-action="invest-project" data-project-id="${project.id}">
                Invest Now
              </button>
              <button class="btn btn-view-terms" data-action="view-project" data-project-id="${project.id}">
                View Terms
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Update Header View All link text (Just "View All" without number as requested)
    const headerViewAll = document.getElementById('btn-view-all-projects');
    if (headerViewAll) {
      if (this.showAllProjects) {
        headerViewAll.innerHTML = `
          <span>Show Top 4</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `;
      } else {
        headerViewAll.innerHTML = `
          <span>View All</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      }
    }

    // Update Bottom Expand Button
    const bottomCta = document.getElementById('projects-bottom-cta');
    const bottomText = document.getElementById('btn-expand-projects-text');
    const bottomIcon = document.getElementById('btn-expand-projects-icon');
    if (bottomCta && bottomText && bottomIcon) {
      if (filtered.length <= 4) {
        bottomCta.style.display = 'none';
      } else {
        bottomCta.style.display = 'flex';
        if (this.showAllProjects) {
          bottomText.textContent = `Show Top 4 Projects (কমিয়ে ৪টি দেখুন)`;
          bottomIcon.innerHTML = `<polyline points="18 15 12 9 6 15"></polyline>`;
        } else {
          bottomText.textContent = `View All Projects (${filtered.length}টি প্রকল্প দেখুন)`;
          bottomIcon.innerHTML = `<polyline points="6 9 12 15 18 9"></polyline>`;
        }
      }
    }
  }

  public renderFeaturedProject(): void {
    const container = document.getElementById('featured-project-container');
    if (!container) return;

    const p = FEATURED_PROJECT;
    const percent = Math.min(100, Math.round((p.fundingRaisedBDT / p.fundingGoalBDT) * 100));

    container.innerHTML = `
      <div class="featured-project-card">
        <div class="featured-project-media">
          <img src="${p.image}" alt="${p.name}" class="featured-img" loading="lazy" />
          <span class="featured-badge">🌟 ${p.badge}</span>
        </div>

        <div class="featured-project-content">
          <div class="featured-header">
            <div class="location-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${p.location}</span>
            </div>
            <div class="verified-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>100% In-Person Verified</span>
            </div>
          </div>

          <h3 class="featured-title">${p.name}</h3>
          <p class="featured-bengali">${p.bengaliName}</p>
          <p class="featured-story">${p.shortStory}</p>

          <div class="featured-producer">
            <strong>Led by:</strong> ${p.producerName} (${p.cooperativeInfo})
          </div>

          <div class="featured-progress-block">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
            <div class="progress-stats">
              <span><strong>৳${p.fundingRaisedBDT.toLocaleString()}</strong> raised of ৳${p.fundingGoalBDT.toLocaleString()}</span>
              <span class="percent-tag">${percent}% Funded</span>
            </div>
          </div>

          <div class="featured-metrics-row">
            <div class="f-metric">
              <span class="label">Potential Return (Est.)</span>
              <span class="val return-text">${p.potentialReturn}</span>
            </div>
            <div class="f-metric">
              <span class="label">Duration</span>
              <span class="val">${p.duration}</span>
            </div>
            <div class="f-metric">
              <span class="label">Risk Level</span>
              <span class="val">${p.riskLevel}</span>
            </div>
            <div class="f-metric">
              <span class="label">Min. Ticket</span>
              <span class="val">৳${p.minInvestmentBDT.toLocaleString()}</span>
            </div>
          </div>

          <div class="featured-actions">
            <button class="btn btn-primary btn-lg" data-action="view-project" data-project-id="${p.id}">
              <span>View Full Project Terms</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <span class="investor-note">🔒 Full verification audit & financials require Investor login</span>
          </div>
        </div>
      </div>
    `;
  }

  public openProjectDetailsModal(projectId: string, directInvestFocus: boolean = false): void {
    const modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    const project = this.allProjects.find(p => p.id === projectId);
    if (!project) return;

    const modalBody = document.getElementById('project-detail-modal-body');
    if (!modalBody) return;

    const percent = Math.min(100, Math.round((project.fundingRaisedBDT / project.fundingGoalBDT) * 100));

    modalBody.innerHTML = `
      <div class="p-modal-content">
        <div class="p-modal-banner" style="background-image: url('${project.image}');">
          <div class="p-modal-overlay"></div>
          <div class="p-modal-badges">
            <span class="badge category">${project.badge}</span>
            <span class="badge verified">✓ Field Verified</span>
            <span class="badge demo">DEMO DATA</span>
          </div>
          <div class="p-modal-headline">
            <h2>${project.name}</h2>
            <p class="bengali">${project.bengaliName}</p>
            <div class="location-row">
              <span>📍 ${project.location}</span>
              <span>•</span>
              <span>🌾 ${project.cooperativeInfo}</span>
            </div>
          </div>
        </div>

        <div class="p-modal-grid">
          <div class="p-modal-main">
            <section class="detail-section">
              <h4>Project Narrative & Purpose • প্রকল্পের উদ্দেশ্য</h4>
              <p>${project.fullDescription}</p>
            </section>

            <section class="detail-section">
              <h4>People & Community Impact</h4>
              <div class="producer-card-inline">
                <div class="producer-avatar">👤</div>
                <div>
                  <strong>${project.producerName}</strong>
                  <p>${project.producerRole} • ${project.cooperativeInfo}</p>
                </div>
              </div>
            </section>

            <section class="detail-section">
              <h4>Verified Field Checklist</h4>
              <ul class="checklist">
                ${project.verificationChecklist.map(item => `
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </section>

            <section class="detail-section">
              <h4>Transparent Profit-Sharing Terms • মুনাফা বণ্টন নীতি</h4>
              <div class="ratio-pill">
                <strong>Agreed Ratio:</strong> ${project.profitSharingRatio}
              </div>
              <ul class="terms-list">
                ${project.terms.map(t => `<li>• ${t}</li>`).join('')}
              </ul>
            </section>

            <section class="detail-section risk-notice">
              <h4>⚠️ Statutory Ethical Risk Notice</h4>
              <p>GramBondhon does not offer guaranteed profits or fixed interest. Returns are estimated based on seasonal market conditions, crop yield, and fair trade pricing. Capital is subject to agricultural and business risks as disclosed in the project agreement.</p>
            </section>
          </div>

          <div class="p-modal-sidebar">
            <div class="investment-summary-card ${directInvestFocus ? 'highlight-focus' : ''}">
              <div class="summary-header">
                <h3>Investment Terms (DEMO)</h3>
                <span class="demo-tag">ILLUSTRATIVE</span>
              </div>

              <div class="metric-row">
                <span>Target Funding</span>
                <strong>৳${project.fundingGoalBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Funded So Far</span>
                <strong class="green-text">৳${project.fundingRaisedBDT.toLocaleString()} (${percent}%)</strong>
              </div>

              <div class="progress-bar-track my-2">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
              </div>

              <div class="metric-row">
                <span>Price per Share</span>
                <strong>৳${project.minInvestmentBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Duration</span>
                <strong>${project.duration}</strong>
              </div>
              <div class="metric-row">
                <span>Risk Assessment</span>
                <strong class="risk-badge risk-${project.riskLevel.toLowerCase().replace('-', '')}">${project.riskLevel}</strong>
              </div>
              <div class="metric-row">
                <span>Projected Return</span>
                <strong class="return-highlight">${project.potentialReturn}</strong>
              </div>

              <div class="investment-calculator" id="investment-calc-box">
                <h4>Interactive Return Simulator</h4>
                <p class="calc-hint">Enter sample amount to see estimated return (DEMO):</p>
                <div class="calc-input-group">
                  <span class="currency-prefix">৳</span>
                  <input type="number" id="calc-input-amount" value="${project.minInvestmentBDT}" min="${project.minInvestmentBDT}" step="1000" />
                </div>
                <div class="quick-amounts">
                  <button class="quick-btn" data-amt="${project.minInvestmentBDT}">৳${project.minInvestmentBDT.toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${project.minInvestmentBDT * 2}">৳${(project.minInvestmentBDT * 2).toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${project.minInvestmentBDT * 5}">৳${(project.minInvestmentBDT * 5).toLocaleString()}</button>
                </div>

                <div class="calc-result" id="calc-result-box"></div>
              </div>

              <button class="btn btn-primary btn-block btn-invest-confirm" id="btn-confirm-investment" data-project-id="${project.id}">
                Proceed to Invest (Demo)
              </button>

              <div id="invest-success-msg" class="invest-success-banner" style="display: none;">
                ✓ <strong>Investment Confirmed (Demo)!</strong>
                <p>Congratulations! You have participated in this rural initiative.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    this.setupCalculatorLogic(project);

    const confirmBtn = document.getElementById('btn-confirm-investment');
    const successMsg = document.getElementById('invest-success-msg');
    confirmBtn?.addEventListener('click', () => {
      if (confirmBtn && successMsg) {
        confirmBtn.setAttribute('disabled', 'true');
        confirmBtn.textContent = 'Processing Investment...';
        setTimeout(() => {
          confirmBtn.style.display = 'none';
          successMsg.style.display = 'block';
        }, 800);
      }
    });
  }

  private setupCalculatorLogic(project: Project): void {
    const input = document.getElementById('calc-input-amount') as HTMLInputElement;
    const resultBox = document.getElementById('calc-result-box');
    const quickBtns = document.querySelectorAll('.quick-btn');

    const updateCalculations = () => {
      if (!input || !resultBox) return;
      let amount = parseFloat(input.value);
      if (isNaN(amount) || amount < 0) amount = project.minInvestmentBDT;

      const [minPct, maxPct] = project.returnRangePercent;
      const minProfit = Math.round((amount * minPct) / 100);
      const maxProfit = Math.round((amount * maxPct) / 100);
      const minTotal = amount + minProfit;
      const maxTotal = amount + maxProfit;

      resultBox.innerHTML = `
        <div class="result-row">
          <span>Est. Profit (${project.potentialReturn}):</span>
          <strong class="profit-val">৳${minProfit.toLocaleString()} – ৳${maxProfit.toLocaleString()}</strong>
        </div>
        <div class="result-row total">
          <span>Est. Total Payout:</span>
          <strong class="total-val">৳${minTotal.toLocaleString()} – ৳${maxTotal.toLocaleString()}</strong>
        </div>
        <small class="disclaimer">*Illustrative DEMO DATA. Actual outcome depends on real harvest/production.</small>
      `;
    };

    input?.addEventListener('input', updateCalculations);

    quickBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const amt = (e.currentTarget as HTMLElement).getAttribute('data-amt');
        if (amt && input) {
          input.value = amt;
          updateCalculations();
        }
      });
    });

    updateCalculations();
  }

  public closeProjectDetailsModal(): void {
    const modal = document.getElementById('project-detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}
