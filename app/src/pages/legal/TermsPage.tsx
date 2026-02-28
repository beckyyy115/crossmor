import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LegalDisclaimer } from '@/components/LegalDisclaimer';

export function TermsPage() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          {t('terms.title')}
        </h1>
        <p className="text-muted-foreground mb-8">
          {t('terms.lastUpdated')}
        </p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s1_title')}</div>
            <p>{t('terms.s1_p1')}</p>
            <p>{t('terms.s1_p2')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s2_title')}</div>
            <p>{t('terms.s2_p1')}</p>
            <p>{t('terms.s2_p2')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s3_title')}</div>
            <p>{t('terms.s3_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s4_title')}</div>
            <p>{t('terms.s4_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s5_title')}</div>
            <p>{t('terms.s5_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s6_title')}</div>
            <p>{t('terms.s6_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s7_title')}</div>
            <p>{t('terms.s7_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s8_title')}</div>
            <p>{t('terms.s8_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s9_title')}</div>
            <p>{t('terms.s9_p1')}</p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">{t('terms.s10_title')}</div>
            <p>{t('terms.s10_p1')}<br />{t('terms.s10_email')}</p>
          </section>

        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">{t('terms.contactBtn')}</Link>
          </Button>
          <Button asChild variant="outline" className="border-border bg-background">
            <Link to="/refund-policy">{t('terms.refundPolicyBtn')}</Link>
          </Button>
        </div>

        <LegalDisclaimer />
      </div>
    </div>
  );
}
