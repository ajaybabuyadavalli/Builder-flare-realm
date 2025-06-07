import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MessageSquare,
  Calendar as CalendarIcon,
  Download,
  Star,
  Target,
  Globe,
  Instagram,
  Youtube,
  Camera,
  Clock,
  Award,
  Zap,
  Filter,
  ArrowUp,
  ArrowDown,
  Activity,
  Cpu,
  ChevronDown,
  Map,
} from "lucide-react";

const CreatorAnalytics = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("30d");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedNiche, setSelectedNiche] = useState("all");

  const analyticsData = {
    overview: {
      totalReach: 125420,
      avgEngagement: 4.2,
      totalLikes: 23890,
      totalComments: 3456,
      followerGrowth: 12.5,
      contentPosted: 24,
    },
    platformStats: [
      {
        platform: "Instagram",
        followers: 28500,
        growth: 8.2,
        engagement: 4.5,
        posts: 18,
        reach: 89420,
        icon: Instagram,
        color: "#E4405F",
      },
      {
        platform: "YouTube",
        followers: 12300,
        growth: 15.6,
        engagement: 6.8,
        posts: 4,
        reach: 31200,
        icon: Youtube,
        color: "#FF0000",
      },
      {
        platform: "TikTok",
        followers: 8900,
        growth: 22.1,
        engagement: 7.2,
        posts: 12,
        reach: 45600,
        icon: Camera,
        color: "#000000",
      },
    ],
    engagementTimeline: [
      { date: "Jan 1", instagram: 4.2, youtube: 6.1, tiktok: 7.0 },
      { date: "Jan 8", instagram: 4.5, youtube: 6.5, tiktok: 7.3 },
      { date: "Jan 15", instagram: 4.1, youtube: 6.8, tiktok: 6.9 },
      { date: "Jan 22", instagram: 4.8, youtube: 7.2, tiktok: 7.8 },
      { date: "Jan 29", instagram: 4.5, youtube: 6.9, tiktok: 7.2 },
    ],
    contentHeatmap: [
      {
        hour: "6 AM",
        mon: 2.1,
        tue: 1.8,
        wed: 2.3,
        thu: 2.0,
        fri: 2.5,
        sat: 3.2,
        sun: 2.8,
      },
      {
        hour: "9 AM",
        mon: 3.5,
        tue: 3.2,
        wed: 3.8,
        thu: 3.1,
        fri: 3.6,
        sat: 4.1,
        sun: 3.9,
      },
      {
        hour: "12 PM",
        mon: 4.2,
        tue: 4.8,
        wed: 4.5,
        thu: 4.1,
        fri: 4.9,
        sat: 5.2,
        sun: 4.7,
      },
      {
        hour: "3 PM",
        mon: 5.1,
        tue: 5.5,
        wed: 5.3,
        thu: 5.8,
        fri: 6.2,
        sat: 6.8,
        sun: 6.1,
      },
      {
        hour: "6 PM",
        mon: 6.5,
        tue: 7.1,
        wed: 6.8,
        thu: 7.3,
        fri: 8.1,
        sat: 8.5,
        sun: 7.9,
      },
      {
        hour: "9 PM",
        mon: 7.8,
        tue: 8.2,
        wed: 7.9,
        thu: 8.6,
        fri: 9.1,
        sat: 9.8,
        sun: 9.2,
      },
    ],
    audienceInsights: {
      ageGroups: [
        { group: "18-24", percentage: 35, color: "#8b5cf6" },
        { group: "25-34", percentage: 42, color: "#ec4899" },
        { group: "35-44", percentage: 18, color: "#3b82f6" },
        { group: "45+", percentage: 5, color: "#10b981" },
      ],
      genderSplit: [
        { gender: "Female", percentage: 58, color: "#ec4899" },
        { gender: "Male", percentage: 42, color: "#3b82f6" },
      ],
      topCities: [
        { city: "Mumbai", percentage: 22, followers: 6270 },
        { city: "Delhi", percentage: 18, followers: 5130 },
        { city: "Bangalore", percentage: 15, followers: 4275 },
        { city: "Chennai", percentage: 12, followers: 3420 },
        { city: "Pune", percentage: 10, followers: 2850 },
        { city: "Others", percentage: 23, followers: 6555 },
      ],
    },
    topContent: [
      {
        id: 1,
        title: "Morning Workout Routine",
        type: "reel",
        platform: "Instagram",
        engagement: 8.2,
        reach: 15200,
        likes: 1245,
        comments: 89,
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "30-Day Transformation",
        type: "video",
        platform: "YouTube",
        engagement: 12.5,
        reach: 25400,
        likes: 2890,
        comments: 234,
        date: "2024-01-10",
      },
      {
        id: 3,
        title: "Quick HIIT Workout",
        type: "video",
        platform: "TikTok",
        engagement: 9.8,
        reach: 18600,
        likes: 1623,
        comments: 156,
        date: "2024-01-08",
      },
    ],
    influbazzarScore: {
      current: 84,
      breakdown: {
        contentQuality: 88,
        engagement: 82,
        reliability: 87,
        professionalism: 80,
        growth: 85,
      },
      tips: [
        "Maintain consistent posting schedule to improve reliability score",
        "Engage more with comments to boost engagement metrics",
        "Complete brand collaborations on time for better professionalism score",
      ],
    },
  };

  const getHeatmapColor = (value: number) => {
    const intensity = Math.min(value / 10, 1);
    return `rgba(139, 92, 246, ${intensity})`;
  };

  const getEngagementTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      trend: change >= 0 ? "up" : "down",
      color: change >= 0 ? "text-green-600" : "text-red-600",
    };
  };

  return (
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
                Analytics Center
              </h1>
              <p className="text-muted-foreground">
                Deep insights into your content performance and audience
              </p>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <select
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 3 months</option>
                  <option value="1y">Last year</option>
                </select>

                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">All Platforms</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>

              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Zap className="w-4 h-4 mr-2" />
                Boost Score
              </Button>
            </div>
          </motion.div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                title: "Total Reach",
                value: analyticsData.overview.totalReach,
                icon: Eye,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Avg Engagement",
                value: analyticsData.overview.avgEngagement,
                suffix: "%",
                icon: Heart,
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Total Likes",
                value: analyticsData.overview.totalLikes,
                icon: Heart,
                color: "from-red-500 to-pink-500",
              },
              {
                title: "Comments",
                value: analyticsData.overview.totalComments,
                icon: MessageSquare,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Growth",
                value: analyticsData.overview.followerGrowth,
                suffix: "%",
                icon: TrendingUp,
                color: "from-purple-500 to-violet-500",
              },
              {
                title: "Content Posted",
                value: analyticsData.overview.contentPosted,
                icon: Camera,
                color: "from-orange-500 to-red-500",
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
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-5 h-5 text-muted-foreground" />
                        <Badge variant="outline" className="text-xs">
                          30d
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-lg font-bold">
                          <Counter
                            end={stat.value}
                            suffix={stat.suffix || ""}
                          />
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>

          {/* Platform Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Platform Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {analyticsData.platformStats.map((platform, index) => (
                    <motion.div
                      key={platform.platform}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <RippleCard>
                        <div className="p-6 border rounded-lg text-center">
                          <div
                            className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${platform.color}20` }}
                          >
                            <platform.icon
                              className="w-6 h-6"
                              style={{ color: platform.color }}
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-4">
                            {platform.platform}
                          </h3>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Followers</p>
                              <p className="font-bold">
                                {platform.followers.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Growth</p>
                              <p className="font-bold text-green-600">
                                +{platform.growth}%
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Engagement
                              </p>
                              <p className="font-bold">
                                {platform.engagement}%
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Posts</p>
                              <p className="font-bold">{platform.posts}</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engagement Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Engagement Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <div className="flex items-end space-x-2 h-full">
                      {analyticsData.engagementTimeline.map((data, index) => (
                        <div key={data.date} className="flex-1 flex flex-col">
                          <div className="flex-1 flex flex-col justify-end space-y-1">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${data.instagram * 8}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-pink-500 rounded-t-sm min-h-[4px]"
                              title={`Instagram: ${data.instagram}%`}
                            />
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${data.youtube * 8}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + 0.1,
                              }}
                              className="bg-red-500 rounded-t-sm min-h-[4px]"
                              title={`YouTube: ${data.youtube}%`}
                            />
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${data.tiktok * 8}%` }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + 0.2,
                              }}
                              className="bg-black dark:bg-white rounded-t-sm min-h-[4px]"
                              title={`TikTok: ${data.tiktok}%`}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 text-center">
                            {data.date}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4 mt-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-pink-500 rounded" />
                        <span>Instagram</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded" />
                        <span>YouTube</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-black dark:bg-white rounded" />
                        <span>TikTok</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Influbazzar Score */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Influbazzar Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg
                        className="w-32 h-32 transform -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted-foreground/20"
                        />
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 314" }}
                          animate={{
                            strokeDasharray: `${(analyticsData.influbazzarScore.current / 100) * 314} 314`,
                          }}
                          transition={{ duration: 2 }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold">
                            {analyticsData.influbazzarScore.current}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Score
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(
                      analyticsData.influbazzarScore.breakdown,
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                            />
                          </div>
                          <span className="text-sm font-medium w-8">
                            {value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Content Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Best Posting Times (Engagement Heatmap)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-8 gap-2 min-w-[600px]">
                    <div></div>
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-medium p-2"
                        >
                          {day}
                        </div>
                      ),
                    )}

                    {analyticsData.contentHeatmap.map((row, rowIndex) => (
                      <>
                        <div
                          key={`hour-${rowIndex}`}
                          className="text-sm font-medium p-2 text-right"
                        >
                          {row.hour}
                        </div>
                        {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
                          (day, dayIndex) => (
                            <motion.div
                              key={`${rowIndex}-${dayIndex}`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: (rowIndex * 7 + dayIndex) * 0.05,
                              }}
                              className="relative group"
                            >
                              <div
                                className="w-full h-12 rounded border flex items-center justify-center text-xs font-medium cursor-pointer transition-all hover:scale-110"
                                style={{
                                  backgroundColor: getHeatmapColor(
                                    row[day as keyof typeof row] as number,
                                  ),
                                }}
                                title={`${row.hour} ${day}: ${row[day as keyof typeof row]}% engagement`}
                              >
                                {(row[day as keyof typeof row] as number) >
                                  5 && (
                                  <span className="text-white">
                                    {(
                                      row[day as keyof typeof row] as number
                                    ).toFixed(1)}
                                    %
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ),
                        )}
                      </>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>Lower engagement</span>
                  <div className="flex space-x-1">
                    {[0.1, 0.3, 0.5, 0.7, 0.9].map((opacity, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded"
                        style={{
                          backgroundColor: `rgba(139, 92, 246, ${opacity})`,
                        }}
                      />
                    ))}
                  </div>
                  <span>Higher engagement</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Audience Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Age Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Age Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.audienceInsights.ageGroups.map(
                      (group, index) => (
                        <motion.div
                          key={group.group}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.2 + index * 0.1,
                          }}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-medium">
                            {group.group}
                          </span>
                          <div className="flex items-center space-x-3">
                            <div className="w-24 bg-muted rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${group.percentage}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 1.5 + index * 0.1,
                                }}
                                className="h-2 rounded-full"
                                style={{ backgroundColor: group.color }}
                              />
                            </div>
                            <span className="text-sm font-medium w-12 text-right">
                              {group.percentage}%
                            </span>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gender Split */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Gender Split
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {analyticsData.audienceInsights.genderSplit.map(
                      (gender, index) => (
                        <motion.div
                          key={gender.gender}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.4 + index * 0.2,
                          }}
                          className="text-center"
                        >
                          <div className="relative w-24 h-24 mx-auto mb-3">
                            <svg
                              className="w-24 h-24 transform -rotate-90"
                              viewBox="0 0 120 120"
                            >
                              <circle
                                cx="60"
                                cy="60"
                                r="40"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                className="text-muted-foreground/20"
                              />
                              <motion.circle
                                cx="60"
                                cy="60"
                                r="40"
                                stroke={gender.color}
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ strokeDasharray: "0 251" }}
                                animate={{
                                  strokeDasharray: `${(gender.percentage / 100) * 251} 251`,
                                }}
                                transition={{
                                  duration: 2,
                                  delay: 1.5 + index * 0.2,
                                }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg font-bold">
                                {gender.percentage}%
                              </span>
                            </div>
                          </div>
                          <p className="font-medium">{gender.gender}</p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Cities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Map className="w-5 h-5 mr-2" />
                    Top Cities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analyticsData.audienceInsights.topCities.map(
                      (city, index) => (
                        <motion.div
                          key={city.city}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.6 + index * 0.1,
                          }}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium text-sm">{city.city}</p>
                            <p className="text-xs text-muted-foreground">
                              {city.followers.toLocaleString()} followers
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="w-16 bg-muted rounded-full h-2 mb-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${city.percentage}%` }}
                                transition={{
                                  duration: 1,
                                  delay: 1.8 + index * 0.1,
                                }}
                                className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                              />
                            </div>
                            <span className="text-xs font-medium">
                              {city.percentage}%
                            </span>
                          </div>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Top Performing Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Top Performing Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {analyticsData.topContent.map((content, index) => (
                    <motion.div
                      key={content.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    >
                      <RippleCard>
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline" className="text-xs">
                              {content.platform}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                              {content.engagement}% ER
                            </Badge>
                          </div>

                          <h4 className="font-medium mb-2">{content.title}</h4>

                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center">
                              <Eye className="w-3 h-3 mr-1 text-muted-foreground" />
                              <span>{content.reach.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-3 h-3 mr-1 text-muted-foreground" />
                              <span>{content.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="w-3 h-3 mr-1 text-muted-foreground" />
                              <span>{content.comments}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="w-3 h-3 mr-1 text-muted-foreground" />
                              <span>
                                {new Date(content.date).toLocaleDateString()}
                              </span>
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

      <Footer />
    </div>
  );
};

export default CreatorAnalytics;
