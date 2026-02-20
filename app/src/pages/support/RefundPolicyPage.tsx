import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function RefundPolicyPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Refund Policy</h1>
        <p className="text-muted-foreground mb-8">
          This is a demo policy page for partner review. Real production policy must be tailored by jurisdiction and SKU.
        </p>

        <Card className="bg-surface-1 border-border mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" /> Digital products are different
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Many digital goods (keys, codes, top-ups) become non-refundable once delivered or redeemed. We still support
            refunds for duplicate charges, non-delivery, and clear product mismatches.
          </CardContent>
        </Card>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Eligible refund cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Duplicate or accidental double charges</li>
              <li>Code not delivered within the stated timeframe</li>
              <li>Wrong region/product issued due to our error</li>
              <li>Payment reversed by issuer (chargeback) — order will be cancelled</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Not eligible (typical)</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Code delivered and redeemed successfully</li>
              <li>Wrong purchase made by customer (e.g., wrong platform)</li>
              <li>Account restrictions on the platform side</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">How to request a refund</h2>
            <p className="text-muted-foreground">
              Contact support with your order ID, purchase email, and a screenshot (if relevant). We typically respond within
              24 hours on business days.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/contact">Contact support</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/track-order">Track an order</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
