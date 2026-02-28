import { categoryGroups, allProductsList } from '@/lib/data';
import type { Category, CategoryGroup, Product } from '@/types';

export const allGroups: CategoryGroup[] = categoryGroups;

export const allCategories: Category[] = categoryGroups.flatMap((g) => g.categories);

export const allProducts: Product[] = allProductsList;

export function getGroup(groupId: string): CategoryGroup | undefined {
  return allGroups.find((g) => g.id === groupId);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.category === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

/**
 * Get effective price in a currency: use priceByCurrency if set, otherwise rely on locale conversion (caller uses formatPrice for that).
 */
export function getPriceInCurrency(product: Product, currency: string): number | null {
  if (product.priceByCurrency && product.priceByCurrency[currency] != null) {
    return product.priceByCurrency[currency];
  }
  return null;
}
