import React from "react";

const SimpleFooter = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Become a Creator", href: "/signup?role=creator" },
        { name: "Post a Campaign", href: "/signup?role=brand" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "FAQ", href: "/faq" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Influbazzar
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
              Connecting brands, creators, and agencies in one premium
              influencer collaboration marketplace. Built for Bharat, empowering
              creators and D2C brands.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Stay Updated
              </h4>
              <div className="flex space-x-2">
                <input
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <span>© 2024 Influbazzar. All rights reserved.</span>
              <div className="flex space-x-4">
                <a
                  href="/privacy"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Follow us:
                </span>
                <a
                  href="https://instagram.com/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                  📷 Instagram
                </a>
                <a
                  href="https://twitter.com/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                  🐦 Twitter
                </a>
                <a
                  href="https://linkedin.com/company/influbazzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
