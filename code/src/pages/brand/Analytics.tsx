import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Heart,
  MessageSquare,
  Share,
  DollarSign,
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Globe,
  MapPin,
} from "lucide-react";

const BrandAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  const [selectedCampaign, setSelectedCampaign] = useState("all");

  const analyticsData = {
    overview: {
      totalReach: 2850000,
      totalEngagement: 142500,
      avgEngagementRate: 5.2,
      totalSpent: 185000,
      roi: 4.2,
      conversions: 1250,
      cpm: 65,
      cpc: 148,
    },
    trends: {
      reach: { current: 2850000, previous: 2450000, change: 16.3 },
      engagement: { current: 142500, previous: 128000, change: 11.3 },
      conversions: { current: 1250, previous: 980, change: 27.6 },
      roi: { current: 4.2, previous: 3.8, change: 10.5 },
    },
    campaignPerformance: [
      {
        id: 1,
        name: "GlowFix Summer Routine",
        reach: 1250000,
        engagement: 65000,
        engagementRate: 5.2,
        spent: 75000,
        roi: 4.5,
        conversions: 580,
        status: "live",
      },
      {
        id: 2,
        name: "UrbanOnCampus Launch",
        reach: 890000,
        engagement: 48000,
        engagementRate: 5.4,
        spent: 60000,
        roi: 3.8,
        conversions: 420,
        status: "live",
      },
      {
        id: 3,
        name: "Fitness Challenge 2024",
        reach: 1800000,
        engagement: 108000,
        engagementRate: 6.0,
        spent: 85000,
        roi: 5.2,
        conversions: 720,
        status: "completed",
      },
    ],
    topCreators: [
      {
        name: "Ajay Kumar",
        handle: "@ajay_fitness",
        avatar: "/api/placeholder/50/50",
        reach: 450000,
        engagement: 28000,
        engagementRate: 6.2,
        conversions: 180,
        roi: 5.8,
        campaigns: 3,
      },
      {
        name: "Sneha Kapoor",
        handle: "@sneha_beauty",
        avatar: "/api/placeholder/50/50",
        reach: 320000,
        engagement: 22000,
        engagementRate: 6.9,
        conversions: 145,
        roi: 4.9,
        campaigns: 2,
      },
      {
        name: "Priya Sharma",
        handle: "@priya_lifestyle",
        avatar: "/api/placeholder/50/50",
        reach: 580000,
        engagement: 35000,
        engagementRate: 6.0,
        conversions: 220,
        roi: 6.2,
        campaigns: 4,
      },
    ],
    demographics: {
      ageGroups: [
        { range: "18-24", percentage: 35, count: 997500 },
        { range: "25-34", percentage: 42, count: 1197000 },
        { range: "35-44", percentage: 18, count: 513000 },
        { range: "45+", percentage: 5, count: 142500 },
      ],
      locations: [
        { city: "Mumbai", percentage: 28, count: 798000 },
        { city: "Delhi", percentage: 22, count: 627000 },
        { city: "Bangalore", percentage: 18, count: 513000 },
        { city: "Chennai", percentage: 12, count: 342000 },
        { city: "Others", percentage: 20, count: 570000 },
      ],
      platforms: [
        { platform: "Instagram", percentage: 68, reach: 1938000 },
        { platform: "YouTube", percentage: 25, reach: 712500 },
        { platform: "TikTok", percentage: 7, reach: 199500 },
      ],
    },
  };

  const getChangeIcon = (change: number) => {
    return change > 0 ? (
      <ArrowUp className="w-4 h-4 text-green-500" />
    ) : (
      <ArrowDown className="w-4 h-4 text-red-500" />
    );
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? "text-green-600" : "text-red-600";
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
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
                  Campaign Analytics 📊
                </h1>
                <p className="text-muted-foreground">
                  Track performance and optimize your influencer campaigns
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </motion.div>

            {/* Overview Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Reach",
                  value: analyticsData.overview.totalReach,
                  change: analyticsData.trends.reach.change,
                  icon: Eye,
                  color: "from-blue-500 to-cyan-500",
                  format: "number",
                },
                {
                  title: "Total Engagement",
                  value: analyticsData.overview.totalEngagement,
                  change: analyticsData.trends.engagement.change,
                  icon: Heart,
                  color: "from-pink-500 to-rose-500",
                  format: "number",
                },
                {
                  title: "Conversions",
                  value: analyticsData.overview.conversions,
                  change: analyticsData.trends.conversions.change,
                  icon: Target,
                  color: "from-green-500 to-emerald-500",
                  format: "number",
                },
                {
                  title: "ROI",
                  value: analyticsData.overview.roi,
                  change: analyticsData.trends.roi.change,
                  icon: TrendingUp,
                  color: "from-purple-500 to-pink-500",
                  format: "decimal",
                  suffix: "x",
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
                            <p className="text-sm font-medium text-muted-foreground mb-2">
                              {metric.title}
                            </p>
                            <div className="flex items-baseline">
                              {metric.format === "number" ? (
                                <Counter
                                  from={0}
                                  to={metric.value}
                                  className="text-2xl font-bold"
                                  format={formatNumber}
                                />
                              ) : (
                                <span className="text-2xl font-bold">
                                  {metric.value}
                                  {metric.suffix}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center mt-1">
                              {getChangeIcon(metric.change)}
                              <span
                                className={`text-sm ml-1 ${getChangeColor(metric.change)}`}
                              >
                                {Math.abs(metric.change)}%
                              </span>
                              <span className="text-xs text-muted-foreground ml-1">
                                vs last period
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

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Campaign Performance Trends</span>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Interactive performance chart with reach, engagement,
                          and conversions over time
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Demographics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Age Groups */}
                    <div>
                      <h4 className="font-semibold mb-3">Age Groups</h4>
                      <div className="space-y-3">
                        {analyticsData.demographics.ageGroups.map(
                          (age, index) => (
                            <div
                              key={age.range}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm">{age.range}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                    style={{ width: `${age.percentage}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium w-12">
                                  {age.percentage}%
                                </span>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Top Locations */}
                    <div>
                      <h4 className="font-semibold mb-3">Top Locations</h4>
                      <div className="space-y-2">
                        {analyticsData.demographics.locations
                          .slice(0, 4)
                          .map((location) => (
                            <div
                              key={location.city}
                              className="flex items-center justify-between text-sm"
                            >
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                <span>{location.city}</span>
                              </div>
                              <span className="font-medium">
                                {formatNumber(location.count)}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Campaign Performance Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.campaignPerformance.map(
                      (campaign, index) => (
                        <motion.div
                          key={campaign.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <h4 className="font-semibold">{campaign.name}</h4>
                              <Badge
                                className={
                                  campaign.status === "live"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }
                              >
                                {campaign.status}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-green-600">
                                {campaign.roi}x ROI
                              </p>
                              <p className="text-sm text-muted-foreground">
                                ₹{campaign.spent.toLocaleString()} spent
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Reach</p>
                              <p className="font-semibold">
                                {formatNumber(campaign.reach)}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Engagement
                              </p>
                              <p className="font-semibold">
                                {formatNumber(campaign.engagement)}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">ER</p>
                              <p className="font-semibold">
                                {campaign.engagementRate}%
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Conversions
                              </p>
                              <p className="font-semibold">
                                {campaign.conversions}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">CPM</p>
                              <p className="font-semibold">
                                ₹
                                {Math.round(
                                  campaign.spent / (campaign.reach / 1000),
                                )}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
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
                  <CardTitle>Top Performing Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.topCreators.map((creator, index) => (
                      <motion.div
                        key={creator.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-3 rounded-lg border hover:shadow-md transition-shadow"
                      >
                        <Avatar className="w-12 h-12">
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

                        <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-4">
                          <div>
                            <h5 className="font-semibold text-sm">
                              {creator.name}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {creator.handle}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Reach
                            </p>
                            <p className="font-semibold text-sm">
                              {formatNumber(creator.reach)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Engagement
                            </p>
                            <p className="font-semibold text-sm">
                              {formatNumber(creator.engagement)}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">ER</p>
                            <p className="font-semibold text-sm">
                              {creator.engagementRate}%
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Conversions
                            </p>
                            <p className="font-semibold text-sm">
                              {creator.conversions}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">ROI</p>
                            <p className="font-semibold text-sm text-green-600">
                              {creator.roi}x
                            </p>
                          </div>
                        </div>
                      </motion.div>
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

export default BrandAnalytics;
