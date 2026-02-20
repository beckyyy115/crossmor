import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, Bitcoin } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

const paymentIcons = [
  { name: 'Visa', icon: CreditCard },
  { name: 'Mastercard', icon: CreditCard },
  { name: 'PayPal', icon: Wallet },
  { name: 'Apple Pay', icon: Smartphone },
  { name: 'Google Pay', icon: Smartphone },
  { name: 'Alipay', icon: Wallet },
  { name: 'Crypto', icon: Bitcoin },
];

export function PaymentMethods() {
  return (
    <section className="py-16 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Pay Your Way
          </h2>
          <p className="text-muted-foreground">
            Credit cards, local bank transfers, e-wallets, and crypto — we support them all
          </p>
        </ScrollReveal>

        {/* Payment Icons */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {paymentIcons.map((payment, index) => (
            <motion.div
              key={payment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-1 border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-surface-3">
                <payment.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-xs text-muted-foreground">{payment.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
