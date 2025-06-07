import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Newsletter subscription functionality will be connected to backend");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="text-xl font-bold">Influbazzar</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate platform connecting brands with content creators.
              Discover campaigns, grow your audience, and monetize your content
              effectively.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C8.396 0 7.929.013 6.71.073 5.493.133 4.691.333 3.999.63c-.706.306-1.305.717-1.901 1.313-.596.596-1.007 1.195-1.313 1.901-.297.692-.497 1.494-.557 2.711C.013 7.929 0 8.396 0 12.017s.013 4.088.073 5.307c.06 1.217.26 2.019.557 2.711.306.706.717 1.305 1.313 1.901.596.596 1.195 1.007 1.901 1.313.692.297 1.494.497 2.711.557 1.219.06 1.686.073 5.307.073s4.088-.013 5.307-.073c1.217-.06 2.019-.26 2.711-.557.706-.306 1.305-.717 1.901-1.313.596-.596 1.007-1.195 1.313-1.901.297-.692.497-1.494.557-2.711.06-1.219.073-1.686.073-5.307s-.013-4.088-.073-5.307c-.06-1.217-.26-2.019-.557-2.711-.306-.706-.717-1.305-1.313-1.901-.596-.596-1.195-1.007-1.901-1.313-.692-.297-1.494-.497-2.711-.557C16.105.013 15.638 0 12.017 0zm0 2.167c3.555 0 3.978.013 5.381.073.884.013 1.361.061 1.68.102.421.102.72.221 1.034.408.314.187.582.432.769.747.187.314.306.613.408 1.034.041.319.089.796.102 1.68.06 1.403.073 1.826.073 5.381s-.013 3.978-.073 5.381c-.013.884-.061 1.361-.102 1.68-.102.421-.221.72-.408 1.034-.187.314-.432.582-.747.769-.314.187-.613.306-1.034.408-.319.041-.796.089-1.68.102-1.403.06-1.826.073-5.381.073s-3.978-.013-5.381-.073c-.884-.013-1.361-.061-1.68-.102-.421-.102-.72-.221-1.034-.408-.314-.187-.582-.432-.769-.747-.187-.314-.306-.613-.408-1.034-.041-.319-.089-.796-.102-1.68-.06-1.403-.073-1.826-.073-5.381s.013-3.978.073-5.381c.013-.884.061-1.361.102-1.68.102-.421.221-.72.408-1.034.187-.314.432-.582.747-.769.314-.187.613-.306 1.034-.408.319-.041.796-.089 1.68-.102 1.403-.06 1.826-.073 5.381-.073z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.017 7.781c-2.34 0-4.236 1.896-4.236 4.236 0 2.34 1.896 4.236 4.236 4.236 2.34 0 4.236-1.896 4.236-4.236 0-2.34-1.896-4.236-4.236-4.236zm0 6.985c-1.518 0-2.749-1.231-2.749-2.749s1.231-2.749 2.749-2.749 2.749 1.231 2.749 2.749-1.231 2.749-2.749 2.749zm4.388-7.149c-.549 0-.994-.445-.994-.994s.445-.994.994-.994.994.445.994.994-.445.994-.994.994z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Influbazzar. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
