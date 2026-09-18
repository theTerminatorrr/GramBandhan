/**
 * GramBandhan - Investor Profile Script
 * Powers the Investor Settings tab, NID verification status,
 * and IBBL / bKash / Nagad payment wallets.
 */
export class InvestorProfile {
  open() {
    window.gramBondhon?.investor?.openDashboard('settings');
  }
}
