import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LegalDisclaimer } from '@/components/LegalDisclaimer';

export function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t('privacy.title')}</h1>
        <p className="text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <p>{t('privacy.intro1')}</p>
            <p>{t('privacy.intro2')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s1_title')}</div>
            <p>{t('privacy.s1_weCollect')}</p>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('privacy.s1_merchant')}</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('privacy.s1_merchant_li1')}</li>
                <li>{t('privacy.s1_merchant_li2')}</li>
                <li>{t('privacy.s1_merchant_li3')}</li>
                <li>{t('privacy.s1_merchant_li4')}</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('privacy.s1_transaction')}</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('privacy.s1_transaction_li1')}</li>
                <li>{t('privacy.s1_transaction_li2')}</li>
                <li>{t('privacy.s1_transaction_li3')}</li>
                <li>{t('privacy.s1_transaction_li4')}</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">{t('privacy.s1_auto')}</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('privacy.s1_auto_li1')}</li>
                <li>{t('privacy.s1_auto_li2')}</li>
                <li>{t('privacy.s1_auto_li3')}</li>
                <li>{t('privacy.s1_auto_li4')}</li>
              </ul>
            </div>

            <p className="text-xs">{t('privacy.s1_pci')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s2_title')}</div>
            <p>{t('privacy.s2_weUse')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s2_li1')}</li>
              <li>{t('privacy.s2_li2')}</li>
              <li>{t('privacy.s2_li3')}</li>
              <li>{t('privacy.s2_li4')}</li>
              <li>{t('privacy.s2_li5')}</li>
              <li>{t('privacy.s2_li6')}</li>
              <li>{t('privacy.s2_li7')}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s3_title')}</div>
            <p>{t('privacy.s3_basedOn')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s3_li1')}</li>
              <li>{t('privacy.s3_li2')}</li>
              <li>{t('privacy.s3_li3')}</li>
              <li>{t('privacy.s3_li4')}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s4_title')}</div>
            <p>{t('privacy.s4_weShare')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s4_li1')}</li>
              <li>{t('privacy.s4_li2')}</li>
              <li>{t('privacy.s4_li3')}</li>
              <li>{t('privacy.s4_li4')}</li>
              <li>{t('privacy.s4_li5')}</li>
            </ul>
            <p>{t('privacy.s4_noSell')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s5_title')}</div>
            <p>{t('privacy.s5_weImplement')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s5_li1')}</li>
              <li>{t('privacy.s5_li2')}</li>
              <li>{t('privacy.s5_li3')}</li>
              <li>{t('privacy.s5_li4')}</li>
            </ul>
            <p>{t('privacy.s5_noSystem')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s6_title')}</div>
            <p>{t('privacy.s6_weRetain')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s6_li1')}</li>
              <li>{t('privacy.s6_li2')}</li>
              <li>{t('privacy.s6_li3')}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s7_title')}</div>
            <p>{t('privacy.s7_p1')}</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s8_title')}</div>
            <p>{t('privacy.s8_depending')}</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('privacy.s8_li1')}</li>
              <li>{t('privacy.s8_li2')}</li>
              <li>{t('privacy.s8_li3')}</li>
              <li>{t('privacy.s8_li4')}</li>
            </ul>
            <p>
              {t('privacy.s8_toExercise')} <span className="text-foreground font-medium">{t('privacy.s9_email')}</span>
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">{t('privacy.s9_title')}</div>
            <p className="text-foreground font-medium">{t('privacy.s9_email')}</p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">{t('privacy.contactBtn')}</Link>
          </Button>
        </div>

        <LegalDisclaimer />
      </div>
    </div>
  );
}
