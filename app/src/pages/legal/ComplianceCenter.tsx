import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, AlertTriangle, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LegalDisclaimer } from '@/components/LegalDisclaimer';

export function ComplianceCenter() {
  const { t } = useTranslation();
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t('compliance.title')}</h1>
          <p className="text-muted-foreground">
            {t('compliance.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><ShieldCheck className="w-4 h-4" /> {t('compliance.fraudScreening')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {t('compliance.fraudScreeningDesc')}
            </CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Lock className="w-4 h-4" /> {t('compliance.dataProtection')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {t('compliance.dataProtectionDesc')}
            </CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><AlertTriangle className="w-4 h-4" /> {t('compliance.restrictedContent')}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {t('compliance.restrictedContentDesc')}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-surface-1 border border-border rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-3">{t('compliance.dueDiligence')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('compliance.dueDiligenceDesc')}
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>{t('compliance.dueDiligenceLi1')}</li>
            <li>{t('compliance.dueDiligenceLi2')}</li>
            <li>{t('compliance.dueDiligenceLi3')}</li>
            <li>{t('compliance.dueDiligenceLi4')}</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/contact" className="inline-flex items-center">
                {t('compliance.requestDocs')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/legal/privacy">{t('compliance.privacy')}</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/legal/terms">{t('compliance.terms')}</Link>
            </Button>
          </div>
        </div>

        <LegalDisclaimer />
      </div>
    </div>
  );
}
