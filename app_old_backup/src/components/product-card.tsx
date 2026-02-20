import { motion } from 'framer-motion';
import { Star, Zap, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -4 }}
      className="group relative bg-surface-1 rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/30"
    >
      {/* Badge */}
      {product.badge && (
        <Badge className="absolute top-3 left-3 z-10 bg-gradient-primary text-white border-0">
          {product.badge}
        </Badge>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Platform & Region */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted-foreground">{product.platform}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{product.region}</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground font-mono">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.instantDelivery && (
              <div className="flex items-center gap-1 mt-1">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span className="text-xs text-cyan-400">Instant</span>
              </div>
            )}
          </div>

          <Button
            size="sm"
            className="bg-gradient-primary hover:opacity-90 text-white border-0 transition-all duration-200 hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
