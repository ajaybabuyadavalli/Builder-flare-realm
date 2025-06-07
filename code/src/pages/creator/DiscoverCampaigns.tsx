import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  Search,
  Filter,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Target,
  MapPin,
  Calendar,
  Instagram,
  Youtube,
  Camera,
  Star,
  Heart,
  MessageSquare,
  Eye,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Gift,
  CreditCard,
  Globe,
  Zap,
  Award,
  Sparkles,
} from "lucide-react";

const DiscoverCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("trending");
  const [filters, setFilters] = useState({
    platform: [],
    niche: [],
    language: [],
    campaignType: [],
    followerRange: [1000, 1000000],
    region: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter"];
  const niches = [
    "Beauty",
    "Fashion",
    "Fitness",
    "Food",
    "Tech",
    "Travel",
    "Lifestyle",
    "Gaming",
  ];
  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Bengali",
    "Marathi",
  ];
  const campaignTypes = ["Paid", "Barter", "Collaboration"];
  const regions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
  ];

  const campaigns = [
    {
      id: 1,
      title: "Summer Glow Skincare Campaign",
      brand: "GlowCo Beauty",
      logo: "/api/placeholder/60/60",
      budget: 2500,
      type: "paid",
      timeline: "7 days",
      platform: ["Instagram"],
      niche: "Beauty",
      followers: { min: 5000, max: 50000 },
      applications: 24,
      description:
        "Create authentic skincare routine content featuring our summer collection",
      requirements: [
        "Minimum 5K Instagram followers",
        "Beauty/skincare niche",
        "High engagement rate (>3%)",
        "Professional photography",
      ],
      deliverables: ["1 Instagram Reel", "2 Instagram Stories", "1 Feed Post"],
      eligibile: true,
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: "Fitness Challenge 2024",
      brand: "ProteinWorld",
      logo: "/api/placeholder/60/60",
      budget: 3200,
      type: "paid",
      timeline: "14 days",
      platform: ["Instagram", "YouTube"],
      niche: "Fitness",
      followers: { min: 10000, max: 100000 },
      applications: 18,
      description: "Join our 30-day fitness transformation challenge",
      requirements: [
        "Minimum 10K followers",
        "Fitness content creator",
        "Daily workout posting capability",
      ],
      deliverables: [
        "3 YouTube Videos",
        "Daily Instagram Stories",
        "Weekly Progress Posts",
      ],
      eligibile: true,
      featured: false,
      trending: true,
    },
    {
      id: 3,
      title: "Tech Review Series",
      brand: "GadgetPro",
      logo: "/api/placeholder/60/60",
      budget: 4500,
      type: "paid",
      timeline: "21 days",
      platform: ["YouTube", "Instagram"],
      niche: "Tech",
      followers: { min: 15000, max: 200000 },
      applications: 12,
      description: "Comprehensive review of our latest smartphone collection",
      requirements: [
        "Tech content focus",
        "Professional video quality",
        "Honest review approach",
      ],
      deliverables: [
        "1 Detailed YouTube Review",
        "Instagram Unboxing Stories",
        "Comparison Post",
      ],
      eligibile: false,
      featured: true,
      trending: false,
    },
    {
      id: 4,
      title: "Sustainable Fashion Movement",
      brand: "EcoWear",
      logo: "/api/placeholder/60/60",
      budget: 0,
      type: "barter",
      timeline: "10 days",
      platform: ["Instagram", "TikTok"],
      niche: "Fashion",
      followers: { min: 3000, max: 30000 },
      applications: 31,
      description:
        "Promote sustainable fashion with our eco-friendly clothing line",
      requirements: [
        "Passion for sustainability",
        "Fashion content creation",
        "Authentic storytelling",
      ],
      deliverables: [
        "Styling Video",
        "Sustainability Message Post",
        "Stories Series",
      ],
      eligibile: true,
      featured: false,
      trending: false,
    },
    {
      id: 5,
      title: "Food Festival Coverage",
      brand: "TasteHub",
      logo: "/api/placeholder/60/60",
      budget: 1800,
      type: "paid",
      timeline: "3 days",
      platform: ["Instagram"],
      niche: "Food",
      followers: { min: 8000, max: 80000 },
      applications: 45,
      description:
        "Cover the biggest food festival in Mumbai with live content",
      requirements: [
        "Mumbai-based creator",
        "Food content specialization",
        "Available for event dates",
      ],
      deliverables: [
        "Live Instagram Stories",
        "Reel Compilation",
        "Event Highlights Post",
      ],
      eligibile: true,
      featured: false,
      trending: true,
    },
    {
      id: 6,
      title: "Gaming Tournament Stream",
      brand: "GameZone",
      logo: "/api/placeholder/60/60",
      budget: 5000,
      type: "paid",
      timeline: "5 days",
      platform: ["YouTube", "Instagram"],
      niche: "Gaming",
      followers: { min: 20000, max: 500000 },
      applications: 15,
      description: "Stream and create content around our esports tournament",
      requirements: [
        "Gaming content focus",
        "Live streaming experience",
        "Engaging commentary",
      ],
      deliverables: [
        "Tournament Live Stream",
        "Highlight Reels",
        "Player Interview Content",
      ],
      eligibile: false,
      featured: true,
      trending: false,
    },
  ];

  const toggleFilter = (category: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].includes(value)
        ? (prev[category as keyof typeof prev] as string[]).filter(
            (item: string) => item !== value,
          )
        : [...(prev[category as keyof typeof prev] as string[]), value],
    }));
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.niche.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPlatform =
      filters.platform.length === 0 ||
      filters.platform.some((p) => campaign.platform.includes(p));

    const matchesNiche =
      filters.niche.length === 0 || filters.niche.includes(campaign.niche);

    const matchesType =
      filters.campaignType.length === 0 ||
      filters.campaignType.includes(campaign.type);

    const matchesTab =
      selectedTab === "trending"
        ? campaign.trending
        : selectedTab === "newest"
          ? true
          : selectedTab === "beta"
            ? campaign.featured
            : true;

    return (
      matchesSearch &&
      matchesPlatform &&
      matchesNiche &&
      matchesType &&
      matchesTab
    );
  });

  const CampaignCard = ({ campaign }: { campaign: any }) => (
    <RippleCard>
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg ${
          campaign.featured ? "ring-2 ring-purple-200 dark:ring-purple-800" : ""
        }`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg leading-tight">
                  {campaign.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {campaign.brand}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-1">
              {campaign.featured && (
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              {campaign.trending && (
                <Badge
                  variant="outline"
                  className="border-orange-500 text-orange-600"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm">
            {campaign.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                {campaign.type === "paid" ? (
                  <>
                    <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-semibold text-green-600">
                      ₹{campaign.budget}
                    </span>
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 mr-1 text-purple-600" />
                    <span className="font-semibold text-purple-600">
                      Barter
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>{campaign.timeline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="w-4 h-4 mr-1" />
                <span>{campaign.applications} applied</span>
              </div>
              <Badge variant="secondary">{campaign.niche}</Badge>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {campaign.platform.map((platform: string) => (
              <Badge key={platform} variant="outline" className="text-xs">
                {platform === "Instagram" && (
                  <Instagram className="w-3 h-3 mr-1" />
                )}
                {platform === "YouTube" && <Youtube className="w-3 h-3 mr-1" />}
                {platform === "TikTok" && <Camera className="w-3 h-3 mr-1" />}
                {platform}
              </Badge>
            ))}
          </div>

          <div className="pt-4 border-t space-y-3">
            <div
              className={`flex items-center text-sm ${
                campaign.eligibile ? "text-green-600" : "text-orange-600"
              }`}
            >
              {campaign.eligibile ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>You're eligible to apply</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>Check requirements</span>
                </>
              )}
            </div>

            <div className="flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{campaign.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">
                          {campaign.brand}
                        </h3>
                        <p className="text-muted-foreground">
                          {campaign.niche} Campaign
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Campaign Description
                        </h4>
                        <p className="text-muted-foreground">
                          {campaign.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {campaign.requirements.map(
                            (req: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                {req}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Deliverables</h4>
                        <ul className="space-y-1">
                          {campaign.deliverables.map(
                            (deliverable: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <ArrowRight className="w-4 h-4 mr-2 text-purple-600" />
                                {deliverable}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                size="sm"
                className={`flex-1 ${
                  campaign.eligibile
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!campaign.eligibile}
              >
                {campaign.eligibile ? "Apply Now" : "Not Eligible"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </RippleCard>
  );

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Discover Campaigns
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Find Your Next Collaboration
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through hundreds of campaigns from premium brands looking
                for creators like you.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search campaigns, brands, or niches..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  {Object.values(filters).some((f) =>
                    Array.isArray(f) ? f.length > 0 : f,
                  ) && (
                    <Badge variant="secondary" className="ml-2">
                      Active
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Platform Filter */}
                      <div className="space-y-3">
                        <Label className="font-medium">Platform</Label>
                        <div className="flex flex-wrap gap-2">
                          {platforms.map((platform) => (
                            <Button
                              key={platform}
                              variant={
                                filters.platform.includes(platform)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => toggleFilter("platform", platform)}
                              className={
                                filters.platform.includes(platform)
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : ""
                              }
                            >
                              {platform}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Niche Filter */}
                      <div className="space-y-3">
                        <Label className="font-medium">Niche</Label>
                        <div className="flex flex-wrap gap-2">
                          {niches.map((niche) => (
                            <Button
                              key={niche}
                              variant={
                                filters.niche.includes(niche)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => toggleFilter("niche", niche)}
                              className={
                                filters.niche.includes(niche)
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : ""
                              }
                            >
                              {niche}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Campaign Type Filter */}
                      <div className="space-y-3">
                        <Label className="font-medium">Campaign Type</Label>
                        <div className="flex flex-wrap gap-2">
                          {campaignTypes.map((type) => (
                            <Button
                              key={type}
                              variant={
                                filters.campaignType.includes(type)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => toggleFilter("campaignType", type)}
                              className={
                                filters.campaignType.includes(type)
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                                  : ""
                              }
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Follower Range */}
                      <div className="space-y-3 md:col-span-2">
                        <Label className="font-medium">Follower Range</Label>
                        <Slider
                          value={filters.followerRange}
                          onValueChange={(value) =>
                            setFilters((prev) => ({
                              ...prev,
                              followerRange: value,
                            }))
                          }
                          max={1000000}
                          min={1000}
                          step={1000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>
                            {filters.followerRange[0].toLocaleString()}
                          </span>
                          <span>
                            {filters.followerRange[1].toLocaleString()}+
                          </span>
                        </div>
                      </div>

                      {/* Clear Filters */}
                      <div className="flex items-end">
                        <Button
                          variant="outline"
                          onClick={() =>
                            setFilters({
                              platform: [],
                              niche: [],
                              language: [],
                              campaignType: [],
                              followerRange: [1000, 1000000],
                              region: "",
                            })
                          }
                          className="w-full"
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </motion.div>

            {/* Campaign Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger
                    value="trending"
                    className="flex items-center space-x-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="newest"
                    className="flex items-center space-x-2"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Newest</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="beta"
                    className="flex items-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Featured</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Results Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-between"
            >
              <p className="text-muted-foreground">
                Showing {filteredCampaigns.length} campaigns
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Sort by:</span>
                <Button variant="ghost" size="sm">
                  Latest
                </Button>
                <Button variant="ghost" size="sm">
                  Budget
                </Button>
                <Button variant="ghost" size="sm">
                  Deadline
                </Button>
              </div>
            </motion.div>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <CampaignCard campaign={campaign} />
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredCampaigns.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">No campaigns found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or filters.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setFilters({
                      platform: [],
                      niche: [],
                      language: [],
                      campaignType: [],
                      followerRange: [1000, 1000000],
                      region: "",
                    });
                  }}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscoverCampaigns;
