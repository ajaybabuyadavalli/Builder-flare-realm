import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorEarnings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");

  const earningsOverview = {
    totalEarnings: "₹3,85,000",
    thisMonth: "₹45,000",
    pending: "₹18,000",
    available: "₹25,000",
    growthRate: "+12%",
  };

  const monthlyEarnings = [
    { month: "Jan", amount: 28000, campaigns: 4 },
    { month: "Feb", amount: 35000, campaigns: 5 },
    { month: "Mar", amount: 42000, campaigns: 6 },
    { month: "Apr", amount: 38000, campaigns: 5 },
    { month: "May", amount: 45000, campaigns: 7 },
    { month: "Jun", amount: 52000, campaigns: 6 },
    { month: "Jul", amount: 48000, campaigns: 5 },
    { month: "Aug", amount: 55000, campaigns: 8 },
    { month: "Sep", amount: 47000, campaigns: 6 },
    { month: "Oct", amount: 51000, campaigns: 7 },
    { month: "Nov", amount: 49000, campaigns: 6 },
    { month: "Dec", amount: 45000, campaigns: 5 },
  ];

  const earningsBreakdown = [
    {
      id: 1,
      campaign: "Summer Fashion Collection",
      brand: "StyleCo",
      amount: "₹15,000",
      status: "Paid",
      date: "2024-02-15",
      paymentMethod: "Bank Transfer",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      campaign: "App Review Campaign",
      brand: "TechFlow",
      amount: "₹8,000",
      status: "Processing",
      date: "2024-02-10",
      paymentMethod: "UPI",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      campaign: "Fitness Challenge",
      brand: "FitLife",
      amount: "₹12,000",
      status: "Pending Approval",
      date: "2024-02-08",
      paymentMethod: "Bank Transfer",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 4,
      campaign: "Sustainable Living Series",
      brand: "EcoLife",
      amount: "₹10,000",
      status: "Paid",
      date: "2024-01-30",
      paymentMethod: "UPI",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 5,
      campaign: "Gaming Setup Review",
      brand: "GameZone",
      amount: "₹18,000",
      status: "Paid",
      date: "2024-01-20",
      paymentMethod: "Bank Transfer",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 6,
      campaign: "Travel Vlog Series",
      brand: "TravelWise",
      amount: "₹22,000",
      status: "Paid",
      date: "2024-01-15",
      paymentMethod: "Bank Transfer",
      statusColor: "bg-green-100 text-green-800",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Bank Account",
      details: "HDFC Bank ****4567",
      isDefault: true,
      icon: "🏦",
    },
    {
      id: 2,
      type: "UPI",
      details: "creator@upi",
      isDefault: false,
      icon: "📱",
    },
    {
      id: 3,
      type: "PayPal",
      details: "creator@email.com",
      isDefault: false,
      icon: "💳",
    },
  ];

  const taxDocuments = [
    {
      id: 1,
      type: "Annual Tax Report",
      period: "FY 2023-24",
      amount: "₹3,85,000",
      downloadUrl: "#",
    },
    {
      id: 2,
      type: "TDS Certificate",
      period: "Q4 2023",
      amount: "₹45,000",
      downloadUrl: "#",
    },
    {
      id: 3,
      type: "Monthly Statement",
      period: "January 2024",
      amount: "₹28,000",
      downloadUrl: "#",
    },
  ];

  const filteredEarnings = earningsBreakdown.filter((earning) => {
    if (selectedPeriod === "all") return true;
    if (selectedPeriod === "this-month") {
      return new Date(earning.date).getMonth() === new Date().getMonth();
    }
    if (selectedPeriod === "last-3-months") {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return new Date(earning.date) >= threeMonthsAgo;
    }
    return true;
  });

  const handleWithdraw = () => {
    alert(
      "Withdrawal request submitted! Funds will be transferred within 2-3 business days.",
    );
  };

  const maxAmount = Math.max(...monthlyEarnings.map((item) => item.amount));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Earnings Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Track your income, payments, and financial performance
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleWithdraw}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Withdraw Funds
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Earnings
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {earningsOverview.totalEarnings}
                </p>
                <p className="text-green-600 text-sm mt-1">
                  {earningsOverview.growthRate}
                </p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  This Month
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {earningsOverview.thisMonth}
                </p>
              </div>
              <div className="text-3xl">📈</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Pending
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {earningsOverview.pending}
                </p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Available
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {earningsOverview.available}
                </p>
              </div>
              <div className="text-3xl">💳</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Campaigns
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  47
                </p>
                <p className="text-blue-600 text-sm mt-1">Completed</p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </div>
        </div>

        {/* Monthly Earnings Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Monthly Earnings Trend
            </h3>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <div className="grid grid-cols-12 gap-2 items-end h-64">
            {monthlyEarnings.map((month, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg min-h-[8px] transition-all hover:opacity-80 cursor-pointer"
                  style={{
                    height: `${(month.amount / maxAmount) * 200}px`,
                  }}
                  title={`${month.month}: ₹${month.amount.toLocaleString()}`}
                ></div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2 text-center">
                  {month.month}
                </div>
                <div className="text-xs font-medium text-gray-900 dark:text-white">
                  ₹{(month.amount / 1000).toFixed(0)}K
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Earnings History */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Earnings History
                  </h3>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="all">All Time</option>
                    <option value="this-month">This Month</option>
                    <option value="last-3-months">Last 3 Months</option>
                  </select>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {filteredEarnings.map((earning) => (
                    <div
                      key={earning.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {earning.campaign}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {earning.brand} • {earning.paymentMethod}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {earning.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {earning.amount}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${earning.statusColor}`}
                        >
                          {earning.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Payment Methods
              </h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-3 rounded-lg border ${
                      method.isDefault
                        ? "border-purple-200 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    } transition-all cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {method.type}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {method.details}
                          </p>
                        </div>
                      </div>
                      {method.isDefault && (
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-400 dark:hover:border-purple-500 transition-all text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                  + Add Payment Method
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Avg. Campaign Value
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ₹15,200
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Success Rate
                  </span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Repeat Clients
                  </span>
                  <span className="font-semibold text-blue-600">67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Avg. Rating
                  </span>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      4.9
                    </span>
                    <span className="text-yellow-400 ml-1">⭐</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tax Documents
              </h3>
              <div className="space-y-3">
                {taxDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {doc.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {doc.period} • {doc.amount}
                      </p>
                    </div>
                    <button className="text-purple-600 dark:text-purple-400 hover:text-purple-500 text-sm font-medium">
                      Download
                    </button>
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

export default CreatorEarnings;
