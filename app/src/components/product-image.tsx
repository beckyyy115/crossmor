import { useState } from 'react';
import { getProductImageSrc } from '@/lib/placeholder';

interface ProductImageProps {
  /** Image URL from product.image (e.g. /logos/chatgpt.png) */
  image: string | undefined;
  alt: string;
  className?: string;
}

/**
 * Renders product logo; uses placeholder if image is missing or fails to load.
 * Always uses object-fit: contain semantics via parent layout.
 */
export function ProductImage({ image, alt, className }: ProductImageProps) {
  const [loadFailed, setLoadFailed] = useState(false);
  const src = getProductImageSrc(image, loadFailed);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setLoadFailed(true)}
    />
  );
}
