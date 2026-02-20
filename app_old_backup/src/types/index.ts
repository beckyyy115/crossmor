export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  platform: string;
  region: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  instantDelivery: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  icon: string;
  productCount: number;
}

export interface CategoryGroup {
  id: string;
  title: string;
  subtitle: string;
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
  label: string;
  href: string;
  children?: NavItem[];
}
