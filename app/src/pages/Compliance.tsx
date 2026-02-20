import { Link } from "react-router-dom";

export default function Compliance() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-foreground mb-2">Compliance</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p>
          [Crossp Technology Limited] and [Superbo Information &amp; Technology Limited] ("we," "us," or "our") is dedicated to operating with
          integrity and in full compliance with all applicable laws, regulations, and industry standards. As a provider of technology and
          Merchant of Record (MOR) services, a robust compliance framework is at the core of our operations.
        </p>

        <h2>1. Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)</h2>
        <ul>
          <li><strong>KYB / KYC:</strong> Due diligence on merchants to verify identity and business model.</li>
          <li><strong>Transaction Monitoring:</strong> Systems to monitor transactions for suspicious activity.</li>
          <li><strong>Reporting:</strong> Report suspicious activities to relevant authorities as required by law.</li>
        </ul>

        <h2>2. PCI DSS</h2>
        <p>
          We are committed to protecting cardholder data and maintaining compliance with PCI DSS security standards.
        </p>

        <h2>3. Sanctions Compliance</h2>
        <p>
          We adhere to applicable sanctions programs including OFAC, the United Nations, and other relevant authorities, and screen merchants
          and transactions against sanctions lists.
        </p>

        <h2>4. Data Protection</h2>
        <p>
          We are committed to protecting personal data and aligning with major data protection frameworks such as GDPR. For more details, see
          our Privacy Policy.
        </p>

        <h2>5. Prohibited and Restricted Businesses</h2>
        <p>
          We do not provide services to businesses engaged in illegal activities or certain high-risk industries. A detailed list of prohibited
          and restricted business types can be provided upon request during onboarding.
        </p>

        <h2>6. Contact Us</h2>
        <p>For questions related to compliance, contact our compliance team at [service@crossmor.online].</p>
      </div>
    </div>
  );
}
