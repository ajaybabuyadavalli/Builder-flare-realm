import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DiscoverCampaigns = () => {
  const [filters, setFilters] = useState({
    category: "all",
    budget: "all",
    platform: "all",
    deadline: "all",
    searchTerm: "",
  });

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fashion", name: "Fashion & Lifestyle" },
    { id: "tech", name: "Technology" },
    { id: "food", name: "Food & Beverage" },
    { id: "fitness", name: "Health & Fitness" },
    { id: "travel", name: "Travel" },
    { id: "beauty", name: "Beauty & Skincare" },
    { id: "gaming", name: "Gaming" },
    { id: "education", name: "Education" },
  ];

  const campaigns = [
    {
      id: 1,
      brand: "StyleCo",
      title: "Summer Fashion Collection Launch",
      description:
        "Showcase our new summer collection with authentic styling tips and outfit inspirations. Looking for fashion creators who can create engaging content around sustainable fashion.",
      budget: "₹25,000 - ₹35,000",
      category: "fashion",
      platform: ["Instagram", "TikTok"],
      deadline: "2024-02-20",
      requirements: [
        "Minimum 50K followers on Instagram",
        "Fashion/Lifestyle content creator",
        "High engagement rate (>3%)",
        "Located in major Indian cities",
      ],
      deliverables: [
        "3 Instagram posts",
        "5 Instagram stories",
        "1 TikTok video",
        "Usage rights for 6 months",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
      applications: 24,
      daysLeft: 8,
      rating: 4.8,
      isSponsored: true,
    },
    {
      id: 2,
      brand: "TechFlow",
      title: "Productivity App Review & Tutorial",
      description:
        "Create authentic reviews and tutorials for our new productivity app. Show real use cases and benefits for your audience.",
      budget: "₹18,000 - ₹28,000",
      category: "tech",
      platform: ["YouTube", "Instagram"],
      deadline: "2024-02-25",
      requirements: [
        "Tech/Productivity content creator",
        "Minimum 25K YouTube subscribers",
        "Previous app review experience",
        "English speaking audience",
      ],
      deliverables: [
        "1 YouTube video (10-15 mins)",
        "3 Instagram posts",
        "App store review",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
      applications: 16,
      daysLeft: 13,
      rating: 4.6,
      isSponsored: false,
    },
    {
      id: 3,
      brand: "FitLife Nutrition",
      title: "Fitness Challenge & Supplement Review",
      description:
        "Join our 30-day fitness challenge and showcase the transformation journey using our supplements. Perfect for fitness enthusiasts.",
      budget: "₹30,000 - ₹45,000",
      category: "fitness",
      platform: ["Instagram", "YouTube"],
      deadline: "2024-02-18",
      requirements: [
        "Fitness/Health content creator",
        "Minimum 75K followers",
        "Previous supplement partnerships",
        "Willing to do 30-day challenge",
      ],
      deliverables: [
        "Weekly progress posts (4 weeks)",
        "2 YouTube videos",
        "Instagram Reels (8-10)",
        "Before/After photos",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      applications: 31,
      daysLeft: 6,
      rating: 4.9,
      isSponsored: true,
    },
    {
      id: 4,
      brand: "EcoLife",
      title: "Sustainable Living Content Series",
      description:
        "Create educational content about sustainable living, eco-friendly products, and green lifestyle tips.",
      budget: "₹20,000 - ₹30,000",
      category: "lifestyle",
      platform: ["Instagram", "TikTok"],
      deadline: "2024-03-01",
      requirements: [
        "Lifestyle/Sustainability content",
        "Minimum 40K followers",
        "Authentic voice for eco-friendly content",
        "Previous brand partnerships",
      ],
      deliverables: [
        "5 Instagram posts",
        "10 Instagram stories",
        "3 TikTok videos",
        "1 IGTV/Reels",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop",
      applications: 19,
      daysLeft: 19,
      rating: 4.7,
      isSponsored: false,
    },
    {
      id: 5,
      brand: "GameZone",
      title: "Gaming Setup & Equipment Review",
      description:
        "Review our latest gaming peripherals and create setup content. Perfect for gaming creators who want to showcase premium equipment.",
      budget: "₹35,000 - ₹50,000",
      category: "gaming",
      platform: ["YouTube", "Twitch"],
      deadline: "2024-02-22",
      requirements: [
        "Gaming content creator",
        "Minimum 100K YouTube subscribers",
        "Regular gaming setup content",
        "Male audience 18-35",
      ],
      deliverables: [
        "1 Setup tour video",
        "2 Product review videos",
        "Live stream sessions (3)",
        "Social media posts",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
      applications: 8,
      daysLeft: 10,
      rating: 4.5,
      isSponsored: true,
    },
    {
      id: 6,
      brand: "TravelWise",
      title: "Budget Travel Tips & Destination Guide",
      description:
        "Create travel guides for budget-conscious travelers. Share tips, tricks, and hidden gems for affordable travel experiences.",
      budget: "₹22,000 - ₹32,000",
      category: "travel",
      platform: ["Instagram", "YouTube"],
      deadline: "2024-02-28",
      requirements: [
        "Travel content creator",
        "Minimum 60K followers",
        "Budget travel focus",
        "High-quality photography",
      ],
      deliverables: [
        "1 Destination guide video",
        "8 Instagram posts",
        "15 Instagram stories",
        "Travel tips carousel",
      ],
      brandImage:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop",
      applications: 27,
      daysLeft: 16,
      rating: 4.8,
      isSponsored: false,
    },
  ];

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesCategory =
      filters.category === "all" || campaign.category === filters.category;
    const matchesSearch =
      filters.searchTerm === "" ||
      campaign.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      campaign.brand.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      campaign.description
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleApply = (campaignId) => {
    alert(
      `Applied to campaign ${campaignId}! You'll receive a confirmation email shortly.`,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Discover Campaigns
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Find the perfect brand partnerships for your content
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">
                {filteredCampaigns.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Available Campaigns
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search Campaigns
              </label>
              <input
                type="text"
                value={filters.searchTerm}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    searchTerm: e.target.value,
                  }))
                }
                placeholder="Search by brand, title, or keywords..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                value={filters.budget}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, budget: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Budgets</option>
                <option value="low">₹10K - ₹25K</option>
                <option value="medium">₹25K - ₹40K</option>
                <option value="high">₹40K+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Platform
              </label>
              <select
                value={filters.platform}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, platform: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Platforms</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
                <option value="twitter">Twitter</option>
              </select>
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "Sponsored",
              "High Budget",
              "Quick Turnaround",
              "Long-term",
              "Exclusive",
            ].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-600 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {campaign.isSponsored && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-1 text-sm font-medium">
                  ⭐ Sponsored Campaign
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={campaign.brandImage}
                      alt={campaign.brand}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {campaign.brand}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                            {campaign.rating}
                          </span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {campaign.applications} applications
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      {campaign.budget}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {campaign.daysLeft} days left
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {campaign.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {campaign.description}
                </p>

                {/* Platforms */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Platforms:
                  </span>
                  {campaign.platform.map((platform, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Requirements Preview */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Key Requirements:
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {campaign.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                    {campaign.requirements.length > 2 && (
                      <li className="text-purple-600 dark:text-purple-400 text-xs">
                        +{campaign.requirements.length - 2} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedCampaign(campaign)}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-500 text-sm font-medium"
                  >
                    View Details
                  </button>
                  <div className="flex items-center space-x-3">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      ❤️
                    </button>
                    <button
                      onClick={() => handleApply(campaign.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No campaigns found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your filters or search terms to find more
              opportunities
            </p>
            <button
              onClick={() =>
                setFilters({
                  category: "all",
                  budget: "all",
                  platform: "all",
                  deadline: "all",
                  searchTerm: "",
                })
              }
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredCampaigns.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Load More Campaigns
            </button>
          </div>
        )}
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Campaign Details
                </h2>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedCampaign.brandImage}
                    alt={selectedCampaign.brand}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedCampaign.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedCampaign.brand}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Budget
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      {selectedCampaign.budget}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Deadline
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedCampaign.deadline}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedCampaign.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {selectedCampaign.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedCampaign.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedCampaign(null)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleApply(selectedCampaign.id);
                      setSelectedCampaign(null);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    Apply to Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DiscoverCampaigns;
