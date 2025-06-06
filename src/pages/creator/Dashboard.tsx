import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  Award,
  CheckCircle,
  Clock,
  Filter,
  Plus,
  Upload,
  User,
  Settings,
  Zap,
  Gift,
  CreditCard,
} from "lucide-react";

const CreatorDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for Ajay's profile
  const creatorData = {
    name: "Ajay Kumar",
    avatar: "/api/placeholder/100/100",
    influbazzarScore: 84,
    totalEarnings: 45250,
    activeCampaigns: 3,
    approvalRate: 96,
    avgEngagement: 4.2,
    followersGrowth: 12.5,
    totalFollowers: 28500,
  };

  const stats = [
    {
      title: "Total Earnings",
      value: creatorData.totalEarnings,
      prefix: "₹",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "Active Campaigns",
      value: creatorData.activeCampaigns,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      change: "+2",
      trend: "up",
    },
    {
      title: "Approval Rate",
      value: creatorData.approvalRate,
      suffix: "%",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500",
      change: "+4%",
      trend: "up",
    },
    {
      title: "Avg Engagement",
      value: creatorData.avgEngagement,
      suffix: "%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      change: "+0.3%",
      trend: "up",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Post Approved!",
      message: "Your post for #GlowFix campaign was approved 🎉",
      time: "2 hours ago",
      campaign: "GlowFix",
      brand: "Mamaearth",
      unread: true,
    },
    {
      id: 2,
      type: "info",
      title: "New Campaign Invitation",
      message: "New campaign '#UrbanOnCampus' invites you to apply",
      time: "4 hours ago",
      campaign: "UrbanOnCampus",
      brand: "Campus Sutra",
      unread: true,
    },
    {
      id: 3,
      type: "success",
      title: "Payment Released",
      message: "Escrow payout of ₹1,500 released for #GlowFix 💸",
      time: "1 day ago",
      campaign: "GlowFix",
      brand: "Mamaearth",
      unread: false,
    },
    {
      id: 4,
      type: "info",
      title: "Content Submission Due",
      message: "Content for #FitnessGoals campaign due in 2 days",
      time: "1 day ago",
      campaign: "FitnessGoals",
      brand: "ProteinWorld",
      unread: false,
    },
    {
      id: 5,
      type: "award",
      title: "Influbazzar Score Updated",
      message: "Your score increased from 82 to 84! 🌟",
      time: "2 days ago",
      unread: false,
    },
  ];

  const chartData = {
    followerGrowth: [
      { week: "Week 1", followers: 26800 },
      { week: "Week 2", followers: 27200 },
      { week: "Week 3", followers: 27600 },
      { week: "Week 4", followers: 28500 },
    ],
    campaignStatus: [
      { status: "Approved", count: 12, color: "#10b981" },
      { status: "Submitted", count: 8, color: "#3b82f6" },
      { status: "Paid", count: 25, color: "#8b5cf6" },
    ],
    platformEngagement: [
      { platform: "Instagram", engagement: 4.2 },
      { platform: "YouTube", engagement: 3.8 },
      { platform: "TikTok", engagement: 5.1 },
    ],
  };

  const quickActions = [
    {
      title: "Browse Campaigns",
      description: "Find new opportunities",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      href: "/creator/discover-campaigns",
    },
    {
      title: "Upload Content",
      description: "Submit campaign content",
      icon: Upload,
      color: "from-green-500 to-emerald-500",
      href: "/creator/my-campaigns",
    },
    {
      title: "Update Profile",
      description: "Enhance your presence",
      icon: User,
      color: "from-purple-500 to-pink-500",
      href: "/creator/profile",
    },
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: "GlowFix Skincare",
      brand: "Mamaearth",
      status: "approved",
      payment: 1500,
      dueDate: "2024-01-15",
      progress: 80,
    },
    {
      id: 2,
      name: "FitnessGoals 2024",
      brand: "ProteinWorld",
      status: "submitted",
      payment: 2200,
      dueDate: "2024-01-18",
      progress: 100,
    },
    {
      id: 3,
      name: "UrbanOnCampus",
      brand: "Campus Sutra",
      status: "pending",
      payment: 1800,
      dueDate: "2024-01-20",
      progress: 20,
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: {
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        label: "Approved",
      },
      submitted: {
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
        label: "Submitted",
      },
      pending: {
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        label: "Pending",
      },
      paid: {
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
        label: "Paid",
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "info":
        return <Bell className="w-5 h-5 text-blue-600" />;
      case "award":
        return <Award className="w-5 h-5 text-purple-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      notification.type === selectedFilter ||
      (selectedFilter === "unread" && notification.unread);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={creatorData.avatar} alt={creatorData.name} />
                <AvatarFallback>
                  {creatorData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">
                  Hi {creatorData.name}! 👋
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-muted-foreground">
                    Your Influbazzar Score is
                  </span>
                  <RippleCard className="inline-block">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white cursor-pointer">
                      <Star className="w-4 h-4 mr-1" />
                      {creatorData.influbazzarScore}
                    </Badge>
                  </RippleCard>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" size="sm" asChild>
                <Link to="/creator/profile">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/creator/discover-campaigns">
                  <Plus className="w-4 h-4 mr-2" />
                  New Campaign
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
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
                              <Counter
                                end={stat.value}
                                prefix={stat.prefix || ""}
                                suffix={stat.suffix || ""}
                              />
                            </span>
                            <div
                              className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                            >
                              {stat.trend === "up" ? (
                                <ArrowUp className="w-3 h-3" />
                              ) : (
                                <ArrowDown className="w-3 h-3" />
                              )}
                              <span>{stat.change}</span>
                            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Performance Charts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Performance Snapshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Follower Growth Chart */}
                      <div className="space-y-4">
                        <h4 className="font-medium">
                          Follower Growth (Weekly)
                        </h4>
                        <div className="h-32 flex items-end space-x-2">
                          {chartData.followerGrowth.map((data, index) => (
                            <motion.div
                              key={data.week}
                              initial={{ height: 0 }}
                              animate={{
                                height: `${(data.followers - 26500) / 100}%`,
                              }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="flex-1 bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-sm min-h-[20px]"
                              title={`${data.week}: ${data.followers.toLocaleString()}`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          {chartData.followerGrowth.map((data) => (
                            <span key={data.week}>{data.week}</span>
                          ))}
                        </div>
                      </div>

                      {/* Campaign Status Pie */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Campaign Status</h4>
                        <div className="space-y-2">
                          {chartData.campaignStatus.map((status, index) => (
                            <div
                              key={status.status}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: status.color }}
                                />
                                <span className="text-sm">{status.status}</span>
                              </div>
                              <span className="font-medium">
                                {status.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Platform Engagement */}
                    <div className="mt-6 space-y-4">
                      <h4 className="font-medium">Engagement by Platform</h4>
                      <div className="space-y-3">
                        {chartData.platformEngagement.map((platform) => (
                          <div
                            key={platform.platform}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm font-medium">
                              {platform.platform}
                            </span>
                            <div className="flex items-center space-x-3">
                              <div className="w-32 bg-muted rounded-full h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{
                                    width: `${(platform.engagement / 6) * 100}%`,
                                  }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                  className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                />
                              </div>
                              <span className="text-sm font-medium w-12 text-right">
                                {platform.engagement}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recent Campaigns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Recent Campaigns
                      </CardTitle>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/creator/my-campaigns">View All</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentCampaigns.map((campaign) => (
                        <RippleCard key={campaign.id}>
                          <div className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-medium">{campaign.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {campaign.brand}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-green-600">
                                  ₹{campaign.payment}
                                </div>
                                {getStatusBadge(campaign.status)}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">
                                  Progress
                                </span>
                                <span>{campaign.progress}%</span>
                              </div>
                              <Progress
                                value={campaign.progress}
                                className="h-2"
                              />
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-3 h-3 mr-1" />
                                Due:{" "}
                                {new Date(
                                  campaign.dueDate,
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </RippleCard>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Notifications & Quick Actions */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {quickActions.map((action, index) => (
                      <RippleCard key={action.title}>
                        <Link to={action.href} className="block">
                          <div className="flex items-center space-x-3 p-3 rounded-lg border hover:shadow-sm transition-shadow">
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}
                            >
                              <action.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                {action.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {action.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </RippleCard>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Notifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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

                      <div className="flex space-x-2">
                        {["all", "unread", "success", "info", "award"].map(
                          (filter) => (
                            <Button
                              key={filter}
                              variant={
                                selectedFilter === filter
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => setSelectedFilter(filter)}
                              className={
                                selectedFilter === filter
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : ""
                              }
                            >
                              {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {filteredNotifications.map((notification, index) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <RippleCard>
                            <div
                              className={`p-3 rounded-lg border transition-all ${
                                notification.unread
                                  ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
                                  : "bg-background"
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                {getNotificationIcon(notification.type)}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-sm">
                                      {notification.title}
                                    </h4>
                                    {notification.unread && (
                                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {notification.message}
                                  </p>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-muted-foreground">
                                      {notification.time}
                                    </span>
                                    {notification.campaign && (
                                      <Badge
                                        variant="outline"
                                        className="text-xs"
                                      >
                                        {notification.campaign}
                                      </Badge>
                                    )}
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorDashboard;
