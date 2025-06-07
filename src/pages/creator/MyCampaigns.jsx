/**
 * MyCampaigns.jsx
 *
 * Purpose: Campaign management dashboard with tabs, table view, and detailed campaign tracking
 *
 * Features:
 * - Tabbed interface (Applied, Approved, Submitted, Paid)
 * - Table view with expandable campaign details
 * - Search and filter functionality
 * - Status-based color coding
 * - Campaign brief and deliverables accordion
 * - Content upload functionality
 * - Analytics view for completed campaigns
 *
 * Backend Integration:
 * - Campaign status updates
 * - Content upload API
 * - Campaign analytics data
 * - Messaging system with brands
 */

import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const MyCampaigns = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("applied");
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    platform: "all",
    brand: "all",
    dateRange: "all",
  });
  const [expandedCampaign, setExpandedCampaign] = useState(null);
  const [uploadingContent, setUploadingContent] = useState(null);

  // Sample campaigns data
  useEffect(() => {
    const sampleCampaigns = [
      {
        id: 1,
        title: "Summer Fashion Collection Launch",
        brand: "StyleCo",
        status: "approved",
        platform: "Instagram",
        payment: 25000,
        appliedDate: "2024-01-15",
        deadline: "2024-02-20",
        progress: 75,
        brief:
          "Create authentic content showcasing our summer collection with natural lighting and lifestyle shots.",
        deliverables: [
          {
            type: "Instagram Post",
            status: "completed",
            uploadDate: "2024-01-20",
          },
          {
            type: "Instagram Stories (3)",
            status: "completed",
            uploadDate: "2024-01-21",
          },
          { type: "Instagram Reel", status: "pending", uploadDate: null },
        ],
        requirements: [
          "Minimum 50K followers",
          "Fashion/Lifestyle niche",
          "High engagement rate",
        ],
        analytics: {
          reach: 125000,
          engagement: 8750,
          clicks: 1250,
          saves: 890,
        },
      },
      {
        id: 2,
        title: "Fitness App Promotion",
        brand: "FitTech",
        status: "submitted",
        platform: "YouTube",
        payment: 15000,
        appliedDate: "2024-01-20",
        deadline: "2024-02-25",
        progress: 100,
        brief:
          "Review our new fitness app and create workout content demonstrating key features.",
        deliverables: [
          {
            type: "YouTube Video Review",
            status: "submitted",
            uploadDate: "2024-02-01",
          },
          {
            type: "Workout Video 1",
            status: "submitted",
            uploadDate: "2024-02-03",
          },
          {
            type: "Workout Video 2",
            status: "submitted",
            uploadDate: "2024-02-05",
          },
        ],
        requirements: [
          "Minimum 25K subscribers",
          "Fitness content creator",
          "Regular posting schedule",
        ],
        analytics: {
          views: 45000,
          likes: 3200,
          comments: 180,
          subscribers: 890,
        },
      },
      {
        id: 3,
        title: "Skincare Product Review",
        brand: "GlowBeauty",
        status: "paid",
        platform: "Instagram",
        payment: 12000,
        appliedDate: "2024-01-10",
        deadline: "2024-01-30",
        progress: 100,
        brief:
          "30-day skincare journey documenting results with our new product line.",
        deliverables: [
          {
            type: "Product Unboxing Reel",
            status: "completed",
            uploadDate: "2024-01-12",
          },
          {
            type: "30-day Journey Posts",
            status: "completed",
            uploadDate: "2024-01-30",
          },
          {
            type: "Final Review Post",
            status: "completed",
            uploadDate: "2024-01-31",
          },
        ],
        requirements: [
          "Minimum 30K followers",
          "Beauty/Skincare content",
          "Authentic reviews",
        ],
        analytics: {
          reach: 89000,
          engagement: 6780,
          clicks: 890,
          saves: 1200,
        },
      },
      {
        id: 4,
        title: "Travel Destination Showcase",
        brand: "WanderLust Tours",
        status: "applied",
        platform: "Instagram",
        payment: 50000,
        appliedDate: "2024-02-01",
        deadline: "2024-03-15",
        progress: 0,
        brief:
          "Showcase beautiful destinations with our travel packages, highlighting unique experiences.",
        deliverables: [
          { type: "Instagram Posts (5)", status: "pending", uploadDate: null },
          {
            type: "Instagram Stories (10)",
            status: "pending",
            uploadDate: null,
          },
          { type: "Instagram Reels (2)", status: "pending", uploadDate: null },
        ],
        requirements: [
          "Minimum 75K followers",
          "Travel content creator",
          "Professional photography skills",
        ],
        analytics: null,
      },
      {
        id: 5,
        title: "Food Delivery App Launch",
        brand: "QuickBites",
        status: "approved",
        platform: "TikTok",
        payment: 20000,
        appliedDate: "2024-01-25",
        deadline: "2024-02-22",
        progress: 30,
        brief:
          "Create engaging content about food ordering experience with creative storytelling.",
        deliverables: [
          {
            type: "TikTok Video 1",
            status: "completed",
            uploadDate: "2024-02-05",
          },
          { type: "TikTok Video 2", status: "pending", uploadDate: null },
          { type: "TikTok Video 3", status: "pending", uploadDate: null },
        ],
        requirements: [
          "Minimum 40K followers",
          "Food content creator",
          "Creative video skills",
        ],
        analytics: {
          views: 78000,
          likes: 5600,
          shares: 890,
          comments: 340,
        },
      },
    ];
    setCampaigns(sampleCampaigns);
  }, []);

  const tabs = [
    {
      id: "applied",
      name: "Applied",
      count: campaigns.filter((c) => c.status === "applied").length,
    },
    {
      id: "approved",
      name: "Approved",
      count: campaigns.filter((c) => c.status === "approved").length,
    },
    {
      id: "submitted",
      name: "Submitted",
      count: campaigns.filter((c) => c.status === "submitted").length,
    },
    {
      id: "paid",
      name: "Paid",
      count: campaigns.filter((c) => c.status === "paid").length,
    },
  ];

  const getFilteredCampaigns = () => {
    let filtered = campaigns.filter(
      (campaign) => campaign.status === activeTab,
    );

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          campaign.brand.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Platform filter
    if (selectedFilters.platform !== "all") {
      filtered = filtered.filter(
        (campaign) =>
          campaign.platform.toLowerCase() ===
          selectedFilters.platform.toLowerCase(),
      );
    }

    // Brand filter
    if (selectedFilters.brand !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.brand === selectedFilters.brand,
      );
    }

    return filtered;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-600/20 text-blue-400 border-blue-400/30";
      case "approved":
        return "bg-green-600/20 text-green-400 border-green-400/30";
      case "submitted":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-400/30";
      case "paid":
        return "bg-purple-600/20 text-purple-400 border-purple-400/30";
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-400/30";
    }
  };

  const getDeliverableStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "submitted":
        return "text-yellow-400";
      case "pending":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getDeliverableIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "submitted":
        return "⏳";
      case "pending":
        return "⭕";
      default:
        return "⭕";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleContentUpload = (campaignId, deliverableIndex) => {
    setUploadingContent({ campaignId, deliverableIndex });

    // Simulate upload process
    setTimeout(() => {
      setCampaigns((prev) =>
        prev.map((campaign) => {
          if (campaign.id === campaignId) {
            const updatedDeliverables = [...campaign.deliverables];
            updatedDeliverables[deliverableIndex] = {
              ...updatedDeliverables[deliverableIndex],
              status: "submitted",
              uploadDate: new Date().toISOString().split("T")[0],
            };
            return { ...campaign, deliverables: updatedDeliverables };
          }
          return campaign;
        }),
      );
      setUploadingContent(null);
    }, 2000);
  };

  const filteredCampaigns = getFilteredCampaigns();
  const uniqueBrands = [...new Set(campaigns.map((c) => c.brand))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Campaigns
          </h1>
          <p className="text-xl text-gray-400">
            Manage your active campaigns and track your progress
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-t-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-purple-600/20 text-purple-400 border-b-2 border-purple-400"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <span>{tab.name}</span>
              <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search campaigns or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
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
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select
              value={selectedFilters.platform}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  platform: e.target.value,
                }))
              }
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
            >
              <option value="all">All Platforms</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="tiktok">TikTok</option>
            </select>

            <select
              value={selectedFilters.brand}
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  brand: e.target.value,
                }))
              }
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
            >
              <option value="all">All Brands</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="space-y-4">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Table Row */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-800/20 transition-colors duration-300"
                onClick={() =>
                  setExpandedCampaign(
                    expandedCampaign === campaign.id ? null : campaign.id,
                  )
                }
              >
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                  {/* Campaign Info */}
                  <div className="lg:col-span-2">
                    <h3 className="font-bold text-white mb-1">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{campaign.brand}</p>
                  </div>

                  {/* Status */}
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(campaign.status)}`}
                    >
                      {campaign.status.charAt(0).toUpperCase() +
                        campaign.status.slice(1)}
                    </span>
                  </div>

                  {/* Payment */}
                  <div>
                    <p className="font-bold text-green-400">
                      {formatCurrency(campaign.payment)}
                    </p>
                  </div>

                  {/* Due Date */}
                  <div>
                    <p className="text-gray-300">
                      {new Date(campaign.deadline).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <div className="relative group">
                      <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white transition-all duration-300">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800/95 backdrop-blur-lg rounded-xl border border-gray-700/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                        <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300">
                          View Details
                        </button>
                        {campaign.status === "approved" && (
                          <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300">
                            Upload Content
                          </button>
                        )}
                        <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300">
                          Messages
                        </button>
                        {campaign.analytics && (
                          <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300">
                            View Analytics
                          </button>
                        )}
                      </div>
                    </div>

                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedCampaign === campaign.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-gray-300">
                      {campaign.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCampaign === campaign.id && (
                <div className="border-t border-gray-700/50 p-6 bg-gray-800/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Campaign Brief */}
                    <div>
                      <h4 className="font-bold text-white mb-3">
                        📝 Campaign Brief
                      </h4>
                      <p className="text-gray-300 mb-4">{campaign.brief}</p>

                      <h5 className="font-semibold text-white mb-2">
                        Requirements:
                      </h5>
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

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-bold text-white mb-3">
                        📋 Deliverables
                      </h4>
                      <div className="space-y-3">
                        {campaign.deliverables.map((deliverable, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">
                                {getDeliverableIcon(deliverable.status)}
                              </span>
                              <div>
                                <p className="text-white font-medium">
                                  {deliverable.type}
                                </p>
                                <p
                                  className={`text-sm ${getDeliverableStatusColor(deliverable.status)}`}
                                >
                                  {deliverable.status.charAt(0).toUpperCase() +
                                    deliverable.status.slice(1)}
                                  {deliverable.uploadDate &&
                                    ` • ${new Date(deliverable.uploadDate).toLocaleDateString()}`}
                                </p>
                              </div>
                            </div>

                            {deliverable.status === "pending" &&
                              campaign.status === "approved" && (
                                <button
                                  onClick={() =>
                                    handleContentUpload(campaign.id, index)
                                  }
                                  disabled={
                                    uploadingContent?.campaignId ===
                                      campaign.id &&
                                    uploadingContent?.deliverableIndex === index
                                  }
                                  className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-50"
                                >
                                  {uploadingContent?.campaignId ===
                                    campaign.id &&
                                  uploadingContent?.deliverableIndex === index
                                    ? "Uploading..."
                                    : "Upload"}
                                </button>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  {campaign.analytics && (
                    <div className="mt-8">
                      <h4 className="font-bold text-white mb-4">
                        📊 Campaign Analytics
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {Object.entries(campaign.analytics).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="bg-gray-700/30 rounded-lg p-4 text-center"
                            >
                              <p className="text-2xl font-bold text-purple-400">
                                {value.toLocaleString()}
                              </p>
                              <p className="text-gray-400 text-sm capitalize">
                                {key}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No campaigns found
            </h3>
            <p className="text-gray-500 mb-6">
              {activeTab === "applied"
                ? "You haven't applied to any campaigns yet"
                : `No ${activeTab} campaigns found`}
            </p>
            {activeTab === "applied" && (
              <a
                href="/creator/discover-campaigns"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Discover Campaigns
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCampaigns;
