/**
 * GramBandhan - Marketplace Module
 * Powers the Village Marketplace storefront, search autocomplete, category chips,
 * flash countdown, shopping bag, and bKash/Nagad checkout.
 */
export class MarketplaceModule {
  openStore() {
    const btn = document.querySelector('[data-action="open-marketplace"]');
    if (btn) (btn as any).click();
  }
}
