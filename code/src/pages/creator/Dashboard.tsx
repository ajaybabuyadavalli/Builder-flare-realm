import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import {
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  Star,
  Bell,
  Search,
  Target,
  Camera,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Eye,
  Heart,
  MessageSquare,
  Play,
  Award,
  CheckCircle,
  Mail,
  Trophy,
  HelpCircle,
  TrendingDown,
  Clock,
} from "lucide-react";

const CreatorDashboard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Creator data (normally from API)
  const creatorData = {
    name: user?.name || "Ajay Kumar",
    avatar: user?.avatar || "/api/placeholder/100/100",
    influbazzarScore: user?.influbazzarScore || 84,
    totalEarnings: 45250,
    activeCampaigns: 3,
    approvalRate: 96,
    avgEngagement: 4.2,
    followers: user?.followers || "45K",
    weeklyGrowth: 0.3,
    engagementTrend: -0.1,
    approvalTrend: 2.1,
  };

  // Enhanced notifications with types and icons
  const notifications = [
    {
      id: 1,
      type: "approval",
      icon: "✅",
      title: "Content Approved",
      message: "Your Instagram reel for GlowCo Beauty has been approved!",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "campaign",
      icon: "📩",
      title: "New Campaign Invite",
      message: "FitLife Nutrition wants to collaborate with you",
      time: "Yesterday at 4 PM",
      unread: true,
    },
    {
      id: 3,
      type: "payment",
      icon: "💰",
      title: "Payment Released",
      message: "₹5,000 payment has been transferred to your account",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 4,
      type: "award",
      icon: "🏆",
      title: "Achievement Unlocked",
      message: "You've reached 100 successful campaigns!",
      time: "3 days ago",
      unread: false,
    },
  ];

  // Top performing reels data
  const topReels = [
    {
      id: 1,
      thumbnail: "/api/placeholder/150/200",
      title: "Morning Skincare Routine",
      views: "125K",
      likes: "8.2K",
      saves: "1.5K",
      campaign: "GlowCo Beauty",
      engagement: 6.8,
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/150/200",
      title: "5-Minute Workout",
      views: "89K",
      likes: "5.1K",
      saves: "890",
      campaign: "FitLife Nutrition",
      engagement: 5.2,
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/150/200",
      title: "Tech Review: Latest Phone",
      views: "156K",
      likes: "12.3K",
      saves: "2.1K",
      campaign: "TechHub",
      engagement: 8.1,
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.message
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "unread" && notification.unread) ||
      notification.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const markAllAsRead = () => {
    // Implementation for marking all as read
    console.log("Marking all notifications as read");
  };

  const formatTime = (timeString: string) => {
    // Enhanced time formatting
    return timeString;
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Creator Dashboard
                  </h1>
                  <p className="text-muted-foreground">
                    Welcome back, {creatorData.name}! Here's your performance
                    overview.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Enhanced Influbazzar Score with Tooltip */}
                  <div className="relative group">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 px-4 py-2 cursor-help"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Influbazzar Score: {creatorData.influbazzarScore}
                      <HelpCircle className="w-3 h-3 ml-2" />
                    </Badge>

                    {/* Score Breakdown Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <h4 className="font-semibold mb-2">
                        Influbazzar Score Breakdown
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Engagement Score</span>
                          <span className="font-medium">28/35</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Campaign Success</span>
                          <span className="font-medium">24/30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Consistency</span>
                          <span className="font-medium">18/20</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Platform Growth</span>
                          <span className="font-medium">14/15</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold">
                          <span>Total Score</span>
                          <span>{creatorData.influbazzarScore}/100</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Camera className="w-4 h-4 mr-2" />
                    Upload Content
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Performance Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Total Earnings",
                  value: `₹${creatorData.totalEarnings.toLocaleString()}`,
                  icon: DollarSign,
                  trend: "+₹2,340",
                  trendDirection: "up",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Follower Growth",
                  value: creatorData.followers,
                  icon: Users,
                  trend: `+${creatorData.weeklyGrowth}%`,
                  trendDirection: "up",
                  color: "from-blue-500 to-cyan-500",
                  tooltip: "Weekly growth based on platform API data",
                },
                {
                  title: "Avg Engagement",
                  value: `${creatorData.avgEngagement}%`,
                  icon: Heart,
                  trend: `${creatorData.engagementTrend}%`,
                  trendDirection: "down",
                  color: "from-pink-500 to-rose-500",
                  tooltip: "Average engagement rate over last 30 days",
                },
                {
                  title: "Approval Rate",
                  value: `${creatorData.approvalRate}%`,
                  icon: CheckCircle,
                  trend: `+${creatorData.approvalTrend}%`,
                  trendDirection: "up",
                  color: "from-purple-500 to-violet-500",
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <RippleCard>
                    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <p className="text-sm font-medium text-muted-foreground">
                                {metric.title}
                              </p>
                              {metric.tooltip && (
                                <div className="relative group/tooltip">
                                  <HelpCircle className="w-3 h-3 text-muted-foreground cursor-help" />
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-black text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity z-20 pointer-events-none">
                                    {metric.tooltip}
                                  </div>
                                </div>
                              )}
                            </div>
                            <p className="text-2xl font-bold">{metric.value}</p>
                            <div className="flex items-center mt-1">
                              {metric.trendDirection === "up" ? (
                                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={`text-sm ${metric.trendDirection === "up" ? "text-green-600" : "text-red-600"}`}
                              >
                                {metric.trend}
                              </span>
                              <span className="text-xs text-muted-foreground ml-1">
                                vs last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`p-3 rounded-full bg-gradient-to-r ${metric.color}`}
                          >
                            <metric.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </RippleCard>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Top Performing Reels Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Top Performing Reels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topReels.map((reel) => (
                        <RippleCard key={reel.id}>
                          <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <div className="relative">
                              <img
                                src={reel.thumbnail}
                                alt={reel.title}
                                className="w-20 h-28 object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                                <Play className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">
                                {reel.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {reel.campaign}
                              </p>
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1 text-blue-500" />
                                  <span>{reel.views}</span>
                                </div>
                                <div className="flex items-center">
                                  <Heart className="w-4 h-4 mr-1 text-red-500" />
                                  <span>{reel.likes}</span>
                                </div>
                                <div className="flex items-center">
                                  <BarChart3 className="w-4 h-4 mr-1 text-green-500" />
                                  <span>{reel.engagement}%</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              View Insights
                            </Button>
                          </div>
                        </RippleCard>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" asChild>
                        <Link to="/creator/reels">View All Reels</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Notifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Bell className="w-5 h-5 mr-2" />
                        Notifications
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          {notifications.filter((n) => n.unread).length} new
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={markAllAsRead}
                          className="text-xs"
                        >
                          🧹 Mark All Read
                        </Button>
                      </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          placeholder="Search notifications..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {[
                          "all",
                          "unread",
                          "approval",
                          "campaign",
                          "payment",
                          "award",
                        ].map((filter) => (
                          <Button
                            key={filter}
                            variant={
                              selectedFilter === filter ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setSelectedFilter(filter)}
                            className={
                              selectedFilter === filter
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-xs"
                                : "text-xs"
                            }
                          >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="max-h-96 overflow-y-auto">
                    <div className="space-y-3">
                      {filteredNotifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <RippleCard>
                            <div
                              className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer ${
                                notification.unread
                                  ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                                  : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="text-lg">
                                  {notification.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-sm">
                                      {notification.title}
                                    </h4>
                                    {notification.unread && (
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {notification.message}
                                  </p>
                                  <div className="flex items-center text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {formatTime(notification.time)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RippleCard>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        label: "Browse Campaigns",
                        href: "/creator/discover-campaigns",
                        icon: Search,
                      },
                      {
                        label: "Upload Reel",
                        href: "/creator/reels",
                        icon: Camera,
                      },
                      {
                        label: "View Earnings",
                        href: "/creator/earnings",
                        icon: DollarSign,
                      },
                      {
                        label: "Analytics",
                        href: "/creator/analytics",
                        icon: BarChart3,
                      },
                    ].map((action) => (
                      <Link key={action.label} to={action.href}>
                        <RippleCard>
                          <Button
                            variant="outline"
                            className="w-full h-20 flex flex-col items-center space-y-2"
                          >
                            <action.icon className="w-6 h-6" />
                            <span className="text-sm">{action.label}</span>
                          </Button>
                        </RippleCard>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatorDashboard;
