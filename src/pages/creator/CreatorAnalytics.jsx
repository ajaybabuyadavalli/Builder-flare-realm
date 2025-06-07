import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorAnalytics = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const overallStats = {
    totalFollowers: "285K",
    totalViews: "12.5M",
    avgEngagement: "6.8%",
    campaignSuccess: "94%",
    growth: "+15%",
    reach: "8.2M",
  };

  const platformStats = [
    {
      platform: "Instagram",
      followers: "125K",
      engagement: "8.2%",
      posts: 45,
      reach: "2.8M",
      color: "bg-pink-500",
      icon: "📷",
    },
    {
      platform: "YouTube",
      followers: "89K",
      engagement: "12.5%",
      posts: 12,
      reach: "3.2M",
      color: "bg-red-500",
      icon: "🎥",
    },
    {
      platform: "TikTok",
      followers: "71K",
      engagement: "15.8%",
      posts: 38,
      reach: "2.2M",
      color: "bg-gray-900",
      icon: "🎵",
    },
  ];

  const engagementData = [
    { date: "Feb 1", likes: 2500, comments: 180, shares: 95 },
    { date: "Feb 2", likes: 3200, comments: 220, shares: 120 },
    { date: "Feb 3", likes: 2800, comments: 195, shares: 105 },
    { date: "Feb 4", likes: 4100, comments: 280, shares: 150 },
    { date: "Feb 5", likes: 3600, comments: 245, shares: 135 },
    { date: "Feb 6", likes: 3900, comments: 265, shares: 145 },
    { date: "Feb 7", likes: 4500, comments: 320, shares: 180 },
  ];

  const topPerformingContent = [
    {
      id: 1,
      title: "Summer Fashion Haul 2024",
      platform: "Instagram",
      type: "Reel",
      views: "125K",
      engagement: "18.5%",
      date: "2024-02-05",
      thumbnail:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      title: "Tech Review: Latest Smartphone",
      platform: "YouTube",
      type: "Video",
      views: "89K",
      engagement: "15.2%",
      date: "2024-02-03",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      title: "Quick Workout Routine",
      platform: "TikTok",
      type: "Video",
      views: "67K",
      engagement: "22.1%",
      date: "2024-02-01",
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    },
  ];

  const audienceDemographics = {
    ageGroups: [
      { range: "18-24", percentage: 35, count: "99.8K" },
      { range: "25-34", percentage: 45, count: "128.3K" },
      { range: "35-44", percentage: 15, count: "42.8K" },
      { range: "45+", percentage: 5, count: "14.3K" },
    ],
    gender: [
      { type: "Female", percentage: 68, count: "193.8K" },
      { type: "Male", percentage: 32, count: "91.2K" },
    ],
    locations: [
      { city: "Mumbai", percentage: 25, count: "71.3K" },
      { city: "Delhi", percentage: 20, count: "57K" },
      { city: "Bangalore", percentage: 15, count: "42.8K" },
      { city: "Chennai", percentage: 12, count: "34.2K" },
      { city: "Others", percentage: 28, count: "79.9K" },
    ],
  };

  const campaignPerformance = [
    {
      campaign: "StyleCo Summer Collection",
      reach: "245K",
      engagement: "8.5%",
      clicks: "12.8K",
      conversions: "856",
      ctr: "5.2%",
      status: "Completed",
    },
    {
      campaign: "TechFlow App Review",
      reach: "189K",
      engagement: "12.2%",
      clicks: "8.9K",
      conversions: "567",
      ctr: "4.7%",
      status: "Active",
    },
    {
      campaign: "FitLife Challenge",
      reach: "198K",
      engagement: "15.8%",
      clicks: "15.2K",
      conversions: "1,203",
      ctr: "7.7%",
      status: "Active",
    },
  ];

  const maxEngagement = Math.max(
    ...engagementData.map((item) => item.likes + item.comments + item.shares),
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Track your performance across all platforms
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">All Platforms</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
              </select>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Followers
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {overallStats.totalFollowers}
                </p>
                <p className="text-green-600 text-sm mt-1">
                  {overallStats.growth}
                </p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Views
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {overallStats.totalViews}
                </p>
              </div>
              <div className="text-3xl">👁️</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Avg Engagement
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {overallStats.avgEngagement}
                </p>
              </div>
              <div className="text-3xl">💝</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Campaign Success
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {overallStats.campaignSuccess}
                </p>
              </div>
              <div className="text-3xl">🎯</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Reach
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {overallStats.reach}
                </p>
              </div>
              <div className="text-3xl">📈</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Growth Rate
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {overallStats.growth}
                </p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Platform Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformStats.map((platform, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      <span>{platform.icon}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {platform.platform}
                    </h4>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.followers}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Engagement
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {platform.engagement}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Posts</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {platform.posts}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Reach</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {platform.reach}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Engagement Trend */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Engagement Trend
            </h3>
            <div className="space-y-4">
              {engagementData.map((day, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 text-sm text-gray-600 dark:text-gray-300">
                    {day.date}
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-6 relative overflow-hidden">
                      <div
                        className="bg-purple-500 h-full rounded-full transition-all"
                        style={{
                          width: `${(day.likes / maxEngagement) * 100}%`,
                        }}
                      ></div>
                      <div
                        className="bg-pink-500 h-full rounded-full absolute top-0 transition-all"
                        style={{
                          left: `${(day.likes / maxEngagement) * 100}%`,
                          width: `${(day.comments / maxEngagement) * 100}%`,
                        }}
                      ></div>
                      <div
                        className="bg-blue-500 h-full rounded-full absolute top-0 transition-all"
                        style={{
                          left: `${((day.likes + day.comments) / maxEngagement) * 100}%`,
                          width: `${(day.shares / maxEngagement) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {(day.likes + day.comments + day.shares).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Likes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Comments
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Shares</span>
              </div>
            </div>
          </div>

          {/* Top Performing Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Performing Content
            </h3>
            <div className="space-y-4">
              {topPerformingContent.map((content) => (
                <div
                  key={content.id}
                  className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {content.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {content.platform} • {content.type}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {content.views} views
                      </span>
                      <span className="text-xs font-medium text-green-600">
                        {content.engagement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Age Demographics
            </h3>
            <div className="space-y-3">
              {audienceDemographics.ageGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {group.range}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${group.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
                      {group.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Gender Split
            </h3>
            <div className="space-y-4">
              {audienceDemographics.gender.map((gender, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {gender.percentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {gender.type}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {gender.count}
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
              {audienceDemographics.locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {location.city}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-pink-600 h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
                      {location.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Campaign Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Campaign
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Reach
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Engagement
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Clicks
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Conversions
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    CTR
                  </th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-300 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaignPerformance.map((campaign, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700"
                  >
                    <td className="py-4">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {campaign.campaign}
                      </div>
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {campaign.reach}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {campaign.engagement}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {campaign.clicks}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {campaign.conversions}
                    </td>
                    <td className="py-4 text-gray-600 dark:text-gray-300">
                      {campaign.ctr}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorAnalytics;
