import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Receipt, LifeBuoy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    q: 'How fast is delivery?',
    a: 'Most items are delivered instantly after order confirmation. Some high-risk regions or large orders may require manual review.',
  },
  {
    q: 'What does “Merchant of Record” mean?',
    a: 'CrossMor is the seller on record for these digital products. We accept payment, handle compliance screening and support, and issue receipts.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Refund eligibility depends on the product type and whether a code was delivered/redeemed. See Refund Policy for details.',
  },
  {
    q: 'My payment failed — what should I do?',
    a: 'Try another payment method or contact support with your order ID. We can help diagnose bank/issuer declines vs. risk screening.',
  },
];

export function HelpCenter() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Help Center</h1>
          <p className="text-muted-foreground">
            Quick answers for partners and customers. For live support, go to Contact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Clock className="w-4 h-4" /> Delivery</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Instant delivery for most SKUs.</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><ShieldCheck className="w-4 h-4" /> Security</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Fraud & compliance screening built in.</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Receipt className="w-4 h-4" /> Receipts</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Receipts issued by CrossMor as MOR.</CardContent>
          </Card>
          <Card className="bg-surface-1 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><LifeBuoy className="w-4 h-4" /> Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Track orders and contact us anytime.</CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-surface-1 border border-border rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <div className="font-medium">{f.q}</div>
                <div className="text-muted-foreground mt-1">{f.a}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/track-order" className="inline-flex items-center">
                Track an order <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/refund-policy">Refund policy</Link>
            </Button>
            <Button asChild variant="outline" className="border-border bg-background">
              <Link to="/contact">Contact support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
