import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import {
  Users,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Instagram,
  Play,
  ChevronRight,
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Camera,
  Heart,
  MessageSquare,
  Eye,
  Share2,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Search,
  X,
} from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            India's Premier Influencer Platform
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Connecting Brands, Creators, and Agencies
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            All in One Platform. Join 25K+ verified creators and 100+ brands
            building the future of influencer marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/signup?role=brand">
                <Target className="w-5 h-5 mr-2" />
                Post a Campaign
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg"
              asChild
            >
              <Link to="/signup?role=creator">
                <Users className="w-5 h-5 mr-2" />
                Join as a Creator
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="px-8 py-4 text-lg"
              asChild
            >
              <Link to="/signup?role=agency">
                <BarChart3 className="w-5 h-5 mr-2" />
                Join as Agency
              </Link>
            </Button>
          </div>
          <Button
            variant="link"
            className="text-purple-600 hover:text-purple-700"
            asChild
          >
            <Link to="/demo?user=creator">
              <Play className="w-4 h-4 mr-2" />
              Try the Demo
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Value Metrics Section
const ValueMetricsSection = () => {
  const metrics = [
    {
      value: 2,
      suffix: " Cr+",
      label: "Total Creator Payouts",
      icon: DollarSign,
    },
    { value: 1500, suffix: "+", label: "Campaigns Posted", icon: Target },
    { value: 25000, suffix: "+", label: "Verified Creators", icon: Users },
    {
      value: 98,
      suffix: "%",
      label: "Campaign Success Rate",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <Counter end={metric.value} prefix="₹" suffix={metric.suffix} />
              </div>
              <p className="text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const workflows = {
    creator: [
      {
        step: 1,
        title: "Sign Up",
        description: "Create your creator profile with portfolio",
      },
      {
        step: 2,
        title: "Browse Campaigns",
        description: "Find campaigns matching your niche",
      },
      {
        step: 3,
        title: "Apply & Create",
        description: "Apply and upload your content",
      },
      {
        step: 4,
        title: "Earn Money",
        description: "Get paid via secure escrow system",
      },
    ],
    brand: [
      {
        step: 1,
        title: "Post Campaign",
        description: "Define your campaign requirements",
      },
      {
        step: 2,
        title: "Select Creators",
        description: "Choose from matched creator applications",
      },
      {
        step: 3,
        title: "Track Progress",
        description: "Monitor submissions and engagement",
      },
      {
        step: 4,
        title: "Approve & Pay",
        description: "Release payments through escrow",
      },
    ],
    agency: [
      {
        step: 1,
        title: "Add Creators",
        description: "Onboard and manage your creator roster",
      },
      {
        step: 2,
        title: "Co-manage Campaigns",
        description: "Handle campaigns for multiple creators",
      },
      {
        step: 3,
        title: "View Analytics",
        description: "Access comprehensive dashboards",
      },
      {
        step: 4,
        title: "Scale Operations",
        description: "Export reports and manage at scale",
      },
    ],
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Simple steps for every user type
          </p>
        </div>

        <Tabs defaultValue="creator" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="creator"
              className="flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Creator</span>
            </TabsTrigger>
            <TabsTrigger value="brand" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Brand</span>
            </TabsTrigger>
            <TabsTrigger value="agency" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Agency</span>
            </TabsTrigger>
          </TabsList>
          {Object.entries(workflows).map(([role, steps]) => (
            <TabsContent key={role} value={role} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <RippleCard
                    key={step.step}
                    className="p-6 bg-background border rounded-lg"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {step.step}
                      </div>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex justify-center mt-4">
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </RippleCard>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// Platform Benefits Section
const PlatformBenefitsSection = () => {
  const benefits = [
    {
      title: "For Creators",
      subtitle: "Monetize your influence",
      features: [
        "Paid + Barter campaigns",
        "Direct dashboard uploads",
        "Performance insights",
        "Secure payments",
      ],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "For Brands",
      subtitle: "Find perfect creators",
      features: [
        "Advanced creator filters",
        "Escrow-protected payments",
        "Content approval flow",
        "Campaign analytics",
      ],
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "For Agencies",
      subtitle: "Scale your operations",
      features: [
        "Manage 100+ creators",
        "Bulk campaign management",
        "White-label dashboards",
        "Advanced analytics",
      ],
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platform Benefits
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <RippleCard className="h-full">
                <Card className="h-full border-0 shadow-lg">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <p className="text-muted-foreground">{benefit.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </RippleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Creator Earnings Simulator
const CreatorEarningsSimulator = () => {
  const [followers, setFollowers] = useState("");
  const [platform, setPlatform] = useState("");
  const [niche, setNiche] = useState("");
  const [calculatedEarnings, setCalculatedEarnings] = useState(null);

  const calculateEarnings = () => {
    if (!followers || !platform || !niche) {
      return;
    }

    const followerCount = Number(followers);
    const baseRate =
      platform === "instagram" ? 0.5 : platform === "youtube" ? 2 : 0.3;
    const nicheMultiplier = niche === "beauty" ? 1.5 : niche === "tech" ? 2 : 1;
    const min = Math.floor(
      (followerCount / 1000) * baseRate * nicheMultiplier * 0.8,
    );
    const max = Math.floor(
      (followerCount / 1000) * baseRate * nicheMultiplier * 1.5,
    );

    setCalculatedEarnings({
      min: Math.max(min, 500),
      max: Math.max(max, 2000),
    });
  };

  const clearInputs = () => {
    setFollowers("");
    setPlatform("");
    setNiche("");
    setCalculatedEarnings(null);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Estimate Your Earnings
          </h2>
          <p className="text-xl text-muted-foreground">
            See your potential income as a creator
          </p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="followers">Follower Count</Label>
                <Input
                  id="followers"
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  placeholder="Enter follower count"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="platform">Platform</Label>
                <select
                  id="platform"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="">Select Platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                </select>
              </div>

              <div>
                <Label htmlFor="niche">Niche</Label>
                <select
                  id="niche"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="">Select Niche</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="beauty">Beauty</option>
                  <option value="tech">Tech</option>
                  <option value="fitness">Fitness</option>
                  <option value="food">Food</option>
                </select>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={calculateEarnings}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  disabled={!followers || !platform || !niche}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Calculate Earnings
                </Button>
                <Button
                  onClick={clearInputs}
                  variant="outline"
                  className="px-4"
                  disabled={!followers && !platform && !niche}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-lg p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">Estimated Earnings</h3>
                <p className="text-muted-foreground">Per post/campaign</p>
              </div>

              {calculatedEarnings ? (
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  ₹{calculatedEarnings.min.toLocaleString()} - ₹
                  {calculatedEarnings.max.toLocaleString()}
                </div>
              ) : (
                <div className="text-2xl text-muted-foreground mb-4">
                  Fill in details above and click Calculate
                </div>
              )}

              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/signup?role=creator">
                  Start Earning Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

// Trending Section
const TrendingSection = () => {
  const trendingData = {
    creators: [
      {
        name: "Rhea Kapoor",
        followers: "8.2K",
        engagement: "4.2%",
        category: "Beauty",
      },
      {
        name: "Rajat Singh",
        followers: "25K",
        engagement: "6.1%",
        category: "Fitness",
      },
      {
        name: "Sneha Patel",
        followers: "15K",
        engagement: "5.8%",
        category: "Fashion",
      },
    ],
    campaigns: [
      {
        title: "#GlowUpChallenge",
        payout: "₹25,000",
        brand: "BeautyBrand",
        applications: 45,
      },
      {
        title: "#FitnessGoals2024",
        payout: "₹18,000",
        brand: "HealthCorp",
        applications: 32,
      },
      {
        title: "#StyleStatement",
        payout: "₹30,000",
        brand: "FashionHub",
        applications: 67,
      },
    ],
    brands: [
      { name: "GlowCo", campaigns: 12, rating: 4.8 },
      { name: "FitLife", campaigns: 8, rating: 4.9 },
      { name: "StyleBox", campaigns: 15, rating: 4.7 },
    ],
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
          <p className="text-xl text-muted-foreground">
            Real-time platform activity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Creators */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Top Creators This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingData.creators.map((creator, index) => (
                <div
                  key={creator.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{creator.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {creator.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{creator.followers}</p>
                    <p className="text-sm text-muted-foreground">
                      {creator.engagement} ER
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Highest Paying Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Highest Paying Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingData.campaigns.map((campaign) => (
                <div
                  key={campaign.title}
                  className="border-b pb-3 last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{campaign.title}</h4>
                    <Badge variant="secondary">{campaign.payout}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{campaign.brand}</span>
                    <span>{campaign.applications} applications</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Most Active Brands */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Most Active Brands
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingData.brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{brand.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {brand.campaigns} active campaigns
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{brand.rating}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Creator Gallery
// Creator Gallery Section
const CreatorGallerySection = () => {
  const { isAuthenticated } = useAuth();

  const creators = [
    {
      name: "Rhea Kapoor",
      followers: "8.2K",
      engagement: "4.2%",
      category: "Beauty",
      avatar: "/api/placeholder/150/150",
    },
    {
      name: "Rajat Singh",
      followers: "25K",
      engagement: "6.1%",
      category: "Fitness",
      avatar: "/api/placeholder/150/150",
    },
    {
      name: "Sneha Patel",
      followers: "15K",
      engagement: "5.8%",
      category: "Fashion",
      avatar: "/api/placeholder/150/150",
    },
    {
      name: "Arjun Mehta",
      followers: "12K",
      engagement: "7.2%",
      category: "Tech",
      avatar: "/api/placeholder/150/150",
    },
    {
      name: "Priya Sharma",
      followers: "18K",
      engagement: "5.5%",
      category: "Food",
      avatar: "/api/placeholder/150/150",
    },
    {
      name: "Kiran Kumar",
      followers: "22K",
      engagement: "4.8%",
      category: "Travel",
      avatar: "/api/placeholder/150/150",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Top Creators
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with verified influencers across categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {creators.map((creator) => (
            <RippleCard key={creator.name} className="group">
              <Card className="transition-all duration-300 group-hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={creator.avatar} alt={creator.name} />
                    <AvatarFallback>
                      {creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-2">{creator.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {creator.category}
                  </Badge>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-semibold">{creator.followers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{creator.engagement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RippleCard>
          ))}
        </div>

        <div className="text-center">
          {isAuthenticated ? (
            <Button size="lg" variant="outline" asChild>
              <Link to="/creator/discover-campaigns">
                Discover More Creators
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button size="lg" variant="outline" asChild>
              <Link to="/login?role=brand" className="relative">
                🔒 Login to View Creators
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "How does escrow work?",
      answer:
        "Escrow ensures secure payments. Brands deposit funds when posting campaigns, and creators get paid after successful content delivery and approval.",
    },
    {
      question: "What if the creator doesn't post?",
      answer:
        "We have a robust dispute resolution system. If deliverables aren't met within agreed timeframes, brands can request refunds through our support team.",
    },
    {
      question: "Can brands do barter-only deals?",
      answer:
        "Yes! Brands can offer product-only collaborations, paid campaigns, or a combination of both. Creators can filter campaigns based on their preferences.",
    },
    {
      question: "Can agencies invite their own creators?",
      answer:
        "Absolutely. Agency accounts can invite existing creators to join their roster and manage campaigns collectively with enhanced dashboard features.",
    },
    {
      question: "What are the platform fees?",
      answer:
        "Creator access is completely free. Brands pay a small platform fee only on successful campaigns. Agencies have custom pricing based on their needs.",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Main Homepage Component
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueMetricsSection />
      <HowItWorksSection />
      <PlatformBenefitsSection />
      <CreatorEarningsSimulator />
      <TrendingSection />
      <CreatorGallerySection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
