/**
 * GramBandhan - Investor Module
 * Powers the Investor Portal, Post-Login Banner ("Invest in the Earth's Future"),
 * Sidebar Dashboard, Portfolio overview, Capital Outflow & Return Inflow Ledger.
 */
export class InvestorModule {
  openDashboard(tab = 'dashboard') {
    if (window.gramBondhon?.investor) {
      window.gramBondhon.investor.openDashboard(tab);
    }
  }
}
