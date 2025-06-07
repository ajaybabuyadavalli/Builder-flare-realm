import React from "react";

const SimpleMyCampaigns = () => {
  const campaigns = [
    {
      title: "Beauty Product Launch",
      status: "Active",
      progress: "75%",
      earnings: "₹12,000",
      due: "2 days",
    },
    {
      title: "Tech Review",
      status: "Completed",
      progress: "100%",
      earnings: "₹25,000",
      due: "Completed",
    },
    {
      title: "Fashion Post",
      status: "Pending",
      progress: "0%",
      earnings: "₹8,000",
      due: "5 days",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              📋 My Campaigns
            </h1>
            <a
              href="/creator/dashboard"
              className="text-purple-600 hover:text-purple-700"
            >
              ← Dashboard
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {campaign.title}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 text-sm rounded-full ${
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
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {campaign.earnings}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Due: {campaign.due}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex-1 mr-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-300">
                      Progress
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {campaign.progress}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: campaign.progress }}
                    ></div>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleMyCampaigns;
