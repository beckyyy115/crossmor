/** Region code: Global, US, BR, IN, SEA, etc. */
export type RegionCode = 'Global' | 'US' | 'BR' | 'IN' | 'SEA' | string;

/** Duration: Monthly, Yearly, Credits, One-time, etc. */
export type DurationType = 'Monthly' | 'Yearly' | 'Credits' | 'One-time' | string;

/** Edition / availability: Global, US Only, etc. */
export type EditionType = 'Global' | 'US Only' | string;

export interface Product {
  id: string;
  name: string;
  description: string;
  /** Base price in USD */
  price: number;
  originalPrice?: number;
  /** Optional fixed prices per currency (overrides conversion when set) */
  priceByCurrency?: Record<string, number>;
  image: string;
  /** Subcategory slug this product belongs to */
  category: string;
  platform: string;
  region: RegionCode;
  /** e.g. Monthly, Yearly, Credits */
  duration?: DurationType;
  /** e.g. Global, US Only */
  edition?: EditionType;
  rating: number;
  reviewCount: number;
  badge?: string;
  instantDelivery: boolean;
}

/** Subcategory under a top-level category group */
export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  icon: string;
  productCount: number;
}

/** Top-level store category (has image, contains subcategories) */
export interface CategoryGroup {
  id: string;
  title: string;
  subtitle: string;
  /** i18n key for nav/hero (e.g. aiTools, streaming) */
  labelKey?: string;
  /** Representative image for this category */
  image: string;
  categories: Category[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavItem {
  /** Stable id for active state and hash (e.g. ai-digital-tools, deals) */
  id: string;
  /** i18n key only, e.g. nav.ai_tools → store labelKey: 'nav.ai_tools' or 'ai_tools' for t('nav.'+x) */
  labelKey: string;
  href: string;
  children?: NavItem[];
}
