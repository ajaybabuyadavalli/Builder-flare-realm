import React from "react";

const SimpleDiscoverCampaigns = () => {
  const campaigns = [
    {
      title: "Beauty Product Launch",
      brand: "GlowCo",
      budget: "₹15,000",
      category: "Beauty",
      deadline: "5 days left",
    },
    {
      title: "Tech Review Campaign",
      brand: "TechGuru",
      budget: "₹25,000",
      category: "Technology",
      deadline: "2 weeks left",
    },
    {
      title: "Fashion Collection",
      brand: "StyleHub",
      budget: "₹20,000",
      category: "Fashion",
      deadline: "1 week left",
    },
    {
      title: "Food Blog Post",
      brand: "FoodieFinds",
      budget: "₹8,000",
      category: "Food",
      deadline: "3 days left",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              🎯 Discover Campaigns
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
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Find brand collaboration opportunities that match your niche
          </p>
        </div>

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
                  <p className="text-gray-600 dark:text-gray-300">
                    {campaign.brand} • {campaign.category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {campaign.budget}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {campaign.deadline}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                  {campaign.category}
                </span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleDiscoverCampaigns;
