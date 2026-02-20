import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function TermsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: February 18, 2026
        </p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <div className="text-foreground font-semibold mb-2">1. Scope of Services</div>
            <p>
              Crossp Technology Limited and Superbo Information & Technology Limited
              (collectively, “CrossMor,” “we,” “us,” or “our”) provide merchant of record (MOR),
              payment processing, settlement, and related technology services through our
              website, APIs, and associated systems.
            </p>
            <p>
              Depending on the applicable commercial agreement, CrossMor may act as the
              legal seller of record for certain transactions, process payments on behalf
              of merchants, or provide technical routing and settlement services.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">2. Merchant Representations</div>
            <p>
              You represent and warrant that your business is duly organized and legally
              authorized to operate, and that all products or services offered through
              our platform comply with applicable laws and regulations.
            </p>
            <p>
              You are responsible for product quality, delivery, intellectual property
              compliance, and customer support obligations unless otherwise specified in
              a separate agreement.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">3. Prohibited Activities</div>
            <p>
              You may not use our Services for unlawful, fraudulent, deceptive,
              sanctioned, or high-risk activities without prior written approval.
              We reserve the right to suspend or terminate services if prohibited
              conduct is detected.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">4. Fees and Settlements</div>
            <p>
              Service fees, settlement schedules, reserves, and processing costs are
              defined in your commercial agreement. We may deduct applicable fees,
              chargebacks, refunds, and penalties prior to payout.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">5. Risk & Compliance</div>
            <p>
              You agree to cooperate with fraud investigations, AML/KYC procedures,
              chargeback disputes, and regulatory inquiries. We may request documentation
              necessary to maintain compliance with financial regulations and card network rules.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">6. Intellectual Property</div>
            <p>
              All platform technology, systems, trademarks, and proprietary tools remain
              the exclusive property of CrossMor. You are granted a limited, non-exclusive,
              revocable license to use the Services in accordance with these Terms.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">7. Limitation of Liability</div>
            <p>
              The Services are provided “as is” and “as available.” To the maximum extent
              permitted by law, CrossMor shall not be liable for indirect, incidental,
              or consequential damages. Total aggregate liability shall not exceed the
              total fees paid in the three (3) months preceding the claim.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">8. Termination</div>
            <p>
              We may suspend or terminate access to the Services if these Terms are
              breached, risk exposure becomes unacceptable, or regulatory requirements
              cannot be maintained.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">9. Governing Law</div>
            <p>
              These Terms are governed by the laws of the Hong Kong Special Administrative Region.
            </p>
          </section>

          <section>
            <div className="text-foreground font-semibold mb-2">10. Contact</div>
            <p>
              For questions regarding these Terms, please contact:
              <br />
              service@crossmor.com
            </p>
          </section>

        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild variant="outline" className="border-border bg-background">
            <Link to="/refund-policy">Refund Policy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
