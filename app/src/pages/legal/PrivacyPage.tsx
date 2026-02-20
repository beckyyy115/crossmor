import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function PrivacyPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

        <div className="bg-surface-1 border border-border rounded-2xl p-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <p>
              Crossp Technology Limited and Superbo Information &amp; Technology Limited (“Crossmor,” “we,” “us,” or “our”) are
              committed to protecting your privacy.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard information in connection with our
              Services.
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">1. Information We Collect</div>
            <p>We may collect:</p>

            <div className="space-y-2">
              <div className="text-foreground font-medium">A. Merchant Information</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Business registration details</li>
                <li>Directors and beneficial owner information</li>
                <li>Contact details</li>
                <li>Bank account information</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">B. Transaction Information</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customer name and email</li>
                <li>Billing information</li>
                <li>IP address</li>
                <li>Device and transaction metadata</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-foreground font-medium">C. Automatically Collected Information</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Cookies and analytics data</li>
              </ul>
            </div>

            <p className="text-xs">
              We do not store full payment card numbers unless required under PCI DSS standards and contractual obligations.
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">2. How We Use Information</div>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and maintain Services</li>
              <li>Process transactions</li>
              <li>Conduct fraud monitoring</li>
              <li>Perform AML/KYC checks</li>
              <li>Comply with regulatory obligations</li>
              <li>Improve our platform</li>
              <li>Communicate service updates</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">3. Legal Basis (Where Applicable)</div>
            <p>Where applicable, processing is based on:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
              <li>Consent</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">4. Sharing of Information</div>
            <p>We may share information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Banking partners</li>
              <li>Card networks</li>
              <li>Fraud detection providers</li>
              <li>Regulatory authorities</li>
              <li>Professional advisors</li>
            </ul>
            <p>We do not sell personal data.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">5. Data Security</div>
            <p>We implement administrative, technical, and physical safeguards including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>PCI DSS standards</li>
              <li>Encryption</li>
              <li>Access controls</li>
              <li>Monitoring systems</li>
            </ul>
            <p>No system is 100% secure, but we take reasonable measures to protect data.</p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">6. Data Retention</div>
            <p>We retain information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>As long as necessary to provide Services</li>
              <li>As required by financial regulations</li>
              <li>To resolve disputes and enforce agreements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">7. International Transfers</div>
            <p>
              Information may be transferred across jurisdictions where our service providers operate. We implement safeguards
              for international transfers where required.
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">8. Your Rights</div>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your data</li>
              <li>Correct inaccuracies</li>
              <li>Request deletion (subject to regulatory limits)</li>
              <li>Object to certain processing</li>
            </ul>
            <p>
              To exercise rights: <span className="text-foreground font-medium">service@crossmor.com</span>
            </p>
          </section>

          <section className="space-y-3">
            <div className="text-foreground font-semibold">9. Contact</div>
            <p className="text-foreground font-medium">service@crossmor.com</p>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
