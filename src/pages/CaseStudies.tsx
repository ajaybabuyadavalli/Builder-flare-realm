import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
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
} from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedInfluencerType, setSelectedInfluencerType] = useState("all");

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

  const caseStudies = [
    {
      id: 1,
      hashtag: "#BareGlowRoutine",
      title: "Boosted sales 2.5x with 20+ micro creators",
      brand: "GlowCo Beauty",
      category: "beauty",
      influencerType: "micro",
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

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    const matchesInfluencerType =
      selectedInfluencerType === "all" ||
      study.influencerType === selectedInfluencerType;

    return matchesSearch && matchesCategory && matchesInfluencerType;
  });

  const featuredCaseStudies = caseStudies.filter((study) => study.featured);

  return (
    <div className="min-h-screen">
      <Navbar />

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
              Case Studies
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Campaign Success Stories
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore real campaigns with real results. Get inspired by
              successful collaborations across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Influencer Type Filter */}
            <select
              value={selectedInfluencerType}
              onChange={(e) => setSelectedInfluencerType(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background"
            >
              {influencerTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* Results count */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {filteredCaseStudies.length} results found
              </span>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most impactful campaigns
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredCaseStudies.slice(0, 3).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RippleCard>
                    <Card className="h-full border-2 border-purple-200 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                          <Badge variant="outline">{study.category}</Badge>
                        </div>

                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold text-purple-600 mb-2">
                            {study.hashtag}
                          </h3>
                          <p className="text-muted-foreground">{study.title}</p>
                        </div>

                        <div className="flex items-center justify-center space-x-4 mb-4">
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
                              {study.creator.followers} followers
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="font-bold text-green-600 text-lg">
                              {study.results.roi}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              ROI
                            </div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="font-bold text-blue-600 text-lg">
                              {study.results.reach}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Reach
                            </div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <div className="font-bold text-purple-600 text-lg">
                              {study.results.engagement}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Engagement
                            </div>
                          </div>
                          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                            <div className="font-bold text-orange-600 text-lg">
                              {study.results.conversions}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Conversions
                            </div>
                          </div>
                        </div>

                        <Button className="w-full" variant="outline">
                          View Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our complete collection of successful campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
              >
                <RippleCard>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {study.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {study.influencerType}
                        </Badge>
                      </div>

                      <h3 className="font-bold text-purple-600 text-lg mb-1">
                        {study.hashtag}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-tight">
                        {study.title}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            src={study.creator.avatar}
                            alt={study.creator.name}
                          />
                          <AvatarFallback className="text-xs">
                            {study.creator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">
                            {study.creator.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {study.creator.followers}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">ROI:</span>
                          <span className="font-semibold text-green-600">
                            {study.results.roi}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Reach:</span>
                          <span className="font-semibold">
                            {study.results.reach}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">
                            Engagement:
                          </span>
                          <span className="font-semibold">
                            {study.results.engagement}
                          </span>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span>Brand: {study.brand}</span>
                          <span>{study.campaign.duration}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-xs"
                        >
                          View Details
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
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">No case studies found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedInfluencerType("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Your Story Featured?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create successful campaigns with Influbazzar and showcase your
              results to inspire others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup?role=brand">
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Campaign
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <Link to="/contact">
                  <Award className="w-5 h-5 mr-2" />
                  Submit Your Story
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
