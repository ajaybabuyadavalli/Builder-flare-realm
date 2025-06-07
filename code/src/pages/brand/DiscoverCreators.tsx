import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  Search,
  Filter,
  MapPin,
  Users,
  TrendingUp,
  Instagram,
  Youtube,
  Heart,
  MessageSquare,
  Eye,
  Star,
  Award,
  CheckCircle,
  Globe,
  Calendar,
  Target,
} from "lucide-react";

const DiscoverCreators = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("trending");
  const [filters, setFilters] = useState({
    platform: [],
    followerRange: [1000, 1000000],
    region: "",
    category: [],
    language: [],
    engagementRate: [0, 15],
    campaignHistory: "all",
    agencyManaged: false,
  });
  const [sortBy, setSortBy] = useState("engagement");

  const categories = [
    "Fashion",
    "Beauty",
    "Fitness",
    "Tech",
    "Food",
    "Travel",
    "Lifestyle",
    "Gaming",
    "Education",
    "Finance",
    "Entertainment",
  ];

  const languages = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Marathi",
    "Bengali",
    "Gujarati",
  ];
  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter"];

  const creators = [
    {
      id: 1,
      name: "Ajay Kumar",
      handle: "@ajay_fitness",
      avatar: "/api/placeholder/100/100",
      followers: "45K",
      engagement: 6.8,
      category: "Fitness",
      location: "Mumbai, India",
      languages: ["Hindi", "English"],
      platforms: ["Instagram", "YouTube"],
      verified: true,
      campaignHistory: 12,
      avgCPM: 150,
      recentPosts: [
        { type: "reel", views: "12K", likes: "890", engagement: 7.4 },
        { type: "post", views: "8K", likes: "654", engagement: 8.2 },
      ],
      bio: "Fitness enthusiast helping you achieve your health goals 💪",
      agencyManaged: false,
      rating: 4.9,
      responseRate: 95,
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      handle: "@sneha_beauty",
      avatar: "/api/placeholder/100/100",
      followers: "32K",
      engagement: 7.2,
      category: "Beauty",
      location: "Delhi, India",
      languages: ["Hindi", "English"],
      platforms: ["Instagram"],
      verified: true,
      campaignHistory: 8,
      avgCPM: 200,
      recentPosts: [
        { type: "story", views: "15K", likes: "1.2K", engagement: 8.0 },
        { type: "reel", views: "22K", likes: "1.8K", engagement: 8.2 },
      ],
      bio: "Beauty creator sharing skincare tips and makeup tutorials ✨",
      agencyManaged: true,
      rating: 4.8,
      responseRate: 88,
    },
    {
      id: 3,
      name: "Rajat Singh",
      handle: "@rajat_tech",
      avatar: "/api/placeholder/100/100",
      followers: "67K",
      engagement: 5.9,
      category: "Tech",
      location: "Bangalore, India",
      languages: ["English", "Hindi"],
      platforms: ["YouTube", "Instagram"],
      verified: true,
      campaignHistory: 15,
      avgCPM: 180,
      recentPosts: [
        { type: "video", views: "45K", likes: "2.1K", engagement: 4.7 },
        { type: "post", views: "18K", likes: "987", engagement: 5.5 },
      ],
      bio: "Tech reviewer covering latest gadgets and software 📱",
      agencyManaged: false,
      rating: 4.7,
      responseRate: 92,
    },
    {
      id: 4,
      name: "Priya Sharma",
      handle: "@priya_lifestyle",
      avatar: "/api/placeholder/100/100",
      followers: "89K",
      engagement: 8.1,
      category: "Lifestyle",
      location: "Pune, India",
      languages: ["Hindi", "Marathi", "English"],
      platforms: ["Instagram", "YouTube"],
      verified: true,
      campaignHistory: 20,
      avgCPM: 220,
      recentPosts: [
        { type: "reel", views: "67K", likes: "5.2K", engagement: 7.8 },
        { type: "story", views: "34K", likes: "2.1K", engagement: 6.2 },
      ],
      bio: "Lifestyle content creator sharing daily inspiration 🌟",
      agencyManaged: true,
      rating: 4.9,
      responseRate: 96,
    },
    {
      id: 5,
      name: "Arjun Patel",
      handle: "@arjun_food",
      avatar: "/api/placeholder/100/100",
      followers: "23K",
      engagement: 9.3,
      category: "Food",
      location: "Ahmedabad, India",
      languages: ["Gujarati", "Hindi", "English"],
      platforms: ["Instagram"],
      verified: false,
      campaignHistory: 3,
      avgCPM: 120,
      recentPosts: [
        { type: "reel", views: "8K", likes: "742", engagement: 9.3 },
        { type: "post", views: "5K", likes: "486", engagement: 9.7 },
      ],
      bio: "Food blogger exploring street food and recipes 🍕",
      agencyManaged: false,
      rating: 4.6,
      responseRate: 90,
    },
    {
      id: 6,
      name: "Kavya Nair",
      handle: "@kavya_travel",
      avatar: "/api/placeholder/100/100",
      followers: "156K",
      engagement: 4.2,
      category: "Travel",
      location: "Kerala, India",
      languages: ["Malayalam", "English", "Hindi"],
      platforms: ["Instagram", "YouTube"],
      verified: true,
      campaignHistory: 25,
      avgCPM: 300,
      recentPosts: [
        { type: "post", views: "78K", likes: "3.2K", engagement: 4.1 },
        { type: "reel", views: "134K", likes: "5.8K", engagement: 4.3 },
      ],
      bio: "Travel enthusiast sharing hidden gems across India 🏔️",
      agencyManaged: true,
      rating: 4.8,
      responseRate: 85,
    },
  ];

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.includes(creator.category);
    const matchesPlatform =
      filters.platform.length === 0 ||
      filters.platform.some((p) => creator.platforms.includes(p));
    const matchesLanguage =
      filters.language.length === 0 ||
      filters.language.some((l) => creator.languages.includes(l));

    return (
      matchesSearch && matchesCategory && matchesPlatform && matchesLanguage
    );
  });

  const sortedCreators = [...filteredCreators].sort((a, b) => {
    switch (sortBy) {
      case "engagement":
        return b.engagement - a.engagement;
      case "followers":
        return (
          parseInt(b.followers.replace("K", "000")) -
          parseInt(a.followers.replace("K", "000"))
        );
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      case "YouTube":
        return <Youtube className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
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
                  Discover Creators 🔍
                </h1>
                <p className="text-muted-foreground">
                  Find the perfect creators for your brand campaigns
                </p>
              </div>
              <div className="flex space-x-3 mt-4 md:mt-0">
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <Link to="/brand/campaigns/new">
                    <Target className="w-4 h-4 mr-2" />
                    Create Campaign
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Search and Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search creators, categories, or handles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
                {[
                  { id: "trending", label: "🔥 Trending", icon: TrendingUp },
                  { id: "recommended", label: "🎯 Recommended", icon: Target },
                  { id: "new", label: "🆕 New Creators", icon: Star },
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
              </div>
            </motion.div>

            {/* Filters Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="engagement">Sort by Engagement</option>
                  <option value="followers">Sort by Followers</option>
                  <option value="rating">Sort by Rating</option>
                </select>

                <select
                  multiple
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange(
                      "category",
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value,
                      ),
                    )
                  }
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <select
                  multiple
                  value={filters.platform}
                  onChange={(e) =>
                    handleFilterChange(
                      "platform",
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value,
                      ),
                    )
                  }
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  <option value="">All Platforms</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Showing {sortedCreators.length} creators</span>
              </div>
            </motion.div>

            {/* Creator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCreators.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <RippleCard>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="text-center pb-3">
                        <div className="relative mx-auto mb-3">
                          <Avatar className="w-20 h-20 mx-auto">
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
                          {creator.verified && (
                            <CheckCircle className="absolute -bottom-1 -right-1 w-6 h-6 text-blue-500 bg-white rounded-full" />
                          )}
                        </div>

                        <div>
                          <h3 className="font-bold text-lg">{creator.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            {creator.handle}
                          </p>
                          <div className="flex items-center justify-center space-x-1 mt-1">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {creator.location}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div>
                            <p className="font-bold text-lg">
                              {creator.followers}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Followers
                            </p>
                          </div>
                          <div>
                            <p className="font-bold text-lg">
                              {creator.engagement}%
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Engagement
                            </p>
                          </div>
                        </div>

                        {/* Category & Platforms */}
                        <div className="space-y-2">
                          <Badge
                            variant="secondary"
                            className="w-full justify-center"
                          >
                            {creator.category}
                          </Badge>
                          <div className="flex justify-center space-x-2">
                            {creator.platforms.map((platform) => (
                              <div
                                key={platform}
                                className="flex items-center space-x-1 text-xs"
                              >
                                {getPlatformIcon(platform)}
                                <span>{platform}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-xs text-muted-foreground text-center line-clamp-2">
                          {creator.bio}
                        </p>

                        {/* Performance Metrics */}
                        <div className="border-t pt-3 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Campaign History</span>
                            <span className="font-semibold">
                              {creator.campaignHistory} campaigns
                            </span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Avg CPM</span>
                            <span className="font-semibold">
                              ₹{creator.avgCPM}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Rating</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span className="font-semibold">
                                {creator.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Response Rate</span>
                            <span className="font-semibold">
                              {creator.responseRate}%
                            </span>
                          </div>
                        </div>

                        {/* Agency Badge */}
                        {creator.agencyManaged && (
                          <Badge
                            variant="outline"
                            className="w-full justify-center text-xs"
                          >
                            Agency Managed
                          </Badge>
                        )}

                        {/* Action Buttons */}
                        <div className="space-y-2 pt-2">
                          <Button
                            variant="outline"
                            className="w-full text-sm"
                            asChild
                          >
                            <Link to={`/brand/creator/${creator.id}`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Profile
                            </Link>
                          </Button>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm">
                            <Target className="w-4 h-4 mr-2" />
                            Invite to Campaign
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </RippleCard>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center py-8"
            >
              <Button variant="outline" size="lg">
                Load More Creators
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscoverCreators;
