import Contact from "@/pages/Contact";
import { Navigation } from '@/sections/navigation';
import { Hero } from '@/sections/hero';
import { CategoryGroups } from '@/sections/category-groups';
import { FeaturedProducts } from '@/sections/featured-products';
import { HowItWorks } from '@/sections/how-it-works';
import { TrustSecurity } from '@/sections/trust-security';
import { PaymentMethods } from '@/sections/payment-methods';
import { Testimonials } from '@/sections/testimonials';
import { CTABanner } from '@/sections/cta-banner';
import { Footer } from '@/sections/footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <CategoryGroups />
        <FeaturedProducts />
        <HowItWorks />
        <TrustSecurity />
        <PaymentMethods />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
