import { Link } from "react-router-dom";

export default function Privacy() {
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

      <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p>
          [Crossp Technology Limited] and [Superbo Information &amp; Technology Limited] ("we," "us," or "our")
          is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our Services.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Information You Provide to Us:</strong> Business details, contact information (name, email, phone number),
            and financial information when you register for our Services.
          </li>
          <li>
            <strong>Information from Your Customers:</strong> As a Merchant of Record or payment processor, we collect
            information necessary to process transactions, including name, email, shipping address, and payment card details.
          </li>
          <li>
            <strong>Information We Collect Automatically:</strong> We may log device and usage information such as IP address,
            browser type, and operating system. This is further detailed in our Cookie Policy.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Provide, operate, and maintain our Services.</li>
          <li>Process transactions, prevent fraud, and manage risk.</li>
          <li>Comply with legal and regulatory obligations (e.g., AML, KYC).</li>
          <li>Communicate with you, including customer support and service updates.</li>
          <li>Improve and personalize our Services.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul>
          <li><strong>Financial Partners:</strong> Banks, card networks, and institutions required to process payments.</li>
          <li><strong>Service Providers:</strong> Hosting, fraud detection, and other vendors working on our behalf.</li>
          <li><strong>Regulatory Authorities:</strong> To comply with legal obligations and lawful requests.</li>
          <li><strong>Business Transfer:</strong> Merger, acquisition, or sale of assets.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We use administrative, technical, and physical security measures, including adherence to PCI DSS where applicable.
          No security measures are perfect or impenetrable.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain information as long as your account is active or as needed to provide Services, comply with legal obligations,
          resolve disputes, and enforce agreements.
        </p>

        <h2>6. Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have rights such as access, correction, or deletion requests. To exercise rights,
          contact us.
        </p>

        <h2>7. International Data Transfers</h2>
        <p>
          Your information may be transferred and processed in countries with different data protection laws. We take reasonable
          steps to protect your data in transfers.
        </p>

        <h2>8. Contact Us</h2>
        <p>For questions, contact us at [service@crossmor.online].</p>
      </div>
    </div>
  );
}
