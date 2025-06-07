import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeRole, setActiveRole] = useState("creator");
  const [email, setEmail] = useState("");
  const [earnings, setEarnings] = useState({
    followers: 50000,
    engagement: 5.5,
    posts: 10,
  });
  const [estimatedEarning, setEstimatedEarning] = useState(25000);

  // Floating animation state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Calculate earnings based on inputs
    const baseRate =
      activeRole === "creator" ? 0.5 : activeRole === "brand" ? 2 : 1.5;
    const calculated =
      earnings.followers *
      (earnings.engagement / 100) *
      earnings.posts *
      baseRate;
    setEstimatedEarning(Math.round(calculated));
  }, [earnings, activeRole]);

  const stats = [
    {
      label: "Active Creators",
      value: "50K+",
      icon: "👥",
      color: "from-purple-600 to-pink-600",
    },
    {
      label: "Successful Campaigns",
      value: "25K+",
      icon: "🚀",
      color: "from-cyan-500 to-blue-600",
    },
    {
      label: "Brand Partners",
      value: "2K+",
      icon: "🏢",
      color: "from-green-500 to-emerald-600",
    },
    {
      label: "Total Earnings",
      value: "₹50Cr+",
      icon: "💰",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const trendingCampaigns = [
    {
      id: 1,
      brand: "StyleCo",
      title: "Summer Fashion Collection",
      budget: "₹25K - ₹40K",
      category: "Fashion",
      applications: 245,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      featured: true,
    },
    {
      id: 2,
      brand: "TechFlow",
      title: "Smart Device Reviews",
      budget: "₹30K - ₹50K",
      category: "Technology",
      applications: 189,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      featured: false,
    },
    {
      id: 3,
      brand: "FitLife",
      title: "Wellness Challenge",
      budget: "₹20K - ₹35K",
      category: "Health",
      applications: 312,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      featured: true,
    },
  ];

  const roleContent = {
    creator: {
      title: "Monetize Your Content",
      subtitle:
        "Connect with premium brands and earn more from your creativity",
      steps: [
        {
          icon: "📝",
          title: "Create Profile",
          desc: "Showcase your best content and audience insights",
        },
        {
          icon: "🔍",
          title: "Discover Campaigns",
          desc: "Find brands that match your niche and values",
        },
        {
          icon: "💰",
          title: "Get Paid",
          desc: "Earn competitive rates with secure, timely payments",
        },
      ],
    },
    brand: {
      title: "Scale Your Marketing",
      subtitle: "Partner with authentic creators to reach your target audience",
      steps: [
        {
          icon: "🎯",
          title: "Define Goals",
          desc: "Set campaign objectives and target demographics",
        },
        {
          icon: "🤝",
          title: "Find Creators",
          desc: "Discover creators who align with your brand values",
        },
        {
          icon: "📊",
          title: "Track Results",
          desc: "Monitor performance with detailed analytics",
        },
      ],
    },
    agency: {
      title: "Manage at Scale",
      subtitle:
        "Handle multiple clients and creators with powerful agency tools",
      steps: [
        {
          icon: "🏢",
          title: "Client Dashboard",
          desc: "Manage multiple brand accounts from one place",
        },
        {
          icon: "👥",
          title: "Creator Network",
          desc: "Build and maintain your creator relationships",
        },
        {
          icon: "📈",
          title: "Campaign Analytics",
          desc: "Comprehensive reporting across all campaigns",
        },
      ],
    },
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing! You'll receive our latest updates soon.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar />

      {/* Full-Screen Hero Section with Floating Blobs */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${20 + mousePosition.x * 0.01}%`,
              top: `${10 + mousePosition.y * 0.01}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              right: `${15 + mousePosition.x * 0.008}%`,
              top: `${60 + mousePosition.y * 0.005}%`,
              transform: "translate(50%, -50%)",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-green-500/25 to-emerald-600/25 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${60 + mousePosition.x * 0.006}%`,
              bottom: `${20 + mousePosition.y * 0.004}%`,
              transform: "translate(-50%, 50%)",
              animationDelay: "2s",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6 animate-pulse">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              India's #1 Influencer Marketing Platform
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Where Creators
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Meet Brands
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The ultimate platform connecting authentic creators with premium
              brands. Join{" "}
              <span className="text-purple-400 font-semibold">
                50,000+ creators
              </span>{" "}
              earning
              <span className="text-green-400 font-semibold">
                {" "}
                ₹50Cr+{" "}
              </span>{" "}
              through meaningful partnerships.
            </p>
          </div>

          {/* CTA Buttons with Ripple Effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Start Creating Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>

            <button className="group relative overflow-hidden border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-gray-900">
              <span className="relative z-10">Find Creators</span>
              <div className="absolute inset-0 bg-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`text-4xl mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section with Role Toggle */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            {/* Role Toggle */}
            <div className="inline-flex bg-gray-800 p-1 rounded-2xl border border-gray-700 mb-12">
              {Object.keys(roleContent).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    activeRole === role
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Role Content */}
          <div className="transition-all duration-500 transform">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                {roleContent[activeRole].title}
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {roleContent[activeRole].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roleContent[activeRole].steps.map((step, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Estimator */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Calculate Your{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Earnings
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                See how much you could earn on Influbazzar based on your
                audience and engagement.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Followers
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    value={earnings.followers}
                    onChange={(e) =>
                      setEarnings({
                        ...earnings,
                        followers: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-purple-400 font-semibold">
                    {earnings.followers.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Engagement Rate (%)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.1"
                    value={earnings.engagement}
                    onChange={(e) =>
                      setEarnings({
                        ...earnings,
                        engagement: parseFloat(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-purple-400 font-semibold">
                    {earnings.engagement}%
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Posts per Month
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={earnings.posts}
                    onChange={(e) =>
                      setEarnings({
                        ...earnings,
                        posts: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-purple-400 font-semibold">
                    {earnings.posts} posts
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Estimated Monthly Earnings
                </h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                  ₹{estimatedEarning.toLocaleString()}
                </div>
                <p className="text-gray-400 mb-8">
                  Based on current market rates and your profile metrics
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                  Start Earning Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Campaigns */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Trending
              </span>{" "}
              Campaigns
            </h2>
            <p className="text-xl text-gray-300">
              Join these popular campaigns and start earning today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {campaign.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      🔥 Featured
                    </span>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 font-semibold">
                      {campaign.brand}
                    </span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {campaign.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {campaign.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-green-400 font-bold text-lg">
                      {campaign.budget}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {campaign.applications} applications
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest trends, success stories, and exclusive opportunities
            delivered weekly.
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
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Index;
