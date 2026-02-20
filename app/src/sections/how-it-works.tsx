import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Shield, Zap, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

const steps = [
  {
    step: 1,
    title: 'Choose Your Product',
    description: 'Browse 1000+ digital goods from games to AI subscriptions',
    icon: Search,
  },
  {
    step: 2,
    title: 'Pay Securely',
    description: 'Multiple payment methods with encrypted transactions',
    icon: Shield,
  },
  {
    step: 3,
    title: 'Instant Delivery',
    description: 'Codes delivered to your email in seconds',
    icon: Zap,
  },
  {
    step: 4,
    title: 'Enjoy & Save',
    description: 'Activate and start using immediately',
    icon: Sparkles,
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How CrossMor Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get your digital goods in 4 simple steps
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] as const }}
              className="h-full bg-gradient-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1] as const,
                }}
                className="relative text-center"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-surface-2 border border-border flex items-center justify-center"
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Step Number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-2 lg:top-0">
                  <span className="w-6 h-6 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
