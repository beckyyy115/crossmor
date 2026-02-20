import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgeCheck, Lock, ShieldCheck, Headphones } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { AnimatedCounter } from '@/components/animated-counter';

const stats = [
  { label: 'Happy Customers', value: 2, suffix: 'M+' },
  { label: 'Countries Served', value: 50, suffix: '+' },
  { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
  { label: 'Processed', value: 50, prefix: '$', suffix: 'M+' },
];

const features = [
  {
    title: 'MOR Protection',
    description: "We're the merchant of record, handling all tax and compliance for you.",
    icon: BadgeCheck,
  },
  {
    title: 'PCI DSS Compliant',
    description: 'Bank-level security for all transactions and data protection.',
    icon: Lock,
  },
  {
    title: 'Fraud Protection',
    description: 'AI-powered risk detection keeps your purchases safe.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Support',
    description: 'Real humans, real help, anytime you need assistance.',
    icon: Headphones,
  },
];

export function TrustSecurity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-surface-1 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Trust <span className="text-gradient">CrossMor</span>?
              </h2>
              <p className="text-muted-foreground mb-10">
                As your Merchant of Record, we take full responsibility for every transaction.
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface-2 rounded-xl p-6 border border-border"
                >
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1] as const,
                }}
                className="flex gap-4 p-4 rounded-xl bg-surface-2 border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
