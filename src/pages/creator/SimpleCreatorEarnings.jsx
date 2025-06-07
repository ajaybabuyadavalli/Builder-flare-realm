import React from "react";

const SimpleCreatorEarnings = () => {
  const transactions = [
    {
      campaign: "Beauty Campaign",
      amount: "₹15,000",
      date: "2024-01-15",
      status: "Paid",
    },
    {
      campaign: "Tech Review",
      amount: "₹25,000",
      date: "2024-01-10",
      status: "Paid",
    },
    {
      campaign: "Fashion Post",
      amount: "₹5,000",
      date: "2024-01-05",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              💰 Earnings
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="text-2xl mr-3">💰</div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹1,25,000
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Total Earnings
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="text-2xl mr-3">📈</div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹45,000
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This Month
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="text-2xl mr-3">📅</div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹25,000
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Last Payout
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Transactions
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {transaction.campaign}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {transaction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {transaction.amount}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        transaction.status === "Paid"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
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

export default SimpleCreatorEarnings;
