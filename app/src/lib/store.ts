import { categoryGroups, gamingProducts, aiToolsProducts, streamingProducts } from '@/lib/data';
import type { Category, CategoryGroup, Product } from '@/types';

export const allGroups: CategoryGroup[] = categoryGroups;

export const allCategories: Category[] = categoryGroups.flatMap((g) => g.categories);

export const allProducts: Product[] = [
  ...gamingProducts,
  ...aiToolsProducts,
  ...streamingProducts,
];

export function getGroup(groupId: string) {
  return allGroups.find((g) => g.id === groupId);
}

export function getCategoryBySlug(slug: string) {
  return allCategories.find((c) => c.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string) {
  return allProducts.filter((p) => p.category === categorySlug);
}

export function getProductById(id: string) {
  return allProducts.find((p) => p.id === id);
}
