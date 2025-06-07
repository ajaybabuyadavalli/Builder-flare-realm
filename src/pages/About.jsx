import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which sections are visible
      const sections = document.querySelectorAll("[data-animate]");
      const newVisible = new Set();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(section.dataset.animate);
        }
      });

      setVisibleSections(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars = [
    {
      icon: "🤝",
      title: "Authentic Partnerships",
      description:
        "We believe in genuine connections between brands and creators that deliver real value to audiences.",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: "🎯",
      title: "Transparency First",
      description:
        "Clear communication, fair pricing, and honest metrics. No hidden fees or surprise charges.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "🚀",
      title: "Creator Empowerment",
      description:
        "Providing tools, resources, and opportunities for creators to grow their personal brand and income.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "📊",
      title: "Data-Driven Results",
      description:
        "Using analytics and insights to ensure every campaign delivers measurable results for all parties.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "The Vision",
      description:
        "Founded with a mission to democratize influencer marketing in India and bridge the gap between creators and brands.",
      icon: "💡",
      stats: { creators: "0", campaigns: "0", revenue: "₹0" },
    },
    {
      year: "2022",
      title: "First Milestone",
      description:
        "Reached our first 5,000 creators and launched our AI-powered matching algorithm.",
      icon: "🎯",
      stats: { creators: "5K", campaigns: "500", revenue: "₹50L" },
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description:
        "Expanded to 25,000+ creators and partnered with 500+ brands across various industries.",
      icon: "📈",
      stats: { creators: "25K", campaigns: "5K", revenue: "₹10Cr" },
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "Now home to 50,000+ creators with ₹50Cr+ in total earnings and India's #1 platform.",
      icon: "👑",
      stats: { creators: "50K", campaigns: "25K", revenue: "₹50Cr" },
    },
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "CEO & Founder",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former marketing director with 12+ years experience. Passionate about connecting authentic voices with great brands.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Gupta",
      role: "CTO & Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&h=300&fit=crop&crop=face",
      bio: "Tech visionary with expertise in AI and machine learning. Building the future of creator-brand matching.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Vikram Singh",
      role: "VP of Growth",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Growth expert who scaled multiple startups. Understands both creator aspirations and brand objectives.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sneha Reddy",
      role: "Head of Community",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder ensuring every creator feels valued and supported in their journey to success.",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const impact = {
    creators: "50,000+",
    brands: "2,000+",
    campaigns: "25,000+",
    earnings: "₹50Cr+",
    countries: "15+",
    satisfaction: "98%",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-pink-900/40" />
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: "10%",
              top: "20%",
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"
            style={{
              right: "15%",
              top: "40%",
              animationDelay: "2s",
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
              🚀 Building the Future of Creator Economy
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Influbazzar
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing how creators and brands connect,
              collaborate, and create value together in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Influbazzar Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              data-animate="why-text"
              className={`transition-all duration-1000 ${
                visibleSections.has("why-text")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Influbazzar?
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  In a world where authentic connections drive business success,
                  we recognized the need for a platform that truly understands
                  both creators and brands.
                </p>
                <p>
                  Traditional influencer marketing was broken - filled with fake
                  engagement, unclear pricing, and mismatched partnerships. We
                  built Influbazzar to fix these fundamental issues.
                </p>
                <p>
                  Our AI-powered matching system, transparent pricing model, and
                  comprehensive analytics ensure that every partnership creates
                  real value for all parties involved.
                </p>
              </div>
            </div>

            <div
              data-animate="why-stats"
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.has("why-stats")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(impact).map(([key, value], index) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                        {value}
                      </div>
                      <div className="text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Cards - 2x2 Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                data-animate={`pillar-${index}`}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  visibleSections.has(`pillar-${index}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                  width: "320px",
                  margin: "0 auto",
                }}
              >
                <div
                  className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${pillar.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Scroll Animation */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              From startup to India's leading influencer marketing platform
            </p>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-purple-600 via-pink-600 to-cyan-600 hidden md:block" />

            <div className="space-y-16">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  data-animate={`timeline-${index}`}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "justify-start md:justify-end"
                      : "justify-start"
                  } transition-all duration-1000 ${
                    visibleSections.has(`timeline-${index}`)
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${index % 2 === 0 ? "translate-x-10" : "-translate-x-10"}`
                  }`}
                  style={{ transitionDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-gray-900 z-10 hidden md:block transition-all duration-500 ${
                      visibleSections.has(`timeline-${index}`)
                        ? "scale-100 animate-pulse"
                        : "scale-0"
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-600 transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                          {event.icon}
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {event.year}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">
                            {event.stats.creators}
                          </div>
                          <div className="text-xs text-gray-400">Creators</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-pink-400">
                            {event.stats.campaigns}
                          </div>
                          <div className="text-xs text-gray-400">Campaigns</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">
                            {event.stats.revenue}
                          </div>
                          <div className="text-xs text-gray-400">Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              The passionate innovators building the future of creator economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                data-animate={`team-${index}`}
                className={`group text-center transition-all duration-1000 hover:scale-105 ${
                  visibleSections.has(`team-${index}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-110" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-purple-500 transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                      <span className="text-sm">in</span>
                    </div>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all duration-300">
                      <span className="text-sm">tw</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bharat Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            data-animate="bharat"
            className={`transition-all duration-1000 ${
              visibleSections.has("bharat")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-6xl mb-6">🇮🇳</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Made in{" "}
              <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                Bharat
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're proud to be building the world's most advanced influencer
              marketing platform right here in India, for Indian creators and
              global brands who want to connect with the world's largest
              democracy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-3xl mb-4">🌏</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-400">
                  Connecting Indian creators with brands worldwide
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Innovation Hub
                </h3>
                <p className="text-gray-400">
                  Pioneering AI-driven creator-brand matching
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Community First
                </h3>
                <p className="text-gray-400">
                  Supporting India's vibrant creator ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to monetize your content or a brand
            seeking authentic partnerships, we're here to help you succeed in
            the creator economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Start as Creator</span>
              <div className="absolute inset-0 bg-purple-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
            <button className="group relative overflow-hidden border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-600">
              <span className="relative z-10">Partner with Us</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
