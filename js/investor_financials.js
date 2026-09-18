/**
 * GramBandhan - Investor Financials Script
 * Powers the Investor Financials tab, Capital Outflow & Return Inflow Ledger,
 * and dividend reconciliation.
 */
export class InvestorFinancials {
  open() {
    window.gramBondhon?.investor?.openDashboard('financials');
  }
}
