import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const SimpleAbout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                🏆 About Influbazzar
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Empowering Creators, Enabling Brands
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We're building India's largest and most trusted influencer
              marketing platform, connecting verified creators with authentic
              brands for meaningful collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To democratize influencer marketing by creating transparent,
                fair, and profitable opportunities for creators while helping
                brands achieve authentic engagement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4 text-2xl">
                👥
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the go-to platform for influencer marketing in India,
                fostering a community where creativity meets commerce and
                relationships drive results.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4 text-2xl">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Values
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparency in every transaction, authenticity in every
                collaboration, and innovation in every solution we provide to
                our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Growing Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25,000+", label: "Active Creators", icon: "👥" },
              { number: "100+", label: "Partner Brands", icon: "🏢" },
              { number: "500+", label: "Campaigns", icon: "🎯" },
              { number: "₹2.5Cr+", label: "Creator Earnings", icon: "💰" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The people behind Influbazzar's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "CEO & Founder",
                bio: "Former Marketing Director with 10+ years in digital marketing",
              },
              {
                name: "Rahul Gupta",
                role: "CTO",
                bio: "Tech expert with experience in scaling platforms to millions of users",
              },
              {
                name: "Anita Singh",
                role: "Head of Creator Relations",
                bio: "Creator community specialist with deep industry connections",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the influencer marketing revolution in India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup?role=creator"
                className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                👥 Join as Creator
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                ✉️ Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default SimpleAbout;
