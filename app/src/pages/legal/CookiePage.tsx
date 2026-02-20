import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CookiePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <p>This Cookie Policy explains how Crossmor uses cookies and similar technologies.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">1. What Are Cookies</div>
            <p>Cookies are small text files stored on your device when you visit a website.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">2. Types of Cookies We Use</div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">Essential Cookies</div>
              <p>Necessary for website functionality.</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">Performance Cookies</div>
              <p>Help analyze traffic and usage patterns.</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">Analytics Cookies</div>
              <p>May include services such as Google Analytics.</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">Functionality Cookies</div>
              <p>Remember preferences such as language and region.</p>
            </div>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">3. Third-Party Cookies</div>
            <p>We may use trusted third-party analytics or infrastructure providers.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">4. Managing Cookies</div>
            <p>
              You can manage cookies via your browser settings. Disabling cookies may limit certain functionality.
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">5. Updates</div>
            <p>We may update this Cookie Policy from time to time.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">6. Contact</div>
            <p className="text-foreground font-medium">service@crossmor.com</p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
