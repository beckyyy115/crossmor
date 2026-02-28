/**
 * Fallback when product/category image is missing or fails to load.
 * Inline SVG so it works without an extra request and in any deployment.
 */
export const PRODUCT_IMAGE_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="#e5e7eb" width="200" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="14" font-family="sans-serif">Product</text></svg>'
  );

export function getProductImageSrc(image: string | undefined, loadFailed: boolean): string {
  if (image && !loadFailed) return image;
  return PRODUCT_IMAGE_PLACEHOLDER;
}
