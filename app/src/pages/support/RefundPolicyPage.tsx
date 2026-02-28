import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RefundPolicyPage() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t('refund.title')}</h1>
        <p className="text-muted-foreground mb-8">
          {t('refund.subtitle')}
        </p>

        <Card className="bg-surface-1 border-border mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" /> {t('refund.digitalDifferent')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            {t('refund.digitalDifferentDesc')}
          </CardContent>
        </Card>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">{t('refund.eligibleTitle')}</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>{t('refund.eligible1')}</li>
              <li>{t('refund.eligible2')}</li>
              <li>{t('refund.eligible3')}</li>
              <li>{t('refund.eligible4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t('refund.notEligibleTitle')}</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>{t('refund.notEligible1')}</li>
              <li>{t('refund.notEligible2')}</li>
              <li>{t('refund.notEligible3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t('refund.howToTitle')}</h2>
            <p className="text-muted-foreground">
              {t('refund.howToDesc')}
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/contact">{t('refund.contactSupportBtn')}</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/track-order">{t('refund.trackOrderBtn')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
