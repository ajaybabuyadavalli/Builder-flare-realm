import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Views", value: "1.2M", icon: "👁️", trend: "+12%" },
    { label: "Earnings", value: "₹45,000", icon: "💰", trend: "+8%" },
    { label: "Followers", value: "125K", icon: "👥", trend: "+15%" },
    { label: "Active Campaigns", value: "3", icon: "📊", trend: "+2" },
  ];

  const recentCampaigns = [
    {
      id: 1,
      brand: "StyleCo",
      title: "Summer Collection Showcase",
      status: "Active",
      deadline: "2024-02-15",
      payment: "₹15,000",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      brand: "TechFlow",
      title: "App Review Campaign",
      status: "Review",
      deadline: "2024-02-10",
      payment: "₹8,000",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      brand: "FitLife",
      title: "Fitness Challenge",
      status: "Completed",
      deadline: "2024-01-30",
      payment: "₹12,000",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: "Submit content for StyleCo campaign",
      dueDate: "Today",
      priority: "High",
      priorityColor: "text-red-600",
    },
    {
      id: 2,
      task: "Review TechFlow campaign brief",
      dueDate: "Tomorrow",
      priority: "Medium",
      priorityColor: "text-yellow-600",
    },
    {
      id: 3,
      task: "Schedule posts for FitLife",
      dueDate: "Feb 12",
      priority: "Low",
      priorityColor: "text-green-600",
    },
  ];

  const quickActions = [
    {
      name: "Discover Campaigns",
      href: "/creator/discover-campaigns",
      icon: "🔍",
      color: "bg-purple-500",
    },
    {
      name: "My Campaigns",
      href: "/creator/my-campaigns",
      icon: "📋",
      color: "bg-blue-500",
    },
    {
      name: "View Earnings",
      href: "/creator/earnings",
      icon: "💰",
      color: "bg-green-500",
    },
    {
      name: "Analytics",
      href: "/creator/analytics",
      icon: "📊",
      color: "bg-pink-500",
    },
    {
      name: "Profile Settings",
      href: "/creator/profile",
      icon: "⚙️",
      color: "bg-gray-500",
    },
    {
      name: "Support",
      href: "/creator/support",
      icon: "🎧",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome back, Creator! 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Here's what's happening with your account
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                Create Content
              </button>
              <div className="relative">
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                  🔔
                </button>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <p className="text-green-600 text-sm mt-1">{stat.trend}</p>
                </div>
                <div className="text-2xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Campaigns
                  </h2>
                  <a
                    href="/creator/my-campaigns"
                    className="text-purple-600 hover:text-purple-500 text-sm font-medium"
                  >
                    View All
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {campaign.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {campaign.brand} • Due: {campaign.deadline}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {campaign.payment}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${campaign.statusColor}`}
                        >
                          {campaign.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.href}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-2 text-white group-hover:scale-110 transition-transform`}
                    >
                      <span>{action.icon}</span>
                    </div>
                    <span className="text-xs text-center text-gray-600 dark:text-gray-300 font-medium">
                      {action.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Upcoming Tasks
              </h2>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {task.task}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {task.dueDate}
                        </span>
                        <span
                          className={`text-xs font-medium ${task.priorityColor}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                This Month
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Campaigns Completed
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    5
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Total Earned
                  </span>
                  <span className="font-medium text-green-600">₹18,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Avg. Rating
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      4.9
                    </span>
                    <span className="text-yellow-400">⭐</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Profile Views
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      1,250
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Opportunities */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Latest Opportunities
                </h2>
                <a
                  href="/creator/discover-campaigns"
                  className="text-purple-600 hover:text-purple-500 text-sm font-medium"
                >
                  Discover More
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    brand: "EcoLife",
                    title: "Sustainable Living Content",
                    budget: "₹20,000 - ₹35,000",
                    deadline: "5 days left",
                    category: "Lifestyle",
                    applications: 12,
                  },
                  {
                    brand: "GameZone",
                    title: "Gaming Setup Review",
                    budget: "₹25,000 - ₹40,000",
                    deadline: "3 days left",
                    category: "Gaming",
                    applications: 8,
                  },
                  {
                    brand: "HealthFirst",
                    title: "Nutrition Tips Series",
                    budget: "₹15,000 - ₹25,000",
                    deadline: "1 week left",
                    category: "Health",
                    applications: 15,
                  },
                ].map((opportunity, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {opportunity.brand}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                        {opportunity.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {opportunity.title}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-green-600">
                        {opportunity.budget}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {opportunity.deadline}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {opportunity.applications} applications
                        </span>
                        <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorDashboard;
