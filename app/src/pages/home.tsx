import { Hero } from '@/sections/hero';
import { CategoryGroups } from '@/sections/category-groups';
import { FeaturedProducts } from '@/sections/featured-products';
import { HowItWorks } from '@/sections/how-it-works';
import { TrustSecurity } from '@/sections/trust-security';
import { PaymentMethods } from '@/sections/payment-methods';
import { Testimonials } from '@/sections/testimonials';
import { CTABanner } from '@/sections/cta-banner';
import { ContactSection } from '@/pages/support/ContactPage';

export function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGroups />
      <FeaturedProducts />
      <HowItWorks />
      <TrustSecurity />
      <PaymentMethods />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </>
  );
}
