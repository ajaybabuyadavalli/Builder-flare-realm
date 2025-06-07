/**
 * CreatorEarnings.jsx
 *
 * Purpose: Comprehensive earnings dashboard with analytics, charts, and payment tracking
 *
 * Features:
 * - Animated earnings widgets with count-up effects
 * - Multiple chart types (bar, pie, line)
 * - Escrow payment tracking table
 * - Payment history and analytics
 * - Confetti animation for payment releases
 * - Export functionality for financial records
 *
 * Backend Integration:
 * - Real-time earnings data
 * - Payment status updates
 * - Tax and financial reporting
 * - Escrow release requests
 */

import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const CreatorEarnings = () => {
  const { user } = useAuth();
  const [earnings, setEarnings] = useState({
    lifetime: 0,
    monthly: 0,
    pending: 0,
    thisWeek: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [escrowData, setEscrowData] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState("6months");
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Animated count-up effect for earnings
  useEffect(() => {
    const targetEarnings = {
      lifetime: 245750,
      monthly: 67890,
      pending: 18500,
      thisWeek: 12000,
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setEarnings({
        lifetime: Math.floor(targetEarnings.lifetime * progress),
        monthly: Math.floor(targetEarnings.monthly * progress),
        pending: Math.floor(targetEarnings.pending * progress),
        thisWeek: Math.floor(targetEarnings.thisWeek * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setEarnings(targetEarnings);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Sample escrow data
  useEffect(() => {
    const sampleEscrow = [
      {
        id: 1,
        campaign: "Summer Fashion Collection",
        brand: "StyleCo",
        amount: 25000,
        status: "pending",
        releaseDate: "2024-02-20",
        submittedDate: "2024-02-10",
      },
      {
        id: 2,
        campaign: "Fitness App Promotion",
        brand: "FitTech",
        amount: 15000,
        status: "approved",
        releaseDate: "2024-02-15",
        submittedDate: "2024-02-05",
      },
      {
        id: 3,
        campaign: "Skincare Product Review",
        brand: "GlowBeauty",
        amount: 12000,
        status: "released",
        releaseDate: "2024-01-30",
        submittedDate: "2024-01-25",
        paidDate: "2024-01-30",
      },
      {
        id: 4,
        campaign: "Travel Destination Showcase",
        brand: "WanderLust Tours",
        amount: 50000,
        status: "pending",
        releaseDate: "2024-03-01",
        submittedDate: "2024-02-12",
      },
    ];
    setEscrowData(sampleEscrow);
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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-400/30";
      case "approved":
        return "bg-blue-600/20 text-blue-400 border-blue-400/30";
      case "released":
        return "bg-green-600/20 text-green-400 border-green-400/30";
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-400/30";
    }
  };

  const handleEscrowRelease = (id) => {
    setEscrowData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "released",
              paidDate: new Date().toISOString().split("T")[0],
            }
          : item,
      ),
    );

    // Trigger confetti animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Sample data for charts
  const earningsPerBrand = [
    { brand: "StyleCo", amount: 85000 },
    { brand: "FitTech", amount: 62000 },
    { brand: "GlowBeauty", amount: 45000 },
    { brand: "WanderLust", amount: 38000 },
    { brand: "QuickBites", amount: 15750 },
  ];

  const paymentSplit = [
    { type: "Paid", percentage: 65, amount: 159740 },
    { type: "Barter", percentage: 25, amount: 61440 },
    { type: "Gifts", percentage: 10, amount: 24570 },
  ];

  const monthlyEarnings = [
    { month: "Aug", amount: 32000 },
    { month: "Sep", amount: 28000 },
    { month: "Oct", amount: 45000 },
    { month: "Nov", amount: 38000 },
    { month: "Dec", amount: 52000 },
    { month: "Jan", amount: 67890 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20 relative">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            💰 Earnings Overview
          </h1>
          <p className="text-xl text-gray-400">
            Track your income, payments, and financial growth
          </p>
        </div>

        {/* Earnings Widgets */}
        <div
          data-animate="widgets"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-200 ${
            visibleSections.has("widgets")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              label: "Lifetime Earnings",
              value: formatCurrency(earnings.lifetime),
              icon: "💎",
              trend: "+25.3%",
              trendColor: "text-green-400",
              bgGradient: "from-green-600/20 to-emerald-600/20",
            },
            {
              label: "This Month",
              value: formatCurrency(earnings.monthly),
              icon: "📅",
              trend: "+18.7%",
              trendColor: "text-blue-400",
              bgGradient: "from-blue-600/20 to-cyan-600/20",
            },
            {
              label: "Pending Payments",
              value: formatCurrency(earnings.pending),
              icon: "⏳",
              trend: "+5 payments",
              trendColor: "text-yellow-400",
              bgGradient: "from-yellow-600/20 to-orange-600/20",
            },
            {
              label: "This Week",
              value: formatCurrency(earnings.thisWeek),
              icon: "🗓️",
              trend: "+32.1%",
              trendColor: "text-purple-400",
              bgGradient: "from-purple-600/20 to-pink-600/20",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
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
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Earnings per Brand */}
          <div
            data-animate="chart1"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-300 ${
              visibleSections.has("chart1")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              📊 Earnings per Brand
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
                    Total earnings from each brand collaboration
                  </div>
                </div>
              </div>
            </h3>

            <div className="space-y-4">
              {earningsPerBrand.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300 font-medium">
                    {item.brand}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                        style={{
                          width: `${(item.amount / Math.max(...earningsPerBrand.map((b) => b.amount))) * 100}%`,
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                    <span className="text-white font-bold w-20 text-right">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Split Pie Chart */}
          <div
            data-animate="chart2"
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-400 ${
              visibleSections.has("chart2")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">
              🥧 Payment Type Distribution
            </h3>

            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Simple pie chart representation */}
                <div
                  className="w-full h-full rounded-full border-8 border-green-500"
                  style={{
                    background: `conic-gradient(
                    #10b981 0% ${paymentSplit[0].percentage}%, 
                    #3b82f6 ${paymentSplit[0].percentage}% ${paymentSplit[0].percentage + paymentSplit[1].percentage}%, 
                    #f59e0b ${paymentSplit[0].percentage + paymentSplit[1].percentage}% 100%
                  )`,
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Total</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {paymentSplit.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === 0
                          ? "bg-green-500"
                          : index === 1
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      }`}
                    ></div>
                    <span className="text-gray-300">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">
                      {item.percentage}%
                    </div>
                    <div className="text-gray-400 text-sm">
                      {formatCurrency(item.amount)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Earnings Trend */}
        <div
          data-animate="trend"
          className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 mb-8 transition-all duration-1000 delay-500 ${
            visibleSections.has("trend")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-6">📈 Monthly Earnings Trend</h3>

          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyEarnings.map((month, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg transition-all duration-1000"
                  style={{
                    height: `${(month.amount / Math.max(...monthlyEarnings.map((m) => m.amount))) * 200}px`,
                    transitionDelay: `${index * 150}ms`,
                  }}
                ></div>
                <div className="mt-2 text-center">
                  <div className="text-sm font-medium text-white">
                    {formatCurrency(month.amount)}
                  </div>
                  <div className="text-xs text-gray-400">{month.month}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Escrow Table */}
        <div
          data-animate="escrow"
          className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 transition-all duration-1000 delay-600 ${
            visibleSections.has("escrow")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">🔒 Escrow Payments</h3>
            <button
              onClick={() => handleEscrowRelease(0)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
            >
              Request Release
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Campaign
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Brand
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Release Date
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {escrowData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-700/30 hover:bg-gray-800/20 transition-colors duration-300"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-white">
                        {item.campaign}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{item.brand}</td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-green-400">
                        {formatCurrency(item.amount)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(item.status)}`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {new Date(item.releaseDate).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      {item.status === "pending" && (
                        <button
                          onClick={() => handleEscrowRelease(item.id)}
                          className="bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300"
                        >
                          Follow Up
                        </button>
                      )}
                      {item.status === "approved" && (
                        <span className="text-blue-400 text-sm">
                          Processing...
                        </span>
                      )}
                      {item.status === "released" && (
                        <span className="text-green-400 text-sm">✓ Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorEarnings;
