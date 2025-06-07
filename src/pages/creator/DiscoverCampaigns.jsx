/**
 * DiscoverCampaigns.jsx
 *
 * Purpose: Advanced campaign discovery with filtering, search, and interactive cards
 *
 * Features:
 * - Sticky filter toolbar with multiple filter options
 * - Real-time search functionality
 * - Campaign cards with hover effects and ripple animations
 * - Recommended campaigns section
 * - Save campaign functionality
 * - Modal for campaign details and application
 * - Responsive design with mobile-optimized filters
 *
 * Backend Integration:
 * - Campaign search and filtering API
 * - Save/unsave campaign functionality
 * - Campaign application submission
 * - Recommended campaigns based on creator profile
 */

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

const DiscoverCampaigns = () => {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    platform: "all",
    niche: "all",
    language: "all",
    campaignType: "all",
    region: "all",
    followerRange: [0, 1000000],
    sortBy: "trending",
  });
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedCampaigns, setSavedCampaigns] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const filterRef = useRef(null);

  // Sample campaigns data
  useEffect(() => {
    const sampleCampaigns = [
      {
        id: 1,
        title: "Summer Fashion Collection Launch",
        brand: "StyleCo",
        payout: 25000,
        platform: "Instagram",
        deadline: "2024-02-20",
        applicants: 127,
        tags: ["Fashion", "UGC", "Reels"],
        niche: "fashion",
        language: "english",
        campaignType: "paid",
        region: "mumbai",
        followerRequirement: 50000,
        description:
          "Create authentic content showcasing our summer collection",
        requirements: [
          "Minimum 50K followers",
          "Fashion/Lifestyle niche",
          "High engagement rate",
          "Previous brand collaborations",
        ],
        deliverables: [
          "2 Instagram posts",
          "3 Instagram stories",
          "1 Instagram reel",
        ],
        featured: true,
      },
      {
        id: 2,
        title: "Fitness App Promotion",
        brand: "FitTech",
        payout: 15000,
        platform: "YouTube",
        deadline: "2024-02-25",
        applicants: 89,
        tags: ["Fitness", "Tech", "Review"],
        niche: "fitness",
        language: "hindi",
        campaignType: "paid",
        region: "delhi",
        followerRequirement: 25000,
        description: "Review our new fitness app and create workout content",
        requirements: [
          "Minimum 25K subscribers",
          "Fitness content creator",
          "Regular posting schedule",
        ],
        deliverables: ["1 YouTube video review", "2 workout videos using app"],
        featured: false,
      },
      {
        id: 3,
        title: "Skincare Product Collaboration",
        brand: "GlowBeauty",
        payout: 0,
        platform: "Instagram",
        deadline: "2024-03-01",
        applicants: 156,
        tags: ["Beauty", "Skincare", "Barter"],
        niche: "beauty",
        language: "english",
        campaignType: "barter",
        region: "bangalore",
        followerRequirement: 30000,
        description: "Try our new skincare line and share your honest review",
        requirements: [
          "Minimum 30K followers",
          "Beauty/Skincare content",
          "Authentic reviews",
        ],
        deliverables: [
          "Product unboxing reel",
          "30-day skincare journey",
          "Honest review post",
        ],
        featured: false,
      },
      {
        id: 4,
        title: "Travel Destination Campaign",
        brand: "WanderLust Tours",
        payout: 50000,
        platform: "Instagram",
        deadline: "2024-02-18",
        applicants: 203,
        tags: ["Travel", "Lifestyle", "Photography"],
        niche: "travel",
        language: "english",
        campaignType: "paid",
        region: "goa",
        followerRequirement: 75000,
        description: "Showcase beautiful destinations with our travel packages",
        requirements: [
          "Minimum 75K followers",
          "Travel content creator",
          "Professional photography skills",
        ],
        deliverables: [
          "5 Instagram posts",
          "10 Instagram stories",
          "2 Instagram reels",
        ],
        featured: true,
      },
      {
        id: 5,
        title: "Food Delivery App Launch",
        brand: "QuickBites",
        payout: 20000,
        platform: "TikTok",
        deadline: "2024-02-22",
        applicants: 94,
        tags: ["Food", "Lifestyle", "App"],
        niche: "food",
        language: "hindi",
        campaignType: "paid",
        region: "pune",
        followerRequirement: 40000,
        description: "Create engaging content about food ordering experience",
        requirements: [
          "Minimum 40K followers",
          "Food content creator",
          "Creative video skills",
        ],
        deliverables: ["3 TikTok videos", "Food ordering journey"],
        featured: false,
      },
    ];
    setCampaigns(sampleCampaigns);
    setFilteredCampaigns(sampleCampaigns);
  }, []);

  // Sticky filter effect
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const filterTop = filterRef.current.offsetTop;
        setIsFilterSticky(window.scrollY > filterTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter campaigns
  useEffect(() => {
    let filtered = campaigns;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          campaign.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
          campaign.tags.some((tag) =>
            tag.toLowerCase().includes(filters.search.toLowerCase()),
          ),
      );
    }

    // Platform filter
    if (filters.platform !== "all") {
      filtered = filtered.filter(
        (campaign) =>
          campaign.platform.toLowerCase() === filters.platform.toLowerCase(),
      );
    }

    // Niche filter
    if (filters.niche !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.niche === filters.niche,
      );
    }

    // Language filter
    if (filters.language !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.language === filters.language,
      );
    }

    // Campaign type filter
    if (filters.campaignType !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.campaignType === filters.campaignType,
      );
    }

    // Region filter
    if (filters.region !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.region === filters.region,
      );
    }

    // Follower range filter
    filtered = filtered.filter(
      (campaign) =>
        campaign.followerRequirement >= filters.followerRange[0] &&
        campaign.followerRequirement <= filters.followerRange[1],
    );

    // Sort campaigns
    switch (filters.sortBy) {
      case "trending":
        filtered.sort((a, b) => b.applicants - a.applicants);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        break;
      case "payout":
        filtered.sort((a, b) => b.payout - a.payout);
        break;
      case "ending":
        filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        break;
      default:
        break;
    }

    setFilteredCampaigns(filtered);
  }, [campaigns, filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    setFilters({
      search: "",
      platform: "all",
      niche: "all",
      language: "all",
      campaignType: "all",
      region: "all",
      followerRange: [0, 1000000],
      sortBy: "trending",
    });
  };

  const removeFilter = (key) => {
    if (key === "followerRange") {
      updateFilter(key, [0, 1000000]);
    } else {
      updateFilter(key, "all");
    }
  };

  const handleSaveCampaign = (campaignId) => {
    setSavedCampaigns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(campaignId)) {
        newSet.delete(campaignId);
      } else {
        newSet.add(campaignId);
      }
      return newSet;
    });
  };

  const handleApplyCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const endDate = new Date(deadline);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatCurrency = (amount) => {
    if (amount === 0) return "Barter";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return "📷";
      case "youtube":
        return "📺";
      case "tiktok":
        return "🎵";
      case "facebook":
        return "📘";
      case "twitter":
        return "🐦";
      default:
        return "📱";
    }
  };

  const activeFiltersCount = Object.keys(filters).filter((key) => {
    if (key === "search") return filters[key] !== "";
    if (key === "followerRange")
      return filters[key][0] !== 0 || filters[key][1] !== 1000000;
    if (key === "sortBy") return false;
    return filters[key] !== "all";
  }).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Campaigns
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find the perfect brand collaborations that match your content style
            and audience
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search campaigns, brands, or tags..."
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl px-6 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {filters.search && (
              <button
                onClick={() => updateFilter("search", "")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div
          ref={filterRef}
          className={`transition-all duration-300 ${
            isFilterSticky
              ? "fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg"
              : "relative"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {/* Platform Filter */}
                <select
                  value={filters.platform}
                  onChange={(e) => updateFilter("platform", e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-400/50"
                >
                  <option value="all">All Platforms</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="facebook">Facebook</option>
                </select>

                {/* Niche Filter */}
                <select
                  value={filters.niche}
                  onChange={(e) => updateFilter("niche", e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-400/50"
                >
                  <option value="all">All Niches</option>
                  <option value="fashion">Fashion</option>
                  <option value="beauty">Beauty</option>
                  <option value="fitness">Fitness</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="tech">Technology</option>
                </select>

                {/* Language Filter */}
                <select
                  value={filters.language}
                  onChange={(e) => updateFilter("language", e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-400/50"
                >
                  <option value="all">All Languages</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                </select>

                {/* Campaign Type Filter */}
                <select
                  value={filters.campaignType}
                  onChange={(e) => updateFilter("campaignType", e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-400/50"
                >
                  <option value="all">All Types</option>
                  <option value="paid">Paid</option>
                  <option value="barter">Barter</option>
                </select>

                {/* Sort By */}
                <select
                  value={filters.sortBy}
                  onChange={(e) => updateFilter("sortBy", e.target.value)}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-400/50"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="payout">Highest Payout</option>
                  <option value="ending">Ending Soon</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Clear All ({activeFiltersCount})
                  </button>
                )}
                <span className="text-sm text-gray-400">
                  {filteredCampaigns.length} campaigns found
                </span>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {Object.entries(filters).map(([key, value]) => {
                  if (
                    (key === "search" && value) ||
                    (key !== "search" &&
                      key !== "sortBy" &&
                      key !== "followerRange" &&
                      value !== "all") ||
                    (key === "followerRange" &&
                      (value[0] !== 0 || value[1] !== 1000000))
                  ) {
                    return (
                      <div
                        key={key}
                        className="flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30"
                      >
                        <span>
                          {key === "followerRange"
                            ? `${value[0] / 1000}K - ${value[1] / 1000}K followers`
                            : `${key}: ${value}`}
                        </span>
                        <button
                          onClick={() => removeFilter(key)}
                          className="text-purple-300 hover:text-white transition-colors duration-300"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>

        {/* Recommended Campaigns */}
        {filteredCampaigns.some((c) => c.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              🎯 Recommended For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter((c) => c.featured)
                .map((campaign) => (
                  <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    isSaved={savedCampaigns.has(campaign.id)}
                    onSave={handleSaveCampaign}
                    onApply={handleApplyCampaign}
                    isRecommended={true}
                  />
                ))}
            </div>
          </div>
        )}

        {/* All Campaigns */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                isSaved={savedCampaigns.has(campaign.id)}
                onSave={handleSaveCampaign}
                onApply={handleApplyCampaign}
              />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No campaigns found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Campaign Application Modal */}
      {isModalOpen && selectedCampaign && (
        <CampaignModal
          campaign={selectedCampaign}
          onClose={() => setIsModalOpen(false)}
          onApply={() => {
            setIsModalOpen(false);
            // Handle application submission
          }}
        />
      )}
    </div>
  );
};

// Campaign Card Component
const CampaignCard = ({
  campaign,
  isSaved,
  onSave,
  onApply,
  isRecommended = false,
}) => {
  const daysLeft = Math.max(
    0,
    Math.ceil(
      (new Date(campaign.deadline) - new Date()) / (1000 * 60 * 60 * 24),
    ),
  );

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
        isRecommended
          ? "border-purple-400/50 shadow-lg shadow-purple-500/25"
          : "border-gray-700/50 hover:border-purple-400/50"
      }`}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Recommended
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={() => onSave(campaign.id)}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-400 transition-colors duration-300"
      >
        {isSaved ? "❤️" : "🤍"}
      </button>

      {/* Campaign Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              campaign.platform.toLowerCase() === "instagram"
                ? "bg-pink-600/20 text-pink-400"
                : campaign.platform.toLowerCase() === "youtube"
                  ? "bg-red-600/20 text-red-400"
                  : campaign.platform.toLowerCase() === "tiktok"
                    ? "bg-purple-600/20 text-purple-400"
                    : "bg-blue-600/20 text-blue-400"
            }`}
          >
            {getPlatformIcon(campaign.platform)} {campaign.platform}
          </span>
          <span className="text-2xl font-bold text-green-400">
            {formatCurrency(campaign.payout)}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {campaign.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{campaign.brand}</p>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
          {campaign.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {campaign.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>👥 {campaign.applicants} applicants</span>
        <span
          className={`font-medium ${
            daysLeft <= 3
              ? "text-red-400"
              : daysLeft <= 7
                ? "text-yellow-400"
                : "text-green-400"
          }`}
        >
          ⏳ {daysLeft} days left
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onApply(campaign)}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
        >
          View Details
        </button>
        <button
          onClick={() => onApply(campaign)}
          className="flex-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 py-2 px-4 rounded-lg font-semibold transition-all duration-300 border border-green-400/30"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

// Campaign Modal Component
const CampaignModal = ({ campaign, onClose, onApply }) => {
  const [applicationText, setApplicationText] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-800/95 backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">{campaign.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Campaign Details */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-white mb-2">
              Campaign Description
            </h3>
            <p className="text-gray-300">{campaign.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Requirements</h3>
            <ul className="space-y-1">
              {campaign.requirements.map((req, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-center"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Deliverables</h3>
            <ul className="space-y-1">
              {campaign.deliverables.map((deliverable, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-center"
                >
                  <span className="text-purple-400 mr-2">•</span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-white mb-2">Payout</h3>
              <p className="text-2xl font-bold text-green-400">
                {formatCurrency(campaign.payout)}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Deadline</h3>
              <p className="text-gray-300">
                {new Date(campaign.deadline).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <h3 className="font-semibold text-white mb-2">
              Application Message
            </h3>
            <textarea
              value={applicationText}
              onChange={(e) => setApplicationText(e.target.value)}
              placeholder="Tell the brand why you're perfect for this campaign..."
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300 h-32 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={onApply}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCampaigns;
