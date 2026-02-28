import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function CookiePage() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t('cookie.title')}</h1>
        <p className="text-muted-foreground mb-8">{t('cookie.lastUpdated')}</p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <p>{t('cookie.intro')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s1_title')}</div>
            <p>{t('cookie.s1_p')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s2_title')}</div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('cookie.s2_essential')}</div>
              <p>{t('cookie.s2_essential_p')}</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('cookie.s2_performance')}</div>
              <p>{t('cookie.s2_performance_p')}</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('cookie.s2_analytics')}</div>
              <p>{t('cookie.s2_analytics_p')}</p>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('cookie.s2_functionality')}</div>
              <p>{t('cookie.s2_functionality_p')}</p>
            </div>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s3_title')}</div>
            <p>{t('cookie.s3_p')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s4_title')}</div>
            <p>{t('cookie.s4_p')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s5_title')}</div>
            <p>{t('cookie.s5_p')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('cookie.s6_title')}</div>
            <p className="text-foreground font-medium">{t('cookie.s6_email')}</p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">{t('cookie.contactBtn')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
