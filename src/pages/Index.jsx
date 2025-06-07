import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Newsletter subscription will be connected to backend");
    setEmail("");
  };

  const stats = [
    { label: "Active Creators", value: "10K+", icon: "👥" },
    { label: "Successful Campaigns", value: "5K+", icon: "🚀" },
    { label: "Brand Partners", value: "500+", icon: "🏢" },
    { label: "Total Earnings", value: "₹2Cr+", icon: "💰" },
  ];

  const features = [
    {
      icon: "🎯",
      title: "Smart Matching",
      description:
        "Our AI algorithm matches brands with the perfect creators based on audience demographics and engagement rates.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics to track campaign performance, engagement metrics, and ROI in real-time.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Fast and secure payment processing with multiple payment options and instant payouts.",
    },
    {
      icon: "🤝",
      title: "Campaign Management",
      description:
        "End-to-end campaign management tools for seamless collaboration between brands and creators.",
    },
    {
      icon: "📱",
      title: "Multi-Platform Support",
      description:
        "Support for Instagram, YouTube, TikTok, Twitter, and other major social media platforms.",
    },
    {
      icon: "🛡️",
      title: "Fraud Protection",
      description:
        "Advanced fraud detection and verification systems to ensure authentic engagement and results.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Fashion Influencer",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
      content:
        "Influbazzar has been a game-changer for my career. I've worked with amazing brands and earned ₹2,50,000+ in just 6 months!",
      rating: 5,
      platform: "Instagram",
      followers: "125K",
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Reviewer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "The platform makes it so easy to find relevant tech brands. The payment system is reliable and campaigns are well-organized.",
      rating: 5,
      platform: "YouTube",
      followers: "89K",
    },
    {
      name: "Anita Reddy",
      role: "Lifestyle Creator",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Love how transparent everything is. From campaign briefs to payment terms, everything is crystal clear. Highly recommended!",
      rating: 5,
      platform: "Instagram",
      followers: "76K",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 dark:from-purple-600/10 dark:to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Connect
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Brands{" "}
                </span>
                with
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Creators
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                The ultimate influencer marketing platform where brands discover
                authentic creators and creators monetize their content
                effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 text-center"
                >
                  Get Started Free
                </a>
                <a
                  href="/creator/signup"
                  className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all text-center"
                >
                  Join as Creator
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      10K+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Active Creators
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Brand Partners
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      5K+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Campaigns
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      ₹2Cr+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Earned
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful tools and features designed to make influencer marketing
              simple, effective, and profitable for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Creators & Brands
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what our community says about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role} • {testimonial.platform} •{" "}
                      {testimonial.followers}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Influence?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands who are already building
            successful partnerships on Influbazzar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start as Brand
            </a>
            <a
              href="/creator/signup"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Join as Creator
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with Latest Trends
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get weekly insights, success stories, and industry updates delivered
            to your inbox.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
