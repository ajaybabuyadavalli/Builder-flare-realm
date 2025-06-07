/**
 * CreatorDashboard.jsx
 *
 * Purpose: Comprehensive creator dashboard with analytics, notifications, and quick actions
 *
 * Features:
 * - Hero section with welcome card and Influbazzar score
 * - Animated stat widgets with count-up effects
 * - Performance charts (follower growth, campaign status, engagement by platform)
 * - Quick action buttons for common tasks
 * - Notification center with filterable feed
 * - Responsive design with glassmorphism styling
 *
 * Backend Integration:
 * - User profile and score data
 * - Real-time analytics and metrics
 * - Notification feed API
 * - Campaign and earnings data
 */

import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const CreatorDashboard = () => {
  const { user } = useAuth();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [stats, setStats] = useState({
    totalEarnings: 0,
    activeCampaigns: 0,
    approvalRate: 0,
    avgEngagement: 0,
  });
  const [notifications, setNotifications] = useState([]);
  const [notificationFilter, setNotificationFilter] = useState("all");

  // Animated count-up effect
  useEffect(() => {
    const targetStats = {
      totalEarnings: 45250,
      activeCampaigns: 3,
      approvalRate: 96,
      avgEngagement: 4.2,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        totalEarnings: Math.floor(targetStats.totalEarnings * progress),
        activeCampaigns: Math.floor(targetStats.activeCampaigns * progress),
        approvalRate: Math.floor(targetStats.approvalRate * progress),
        avgEngagement: +(targetStats.avgEngagement * progress).toFixed(1),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Sample notifications data
  useEffect(() => {
    const sampleNotifications = [
      {
        id: 1,
        type: "success",
        icon: "✅",
        title: "Post Approved!",
        message: "Your fashion haul post for StyleCo has been approved",
        timestamp: "2 hours ago",
        unread: true,
      },
      {
        id: 2,
        type: "payment",
        icon: "💰",
        title: "Payment Released",
        message: "₹15,000 has been credited to your account",
        timestamp: "4 hours ago",
        unread: true,
      },
      {
        id: 3,
        type: "campaign",
        icon: "📩",
        title: "New Campaign Invitation",
        message: "FitnessBrand wants to collaborate with you",
        timestamp: "6 hours ago",
        unread: false,
      },
      {
        id: 4,
        type: "info",
        icon: "📊",
        title: "Analytics Update",
        message: "Your engagement rate increased by 12% this week",
        timestamp: "1 day ago",
        unread: false,
      },
      {
        id: 5,
        type: "award",
        icon: "🏆",
        title: "Achievement Unlocked",
        message: "You've reached Gold Creator status!",
        timestamp: "2 days ago",
        unread: false,
      },
    ];
    setNotifications(sampleNotifications);
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

  const getNotificationColor = (type) => {
    switch (type) {
      case "success":
        return "border-green-400/50 bg-green-400/10";
      case "payment":
        return "border-yellow-400/50 bg-yellow-400/10";
      case "campaign":
        return "border-blue-400/50 bg-blue-400/10";
      case "info":
        return "border-purple-400/50 bg-purple-400/10";
      case "award":
        return "border-pink-400/50 bg-pink-400/10";
      default:
        return "border-gray-400/50 bg-gray-400/10";
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (notificationFilter === "all") return true;
    if (notificationFilter === "unread") return notification.unread;
    return notification.type === notificationFilter;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div
          data-animate="hero"
          className={`transition-all duration-1000 ${
            visibleSections.has("hero")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Hi {user?.name?.split(" ")[0] || "Ajay"}! 👋
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xl text-gray-300">
                    Your Influbazzar Score is
                  </span>
                  <div className="group relative">
                    <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      84
                    </span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-4 text-sm w-64 border border-gray-700/50">
                        <p className="font-semibold mb-2">Score Breakdown:</p>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Content Quality:</span>
                            <span className="text-green-400">92/100</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Engagement Rate:</span>
                            <span className="text-blue-400">78/100</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Reliability:</span>
                            <span className="text-purple-400">88/100</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Growth Rate:</span>
                            <span className="text-yellow-400">76/100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-400 px-4 py-2 rounded-xl font-semibold border border-yellow-400/30">
                    🏆 Gold Creator
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Keep up the great work!</span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
                  <img
                    src={
                      user?.avatar ||
                      `https://ui-avatars.com/api/?name=${user?.name || "Ajay Kumar"}&background=7c3aed&color=fff&size=128`
                    }
                    alt={user?.name || "Ajay"}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Widgets */}
        <div
          data-animate="stats"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-200 ${
            visibleSections.has("stats")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              label: "Total Earnings",
              value: formatCurrency(stats.totalEarnings),
              icon: "💰",
              trend: "+12.5%",
              trendColor: "text-green-400",
            },
            {
              label: "Active Campaigns",
              value: stats.activeCampaigns,
              icon: "🎯",
              trend: "+2",
              trendColor: "text-blue-400",
            },
            {
              label: "Approval Rate",
              value: `${stats.approvalRate}%`,
              icon: "✅",
              trend: "+4%",
              trendColor: "text-green-400",
            },
            {
              label: "Avg Engagement",
              value: `${stats.avgEngagement}%`,
              icon: "📈",
              trend: "+0.3%",
              trendColor: "text-purple-400",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <div
                  className={`flex items-center space-x-1 ${stat.trendColor}`}
                >
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
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Snapshot & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Charts */}
          <div
            data-animate="charts"
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              visibleSections.has("charts")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                📊 Performance Snapshot
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
                      Performance metrics are updated in real-time based on your
                      content engagement and campaign success.
                    </div>
                  </div>
                </div>
              </h3>

              {/* Chart Placeholders */}
              <div className="space-y-6">
                {/* Follower Growth */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    Follower Growth (Weekly)
                    <div className="group relative ml-2">
                      <span className="text-gray-400 cursor-help">?</span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl p-3 text-xs w-40 border border-gray-700/50">
                          Weekly follower growth across all platforms
                        </div>
                      </div>
                    </div>
                  </h4>
                  <div className="h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400">
                      📈 +12.5K followers this week
                    </span>
                  </div>
                </div>

                {/* Campaign Status */}
                <div>
                  <h4 className="font-semibold mb-3">
                    Campaign Status Distribution
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-green-600/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">
                        65%
                      </div>
                      <div className="text-sm text-gray-400">Approved</div>
                    </div>
                    <div className="bg-yellow-600/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        25%
                      </div>
                      <div className="text-sm text-gray-400">In Review</div>
                    </div>
                    <div className="bg-blue-600/20 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        10%
                      </div>
                      <div className="text-sm text-gray-400">Paid</div>
                    </div>
                  </div>
                </div>

                {/* Platform Engagement */}
                <div>
                  <h4 className="font-semibold mb-3">Engagement by Platform</h4>
                  <div className="space-y-3">
                    {[
                      {
                        platform: "Instagram",
                        engagement: 4.2,
                        color: "bg-pink-500",
                      },
                      {
                        platform: "YouTube",
                        engagement: 3.8,
                        color: "bg-red-500",
                      },
                      {
                        platform: "TikTok",
                        engagement: 5.1,
                        color: "bg-purple-500",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-300">
                          {item.platform}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div
                              className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                              style={{
                                width: `${(item.engagement / 6) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-white w-12">
                            {item.engagement}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            data-animate="actions"
            className={`transition-all duration-1000 delay-400 ${
              visibleSections.has("actions")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-6">⚡ Quick Actions</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Browse Campaigns",
                    href: "/creator/discover-campaigns",
                    icon: "🔍",
                    color: "from-purple-600 to-blue-600",
                  },
                  {
                    name: "Upload Content",
                    href: "/creator/my-campaigns",
                    icon: "📤",
                    color: "from-green-600 to-emerald-600",
                  },
                  {
                    name: "Update Profile",
                    href: "/creator/profile",
                    icon: "👤",
                    color: "from-pink-600 to-rose-600",
                  },
                ].map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className={`group flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                  >
                    <span className="text-xl">{action.icon}</span>
                    <span className="font-semibold text-white">
                      {action.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notification Center */}
        <div
          data-animate="notifications"
          className={`transition-all duration-1000 delay-500 ${
            visibleSections.has("notifications")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h3 className="text-xl font-bold mb-4 sm:mb-0">
                🔔 Notification Center
              </h3>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {[
                  "all",
                  "unread",
                  "success",
                  "payment",
                  "campaign",
                  "info",
                  "award",
                ].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setNotificationFilter(filter)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                      notificationFilter === filter
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mark all as read button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() =>
                  setNotifications((prev) =>
                    prev.map((n) => ({ ...n, unread: false })),
                  )
                }
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Mark all as read
              </button>
            </div>

            {/* Notifications Feed */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    notification.unread
                      ? `${getNotificationColor(notification.type)} border-opacity-70`
                      : "bg-gray-800/30 border-gray-700/50"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl flex-shrink-0">
                      {notification.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white truncate">
                          {notification.title}
                        </h4>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                          {notification.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {notification.message}
                      </p>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredNotifications.length === 0 && (
              <div className="text-center py-8">
                <div className="text-4xl mb-2">📭</div>
                <p className="text-gray-400">No notifications found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
