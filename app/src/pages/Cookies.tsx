import { Link } from "react-router-dom";

export default function Cookies() {
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

      <h1 className="text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last Updated: February 18, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p>
          This Cookie Policy explains what cookies are and how [Crossp Technology Limited] and [Superbo Information &amp; Technology Limited]
          (“we," "us," or "our") uses them on our website.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work
          (or work more efficiently) and to provide information to the site owners.
        </p>

        <h2>2. How We Use Cookies</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Strictly necessary to provide services and access secure areas.</li>
          <li><strong>Performance and Analytics Cookies:</strong> Help us understand usage; may use Google Analytics.</li>
          <li><strong>Functionality Cookies:</strong> Remember preferences such as language or region.</li>
        </ul>

        <h2>3. Your Choices</h2>
        <p>
          You can accept or reject cookies using your browser settings. If you reject cookies, some functionality may be restricted.
        </p>

        <h2>4. Changes to This Policy</h2>
        <p>We may update this Cookie Policy from time to time by posting the new policy on this page.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions, contact us at [service@crossmor.online].</p>
      </div>
    </div>
  );
}
