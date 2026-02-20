import React from "react";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Interested in partnering with CrossMOR?
          Leave us a message and our team will get back to you within 24 hours.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mlgwgqlb"
          method="POST"
          className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tell us about your business needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Divider */}
        <div className="my-12 text-center text-gray-400">
          — OR —
        </div>

        {/* Telegram Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Connect with us directly on Telegram:
          </p>
          <a
            href="https://t.me/crossmor_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            @yourusername
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

