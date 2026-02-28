import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Zap, Clock, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { navItems } from '@/lib/data';
import { useActiveCategory } from '@/contexts/active-category';

const trustItemKeys = ['securePayments', 'instantDelivery', 'support24', 'moneyBack'] as const;
const trustIcons = [Shield, Zap, Clock, BadgeCheck];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

/** Top-level category links only (exclude Deals); labels match navbar */
const heroCategoryLinks = navItems.filter((item) => item.href.startsWith('/store/group/'));

export function Hero() {
  const { t } = useTranslation();
  const { activeCategory } = useActiveCategory();
  const primaryCategory =
    heroCategoryLinks.find((item) => item.id === activeCategory) ?? heroCategoryLinks[0];
  const primaryCategoryName = primaryCategory ? t(`nav.${primaryCategory.labelKey}`) : '';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-18">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="mb-6 bg-surface-2/80 backdrop-blur-sm text-foreground border-border"
            >
              <span className="text-primary mr-2">★</span>
              {t('common.trustedBadge')}
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
          >
            {t('hero.headline')}
            <span className="text-gradient">{t('hero.highlight')}</span>
            {t('hero.headlineAfter')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* Primary CTA: Explore {Current Category}; Secondary: Browse Deals */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 text-base px-6 py-5 sm:px-8 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Link to={primaryCategory?.href ?? '/store'} className="inline-flex items-center">
                {t('hero.ctaExploreCategory', { category: primaryCategoryName })}
                <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-surface-2 text-base px-6 py-5 sm:px-8 sm:py-6 transition-all duration-300"
            >
              <Link to="/store">{t('hero.ctaBrowseDeals')}</Link>
            </Button>
          </motion.div>

          {/* Category chips: all 5 categories, active highlight matches nav */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-3 mb-12"
          >
            {heroCategoryLinks.map((item) => {
              const isActive = item.id === activeCategory;
              return (
                <Button
                  key={item.href}
                  asChild
                  size="sm"
                  variant={isActive ? 'default' : 'outline'}
                  className={
                    isActive
                      ? 'bg-primary/90 hover:bg-primary text-primary-foreground border-0'
                      : 'border-border hover:bg-surface-2'
                  }
                >
                  <Link to={item.href}>{t(`nav.${item.labelKey}`)}</Link>
                </Button>
              );
            })}
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 sm:gap-8"
          >
            {trustItemKeys.map((key, index) => {
              const Icon = trustIcons[index];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{t(`common.${key}`)}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
