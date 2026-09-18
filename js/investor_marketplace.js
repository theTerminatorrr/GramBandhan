/**
 * GramBandhan - Investor Marketplace Script
 * Powers the Investor Dashboard Marketplace tab, rural craft investments,
 * and village collective agreements.
 */
export class InvestorMarketplace {
  open() {
    window.gramBondhon?.investor?.openDashboard('marketplace');
  }
}
