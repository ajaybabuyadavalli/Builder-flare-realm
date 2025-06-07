import React, { useState } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const WorkingIndex = () => {
  const [email, setEmail] = useState("");

  const stats = [
    { label: "Active Creators", value: "25K+", icon: "👥" },
    { label: "Brand Partners", value: "100+", icon: "📈" },
    { label: "Campaigns Completed", value: "500+", icon: "🎯" },
    { label: "Total Revenue Generated", value: "₹2.5Cr+", icon: "💰" },
  ];

  const features = [
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
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Beauty Creator",
      followers: "125K",
      content:
        "Influbazzar helped me land my dream brand collaborations. The platform is user-friendly and the support team is amazing!",
      rating: 5,
    },
    {
      name: "Rohit Mehta",
      role: "Tech Reviewer",
      followers: "89K",
      content:
        "As a tech creator, finding the right brands was always challenging. Influbazzar made it effortless with their smart matching system.",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      role: "Fashion Influencer",
      followers: "200K",
      content:
        "The payment process is transparent and quick. I've earned more in 6 months than I did in 2 years on other platforms!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
              ✨ India's Premier Influencer Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Connecting Brands, Creators, and Agencies
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
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
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-md font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
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
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Influbazzar?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to succeed in influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Creators Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Success stories from our creator community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role} • {testimonial.followers}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
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

      <SimpleFooter />
    </div>
  );
};

export default WorkingIndex;
