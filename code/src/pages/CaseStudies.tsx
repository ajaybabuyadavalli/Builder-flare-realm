import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { RippleCard } from "@/components/ui/ripple-card";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  Target,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  DollarSign,
  Calendar,
  Award,
  ArrowRight,
  Star,
  Zap,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedInfluencerType, setSelectedInfluencerType] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedBudgetRange, setSelectedBudgetRange] = useState("all");
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "beauty", label: "Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "skincare", label: "Skincare" },
    { value: "fitness", label: "Fitness" },
    { value: "food", label: "Food" },
    { value: "tech", label: "Tech" },
  ];

  const influencerTypes = [
    { value: "all", label: "All Types" },
    { value: "micro", label: "Micro (1K-100K)" },
    { value: "macro", label: "Macro (100K-1M)" },
    { value: "mega", label: "Mega (1M+)" },
  ];

  const platforms = [
    { value: "all", label: "All Platforms" },
    { value: "Instagram", label: "Instagram" },
    { value: "YouTube", label: "YouTube" },
    { value: "TikTok", label: "TikTok" },
    { value: "Twitter", label: "Twitter" },
  ];

  const budgetRanges = [
    { value: "all", label: "All Budgets" },
    { value: "low", label: "₹50K - ₹2L" },
    { value: "medium", label: "₹2L - ₹5L" },
    { value: "high", label: "₹5L+" },
  ];

  const caseStudies = [
    {
      id: 1,
      hashtag: "#BareGlowRoutine",
      title: "Boosted sales 2.5x with 20+ micro creators",
      brand: "GlowCo Beauty",
      category: "beauty",
      influencerType: "micro",
      platform: "Instagram",
      budgetRange: "medium",
      creator: {
        name: "Rhea Kapoor",
        followers: "8.2K",
        avatar: "/api/placeholder/100/100",
        platform: "Instagram",
      },
      results: {
        reach: "2.5M",
        engagement: "4.2%",
        conversions: "1,200",
        roi: "2.5x",
        salesIncrease: "150%",
      },
      campaign: {
        duration: "14 days",
        budget: "₹2,50,000",
        creators: 20,
        posts: 45,
      },
      description:
        "A comprehensive skincare routine campaign featuring authentic user-generated content from micro-influencers.",
      keyLearnings: [
        "Micro-influencers delivered higher engagement than macro influencers",
        "Authentic tutorials performed better than polished product shots",
        "Cross-platform approach increased reach by 40%",
      ],
      featured: true,
    },
    {
      id: 2,
      hashtag: "#BiteIntoWellness",
      title: "CTR ↑18% via 7-day fitness challenge",
      brand: "FitLife Nutrition",
      category: "fitness",
      influencerType: "micro",
      platform: "Instagram",
      budgetRange: "low",
      creator: {
        name: "Rajat Singh",
        followers: "25K",
        avatar: "/api/placeholder/100/100",
        platform: "Instagram",
      },
      results: {
        reach: "1.8M",
        engagement: "6.1%",
        conversions: "850",
        roi: "3.2x",
        salesIncrease: "180%",
      },
      campaign: {
        duration: "7 days",
        budget: "₹1,80,000",
        creators: 15,
        posts: 35,
      },
      description:
        "A week-long fitness challenge that combined nutrition education with workout routines.",
      keyLearnings: [
        "Challenge format increased user participation by 3x",
        "Educational content built stronger brand trust",
        "User-generated content extended campaign reach organically",
      ],
      featured: false,
    },
    {
      id: 3,
      hashtag: "#StyleStatement2024",
      title: "Generated 500+ UGC posts in 10 days",
      brand: "StyleBox Fashion",
      category: "fashion",
      influencerType: "macro",
      platform: "Instagram",
      budgetRange: "medium",
      creator: {
        name: "Sneha Patel",
        followers: "120K",
        avatar: "/api/placeholder/100/100",
        platform: "Instagram",
      },
      results: {
        reach: "4.2M",
        engagement: "3.8%",
        conversions: "2,100",
        roi: "2.8x",
        salesIncrease: "220%",
      },
      campaign: {
        duration: "10 days",
        budget: "₹4,50,000",
        creators: 8,
        posts: 25,
      },
      description:
        "A fashion campaign focusing on affordable styling tips and outfit transformations.",
      keyLearnings: [
        "Styling tutorials had 2x higher engagement than static posts",
        "Affordable fashion angle resonated with target audience",
        "Macro influencers provided better reach for brand awareness",
      ],
      featured: true,
    },
    {
      id: 4,
      hashtag: "#TechReviewHonest",
      title: "Achieved 95% positive sentiment score",
      brand: "GadgetPro",
      category: "tech",
      influencerType: "macro",
      platform: "YouTube",
      budgetRange: "medium",
      creator: {
        name: "Arjun Mehta",
        followers: "180K",
        avatar: "/api/placeholder/100/100",
        platform: "YouTube",
      },
      results: {
        reach: "3.1M",
        engagement: "7.2%",
        conversions: "1,500",
        roi: "4.1x",
        salesIncrease: "320%",
      },
      campaign: {
        duration: "21 days",
        budget: "₹3,20,000",
        creators: 12,
        posts: 28,
      },
      description:
        "Honest tech reviews and comparisons that built trust and drove informed purchasing decisions.",
      keyLearnings: [
        "Honest reviews increased brand credibility significantly",
        "Long-form content performed better for tech products",
        "Expert reviewers influenced high-value purchases",
      ],
      featured: false,
    },
    {
      id: 5,
      hashtag: "#FoodieFaves",
      title: "Restaurant foot traffic increased by 40%",
      brand: "Spice Route Restaurants",
      category: "food",
      influencerType: "micro",
      platform: "Instagram",
      budgetRange: "low",
      creator: {
        name: "Priya Sharma",
        followers: "45K",
        avatar: "/api/placeholder/100/100",
        platform: "Instagram",
      },
      results: {
        reach: "1.2M",
        engagement: "8.5%",
        conversions: "600",
        roi: "3.8x",
        salesIncrease: "40%",
      },
      campaign: {
        duration: "30 days",
        budget: "₹1,50,000",
        creators: 25,
        posts: 60,
      },
      description:
        "Food bloggers showcasing authentic dining experiences and signature dishes.",
      keyLearnings: [
        "Local food influencers drove immediate foot traffic",
        "Story format worked better than feed posts for restaurants",
        "Multiple touchpoints increased visit likelihood",
      ],
      featured: false,
    },
    {
      id: 6,
      hashtag: "#SkinCareScience",
      title: "Educational series drove 300% brand recall",
      brand: "DermaGlow",
      category: "skincare",
      influencerType: "macro",
      platform: "Instagram",
      budgetRange: "high",
      creator: {
        name: "Dr. Kiran Kumar",
        followers: "250K",
        avatar: "/api/placeholder/100/100",
        platform: "Instagram",
      },
      results: {
        reach: "5.8M",
        engagement: "5.2%",
        conversions: "3,200",
        roi: "3.5x",
        salesIncrease: "280%",
      },
      campaign: {
        duration: "45 days",
        budget: "₹6,00,000",
        creators: 5,
        posts: 35,
      },
      description:
        "Science-backed skincare education series featuring dermatologist-approved content.",
      keyLearnings: [
        "Expert credibility significantly increased conversion rates",
        "Educational content built long-term brand loyalty",
        "Scientific backing differentiated from competitor campaigns",
      ],
      featured: true,
    },
  ];

  const handleSearch = () => {
    setSearchTerm(tempSearchTerm);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setTempSearchTerm("");
    setSelectedCategory("all");
    setSelectedInfluencerType("all");
    setSelectedPlatform("all");
    setSelectedBudgetRange("all");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedCategory !== "all") count++;
    if (selectedInfluencerType !== "all") count++;
    if (selectedPlatform !== "all") count++;
    if (selectedBudgetRange !== "all") count++;
    return count;
  };

  const getActiveFilters = () => {
    const filters = [];
    if (searchTerm)
      filters.push({
        type: "search",
        value: searchTerm,
        label: `Search: "${searchTerm}"`,
      });
    if (selectedCategory !== "all") {
      const category = categories.find((c) => c.value === selectedCategory);
      filters.push({
        type: "category",
        value: selectedCategory,
        label: `Category: ${category?.label}`,
      });
    }
    if (selectedInfluencerType !== "all") {
      const type = influencerTypes.find(
        (t) => t.value === selectedInfluencerType,
      );
      filters.push({
        type: "influencerType",
        value: selectedInfluencerType,
        label: `Type: ${type?.label}`,
      });
    }
    if (selectedPlatform !== "all") {
      const platform = platforms.find((p) => p.value === selectedPlatform);
      filters.push({
        type: "platform",
        value: selectedPlatform,
        label: `Platform: ${platform?.label}`,
      });
    }
    if (selectedBudgetRange !== "all") {
      const budget = budgetRanges.find((b) => b.value === selectedBudgetRange);
      filters.push({
        type: "budgetRange",
        value: selectedBudgetRange,
        label: `Budget: ${budget?.label}`,
      });
    }
    return filters;
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case "search":
        setSearchTerm("");
        setTempSearchTerm("");
        break;
      case "category":
        setSelectedCategory("all");
        break;
      case "influencerType":
        setSelectedInfluencerType("all");
        break;
      case "platform":
        setSelectedPlatform("all");
        break;
      case "budgetRange":
        setSelectedBudgetRange("all");
        break;
    }
  };

  const featuredCaseStudies = caseStudies.filter((study) => study.featured);

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.keyLearnings.some((learning) =>
        learning.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    const matchesInfluencerType =
      selectedInfluencerType === "all" ||
      study.influencerType === selectedInfluencerType;
    const matchesPlatform =
      selectedPlatform === "all" || study.platform === selectedPlatform;
    const matchesBudgetRange =
      selectedBudgetRange === "all" ||
      study.budgetRange === selectedBudgetRange;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesInfluencerType &&
      matchesPlatform &&
      matchesBudgetRange
    );
  });

  return (
    <div className="min-h-screen">
      <NavbarDynamic />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Case Studies
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real campaigns, real results. Discover how brands and creators are
              achieving success with Influbazzar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search case studies, brands, creators, hashtags..."
                value={tempSearchTerm}
                onChange={(e) => setTempSearchTerm(e.target.value)}
                className="pl-10 pr-4"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="bg-gradient-to-r from-purple-600 to-pink-600"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="relative"
              >
                <Filter className="w-4 h-4 mr-2" />
                More Filters
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${showMoreFilters ? "rotate-180" : ""}`}
                />
                {getActiveFiltersCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                    {getActiveFiltersCount()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* More Filters */}
          {showMoreFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted/50 rounded-lg"
            >
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Influencer Type
                </label>
                <select
                  value={selectedInfluencerType}
                  onChange={(e) => setSelectedInfluencerType(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {influencerTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Platform
                </label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {platforms.map((platform) => (
                    <option key={platform.value} value={platform.value}>
                      {platform.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  value={selectedBudgetRange}
                  onChange={(e) => setSelectedBudgetRange(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {budgetRanges.map((budget) => (
                    <option key={budget.value} value={budget.value}>
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}

          {/* Active Filters */}
          {getActiveFiltersCount() > 0 && (
            <div className="flex flex-wrap gap-2 items-center mb-6">
              <span className="text-sm font-medium">Active filters:</span>
              {getActiveFilters().map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  onClick={() => removeFilter(filter.type)}
                >
                  {filter.label}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredCaseStudies.length} of {caseStudies.length} case
            studies
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {searchTerm === "" &&
        selectedCategory === "all" &&
        selectedInfluencerType === "all" &&
        selectedPlatform === "all" &&
        selectedBudgetRange === "all" && (
          <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-purple-100">
                  Our most impactful campaigns
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredCaseStudies.slice(0, 3).map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <RippleCard>
                      <Card className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-yellow-400 text-yellow-900">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                            <span className="text-2xl font-bold text-green-400">
                              {study.results.roi}
                            </span>
                          </div>
                          <CardTitle className="text-xl mb-2">
                            {study.title}
                          </CardTitle>
                          <p className="text-purple-100 text-sm">
                            {study.hashtag}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-lg font-bold">
                                {study.results.reach}
                              </div>
                              <div className="text-xs text-purple-200">
                                Reach
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold">
                                {study.results.engagement}
                              </div>
                              <div className="text-xs text-purple-200">
                                Engagement
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold">
                                {study.results.conversions}
                              </div>
                              <div className="text-xs text-purple-200">
                                Conversions
                              </div>
                            </div>
                          </div>

                          <Button
                            asChild
                            variant="secondary"
                            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            <Link to={`/case-studies/${study.id}`}>
                              View Full Story
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </RippleCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* All Case Studies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RippleCard>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={study.creator.avatar}
                              alt={study.creator.name}
                            />
                            <AvatarFallback>
                              {study.creator.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{study.creator.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {study.creator.followers} •{" "}
                              {study.creator.platform}
                            </p>
                          </div>
                        </div>
                        {study.featured && (
                          <Badge className="bg-yellow-400 text-yellow-900">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-purple-600 font-medium">
                          {study.hashtag}
                        </p>
                        <CardTitle className="text-lg">{study.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {study.brand}
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm mb-6 line-clamp-3">
                        {study.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-xs text-muted-foreground">
                              Reach
                            </span>
                            <span className="text-sm font-semibold">
                              {study.results.reach}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-xs text-muted-foreground">
                              Engagement
                            </span>
                            <span className="text-sm font-semibold">
                              {study.results.engagement}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-xs text-muted-foreground">
                              ROI
                            </span>
                            <span className="text-sm font-semibold text-green-600">
                              {study.results.roi}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-xs text-muted-foreground">
                              Budget
                            </span>
                            <span className="text-sm font-semibold">
                              {study.campaign.budget}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {study.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {study.influencerType}
                          </Badge>
                        </div>
                        <Button asChild size="sm" variant="ghost">
                          <Link to={`/case-studies/${study.id}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No case studies found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
