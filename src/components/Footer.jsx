import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    setTimeout(() => {
      alert(
        "Thank you for subscribing! You'll receive our latest updates soon.",
      );
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const footerSections = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Creator Portal", href: "/creator/login" },
        { name: "Brand Dashboard", href: "/brand/login" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Creator Guide", href: "/creator-guide" },
        { name: "Brand Guide", href: "/brand-guide" },
        { name: "API Documentation", href: "/docs" },
        { name: "Community", href: "/community" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Security", href: "/security" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: "🐦",
      hoverColor: "hover:text-cyan-400 hover:bg-cyan-400/10",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "📷",
      hoverColor: "hover:text-pink-400 hover:bg-pink-400/10",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "💼",
      hoverColor: "hover:text-blue-400 hover:bg-blue-400/10",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "🎥",
      hoverColor: "hover:text-red-400 hover:bg-red-400/10",
    },
    {
      name: "Discord",
      href: "#",
      icon: "🎮",
      hoverColor: "hover:text-purple-400 hover:bg-purple-400/10",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo and Description */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">IB</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50 animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Influbazzar
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                India's leading influencer marketing platform connecting
                authentic creators with premium brands. Build meaningful
                partnerships that drive real results.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    50K+
                  </div>
                  <div className="text-gray-400 text-sm">Creators</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    ₹50Cr+
                  </div>
                  <div className="text-gray-400 text-sm">Earnings</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Stay{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Updated
                </span>
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get the latest insights, success stories, and exclusive
                opportunities.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-gray-400">📧</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubscribing}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    isSubscribing
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/25"
                  } text-white`}
                >
                  {isSubscribing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe →"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerSections).map(([key, section]) => (
                <div key={key}>
                  <h3 className="text-lg font-semibold text-white mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group text-gray-400 hover:text-white transition-all duration-300 text-sm relative"
                        >
                          <span className="relative z-10">{link.name}</span>
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Influbazzar. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ in India 🇮🇳
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-medium">
                Follow us:
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group w-10 h-10 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-gray-600 ${social.hoverColor}`}
                    aria-label={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/status"
                className="flex items-center text-gray-400 hover:text-green-400 transition-colors group"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="group-hover:underline">System Status</span>
              </a>

              <a
                href="/api"
                className="text-gray-400 hover:text-blue-400 transition-colors hover:underline"
              >
                API
              </a>

              <a
                href="/help"
                className="text-gray-400 hover:text-purple-400 transition-colors hover:underline"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl shadow-purple-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-purple-500/40">
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
            💬
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
