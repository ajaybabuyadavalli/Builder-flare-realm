import React from "react";

const SimpleCreatorDashboard = () => {
  const stats = [
    { label: "Total Views", value: "1.2M", icon: "👁️" },
    { label: "Earnings", value: "₹45,000", icon: "💰" },
    { label: "Followers", value: "125K", icon: "👥" },
    { label: "Active Campaigns", value: "3", icon: "📊" },
  ];

  const recentCampaigns = [
    { name: "Beauty Product Launch", status: "Active", earnings: "₹15,000" },
    { name: "Tech Review", status: "Completed", earnings: "₹25,000" },
    { name: "Fashion Post", status: "Pending", earnings: "₹5,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Creator Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/creator/profile"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600"
              >
                Profile
              </a>
              <a href="/" className="text-purple-600 hover:text-purple-700">
                ← Main Site
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, Creator! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here's your performance overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center">
                <div className="text-2xl mr-3">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <a
            href="/creator/discover-campaigns"
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2">
              🎯 Discover Campaigns
            </h3>
            <p className="text-purple-100">
              Find new brand collaboration opportunities
            </p>
          </a>
          <a
            href="/creator/my-campaigns"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              📋 My Campaigns
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your active and completed campaigns
            </p>
          </a>
          <a
            href="/creator/earnings"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              💰 Earnings
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track your payments and revenue
            </p>
          </a>
        </div>

        {/* Recent Campaigns */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Campaigns
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {campaign.name}
                    </h4>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : campaign.status === "Completed"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {campaign.earnings}
                    </p>
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

export default SimpleCreatorDashboard;
