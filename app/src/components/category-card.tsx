import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Gamepad2, 
  Smartphone, 
  Brain, 
  Image, 
  Play, 
  Gift, 
  Monitor,
  MessageSquare,
  Video,
  PenTool,
  Code,
  Zap,
  Music,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Category } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  Smartphone,
  Brain,
  Image,
  Play,
  Gift,
  Monitor,
  MessageSquare,
  Video,
  PenTool,
  Code,
  Zap,
  Music,
  Box,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Gamepad2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative block bg-surface-1 rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/30"
    >
      <Link to={`/store/c/${category.slug}`} className="absolute inset-0 z-10" aria-label={category.name} />
      {/* Background Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        
        <h3 className="font-semibold text-foreground text-base mb-1">
          {category.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {category.productCount} products
          </span>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </motion.div>
  );
}
