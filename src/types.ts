/**
 * GRAMBANDHAN (গ্রামীণ বন্ধন) - Core Type Definitions
 * Designed for clean maintainability and easy explanation for teachers & evaluators.
 */

export type ProjectCategory = 'all' | 'agriculture' | 'livestock' | 'handicrafts' | 'agro' | 'fisheries' | 'crops';

export interface Project {
  id: string;
  name: string;
  bengaliName: string;
  category: 'agriculture' | 'livestock' | 'handicrafts' | 'agro' | 'fisheries' | 'crops';
  location: string;
  district: string;
  image: string;
  badge: string;
  verified: boolean;
  fundingRaisedBDT: number;
  fundingGoalBDT: number;
  minInvestmentBDT: number;
  potentialReturn: string;
  returnRangePercent: [number, number]; // e.g. [13.5, 16.0]
  duration: string;
  durationMonths: number;
  riskLevel: 'Low' | 'Low-Medium' | 'Medium' | 'Medium-High';
  producerName: string;
  producerRole: string;
  cooperativeInfo: string;
  shortStory: string;
  fullDescription: string;
  profitSharingRatio: string;
  bengaliReturn?: string;
  investorShareText?: string;
  bengaliProfitSplit?: string;
  totalReturnBDT?: string;
  periodText?: string;
  returnTypeTag?: string;
  terms: string[];
  verificationChecklist: string[];
  isFeatured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  bengaliName: string;
  category: 'farming' | 'handicrafts' | 'dairy' | 'fisheries' | 'spices' | 'fruits' | 'nakshi-kantha' | 'jute' | 'bamboo' | 'agro-fresh' | string;
  priceBDT: number;
  originalPriceBDT?: number;
  discountPercent?: number;
  unit?: string;
  image: string;
  artisanName: string;
  artisanDistrict: string;
  craftType: string;
  description: string;
  rating: number;
  reviewsCount: number;
  flashDeal?: boolean;
  sellerCooperative?: string;
  originVillage?: string;
  inStock?: boolean;
  deliveryDays?: string;
}

export interface Artisan {
  id: string;
  name: string;
  bengaliName: string;
  craft: string;
  village: string;
  district: string;
  image: string;
  bio: string;
  specialty: string;
  projectsCompleted: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  district: string;
  quote: string;
  rating: number;
  type: 'investor' | 'farmer' | 'artisan';
  avatarBg: string;
  avatarInitials: string;
}

export interface InvestorUser {
  name: string;
  email: string;
  phone: string;
  nidVerified: boolean;
  portfolioValueBDT: number;
}

export interface BuyerUser {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  preferredPayment: 'bKash' | 'Nagad' | 'Cash on Delivery';
  memberSince: string;
}

export interface TrackingStep {
  label: string;
  bengaliLabel: string;
  time: string;
  completed: boolean;
  active?: boolean;
}

export interface BuyerOrder {
  id: string;
  date: string;
  status: 'on_the_way' | 'delivered' | 'cancelled';
  statusBengali: string;
  statusBadgeClass: string;
  items: { product: Product; quantity: number }[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  paymentMethod: 'bKash' | 'Nagad' | 'Cash on Delivery';
  paymentDetails?: string;
  shippingAddress: string;
  recipientPhone: string;
  trackingNumber?: string;
  courierPartner?: string;
  estimatedDelivery?: string;
  trackingSteps?: TrackingStep[];
  cancelReason?: string;
  refundStatus?: string;
}
