import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, AlertTriangle, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ComplianceCenter() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Compliance</h1>
          <p className="text-muted-foreground">
            High-level compliance overview for partner review. Replace with your verified controls, policies, and entity
            details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><ShieldCheck className="w-4 h-4" /> Fraud Screening</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Automated and manual reviews for unusual orders, high-risk regions, and velocity anomalies.
            </CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Lock className="w-4 h-4" /> Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Least-privilege access, secure storage, and vendor controls for payment processing.
            </CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><AlertTriangle className="w-4 h-4" /> Restricted Content</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We block prohibited items and high-risk categories per payment processor rules.
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-surface-1 border border-border rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-3">Partner due diligence</h2>
          <p className="text-muted-foreground mb-6">
            If you’re evaluating CrossMor for a partnership, we can provide:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Entity details and supported geographies</li>
            <li>Chargeback and refund workflows</li>
            <li>Data processing terms and privacy policy</li>
            <li>Operational playbooks (KYC/KYB, risk, delivery)</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/contact" className="inline-flex items-center">
                Request docs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/legal/privacy">Privacy</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/legal/terms">Terms</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
