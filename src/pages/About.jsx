import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Arjun Patel",
      role: "CEO & Founder",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former marketing director at top tech companies. Passionate about connecting authentic voices with great brands.",
    },
    {
      name: "Sneha Gupta",
      role: "CTO",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&h=300&fit=crop&crop=face",
      bio: "Tech enthusiast with 10+ years in building scalable platforms. Loves creating tools that empower creators.",
    },
    {
      name: "Vikram Singh",
      role: "Head of Marketing",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Growth hacker who understands both brand needs and creator aspirations. Former influencer marketing specialist.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Community",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Community builder with deep understanding of creator economy. Ensures every creator feels valued and supported.",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Authentic Partnerships",
      description:
        "We believe in genuine connections between brands and creators that deliver real value to audiences.",
    },
    {
      icon: "🎯",
      title: "Transparency First",
      description:
        "Clear communication, fair pricing, and honest metrics. No hidden fees or surprise charges.",
    },
    {
      icon: "🚀",
      title: "Creator Empowerment",
      description:
        "Providing tools, resources, and opportunities for creators to grow their personal brand and income.",
    },
    {
      icon: "📊",
      title: "Data-Driven Results",
      description:
        "Using analytics and insights to ensure every campaign delivers measurable results for all parties.",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founded",
      description:
        "Started with a vision to democratize influencer marketing in India",
    },
    {
      year: "2022",
      title: "1K Creators",
      description: "Reached our first 1,000 active creators on the platform",
    },
    {
      year: "2023",
      title: "100+ Brands",
      description: "Partnered with over 100 brands across various industries",
    },
    {
      year: "2024",
      title: "10K+ Creators",
      description:
        "Now home to over 10,000 creators with ₹2Cr+ in total earnings",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Influbazzar
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize influencer marketing by
              creating authentic connections between brands and creators,
              empowering both to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To democratize influencer marketing and make it accessible to
                creators and brands of all sizes. We believe that authentic
                storytelling should be rewarded, and that meaningful
                partnerships create the best results for everyone involved.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether you're a nano-influencer with 1K followers or a
                mega-creator with millions, whether you're a startup or an
                enterprise brand, Influbazzar provides the tools and
                opportunities you need to succeed.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      10K+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Active Creators
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Brand Partners
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ₹2Cr+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Creator Earnings
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      95%
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate people behind Influbazzar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to monetize your content or a brand
            seeking authentic partnerships, we're here to help you succeed.
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

      <Footer />
    </div>
  );
};

export default About;
