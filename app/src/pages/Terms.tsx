import { Link } from "react-router-dom";

export default function Terms() {
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

      <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p>
          Welcome to Crossmor! These Terms of Service ("Terms") govern your access to and use of
          the payment processing and technology services provided by [Crossp Technology Limited]
          and [Superbo Information &amp; Technology Limited] ("we," "us," or "our") through our
          website, APIs, and any other related services (collectively, the "Services").
        </p>
        <p>By creating an account or using our Services, you agree to be bound by these Terms.</p>

        <h2>1. Our Services</h2>
        <p>
          We provide technology services that facilitate online payment processing. As a Merchant of
          Record (MOR), we may, for certain transactions, be the legal entity that sells goods or
          services to the end customer, simplifying your tax and compliance obligations. Our precise
          role will be defined in our specific agreement with you.
        </p>

        <h2>2. Your Obligations</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information about your business.</li>
          <li>
            Use our Services only for legitimate business purposes and in compliance with all
            applicable laws, regulations, and card network rules.
          </li>
          <li>Maintain a clear and fair return, refund, and cancellation policy for your customers.</li>
          <li>Be solely responsible for the products or services you sell.</li>
          <li>Cooperate with us in the event of any investigation into fraudulent or suspicious transactions.</li>
        </ul>

        <h2>3. Prohibited Activities</h2>
        <p>
          You may not use our Services for any activities that are illegal, fraudulent, or listed in our
          Compliance/Prohibited Businesses Policy. We reserve the right to terminate or suspend your
          account immediately if we suspect any prohibited activity.
        </p>

        <h2>4. Fees and Payouts</h2>
        <p>
          You agree to pay the fees for our Services as set out in your service agreement with us. We
          will deduct applicable fees, chargebacks, refunds, and other charges from the transaction
          amounts before making payouts to your designated bank account according to the agreed-upon schedule.
        </p>

        <h2>5. Data Privacy and Security</h2>
        <p>
          Your privacy and the privacy of your customers are important to us. Our collection and use
          of personal information in connection with the Services are described in our Privacy Policy.
          You agree to comply with all applicable data protection laws. We are committed to maintaining PCI DSS compliance.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          We own all rights, title, and interest in and to our Services, our website, and all related
          technology and content. You are granted a limited, non-exclusive, non-transferable license to
          use the Services in accordance with these Terms.
        </p>

        <h2>7. Disclaimers and Limitation of Liability</h2>
        <p>
          The Services are provided "as is" and "as available" without any warranties. We will not be
          liable for any lost profits, indirect, special, or consequential damages arising out of or in
          connection with our Services, even if we have been advised of the possibility of such damages.
          Our total liability to you for any claim arising from your use of the Services will not exceed
          the total fees paid by you to us in the three months preceding the claim.
        </p>

        <h2>8. Termination</h2>
        <p>
          You may close your account at any time by providing written notice to us. We may suspend or
          terminate your access to the Services at any time, for any reason, including but not limited
          to a breach of these Terms or suspected fraudulent activity.
        </p>

        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of [Hong Kong SAR].</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at [service@crossmor.online].</p>
      </div>
    </div>
  );
}
