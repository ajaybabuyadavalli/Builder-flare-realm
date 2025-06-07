import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  DollarSign,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Calendar,
  Star,
} from "lucide-react";

/**
 * Creator Dashboard Component
 *
 * Main dashboard for creators showing performance overview,
 * recent campaigns, earnings, and quick actions.
 *
 * Backend Integration Notes:
 * - GET /api/creator/dashboard-stats
 * - GET /api/creator/recent-campaigns
 * - GET /api/creator/earnings-summary
 * - GET /api/creator/performance-metrics
 * - Real-time updates via WebSocket
 */

const CreatorDashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with API calls
  const stats = {
    totalEarnings: 45000,
    activeCampaigns: 3,
    completedCampaigns: 12,
    totalReach: 125000,
    engagementRate: 4.2,
    influencerScore: 8.5,
  };

  const recentCampaigns = [
    {
      id: "1",
      title: "Summer Fashion Campaign",
      brand: "FashionForward",
      status: "active",
      deadline: "2024-06-15",
      payment: 15000,
    },
    {
      id: "2",
      title: "Tech Review Series",
      brand: "TechCorp",
      status: "completed",
      deadline: "2024-06-01",
      payment: 20000,
    },
  ];

  const performanceData = {
    views: 89000,
    likes: 12500,
    comments: 890,
    shares: 450,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.firstName || user?.name}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's your creator performance overview
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{stats.influencerScore}</span>
                <span className="text-xs">Influbazzar Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₹{stats.totalEarnings.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Campaigns
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeCampaigns}</div>
              <p className="text-xs text-muted-foreground">
                {stats.completedCampaigns} completed this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(stats.totalReach / 1000).toFixed(0)}K
              </div>
              <p className="text-xs text-muted-foreground">
                Across all platforms
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engagement Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.engagementRate}%</div>
              <p className="text-xs text-muted-foreground">
                +0.3% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Campaigns */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>
                  Your latest brand partnerships and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <h4 className="font-semibold">{campaign.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          by {campaign.brand}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              campaign.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {campaign.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Due:{" "}
                            {new Date(campaign.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          ₹{campaign.payment.toLocaleString()}
                        </div>
                        <Button size="sm" variant="outline" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Campaigns
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Overview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance This Month</CardTitle>
                <CardDescription>
                  Your content engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="font-semibold">
                    {performanceData.views.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Likes</span>
                  </div>
                  <span className="font-semibold">
                    {performanceData.likes.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Comments</span>
                  </div>
                  <span className="font-semibold">
                    {performanceData.comments}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Share className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Shares</span>
                  </div>
                  <span className="font-semibold">
                    {performanceData.shares}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Discover New Campaigns</Button>
                <Button variant="outline" className="w-full">
                  Upload Content
                </Button>
                <Button variant="outline" className="w-full">
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;

/**
 * Backend API Requirements:
 *
 * 1. Dashboard Stats:
 *    GET /api/creator/dashboard
 *    Response: {
 *      stats: { earnings, campaigns, reach, engagement },
 *      recentCampaigns: [...],
 *      performance: { views, likes, comments, shares },
 *      notifications: [...]
 *    }
 *
 * 2. Real-time Updates:
 *    WebSocket connection for live metrics
 *    Push notifications for new opportunities
 *    Campaign status change notifications
 *
 * 3. Performance Tracking:
 *    Social media API integrations
 *    Automated metrics collection
 *    Performance benchmarking
 */
