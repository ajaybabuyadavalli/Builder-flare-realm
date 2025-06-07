/**
 * CreatorAnalytics.jsx
 *
 * Purpose: Comprehensive analytics dashboard with multiple visualizations and insights
 *
 * Features:
 * - Area chart for engagement over time
 * - Grouped bar chart for platform performance
 * - Heatmap for best posting times
 * - Pie chart for audience source breakdown
 * - Geographic map for regional engagement
 * - Advanced filtering by platform, date, region, niche
 * - Score improvement suggestions
 *
 * Backend Integration:
 * - Real-time analytics data
 * - Platform-specific metrics
 * - Audience demographics
 * - Performance optimization insights
 */

import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const CreatorAnalytics = () => {
  const { user } = useAuth();
  const [selectedTimeframe, setSelectedTimeframe] = useState("30days");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedMetric, setSelectedMetric] = useState("engagement");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [analyticsData, setAnalyticsData] = useState({});

  // Sample analytics data
  useEffect(() => {
    const sampleData = {
      engagementOverTime: [
        { date: "Jan 1", engagement: 3.2, reach: 45000, likes: 2800 },
        { date: "Jan 7", engagement: 3.8, reach: 52000, likes: 3200 },
        { date: "Jan 14", engagement: 4.1, reach: 48000, likes: 3100 },
        { date: "Jan 21", engagement: 3.9, reach: 55000, likes: 3400 },
        { date: "Jan 28", engagement: 4.3, reach: 58000, likes: 3800 },
        { date: "Feb 4", engagement: 4.7, reach: 61000, likes: 4100 },
        { date: "Feb 11", engagement: 4.2, reach: 59000, likes: 3900 },
      ],
      platformPerformance: {
        instagram: {
          followers: 125000,
          engagement: 4.2,
          posts: 45,
          growth: 12.5,
        },
        youtube: { followers: 89000, engagement: 6.8, posts: 12, growth: 18.3 },
        tiktok: { followers: 67000, engagement: 8.1, posts: 23, growth: 25.7 },
      },
      bestPostingTimes: [
        [0, 0, 1, 2, 1, 0, 0], // Sunday
        [1, 0, 2, 3, 4, 2, 1], // Monday
        [1, 1, 3, 4, 5, 3, 1], // Tuesday
        [0, 1, 2, 4, 5, 4, 2], // Wednesday
        [1, 0, 2, 3, 4, 3, 1], // Thursday
        [2, 1, 3, 4, 3, 2, 1], // Friday
        [1, 2, 4, 5, 4, 2, 1], // Saturday
      ],
      audienceSources: [
        { source: "Organic", percentage: 45, count: 56250 },
        { source: "Hashtags", percentage: 25, count: 31250 },
        { source: "Shares", percentage: 15, count: 18750 },
        { source: "Explore", percentage: 10, count: 12500 },
        { source: "Other", percentage: 5, count: 6250 },
      ],
      topRegions: [
        { region: "Mumbai", percentage: 28, engagement: 4.8 },
        { region: "Delhi", percentage: 22, engagement: 4.3 },
        { region: "Bangalore", percentage: 18, engagement: 4.6 },
        { region: "Chennai", percentage: 12, engagement: 4.1 },
        { region: "Kolkata", percentage: 8, engagement: 3.9 },
        { region: "Others", percentage: 12, engagement: 4.0 },
      ],
      keyInsights: [
        {
          type: "positive",
          title: "Engagement Peak",
          description: "Your engagement rate increased by 18% this week",
          suggestion: "Keep posting during your peak hours (6-8 PM)",
        },
        {
          type: "warning",
          title: "Content Frequency",
          description:
            "Posting frequency decreased by 23% compared to last month",
          suggestion: "Aim for 4-5 posts per week for optimal growth",
        },
        {
          type: "info",
          title: "Audience Growth",
          description: "Your audience is growing fastest in tier-2 cities",
          suggestion:
            "Consider creating content that resonates with this demographic",
        },
      ],
    };
    setAnalyticsData(sampleData);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...prev, entry.target.dataset.animate]),
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getHeatmapColor = (value) => {
    const intensity = value / 5; // Normalize to 0-1
    if (intensity === 0) return "bg-gray-800";
    if (intensity <= 0.2) return "bg-blue-900";
    if (intensity <= 0.4) return "bg-blue-700";
    if (intensity <= 0.6) return "bg-blue-500";
    if (intensity <= 0.8) return "bg-blue-400";
    return "bg-blue-300";
  };

  const getInsightIcon = (type) => {
    switch (type) {
      case "positive":
        return "📈";
      case "warning":
        return "⚠️";
      case "info":
        return "💡";
      default:
        return "📊";
    }
  };

  const getInsightColor = (type) => {
    switch (type) {
      case "positive":
        return "border-green-400/50 bg-green-400/10";
      case "warning":
        return "border-yellow-400/50 bg-yellow-400/10";
      case "info":
        return "border-blue-400/50 bg-blue-400/10";
      default:
        return "border-gray-400/50 bg-gray-400/10";
    }
  };

  const timeframes = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "1year", label: "Last Year" },
  ];

  const platforms = [
    { value: "all", label: "All Platforms" },
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "YouTube" },
    { value: "tiktok", label: "TikTok" },
  ];

  const metrics = [
    { value: "engagement", label: "Engagement Rate" },
    { value: "reach", label: "Reach" },
    { value: "impressions", label: "Impressions" },
    { value: "growth", label: "Follower Growth" },
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div
          data-animate="header"
          className={`text-center mb-8 transition-all duration-1000 ${
            visibleSections.has("header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            📈 Analytics Center
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep insights into your content performance and audience behavior
          </p>
        </div>

        {/* Filters */}
        <div
          data-animate="filters"
          className={`flex flex-col lg:flex-row gap-4 mb-8 transition-all duration-1000 delay-200 ${
            visibleSections.has("filters")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
          >
            {timeframes.map((tf) => (
              <option key={tf.value} value={tf.value}>
                {tf.label}
              </option>
            ))}
          </select>

          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
          >
            {platforms.map((platform) => (
              <option key={platform.value} value={platform.value}>
                {platform.label}
              </option>
            ))}
          </select>

          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
          >
            {metrics.map((metric) => (
              <option key={metric.value} value={metric.value}>
                {metric.label}
              </option>
            ))}
          </select>

          <a
            href="/creator/support"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center whitespace-nowrap"
          >
            🎯 Boost My Score
          </a>
        </div>

        {/* Key Insights */}
        <div
          data-animate="insights"
          className={`mb-8 transition-all duration-1000 delay-300 ${
            visibleSections.has("insights")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">💡 Key Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {analyticsData.keyInsights?.map((insight, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${getInsightColor(insight.type)}`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">
                    {getInsightIcon(insight.type)}
                  </span>
                  <h3 className="font-bold text-white">{insight.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{insight.description}</p>
                <p className="text-sm text-gray-400 italic">
                  {insight.suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Engagement Over Time */}
          <div
            data-animate="chart1"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-400 ${
              visibleSections.has("chart1")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              📊 Engagement Over Time
              <div className="group relative ml-2">
                <button className="text-gray-400 hover:text-white">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-3 text-xs w-48 border border-gray-700/50">
                    Track how your engagement rate changes over time
                  </div>
                </div>
              </div>
            </h3>

            <div className="h-64 flex items-end justify-between space-x-2">
              {analyticsData.engagementOverTime?.map((point, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center group"
                >
                  <div className="relative">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all duration-1000 hover:from-blue-500 hover:to-purple-500"
                      style={{
                        height: `${(point.engagement / 6) * 200}px`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-3 text-xs border border-gray-700/50 whitespace-nowrap">
                        <p>Engagement: {point.engagement}%</p>
                        <p>Reach: {point.reach.toLocaleString()}</p>
                        <p>Likes: {point.likes.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <div className="text-xs text-gray-400">{point.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Performance */}
          <div
            data-animate="chart2"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-500 ${
              visibleSections.has("chart2")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">📱 Platform Performance</h3>

            <div className="space-y-6">
              {Object.entries(analyticsData.platformPerformance || {}).map(
                ([platform, data], index) => (
                  <div key={platform} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">
                          {platform === "instagram"
                            ? "📷"
                            : platform === "youtube"
                              ? "📺"
                              : "🎵"}
                        </span>
                        <span className="font-semibold text-white capitalize">
                          {platform}
                        </span>
                      </div>
                      <span className="text-sm text-green-400">
                        +{data.growth}%
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-lg font-bold text-white">
                          {data.followers.toLocaleString()}
                        </div>
                        <div className="text-gray-400">Followers</div>
                      </div>
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-lg font-bold text-purple-400">
                          {data.engagement}%
                        </div>
                        <div className="text-gray-400">Engagement</div>
                      </div>
                      <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-lg font-bold text-blue-400">
                          {data.posts}
                        </div>
                        <div className="text-gray-400">Posts</div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Best Posting Times Heatmap */}
        <div
          data-animate="heatmap"
          className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-8 transition-all duration-1000 delay-600 ${
            visibleSections.has("heatmap")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            🕒 Best Posting Times
            <div className="group relative ml-2">
              <button className="text-gray-400 hover:text-white">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-3 text-xs w-48 border border-gray-700/50">
                  Darker colors indicate higher engagement rates for that time
                  slot
                </div>
              </div>
            </div>
          </h3>

          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Hours header */}
              <div className="flex mb-2">
                <div className="w-16"></div>
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className="w-16 text-center text-sm text-gray-400"
                  >
                    {hour}
                  </div>
                ))}
              </div>

              {/* Heatmap grid */}
              {analyticsData.bestPostingTimes?.map((dayData, dayIndex) => (
                <div key={dayIndex} className="flex mb-1">
                  <div className="w-16 text-sm text-gray-400 flex items-center">
                    {days[dayIndex]}
                  </div>
                  {dayData.map((value, hourIndex) => (
                    <div
                      key={hourIndex}
                      className={`w-16 h-8 ${getHeatmapColor(value)} border border-gray-600 transition-all duration-300 hover:scale-110 cursor-pointer group relative`}
                    >
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-2 text-xs border border-gray-700/50 whitespace-nowrap">
                          {days[dayIndex]} {hours[hourIndex]}: {value}/5
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Legend */}
              <div className="flex items-center justify-center mt-4 space-x-2">
                <span className="text-sm text-gray-400">Less</span>
                {[0, 1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-4 h-4 ${getHeatmapColor(level)} border border-gray-600`}
                  ></div>
                ))}
                <span className="text-sm text-gray-400">More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Audience Sources & Regional Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Audience Sources */}
          <div
            data-animate="audience"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-700 ${
              visibleSections.has("audience")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">
              👥 Audience Source Breakdown
            </h3>

            <div className="space-y-4">
              {analyticsData.audienceSources?.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 font-medium">
                    {source.source}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          index === 0
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : index === 1
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                              : index === 2
                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                : index === 3
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                                  : "bg-gradient-to-r from-gray-500 to-gray-400"
                        }`}
                        style={{
                          width: `${source.percentage}%`,
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                    <span className="text-white font-bold w-12 text-right">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Engagement */}
          <div
            data-animate="regional"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-800 ${
              visibleSections.has("regional")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">🗺️ Regional Engagement</h3>

            <div className="space-y-4">
              {analyticsData.topRegions?.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">
                      {index === 0
                        ? "🥇"
                        : index === 1
                          ? "🥈"
                          : index === 2
                            ? "🥉"
                            : "📍"}
                    </span>
                    <span className="text-white font-medium">
                      {region.region}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">
                      {region.percentage}%
                    </div>
                    <div className="text-gray-400 text-sm">
                      {region.engagement}% eng.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorAnalytics;
