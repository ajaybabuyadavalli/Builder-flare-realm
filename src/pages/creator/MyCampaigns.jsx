import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MyCampaigns = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaigns = {
    active: [
      {
        id: 1,
        brand: "StyleCo",
        title: "Summer Collection Showcase",
        status: "In Progress",
        progress: 65,
        deadline: "2024-02-15",
        payment: "₹15,000",
        description: "Create authentic styling content for summer collection",
        deliverables: [
          {
            task: "Instagram Posts (3)",
            completed: 2,
            total: 3,
            status: "in-progress",
          },
          {
            task: "Instagram Stories (5)",
            completed: 5,
            total: 5,
            status: "completed",
          },
          {
            task: "TikTok Video (1)",
            completed: 0,
            total: 1,
            status: "pending",
          },
        ],
        brandImage:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
        lastUpdate: "2 hours ago",
        messages: 3,
        priority: "High",
      },
      {
        id: 2,
        brand: "TechFlow",
        title: "App Review Campaign",
        status: "Review Pending",
        progress: 90,
        deadline: "2024-02-10",
        payment: "₹8,000",
        description: "Comprehensive review and tutorial for productivity app",
        deliverables: [
          {
            task: "YouTube Video",
            completed: 1,
            total: 1,
            status: "under-review",
          },
          {
            task: "Instagram Posts (3)",
            completed: 3,
            total: 3,
            status: "approved",
          },
          {
            task: "App Store Review",
            completed: 1,
            total: 1,
            status: "completed",
          },
        ],
        brandImage:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
        lastUpdate: "1 day ago",
        messages: 1,
        priority: "Medium",
      },
      {
        id: 3,
        brand: "FitLife",
        title: "Fitness Challenge",
        status: "Just Started",
        progress: 20,
        deadline: "2024-03-01",
        payment: "₹12,000",
        description: "30-day fitness challenge with supplement integration",
        deliverables: [
          {
            task: "Week 1 Progress Post",
            completed: 1,
            total: 1,
            status: "completed",
          },
          {
            task: "Week 2 Progress Post",
            completed: 0,
            total: 1,
            status: "pending",
          },
          {
            task: "Week 3 Progress Post",
            completed: 0,
            total: 1,
            status: "pending",
          },
          {
            task: "Week 4 Progress Post",
            completed: 0,
            total: 1,
            status: "pending",
          },
          {
            task: "Final Transformation Video",
            completed: 0,
            total: 1,
            status: "pending",
          },
        ],
        brandImage:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
        lastUpdate: "3 hours ago",
        messages: 0,
        priority: "High",
      },
    ],
    completed: [
      {
        id: 4,
        brand: "EcoLife",
        title: "Sustainable Living Series",
        status: "Completed",
        progress: 100,
        deadline: "2024-01-30",
        payment: "₹10,000",
        completedDate: "2024-01-28",
        rating: 4.8,
        brandImage:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop",
        deliverables: [
          {
            task: "Instagram Posts (5)",
            completed: 5,
            total: 5,
            status: "approved",
          },
          {
            task: "Instagram Stories (10)",
            completed: 10,
            total: 10,
            status: "approved",
          },
          {
            task: "TikTok Videos (3)",
            completed: 3,
            total: 3,
            status: "approved",
          },
        ],
      },
      {
        id: 5,
        brand: "GameZone",
        title: "Gaming Setup Review",
        status: "Completed",
        progress: 100,
        deadline: "2024-01-20",
        payment: "₹18,000",
        completedDate: "2024-01-18",
        rating: 4.9,
        brandImage:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
        deliverables: [
          {
            task: "YouTube Setup Tour",
            completed: 1,
            total: 1,
            status: "approved",
          },
          {
            task: "Product Review Videos (2)",
            completed: 2,
            total: 2,
            status: "approved",
          },
          {
            task: "Live Stream Sessions (3)",
            completed: 3,
            total: 3,
            status: "approved",
          },
        ],
      },
    ],
    pending: [
      {
        id: 6,
        brand: "TravelWise",
        title: "Budget Travel Guide",
        status: "Applied",
        appliedDate: "2024-02-01",
        deadline: "2024-02-28",
        payment: "₹25,000",
        description: "Create comprehensive budget travel content",
        brandImage:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop",
        applicationStatus: "Under Review",
        estimatedResponse: "3-5 days",
      },
      {
        id: 7,
        brand: "BeautyGlow",
        title: "Skincare Routine Campaign",
        status: "Proposal Sent",
        appliedDate: "2024-01-28",
        deadline: "2024-02-25",
        payment: "₹20,000",
        description: "Showcase morning and evening skincare routines",
        brandImage:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop",
        applicationStatus: "Awaiting Response",
        estimatedResponse: "2-3 days",
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Review Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Just Started":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      case "Applied":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Proposal Sent":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getDeliverableStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "approved":
        return "🎉";
      case "under-review":
        return "⏳";
      case "in-progress":
        return "🔄";
      case "pending":
        return "⏸️";
      default:
        return "❓";
    }
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
                My Campaigns
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Manage your active campaigns and track progress
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {campaigns.active.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Active
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {campaigns.completed.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {campaigns.pending.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                {
                  id: "active",
                  name: "Active Campaigns",
                  count: campaigns.active.length,
                },
                {
                  id: "completed",
                  name: "Completed",
                  count: campaigns.completed.length,
                },
                {
                  id: "pending",
                  name: "Pending Applications",
                  count: campaigns.pending.length,
                },
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
                  {tab.name} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="space-y-6">
          {campaigns[activeTab].map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={campaign.brandImage}
                      alt={campaign.brand}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {campaign.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {campaign.brand}
                      </p>
                      <div className="flex items-center space-x-3 mt-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}
                        >
                          {campaign.status}
                        </span>
                        {campaign.priority && (
                          <span
                            className={`text-xs font-medium ${getPriorityColor(campaign.priority)}`}
                          >
                            {campaign.priority} Priority
                          </span>
                        )}
                        {campaign.messages > 0 && (
                          <span className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                            💬 {campaign.messages} new messages
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {campaign.payment}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Due: {campaign.deadline}
                    </div>
                    {campaign.completedDate && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Completed: {campaign.completedDate}
                      </div>
                    )}
                    {campaign.rating && (
                      <div className="flex items-center justify-end mt-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                          {campaign.rating}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                {campaign.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {campaign.description}
                  </p>
                )}

                {/* Progress Bar (for active campaigns) */}
                {activeTab === "active" && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Progress
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {campaign.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                {campaign.deliverables && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Deliverables
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {campaign.deliverables.map((deliverable, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">
                              {getDeliverableStatusIcon(deliverable.status)}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {deliverable.task}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {deliverable.completed}/{deliverable.total}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Application Status (for pending campaigns) */}
                {activeTab === "pending" && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                          {campaign.applicationStatus}
                        </span>
                        <p className="text-xs text-blue-600 dark:text-blue-300">
                          Expected response: {campaign.estimatedResponse}
                        </p>
                      </div>
                      <span className="text-xs text-blue-600 dark:text-blue-300">
                        Applied: {campaign.appliedDate}
                      </span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setSelectedCampaign(campaign)}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-500 text-sm font-medium"
                    >
                      View Details
                    </button>
                    {activeTab === "active" && (
                      <>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 text-sm font-medium">
                          Messages ({campaign.messages || 0})
                        </button>
                        <button className="text-green-600 dark:text-green-400 hover:text-green-500 text-sm font-medium">
                          Upload Content
                        </button>
                      </>
                    )}
                    {activeTab === "completed" && (
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-500 text-sm font-medium">
                        Download Invoice
                      </button>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    {activeTab === "active" && campaign.lastUpdate && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Updated {campaign.lastUpdate}
                      </span>
                    )}
                    {activeTab === "pending" && (
                      <button className="text-red-600 dark:text-red-400 hover:text-red-500 text-sm font-medium">
                        Withdraw Application
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {campaigns[activeTab].length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <div className="text-6xl mb-4">
              {activeTab === "active"
                ? "📝"
                : activeTab === "completed"
                  ? "🎉"
                  : "⏳"}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {activeTab === "active"
                ? "No active campaigns"
                : activeTab === "completed"
                  ? "No completed campaigns yet"
                  : "No pending applications"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {activeTab === "active"
                ? "Start by discovering and applying to campaigns that match your content style."
                : activeTab === "completed"
                  ? "Complete your first campaign to see it here."
                  : "Apply to campaigns to see your applications here."}
            </p>
            <a
              href="/creator/discover-campaigns"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
            >
              Discover Campaigns
            </a>
          </div>
        )}
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
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
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedCampaign.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {selectedCampaign.brand}
                    </p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCampaign.status)}`}
                    >
                      {selectedCampaign.status}
                    </span>
                  </div>
                </div>

                {selectedCampaign.description && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedCampaign.description}
                    </p>
                  </div>
                )}

                {selectedCampaign.deliverables && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Deliverables
                    </h4>
                    <div className="space-y-3">
                      {selectedCampaign.deliverables.map(
                        (deliverable, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">
                                {getDeliverableStatusIcon(deliverable.status)}
                              </span>
                              <div>
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {deliverable.task}
                                </span>
                                <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                                  Status: {deliverable.status.replace("-", " ")}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {deliverable.completed}/{deliverable.total}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Payment
                    </div>
                    <div className="text-xl font-semibold text-green-600">
                      {selectedCampaign.payment}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Deadline
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedCampaign.deadline}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedCampaign(null)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                  <div className="flex space-x-3">
                    {activeTab === "active" && (
                      <>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Open Messages
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                          Upload Content
                        </button>
                      </>
                    )}
                  </div>
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

export default MyCampaigns;
