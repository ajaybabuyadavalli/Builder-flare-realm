import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Play,
  Pause,
  MoreHorizontal,
  Users,
  Target,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
} from "lucide-react";

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const campaigns = [
    {
      id: 1,
      name: "GlowFix Summer Routine",
      status: "live",
      budget: 30000,
      spent: 18000,
      applications: 47,
      approved: 15,
      posts: { completed: 12, total: 20 },
      reach: 125000,
      engagement: 4.2,
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      platform: ["Instagram"],
      category: "Beauty",
      description:
        "Summer skincare routine featuring our glow serum and sunscreen",
      objective: "Brand Awareness",
    },
    {
      id: 2,
      name: "UrbanOnCampus Launch",
      status: "live",
      budget: 50000,
      spent: 25000,
      applications: 32,
      approved: 12,
      posts: { completed: 8, total: 15 },
      reach: 89000,
      engagement: 5.1,
      startDate: "2024-01-20",
      endDate: "2024-02-20",
      platform: ["Instagram", "YouTube"],
      category: "Fashion",
      description:
        "Launching our new urban wear collection for college students",
      objective: "Product Launch",
    },
    {
      id: 3,
      name: "Winter Collection Reveal",
      status: "draft",
      budget: 25000,
      spent: 0,
      applications: 0,
      approved: 0,
      posts: { completed: 0, total: 10 },
      reach: 0,
      engagement: 0,
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      platform: ["Instagram"],
      category: "Fashion",
      description: "Showcase our cozy winter collection with lifestyle content",
      objective: "Sales",
    },
    {
      id: 4,
      name: "Fitness Challenge 2024",
      status: "completed",
      budget: 40000,
      spent: 40000,
      applications: 65,
      approved: 20,
      posts: { completed: 25, total: 25 },
      reach: 200000,
      engagement: 6.8,
      startDate: "2023-12-01",
      endDate: "2023-12-31",
      platform: ["Instagram", "YouTube"],
      category: "Fitness",
      description: "30-day fitness challenge with workout gear promotion",
      objective: "Engagement",
    },
    {
      id: 5,
      name: "Tech Review Series",
      status: "paused",
      budget: 35000,
      spent: 12000,
      applications: 28,
      approved: 8,
      posts: { completed: 4, total: 12 },
      reach: 45000,
      engagement: 3.8,
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      platform: ["YouTube", "Instagram"],
      category: "Technology",
      description: "In-depth reviews of our latest tech products",
      objective: "Product Reviews",
    },
  ];

  const getStatusBadge = (status: string) => {
    const configs = {
      live: { color: "bg-green-100 text-green-800", label: "Live", icon: Play },
      draft: { color: "bg-gray-100 text-gray-800", label: "Draft", icon: Edit },
      completed: {
        color: "bg-blue-100 text-blue-800",
        label: "Completed",
        icon: CheckCircle,
      },
      paused: {
        color: "bg-orange-100 text-orange-800",
        label: "Paused",
        icon: Pause,
      },
    };
    return configs[status as keyof typeof configs] || configs.draft;
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = selectedTab === "all" || campaign.status === selectedTab;
    const matchesStatus =
      selectedStatus === "all" || campaign.status === selectedStatus;

    return matchesSearch && matchesTab && matchesStatus;
  });

  const campaignStats = {
    total: campaigns.length,
    live: campaigns.filter((c) => c.status === "live").length,
    draft: campaigns.filter((c) => c.status === "draft").length,
    completed: campaigns.filter((c) => c.status === "completed").length,
    totalBudget: campaigns.reduce((sum, c) => sum + c.budget, 0),
    totalSpent: campaigns.reduce((sum, c) => sum + c.spent, 0),
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Campaign Management 🎯
                </h1>
                <p className="text-muted-foreground">
                  Track and manage all your influencer campaigns
                </p>
              </div>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4 md:mt-0"
                asChild
              >
                <Link to="/brand/campaigns/new">
                  <Plus className="w-5 h-5 mr-2" />
                  Create New Campaign
                </Link>
              </Button>
            </motion.div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Total Campaigns",
                  value: campaignStats.total,
                  icon: Target,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Live Campaigns",
                  value: campaignStats.live,
                  icon: Play,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Total Budget",
                  value: `₹${campaignStats.totalBudget.toLocaleString()}`,
                  icon: DollarSign,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Total Spent",
                  value: `₹${campaignStats.totalSpent.toLocaleString()}`,
                  icon: TrendingUp,
                  color: "from-orange-500 to-red-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <RippleCard>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {stat.title}
                            </p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                          </div>
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}
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

            {/* Filters and Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 items-center justify-between"
            >
              <div className="flex space-x-4 items-center">
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
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="all">All Status</option>
                  <option value="live">Live</option>
                  <option value="draft">Draft</option>
                  <option value="completed">Completed</option>
                  <option value="paused">Paused</option>
                </select>

                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {filteredCampaigns.length} of {campaigns.length}{" "}
                campaigns
              </div>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex space-x-1 bg-muted p-1 rounded-lg w-fit"
            >
              {[
                { id: "all", label: "All" },
                { id: "live", label: "Live" },
                { id: "draft", label: "Draft" },
                { id: "completed", label: "Completed" },
                { id: "paused", label: "Paused" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <RippleCard>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-bold text-lg">
                                {campaign.name}
                              </h3>
                              <Badge
                                className={
                                  getStatusBadge(campaign.status).color
                                }
                              >
                                {React.createElement(
                                  getStatusBadge(campaign.status).icon,
                                  { className: "w-3 h-3 mr-1" },
                                )}
                                {getStatusBadge(campaign.status).label}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {campaign.description}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{campaign.category}</span>
                              <span>•</span>
                              <span>{campaign.platform.join(", ")}</span>
                              <span>•</span>
                              <span>{campaign.objective}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Budget & Spending */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Budget Spent</span>
                            <span>
                              ₹{campaign.spent.toLocaleString()} / ₹
                              {campaign.budget.toLocaleString()}
                            </span>
                          </div>
                          <Progress
                            value={(campaign.spent / campaign.budget) * 100}
                            className="h-2"
                          />
                        </div>

                        {/* Performance Metrics */}
                        <div className="grid grid-cols-4 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-blue-600">
                              {campaign.applications}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Applications
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-600">
                              {campaign.approved}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Approved
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-purple-600">
                              {campaign.posts.completed}/{campaign.posts.total}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Posts
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-orange-600">
                              {(campaign.reach / 1000).toFixed(0)}K
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Reach
                            </p>
                          </div>
                        </div>

                        {/* Campaign Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Campaign Progress</span>
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

                        {/* Timeline */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{campaign.startDate}</span>
                          </div>
                          <span>→</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{campaign.endDate}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2 pt-2">
                          <Button
                            variant="outline"
                            className="flex-1"
                            size="sm"
                            asChild
                          >
                            <Link to={`/brand/campaigns/${campaign.id}`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/brand/campaigns/${campaign.id}/edit`}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              to={`/brand/campaigns/${campaign.id}/analytics`}
                            >
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Analytics
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </RippleCard>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCampaigns.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No campaigns found
                </h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm
                    ? "Try adjusting your search criteria"
                    : "Create your first campaign to get started"}
                </p>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <Link to="/brand/campaigns/new">
                    <Plus className="w-5 h-5 mr-2" />
                    Create Campaign
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Campaigns;
