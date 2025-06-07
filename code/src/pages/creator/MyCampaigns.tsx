import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  Upload,
  Eye,
  MessageSquare,
  Star,
  Award,
  Target,
  ArrowRight,
  FileText,
  Image,
  Video,
  Link as LinkIcon,
  AlertCircle,
  RefreshCw,
  Download,
  Send,
  Users,
  TrendingUp,
} from "lucide-react";

const MyCampaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const campaigns = [
    {
      id: 1,
      title: "Summer Glow Skincare Campaign",
      brand: "GlowCo Beauty",
      status: "approved",
      payment: 2500,
      appliedDate: "2024-01-10",
      dueDate: "2024-01-20",
      platform: "Instagram",
      progress: 85,
      deliverables: [
        {
          type: "reel",
          title: "Skincare Routine Reel",
          status: "pending",
          dueDate: "2024-01-18",
        },
        {
          type: "story",
          title: "Product Stories",
          status: "completed",
          dueDate: "2024-01-15",
        },
        {
          type: "post",
          title: "Before/After Post",
          status: "pending",
          dueDate: "2024-01-20",
        },
      ],
      brief:
        "Create authentic content showcasing the summer skincare routine featuring our glow serum and sunscreen. Focus on morning routine and natural lighting.",
      requirements: ["Minimum 5K followers", "Beauty niche", "High engagement"],
      submissions: [
        {
          type: "story",
          url: "#",
          views: 1200,
          likes: 89,
          comments: 12,
          submittedDate: "2024-01-15",
        },
      ],
      messages: 3,
      lastMessage: "Great work on the stories! Looking forward to the reel.",
    },
    {
      id: 2,
      title: "Fitness Challenge 2024",
      brand: "ProteinWorld",
      status: "submitted",
      payment: 3200,
      appliedDate: "2024-01-08",
      dueDate: "2024-01-25",
      platform: "YouTube",
      progress: 100,
      deliverables: [
        {
          type: "video",
          title: "30-Day Challenge Video",
          status: "completed",
          dueDate: "2024-01-22",
        },
        {
          type: "post",
          title: "Progress Update Post",
          status: "completed",
          dueDate: "2024-01-20",
        },
        {
          type: "story",
          title: "Daily Workout Stories",
          status: "completed",
          dueDate: "2024-01-25",
        },
      ],
      brief:
        "Document your 30-day fitness transformation journey using our protein supplements. Include before/after photos and workout videos.",
      requirements: ["Fitness content", "Consistent posting", "Honest reviews"],
      submissions: [
        {
          type: "video",
          url: "#",
          views: 5400,
          likes: 312,
          comments: 45,
          submittedDate: "2024-01-22",
        },
        {
          type: "post",
          url: "#",
          views: 2100,
          likes: 156,
          comments: 23,
          submittedDate: "2024-01-20",
        },
      ],
      messages: 1,
      lastMessage: "Content submitted for review. Excellent work!",
    },
    {
      id: 3,
      title: "Tech Review Series",
      brand: "GadgetPro",
      status: "paid",
      payment: 4500,
      appliedDate: "2023-12-15",
      dueDate: "2024-01-05",
      platform: "YouTube",
      progress: 100,
      deliverables: [
        {
          type: "video",
          title: "Unboxing Video",
          status: "completed",
          dueDate: "2023-12-28",
        },
        {
          type: "video",
          title: "Detailed Review",
          status: "completed",
          dueDate: "2024-01-03",
        },
        {
          type: "post",
          title: "Comparison Post",
          status: "completed",
          dueDate: "2024-01-05",
        },
      ],
      brief:
        "Comprehensive review of our latest smartphone including unboxing, features demo, and honest pros/cons analysis.",
      requirements: [
        "Tech expertise",
        "Professional video quality",
        "Unbiased review",
      ],
      submissions: [
        {
          type: "video",
          url: "#",
          views: 12500,
          likes: 890,
          comments: 156,
          submittedDate: "2023-12-28",
        },
        {
          type: "video",
          url: "#",
          views: 8900,
          likes: 654,
          comments: 89,
          submittedDate: "2024-01-03",
        },
      ],
      messages: 5,
      lastMessage: "Payment released! Thanks for the amazing content.",
    },
    {
      id: 4,
      title: "Sustainable Fashion Movement",
      brand: "EcoWear",
      status: "applied",
      payment: 0,
      appliedDate: "2024-01-12",
      dueDate: "2024-01-22",
      platform: "Instagram",
      progress: 0,
      deliverables: [
        {
          type: "video",
          title: "Styling Video",
          status: "pending",
          dueDate: "2024-01-20",
        },
        {
          type: "post",
          title: "Sustainability Message",
          status: "pending",
          dueDate: "2024-01-22",
        },
      ],
      brief:
        "Promote sustainable fashion with styling tips using our eco-friendly clothing line. Emphasize environmental benefits.",
      requirements: [
        "Sustainability passion",
        "Fashion content",
        "Authentic messaging",
      ],
      submissions: [],
      messages: 0,
      lastMessage: "Application submitted. Awaiting brand response.",
    },
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      applied: {
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
        label: "Applied",
        icon: Clock,
      },
      approved: {
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        label: "Approved",
        icon: CheckCircle,
      },
      submitted: {
        color:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
        label: "Submitted",
        icon: Upload,
      },
      paid: {
        color:
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
        label: "Paid",
        icon: DollarSign,
      },
    };
    return configs[status as keyof typeof configs] || configs.applied;
  };

  const getDeliverableIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "post":
        return Image;
      case "story":
        return MessageSquare;
      case "reel":
        return Video;
      default:
        return FileText;
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab = selectedTab === "all" || campaign.status === selectedTab;
    const matchesBrand =
      selectedBrand === "all" || campaign.brand === selectedBrand;
    const matchesPlatform =
      selectedPlatform === "all" || campaign.platform === selectedPlatform;

    return matchesSearch && matchesTab && matchesBrand && matchesPlatform;
  });

  const brands = [...new Set(campaigns.map((c) => c.brand))];
  const platforms = [...new Set(campaigns.map((c) => c.platform))];

  const statusCounts = {
    all: campaigns.length,
    applied: campaigns.filter((c) => c.status === "applied").length,
    approved: campaigns.filter((c) => c.status === "approved").length,
    submitted: campaigns.filter((c) => c.status === "submitted").length,
    paid: campaigns.filter((c) => c.status === "paid").length,
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
                  My Campaigns
                </h1>
                <p className="text-muted-foreground">
                  Track and manage all your campaign collaborations
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Target className="w-4 h-4 mr-2" />
                  Discover New Campaigns
                </Button>
              </div>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search campaigns or brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex space-x-2">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">All Platforms</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Status Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger
                    value="all"
                    className="flex items-center space-x-2"
                  >
                    <span>All</span>
                    <Badge variant="secondary">{statusCounts.all}</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="applied"
                    className="flex items-center space-x-2"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Applied</span>
                    <Badge variant="secondary">{statusCounts.applied}</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="approved"
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Approved</span>
                    <Badge variant="secondary">{statusCounts.approved}</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="submitted"
                    className="flex items-center space-x-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Submitted</span>
                    <Badge variant="secondary">{statusCounts.submitted}</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="paid"
                    className="flex items-center space-x-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>Paid</span>
                    <Badge variant="secondary">{statusCounts.paid}</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Campaign List */}
            <div className="space-y-4">
              {filteredCampaigns.map((campaign, index) => {
                const statusConfig = getStatusConfig(campaign.status);

                return (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <RippleCard>
                      <Card className="hover:shadow-lg transition-shadow">
                        <Accordion type="single" collapsible>
                          <AccordionItem
                            value={`campaign-${campaign.id}`}
                            className="border-none"
                          >
                            <AccordionTrigger className="hover:no-underline p-6">
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-4">
                                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                    <statusConfig.icon className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="text-left">
                                    <h3 className="font-semibold text-lg">
                                      {campaign.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                      {campaign.brand} • {campaign.platform}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                  <div className="text-right">
                                    <div className="font-semibold text-green-600">
                                      {campaign.payment > 0
                                        ? `₹${campaign.payment}`
                                        : "Barter"}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      Due:{" "}
                                      {new Date(
                                        campaign.dueDate,
                                      ).toLocaleDateString()}
                                    </div>
                                  </div>

                                  <Badge className={statusConfig.color}>
                                    {statusConfig.label}
                                  </Badge>
                                </div>
                              </div>
                            </AccordionTrigger>

                            <AccordionContent>
                              <div className="px-6 pb-6 space-y-6">
                                {/* Progress Bar */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                      Progress
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      {campaign.progress}%
                                    </span>
                                  </div>
                                  <Progress
                                    value={campaign.progress}
                                    className="h-2"
                                  />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  {/* Campaign Details */}
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">
                                      Campaign Brief
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                      {campaign.brief}
                                    </p>

                                    <div>
                                      <h5 className="font-medium mb-2">
                                        Requirements
                                      </h5>
                                      <ul className="space-y-1">
                                        {campaign.requirements.map(
                                          (req, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-center text-sm"
                                            >
                                              <CheckCircle className="w-3 h-3 mr-2 text-green-600" />
                                              {req}
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  </div>

                                  {/* Deliverables */}
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <h4 className="font-semibold">
                                        Deliverables
                                      </h4>
                                      {campaign.status === "approved" && (
                                        <Button
                                          size="sm"
                                          className="bg-gradient-to-r from-purple-600 to-pink-600"
                                        >
                                          <Upload className="w-4 h-4 mr-2" />
                                          Upload Content
                                        </Button>
                                      )}
                                    </div>

                                    <div className="space-y-3">
                                      {campaign.deliverables.map(
                                        (deliverable, idx) => {
                                          const DeliverableIcon =
                                            getDeliverableIcon(
                                              deliverable.type,
                                            );
                                          return (
                                            <div
                                              key={idx}
                                              className="flex items-center justify-between p-3 border rounded-lg"
                                            >
                                              <div className="flex items-center space-x-3">
                                                <DeliverableIcon className="w-4 h-4 text-muted-foreground" />
                                                <div>
                                                  <p className="font-medium text-sm">
                                                    {deliverable.title}
                                                  </p>
                                                  <p className="text-xs text-muted-foreground">
                                                    Due:{" "}
                                                    {new Date(
                                                      deliverable.dueDate,
                                                    ).toLocaleDateString()}
                                                  </p>
                                                </div>
                                              </div>

                                              <Badge
                                                variant={
                                                  deliverable.status ===
                                                  "completed"
                                                    ? "default"
                                                    : "secondary"
                                                }
                                              >
                                                {deliverable.status}
                                              </Badge>
                                            </div>
                                          );
                                        },
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Submissions */}
                                {campaign.submissions.length > 0 && (
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">
                                      Submitted Content
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {campaign.submissions.map(
                                        (submission, idx) => (
                                          <div
                                            key={idx}
                                            className="p-4 border rounded-lg"
                                          >
                                            <div className="flex items-center justify-between mb-3">
                                              <h5 className="font-medium capitalize">
                                                {submission.type}
                                              </h5>
                                              <Badge variant="outline">
                                                Submitted
                                              </Badge>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4 text-sm">
                                              <div className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1 text-muted-foreground" />
                                                <span>
                                                  {submission.views.toLocaleString()}
                                                </span>
                                              </div>
                                              <div className="flex items-center">
                                                <TrendingUp className="w-3 h-3 mr-1 text-muted-foreground" />
                                                <span>{submission.likes}</span>
                                              </div>
                                              <div className="flex items-center">
                                                <MessageSquare className="w-3 h-3 mr-1 text-muted-foreground" />
                                                <span>
                                                  {submission.comments}
                                                </span>
                                              </div>
                                            </div>

                                            <p className="text-xs text-muted-foreground mt-2">
                                              Submitted:{" "}
                                              {new Date(
                                                submission.submittedDate,
                                              ).toLocaleDateString()}
                                            </p>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between pt-4 border-t">
                                  <div className="flex items-center space-x-4">
                                    <Button variant="outline" size="sm">
                                      <MessageSquare className="w-4 h-4 mr-2" />
                                      Messages ({campaign.messages})
                                    </Button>

                                    {campaign.status === "paid" && (
                                      <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Invoice
                                      </Button>
                                    )}
                                  </div>

                                  <div className="flex items-center space-x-2">
                                    {campaign.status === "submitted" && (
                                      <Button variant="outline" size="sm">
                                        <RefreshCw className="w-4 h-4 mr-2" />
                                        Update Submission
                                      </Button>
                                    )}

                                    <Button
                                      size="sm"
                                      className="bg-gradient-to-r from-purple-600 to-pink-600"
                                    >
                                      View Details
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </Card>
                    </RippleCard>
                  </motion.div>
                );
              })}
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
                  <Target className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">No campaigns found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm
                    ? "Try adjusting your search terms"
                    : "You haven't applied to any campaigns yet"}
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Target className="w-4 h-4 mr-2" />
                  Discover Campaigns
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyCampaigns;
