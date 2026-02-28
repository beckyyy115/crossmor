import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Twitter, MessageCircle, Instagram, Linkedin } from 'lucide-react';

const footerLinkKeys = {
  products: ['aiSubscriptions', 'giftCards', 'softwareLicenses'] as const,
  support: ['helpCenter', 'contactUs', 'trackOrder', 'refundPolicy'] as const,
  legal: ['termsOfService', 'privacyPolicy', 'cookiePolicy', 'compliance'] as const,
};

const footerHrefs: Record<string, string> = {
  aiSubscriptions: '/store/group/ai-tools',
  giftCards: '/store/group/streaming',
  softwareLicenses: '/store/c/software',
  helpCenter: '/help',
  contactUs: '/contact',
  trackOrder: '/track-order',
  refundPolicy: '/refund-policy',
  termsOfService: '/legal/terms',
  privacyPolicy: '/legal/privacy',
  cookiePolicy: '/legal/cookies',
  compliance: '/compliance',
};

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://t.me/crossmor_official', label: 'Telegram' },
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
];

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface-1 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">CrossMor</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your trusted Merchant of Record for digital goods. We handle payments, 
              taxes, and compliance so you can focus on what matters.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.products')}</h3>
            <ul className="space-y-3">
              {footerLinkKeys.products.map((key) => (
                <li key={key}>
                  <a
                    href={`#${footerHrefs[key]}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {t(`footer.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.support')}</h3>
            <ul className="space-y-3">
              {footerLinkKeys.support.map((key) => (
                <li key={key}>
                  <a
                    href={`#${footerHrefs[key]}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {t(`footer.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              {footerLinkKeys.legal.map((key) => (
                <li key={key}>
                  <a
                    href={`#${footerHrefs[key]}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {t(`footer.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 CrossMor. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            CrossMor is a registered Merchant of Record.
          </p>
        </div>
      </div>
    </footer>
  );
}
