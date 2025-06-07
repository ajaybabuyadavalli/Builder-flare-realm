import React, { useState } from "react";

const WorkingIndex = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                Influbazzar
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                About
              </a>
              <a
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </a>
              <a
                href="/case-studies"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Case Studies
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Contact
              </a>
              <a
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                ✨ India's Premier Influencer Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Connecting Brands, Creators, and Agencies
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              All in One Platform. Join 25K+ verified creators and 100+ brands
              building the future of influencer marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/signup?role=creator"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                📷 Join as Creator
              </a>
              <a
                href="/signup?role=brand"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-purple-50 transition-colors"
              >
                🎯 Start a Campaign
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Active Creators", value: "25K+", icon: "👥" },
              { label: "Brand Partners", value: "100+", icon: "📈" },
              { label: "Campaigns Completed", value: "500+", icon: "🎯" },
              {
                label: "Total Revenue Generated",
                value: "₹2.5Cr+",
                icon: "💰",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Influbazzar?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed in influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Verified Creators",
                description:
                  "All creators are thoroughly verified for authenticity and quality.",
              },
              {
                icon: "📊",
                title: "Performance Analytics",
                description:
                  "Track campaign performance with detailed analytics and insights.",
              },
              {
                icon: "⚡",
                title: "Instant Matching",
                description:
                  "AI-powered matching connects brands with perfect creators instantly.",
              },
              {
                icon: "🌐",
                title: "Multi-Platform Support",
                description:
                  "Support for Instagram, YouTube, TikTok, and other major platforms.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators and brands who are already growing with
              Influbazzar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup?role=creator"
                className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                👥 Join as Creator
              </a>
              <a
                href="/signup?role=brand"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                🎯 Start Campaign
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IB</span>
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Influbazzar
                </span>
              </div>
              <p className="text-gray-600 mb-6 max-w-sm">
                Connecting brands, creators, and agencies in one premium
                influencer collaboration marketplace. Built for Bharat,
                empowering creators and D2C brands.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/signup?role=creator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Become a Creator
                  </a>
                </li>
                <li>
                  <a
                    href="/signup?role=brand"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Post a Campaign
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/case-studies"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Influbazzar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkingIndex;
