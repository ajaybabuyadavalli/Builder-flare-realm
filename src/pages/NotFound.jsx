import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const popularPages = [
    {
      name: "Home",
      href: "/",
      icon: "🏠",
      description: "Discover amazing campaigns and creators",
    },
    {
      name: "About",
      href: "/about",
      icon: "ℹ️",
      description: "Learn more about our mission",
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: "💰",
      description: "Find the perfect plan for you",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      icon: "📊",
      description: "See real success stories",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: "📞",
      description: "Get in touch with our team",
    },
    {
      name: "Creator Login",
      href: "/creator/login",
      icon: "🎨",
      description: "Access your creator dashboard",
    },
  ];

  const quickActions = [
    {
      title: "Start a Campaign",
      description: "Launch your influencer marketing campaign",
      href: "/signup",
      icon: "🚀",
      buttonText: "Get Started",
      buttonClass:
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    },
    {
      title: "Join as Creator",
      description: "Monetize your content and grow your audience",
      href: "/creator/signup",
      icon: "⭐",
      buttonText: "Join Now",
      buttonClass:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
    },
    {
      title: "Browse Success Stories",
      description: "Get inspired by real campaign results",
      href: "/case-studies",
      icon: "🏆",
      buttonText: "View Cases",
      buttonClass:
        "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Main 404 Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Animated 404 */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-pulse">
                404
              </div>
              <div className="text-6xl mb-4">🔍</div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              The page you're looking for seems to have wandered off into the
              digital wilderness. Don't worry, we'll help you find your way back
              to amazing content and campaigns!
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for pages, creators, campaigns..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
              >
                Go Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Pages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Here are some popular destinations that might interest you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                className="group block p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {page.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {page.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Or Get Started Right Away
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't let a wrong turn slow you down. Jump into action!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{action.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  {action.description}
                </p>
                <a
                  href={action.href}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${action.buttonClass}`}
                >
                  {action.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our support team is here to help you find exactly what you're
              looking for. We're available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Contact Support
              </a>
              <button className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-lg font-semibold border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              While You're Here...
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Some interesting facts about Influbazzar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Active Creators
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Brand Partners
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₹2Cr+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Creator Earnings
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
