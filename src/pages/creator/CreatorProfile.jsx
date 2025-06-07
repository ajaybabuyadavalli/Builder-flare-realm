import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    username: "@alexcreates",
    email: "alex@example.com",
    phone: "+91 98765 43210",
    bio: "Passionate content creator specializing in lifestyle, travel, and tech reviews. I love connecting with my audience through authentic storytelling and high-quality visual content.",
    location: "Mumbai, Maharashtra",
    category: "Lifestyle",
    website: "www.alexcreates.com",

    // Social Media
    instagram: "@alexcreates",
    youtube: "Alex Creates",
    tiktok: "@alexcreates",
    twitter: "@alexcreates",

    // Professional Info
    languages: ["English", "Hindi", "Marathi"],
    specialties: ["Photography", "Video Editing", "Content Strategy"],
    equipment: [
      "DSLR Camera",
      "Professional Lighting",
      "Video Editing Software",
    ],

    // Stats
    totalFollowers: "285K",
    avgEngagement: "6.8%",
    completedCampaigns: 47,
    totalEarnings: "₹3,85,000",
    rating: 4.9,
  });

  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      type: "Instagram Post",
      title: "Summer Fashion Lookbook",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      engagement: "12.5K likes, 450 comments",
      brand: "StyleCo",
    },
    {
      id: 2,
      type: "YouTube Video",
      title: "Tech Review: Latest Smartphone",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop",
      engagement: "25K views, 890 likes",
      brand: "TechFlow",
    },
    {
      id: 3,
      type: "TikTok Video",
      title: "Fitness Transformation Journey",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      engagement: "50K views, 2.1K likes",
      brand: "FitLife",
    },
    {
      id: 4,
      type: "Instagram Reel",
      title: "Travel Vlog: Goa Adventure",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop",
      engagement: "18K views, 750 likes",
      brand: "TravelWise",
    },
  ]);

  const [analytics, setAnalytics] = useState({
    monthlyStats: [
      { month: "Jan", followers: 245000, engagement: 6.2 },
      { month: "Feb", followers: 265000, engagement: 6.5 },
      { month: "Mar", followers: 285000, engagement: 6.8 },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 35 },
        { range: "25-34", percentage: 45 },
        { range: "35-44", percentage: 20 },
      ],
      locations: [
        { city: "Mumbai", percentage: 25 },
        { city: "Delhi", percentage: 20 },
        { city: "Bangalore", percentage: 15 },
        { city: "Others", percentage: 40 },
      ],
    },
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleAddPortfolioItem = () => {
    // In a real app, this would open a file upload modal
    alert("Add portfolio item functionality would open here");
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
                Creator Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Manage your profile and showcase your work
              </p>
            </div>
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
              <div className="text-center">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      📷
                    </button>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {profileData.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                  {profileData.username}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {profileData.category} Creator
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Followers
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profileData.totalFollowers}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Engagement
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profileData.avgEngagement}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Rating
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold text-gray-900 dark:text-white ml-1">
                      {profileData.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Campaigns
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {profileData.completedCampaigns}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Total Earned
                  </span>
                  <span className="font-semibold text-green-600">
                    {profileData.totalEarnings}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  📊 View Analytics
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  💰 Earnings Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  🔗 Share Profile
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  📋 Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: "profile", name: "Profile Info" },
                    { id: "portfolio", name: "Portfolio" },
                    { id: "analytics", name: "Analytics" },
                    { id: "settings", name: "Settings" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-purple-500 text-purple-600 dark:text-purple-400"
                          : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) =>
                          handleInputChange("username", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={profileData.category}
                        onChange={(e) =>
                          handleInputChange("category", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      >
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Technology">Technology</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Fitness">Fitness</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      value={profileData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                    />
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Social Media Accounts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Instagram
                      </label>
                      <input
                        type="text"
                        value={profileData.instagram}
                        onChange={(e) =>
                          handleInputChange("instagram", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        value={profileData.youtube}
                        onChange={(e) =>
                          handleInputChange("youtube", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        TikTok
                      </label>
                      <input
                        type="text"
                        value={profileData.tiktok}
                        onChange={(e) =>
                          handleInputChange("tiktok", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Twitter
                      </label>
                      <input
                        type="text"
                        value={profileData.twitter}
                        onChange={(e) =>
                          handleInputChange("twitter", e.target.value)
                        }
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 dark:disabled:bg-gray-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Professional Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Languages
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((lang, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Specialties
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Equipment
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.equipment.map((item, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Portfolio
                  </h3>
                  <button
                    onClick={handleAddPortfolioItem}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    Add Item
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg transition-all">
                          View Details
                        </button>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {item.type} • {item.brand}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.engagement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-6">
                {/* Monthly Growth */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Monthly Growth
                  </h3>
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    {analytics.monthlyStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {stat.month} 2024
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          {stat.followers.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.engagement}% engagement
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demographics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Age Demographics
                    </h3>
                    <div className="space-y-3">
                      {analytics.demographics.ageGroups.map((group, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-gray-600 dark:text-gray-300">
                            {group.range}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full"
                                style={{ width: `${group.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {group.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Top Locations
                    </h3>
                    <div className="space-y-3">
                      {analytics.demographics.locations.map(
                        (location, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-600 dark:text-gray-300">
                              {location.city}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-pink-600 h-2 rounded-full"
                                  style={{ width: `${location.percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {location.percentage}%
                              </span>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                {/* Account Settings */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Account Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Email Notifications
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Receive updates about campaigns and messages
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-purple-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Profile Visibility
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Allow brands to discover your profile
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-purple-600"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Auto-Apply
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Automatically apply to matching campaigns
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-purple-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-red-600 mb-4">
                    Danger Zone
                  </h3>
                  <div className="space-y-4">
                    <button className="w-full md:w-auto px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                      Deactivate Account
                    </button>
                    <button className="w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ml-0 md:ml-3">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorProfile;
