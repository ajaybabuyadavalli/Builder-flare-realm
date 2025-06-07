import React from "react";

const SimpleCreatorAnalytics = () => {
  const stats = [
    { label: "Views", value: "1.2M", icon: "👁️", change: "+12%" },
    { label: "Likes", value: "85K", icon: "❤️", change: "+8%" },
    { label: "Comments", value: "12K", icon: "💬", change: "+15%" },
    { label: "Engagement", value: "4.2%", icon: "📊", change: "+3%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              📊 Analytics
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <span className="text-xs text-green-600 dark:text-green-400">
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Overview
          </h3>
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📈</div>
            <p className="text-gray-600 dark:text-gray-300">
              Analytics dashboard will be available soon with detailed insights
              about your content performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCreatorAnalytics;
