import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Layout from "@/components/Layout";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  CreditCard,
  PieChart,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Gift,
  Star,
  Target,
  Banknote,
  Wallet,
  Receipt,
  RefreshCw,
} from "lucide-react";

const CreatorEarnings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const earningsData = {
    lifetime: 45250,
    thisMonth: 8500,
    lastMonth: 6750,
    pending: 3200,
    growth: 12.5,
    campaigns: 25,
    avgPerCampaign: 1810,
  };

  const monthlyEarnings = [
    { month: "Jul", earnings: 4200 },
    { month: "Aug", earnings: 5100 },
    { month: "Sep", earnings: 4800 },
    { month: "Oct", earnings: 6200 },
    { month: "Nov", earnings: 6750 },
    { month: "Dec", earnings: 7800 },
    { month: "Jan", earnings: 8500 },
  ];

  const brandEarnings = [
    { brand: "ProteinWorld", amount: 12800, campaigns: 4, color: "#8b5cf6" },
    { brand: "GlowCo Beauty", amount: 9500, campaigns: 3, color: "#ec4899" },
    { brand: "TechGadgets", amount: 7200, campaigns: 2, color: "#3b82f6" },
    { brand: "FashionHub", amount: 6100, campaigns: 2, color: "#10b981" },
    { brand: "NutriLife", amount: 4850, campaigns: 3, color: "#f59e0b" },
    { brand: "Others", amount: 4800, campaigns: 8, color: "#6b7280" },
  ];

  const campaignTypes = [
    { type: "Paid", amount: 38200, percentage: 84.4, color: "#10b981" },
    { type: "Barter", amount: 5850, percentage: 12.9, color: "#3b82f6" },
    { type: "Gift", amount: 1200, percentage: 2.7, color: "#f59e0b" },
  ];

  const escrowTransactions = [
    {
      id: 1,
      campaign: "Summer Glow Campaign",
      brand: "GlowCo Beauty",
      amount: 2500,
      status: "released",
      submittedDate: "2024-01-15",
      releaseDate: "2024-01-18",
      type: "paid",
    },
    {
      id: 2,
      campaign: "Fitness Goals 2024",
      brand: "ProteinWorld",
      amount: 3200,
      status: "pending",
      submittedDate: "2024-01-22",
      releaseDate: "2024-01-25",
      type: "paid",
    },
    {
      id: 3,
      campaign: "Tech Review Series",
      brand: "TechGadgets",
      amount: 4500,
      status: "released",
      submittedDate: "2024-01-03",
      releaseDate: "2024-01-06",
      type: "paid",
    },
    {
      id: 4,
      campaign: "Sustainable Fashion",
      brand: "EcoWear",
      amount: 0,
      status: "review",
      submittedDate: "2024-01-20",
      releaseDate: null,
      type: "barter",
    },
    {
      id: 5,
      campaign: "Food Festival Coverage",
      brand: "TasteHub",
      amount: 1800,
      status: "processing",
      submittedDate: "2024-01-19",
      releaseDate: "2024-01-22",
      type: "paid",
    },
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      released: {
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        label: "Released",
        icon: CheckCircle,
      },
      pending: {
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        label: "Pending",
        icon: Clock,
      },
      processing: {
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
        label: "Processing",
        icon: RefreshCw,
      },
      review: {
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
        label: "Under Review",
        icon: AlertCircle,
      },
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  const filteredTransactions = escrowTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || transaction.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleEscrowRequest = () => {
    // Simulate API call
    setTimeout(() => {
      alert("Escrow release request submitted successfully!");
    }, 1000);
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Earnings Overview
              </h1>
              <p className="text-muted-foreground">
                Track your income and manage payouts
              </p>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button
                onClick={handleEscrowRequest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Request Release
              </Button>
            </div>
          </motion.div>

          {/* Earnings Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lifetime Earnings",
                value: earningsData.lifetime,
                prefix: "₹",
                icon: Wallet,
                color: "from-green-500 to-emerald-500",
                change: null,
              },
              {
                title: "This Month",
                value: earningsData.thisMonth,
                prefix: "₹",
                icon: TrendingUp,
                color: "from-blue-500 to-cyan-500",
                change: `+${earningsData.growth}%`,
              },
              {
                title: "Pending Release",
                value: earningsData.pending,
                prefix: "₹",
                icon: Clock,
                color: "from-orange-500 to-red-500",
                change: null,
              },
              {
                title: "Avg per Campaign",
                value: earningsData.avgPerCampaign,
                prefix: "₹",
                icon: Target,
                color: "from-purple-500 to-pink-500",
                change: null,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RippleCard>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-muted-foreground text-sm font-medium">
                            {stat.title}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-2xl font-bold">
                              <Counter end={stat.value} prefix={stat.prefix} />
                            </span>
                            {stat.change && (
                              <div className="flex items-center text-sm text-green-600">
                                <ArrowUp className="w-3 h-3" />
                                <span>{stat.change}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Earnings Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Monthly Earnings Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end space-x-3">
                    {monthlyEarnings.map((data, index) => (
                      <div
                        key={data.month}
                        className="flex-1 flex flex-col items-center"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: `${(data.earnings / 9000) * 100}%`,
                          }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-sm min-h-[20px] mb-2"
                          title={`${data.month}: ₹${data.earnings.toLocaleString()}`}
                        />
                        <span className="text-xs text-muted-foreground">
                          {data.month}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Growth:{" "}
                      <span className="text-green-600 font-medium">
                        +{earningsData.growth}%
                      </span>{" "}
                      from last month
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Brand Earnings Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    Earnings by Brand
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {brandEarnings.map((brand, index) => (
                      <motion.div
                        key={brand.brand}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: brand.color }}
                          />
                          <div>
                            <p className="font-medium text-sm">{brand.brand}</p>
                            <p className="text-xs text-muted-foreground">
                              {brand.campaigns} campaigns
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ₹{brand.amount.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {(
                              (brand.amount / earningsData.lifetime) *
                              100
                            ).toFixed(1)}
                            %
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Campaign Type Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Receipt className="w-5 h-5 mr-2" />
                  Earnings by Campaign Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {campaignTypes.map((type, index) => (
                    <motion.div
                      key={type.type}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <RippleCard>
                        <div className="text-center p-6 border rounded-lg">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r rounded-full flex items-center justify-center mx-auto mb-4`}
                            style={{ background: type.color }}
                          >
                            {type.type === "Paid" && (
                              <DollarSign className="w-8 h-8 text-white" />
                            )}
                            {type.type === "Barter" && (
                              <Banknote className="w-8 h-8 text-white" />
                            )}
                            {type.type === "Gift" && (
                              <Gift className="w-8 h-8 text-white" />
                            )}
                          </div>
                          <h3 className="font-semibold text-lg">{type.type}</h3>
                          <p className="text-2xl font-bold mb-2">
                            ₹{type.amount.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {type.percentage}% of total
                          </p>
                          <div className="mt-3 bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${type.percentage}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1,
                              }}
                              className="h-2 rounded-full"
                              style={{ backgroundColor: type.color }}
                            />
                          </div>
                        </div>
                      </RippleCard>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Escrow Transactions Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Escrow Transactions
                  </CardTitle>

                  <div className="flex space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search campaigns..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>

                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-3 py-2 border border-border rounded-md bg-background"
                    >
                      <option value="all">All Status</option>
                      <option value="released">Released</option>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="review">Under Review</option>
                    </select>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {filteredTransactions.map((transaction, index) => {
                    const statusConfig = getStatusConfig(transaction.status);

                    return (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <RippleCard>
                          <div className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                  <statusConfig.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-medium">
                                    {transaction.campaign}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {transaction.brand}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <div className="font-semibold">
                                    {transaction.amount > 0
                                      ? `₹${transaction.amount}`
                                      : "Barter"}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Submitted:{" "}
                                    {new Date(
                                      transaction.submittedDate,
                                    ).toLocaleDateString()}
                                  </div>
                                </div>

                                <Badge className={statusConfig.color}>
                                  {statusConfig.label}
                                </Badge>
                              </div>
                            </div>

                            {transaction.releaseDate && (
                              <div className="mt-3 pt-3 border-t flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  Expected release:{" "}
                                  {new Date(
                                    transaction.releaseDate,
                                  ).toLocaleDateString()}
                                </span>
                                {transaction.status === "pending" && (
                                  <Button size="sm" variant="outline">
                                    Request Release
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </RippleCard>
                      </motion.div>
                    );
                  })}
                </div>

                {filteredTransactions.length === 0 && (
                  <div className="text-center py-8">
                    <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">
                      No transactions found
                    </h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatorEarnings;