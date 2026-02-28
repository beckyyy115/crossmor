import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Clock, Receipt, LifeBuoy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4'] as const;

export function HelpCenter() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t('help.title')}</h1>
          <p className="text-muted-foreground">
            {t('help.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Clock className="w-4 h-4" /> {t('help.delivery')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t('help.deliveryDesc')}</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><ShieldCheck className="w-4 h-4" /> {t('help.security')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t('help.securityDesc')}</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Receipt className="w-4 h-4" /> {t('help.receipts')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t('help.receiptsDesc')}</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><LifeBuoy className="w-4 h-4" /> {t('help.support')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t('help.supportDesc')}</CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-surface-1 border border-border rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">{t('help.faq')}</h2>
          <div className="space-y-6">
            {faqKeys.map((key) => (
              <div key={key}>
                <div className="font-medium">{t(`help.${key}q`)}</div>
                <div className="text-muted-foreground mt-1">{t(`help.${key}a`)}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/track-order" className="inline-flex items-center">
                {t('help.trackOrder')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/refund-policy">{t('help.refundPolicy')}</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/contact">{t('help.contactSupport')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
