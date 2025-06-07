import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Target,
  Eye,
  Bell,
  Plus,
  Search,
  CreditCard,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Play,
  Heart,
  MessageSquare,
  Share,
  Calendar,
  Filter,
} from "lucide-react";

const BrandDashboard = () => {
  const { user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Demo data for Srinivas (Brand)
  const dashboardData = {
    summary: {
      campaignsLive: 6,
      pendingApprovals: 4,
      creatorApplications: 58,
      totalSpend: 175000,
    },
    metrics: [
      {
        title: "Campaigns Live",
        value: 6,
        change: "+2",
        trend: "up",
        icon: Target,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Pending Approvals",
        value: 4,
        change: "-1",
        trend: "down",
        icon: Clock,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Creator Applications",
        value: 58,
        change: "+12",
        trend: "up",
        icon: Users,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Total Spend",
        value: "₹1,75,000",
        change: "+15%",
        trend: "up",
        icon: DollarSign,
        color: "from-purple-500 to-pink-500",
      },
    ],
    notifications: [
      {
        id: 1,
        type: "approval",
        icon: "✅",
        title: "Content Approved",
        message: "Creator Ajay submitted post for #GlowFix campaign",
        action: "Review",
        time: "2 hours ago",
        unread: true,
      },
      {
        id: 2,
        type: "application",
        icon: "📩",
        title: "New Creator Application",
        message: "Sneha Kapoor applied for Urban Campus campaign",
        action: "View Profile",
        time: "4 hours ago",
        unread: true,
      },
      {
        id: 3,
        type: "payment",
        icon: "💰",
        title: "Escrow Release Pending",
        message: "₹15,000 ready for release - UrbanOnCampus campaign",
        action: "Release",
        time: "6 hours ago",
        unread: false,
      },
      {
        id: 4,
        type: "campaign",
        icon: "🎯",
        title: "Campaign Milestone",
        message: "GlowFix campaign reached 50% completion",
        action: "View Details",
        time: "Yesterday",
        unread: false,
      },
    ],
    recentCampaigns: [
      {
        id: 1,
        name: "GlowFix Summer Routine",
        status: "live",
        budget: 30000,
        applications: 47,
        posts: { completed: 12, total: 20 },
        reach: "125K",
        engagement: "4.2%",
      },
      {
        id: 2,
        name: "UrbanOnCampus Launch",
        status: "live",
        budget: 50000,
        applications: 32,
        posts: { completed: 8, total: 15 },
        reach: "89K",
        engagement: "5.1%",
      },
      {
        id: 3,
        name: "Winter Collection Reveal",
        status: "draft",
        budget: 25000,
        applications: 0,
        posts: { completed: 0, total: 10 },
        reach: "0",
        engagement: "0%",
      },
    ],
    topCreators: [
      {
        name: "Ajay Kumar",
        avatar: "/api/placeholder/50/50",
        handle: "@ajay_fitness",
        followers: "45K",
        engagement: "6.8%",
        campaigns: 3,
        revenue: 28000,
        platform: "Instagram",
      },
      {
        name: "Sneha Kapoor",
        avatar: "/api/placeholder/50/50",
        handle: "@sneha_beauty",
        followers: "32K",
        engagement: "7.2%",
        campaigns: 2,
        revenue: 18000,
        platform: "Instagram",
      },
      {
        name: "Rajat Singh",
        avatar: "/api/placeholder/50/50",
        handle: "@rajat_tech",
        followers: "67K",
        engagement: "5.9%",
        campaigns: 4,
        revenue: 35000,
        platform: "YouTube",
      },
    ],
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      live: { color: "bg-green-100 text-green-800", label: "Live" },
      draft: { color: "bg-gray-100 text-gray-800", label: "Draft" },
      completed: { color: "bg-blue-100 text-blue-800", label: "Completed" },
      paused: { color: "bg-orange-100 text-orange-800", label: "Paused" },
    };
    return configs[status as keyof typeof configs] || configs.draft;
  };

  const filteredNotifications = dashboardData.notifications.filter(
    (notification) => {
      if (selectedFilter === "unread") return notification.unread;
      return true;
    },
  );

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Welcome back, {user?.name || "Srinivas"} 👋
                </h1>
                <p className="text-muted-foreground text-lg">
                  Here's what's happening with your influencer campaigns today
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <Link to="/brand/campaigns/new">
                    <Plus className="w-5 h-5 mr-2" />
                    New Campaign
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/brand/discover-creators">
                    <Search className="w-5 h-5 mr-2" />
                    Discover Creators
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardData.metrics.map((metric, index) => (
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
                            <p className="text-sm font-medium text-muted-foreground mb-2">
                              {metric.title}
                            </p>
                            <div className="flex items-baseline">
                              <Counter
                                from={0}
                                to={
                                  typeof metric.value === "string"
                                    ? 175000
                                    : metric.value
                                }
                                className="text-2xl font-bold"
                                prefix={
                                  typeof metric.value === "string" ? "₹" : ""
                                }
                              />
                            </div>
                            <div className="flex items-center mt-1">
                              {metric.trend === "up" ? (
                                <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                              ) : (
                                <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                              )}
                              <span
                                className={`text-sm ${
                                  metric.trend === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {metric.change}
                              </span>
                              <span className="text-xs text-muted-foreground ml-1">
                                vs last week
                              </span>
                            </div>
                          </div>
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
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

            {/* Main Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Campaign Overview & Charts */}
              <div className="lg:col-span-2 space-y-6">
                {/* Campaign Performance Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Campaign Performance</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                          </Button>
                          <select className="px-3 py-1 border rounded text-sm">
                            <option>Last 30 days</option>
                            <option>Last 7 days</option>
                            <option>This month</option>
                          </select>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                          <p className="text-muted-foreground">
                            Interactive chart showing daily reach, engagement,
                            and conversions
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Recent Campaigns */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recent Campaigns</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/brand/campaigns">View All</Link>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {dashboardData.recentCampaigns.map((campaign, index) => (
                        <motion.div
                          key={campaign.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">{campaign.name}</h4>
                              <Badge
                                className={
                                  getStatusBadge(campaign.status).color
                                }
                              >
                                {getStatusBadge(campaign.status).label}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">
                                ₹{campaign.budget.toLocaleString()}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Budget
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">
                                Applications
                              </p>
                              <p className="font-semibold">
                                {campaign.applications}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Posts</p>
                              <p className="font-semibold">
                                {campaign.posts.completed}/
                                {campaign.posts.total}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Reach</p>
                              <p className="font-semibold">{campaign.reach}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Engagement
                              </p>
                              <p className="font-semibold">
                                {campaign.engagement}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>
                                {Math.round(
                                  (campaign.posts.completed /
                                    campaign.posts.total) *
                                    100,
                                )}
                                %
                              </span>
                            </div>
                            <Progress
                              value={
                                (campaign.posts.completed /
                                  campaign.posts.total) *
                                100
                              }
                              className="h-2"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Column - Notifications & Top Creators */}
              <div className="space-y-6">
                {/* Notifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Bell className="w-5 h-5 mr-2" />
                          Notifications
                          <Badge className="ml-2 bg-red-100 text-red-800">
                            {
                              filteredNotifications.filter((n) => n.unread)
                                .length
                            }
                          </Badge>
                        </div>
                        <select
                          value={selectedFilter}
                          onChange={(e) => setSelectedFilter(e.target.value)}
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="all">All</option>
                          <option value="unread">Unread</option>
                        </select>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {filteredNotifications
                        .slice(0, 5)
                        .map((notification, index) => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-3 rounded-lg border cursor-pointer hover:shadow-md transition-shadow ${
                              notification.unread
                                ? "bg-blue-50 border-blue-200"
                                : "bg-gray-50"
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <span className="text-xl">
                                {notification.icon}
                              </span>
                              <div className="flex-1">
                                <h5 className="font-semibold text-sm">
                                  {notification.title}
                                </h5>
                                <p className="text-xs text-muted-foreground mb-2">
                                  {notification.message}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-muted-foreground">
                                    {notification.time}
                                  </span>
                                  <Button variant="outline" size="sm">
                                    {notification.action}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/brand/notifications">
                          View All Notifications
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Top Performing Creators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Top Performing Creators</span>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/brand/analytics">View Details</Link>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {dashboardData.topCreators.map((creator, index) => (
                        <motion.div
                          key={creator.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <Avatar>
                            <AvatarImage
                              src={creator.avatar}
                              alt={creator.name}
                            />
                            <AvatarFallback>
                              {creator.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h5 className="font-semibold text-sm">
                              {creator.name}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {creator.handle}
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                              <span>{creator.followers} followers</span>
                              <span>•</span>
                              <span>{creator.engagement} ER</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold">
                              ₹{creator.revenue.toLocaleString()}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {creator.campaigns} campaigns
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        asChild
                      >
                        <Link to="/brand/campaigns/new">
                          <Plus className="w-4 h-4 mr-2" />
                          Create New Campaign
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/brand/discover-creators">
                          <Search className="w-4 h-4 mr-2" />
                          Discover Creators
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/brand/payments">
                          <CreditCard className="w-4 h-4 mr-2" />
                          Release Payments
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/brand/approvals">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Review Content
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrandDashboard;
