import React, { useState } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const SimpleCaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "beauty", label: "Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "tech", label: "Tech" },
    { value: "food", label: "Food" },
  ];

  const caseStudies = [
    {
      id: 1,
      hashtag: "#BareGlowRoutine",
      title: "Boosted sales 2.5x with 20+ micro creators",
      brand: "GlowCo Beauty",
      category: "beauty",
      creator: { name: "Rhea Kapoor", followers: "8.2K" },
      results: {
        reach: "2.5M",
        engagement: "4.2%",
        conversions: "1,200",
        roi: "2.5x",
      },
      featured: true,
    },
    {
      id: 2,
      hashtag: "#TechReviewHonest",
      title: "Achieved 95% positive sentiment score",
      brand: "GadgetPro",
      category: "tech",
      creator: { name: "Arjun Mehta", followers: "180K" },
      results: {
        reach: "3.1M",
        engagement: "7.2%",
        conversions: "1,500",
        roi: "4.1x",
      },
      featured: false,
    },
    {
      id: 3,
      hashtag: "#StyleStatement2024",
      title: "Generated 500+ UGC posts in 10 days",
      brand: "StyleBox Fashion",
      category: "fashion",
      creator: { name: "Sneha Patel", followers: "120K" },
      results: {
        reach: "4.2M",
        engagement: "3.8%",
        conversions: "2,100",
        roi: "2.8x",
      },
      featured: true,
    },
    {
      id: 4,
      hashtag: "#FoodieFaves",
      title: "Restaurant foot traffic increased by 40%",
      brand: "Spice Route Restaurants",
      category: "food",
      creator: { name: "Priya Sharma", followers: "45K" },
      results: {
        reach: "1.2M",
        engagement: "8.5%",
        conversions: "600",
        roi: "3.8x",
      },
      featured: false,
    },
  ];

  const featuredCaseStudies = caseStudies.filter((study) => study.featured);
  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                🏆 Case Studies
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Campaign Success Stories
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore real campaigns with real results. Get inspired by
              successful collaborations across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {filteredCaseStudies.length} results found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our most impactful campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                    ⭐ Featured
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full capitalize">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {study.hashtag}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.title}
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {study.creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {study.creator.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {study.creator.followers} followers
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="font-bold text-green-600 dark:text-green-400 text-lg">
                      {study.results.roi}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      ROI
                    </div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                      {study.results.reach}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Reach
                    </div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                      {study.results.engagement}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Engagement
                    </div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="font-bold text-orange-600 dark:text-orange-400 text-lg">
                      {study.results.conversions}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Conversions
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 px-4 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                  View Full Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Browse our complete collection of successful campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full capitalize">
                    {study.category}
                  </span>
                </div>

                <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg mb-1">
                  {study.hashtag}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-tight mb-3">
                  {study.title}
                </p>

                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {study.creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">
                      {study.creator.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {study.creator.followers}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600 dark:text-gray-300">
                      ROI:
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {study.results.roi}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600 dark:text-gray-300">
                      Reach:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {study.results.reach}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300 mb-2">
                    <span>Brand: {study.brand}</span>
                  </div>
                  <button className="w-full py-1 px-3 text-xs border border-purple-600 text-purple-600 dark:text-purple-400 rounded hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                No case studies found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try adjusting your search criteria or filters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Your Story Featured?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create successful campaigns with Influbazzar and showcase your
              results to inspire others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup?role=brand"
                className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                🎯 Start Your Campaign
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                🏆 Submit Your Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default SimpleCaseStudies;
