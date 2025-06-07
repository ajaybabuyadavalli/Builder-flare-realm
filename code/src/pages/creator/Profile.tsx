import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import {
  User,
  Camera,
  Edit,
  Save,
  X,
  Plus,
  Instagram,
  Youtube,
  Globe,
  MapPin,
  Calendar,
  Star,
  Eye,
  Heart,
  MessageSquare,
  Upload,
  RefreshCw,
  Settings,
  Shield,
  Award,
  TrendingUp,
  Link as LinkIcon,
  Quote,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const CreatorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<"public" | "brand" | "private">(
    "public",
  );
  const [profileData, setProfileData] = useState({
    name: "Ajay Kumar",
    bio: "Fitness enthusiast and wellness coach helping people transform their lives through sustainable fitness and nutrition.",
    location: "Mumbai, India",
    email: "ajay@example.com",
    phone: "+91 98765 43210",
    website: "https://ajayfitnesscoach.com",
    instagram: "@ajay_fitnesscoach",
    youtube: "@AjayFitnessChannel",
    followers: {
      instagram: 28500,
      youtube: 12300,
      total: 40800,
    },
    categories: ["Fitness", "Wellness", "Nutrition"],
    languages: ["English", "Hindi"],
    isPublic: true,
    isVerified: true,
    influbazzarScore: 84,
  });

  const [contentPortfolio] = useState([
    {
      id: 1,
      type: "reel",
      title: "Morning Workout Routine",
      platform: "Instagram",
      thumbnail: "/api/placeholder/200/300",
      stats: { views: 15200, likes: 890, comments: 67 },
      date: "2024-01-15",
      campaign: "FitnessGoals 2024",
    },
    {
      id: 2,
      type: "video",
      title: "30-Day Transformation Guide",
      platform: "YouTube",
      thumbnail: "/api/placeholder/200/300",
      stats: { views: 25400, likes: 1200, comments: 156 },
      date: "2024-01-10",
      campaign: "ProteinWorld Campaign",
    },
    {
      id: 3,
      type: "post",
      title: "Healthy Meal Prep Ideas",
      platform: "Instagram",
      thumbnail: "/api/placeholder/200/300",
      stats: { views: 8900, likes: 445, comments: 23 },
      date: "2024-01-08",
      campaign: "NutriLife Collaboration",
    },
    {
      id: 4,
      type: "story",
      title: "Daily Motivation Series",
      platform: "Instagram",
      thumbnail: "/api/placeholder/200/300",
      stats: { views: 5600, likes: 234, comments: 12 },
      date: "2024-01-05",
      campaign: "MindfulLiving",
    },
  ]);

  const [testimonials] = useState([
    {
      id: 1,
      brand: "ProteinWorld",
      quote:
        "Ajay's authentic approach to fitness content delivered exceptional results for our campaign. His engagement rates consistently exceeded expectations.",
      rating: 5,
      campaign: "Summer Fitness Challenge",
      date: "2024-01-10",
    },
    {
      id: 2,
      brand: "NutriLife",
      quote:
        "Professional, punctual, and passionate about what he does. The content quality was outstanding and perfectly aligned with our brand values.",
      rating: 5,
      campaign: "Healthy Living Series",
      date: "2023-12-15",
    },
    {
      id: 3,
      brand: "MindfulLiving",
      quote:
        "Great collaboration! Ajay understood our brand message and created content that truly resonated with our target audience.",
      rating: 5,
      campaign: "Wellness Wednesday",
      date: "2023-11-20",
    },
  ]);

  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated!",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleSyncContent = () => {
    toast({
      title: "Content synced!",
      description:
        "Latest content has been imported from your social accounts.",
    });
  };

  const getViewModeLabel = (mode: string) => {
    switch (mode) {
      case "public":
        return "Public View";
      case "brand":
        return "Brand View";
      case "private":
        return "Private View";
      default:
        return "Public View";
    }
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video":
        return Youtube;
      case "reel":
        return Camera;
      case "post":
        return Instagram;
      case "story":
        return MessageSquare;
      default:
        return Camera;
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Creator Profile
              </h1>
              <p className="text-muted-foreground">
                Manage your public presence and showcase your work
              </p>
            </div>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <Label htmlFor="view-mode" className="text-sm">
                  Preview as:
                </Label>
                <select
                  id="view-mode"
                  value={viewMode}
                  onChange={(e) =>
                    setViewMode(
                      e.target.value as "public" | "brand" | "private",
                    )
                  }
                  className="px-3 py-1 border border-border rounded-md bg-background text-sm"
                >
                  <option value="public">Public</option>
                  <option value="brand">Brand</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <Button
                variant={isEditing ? "destructive" : "outline"}
                onClick={() =>
                  isEditing ? setIsEditing(false) : setIsEditing(true)
                }
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>

              {isEditing && (
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <RippleCard>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <Avatar className="w-24 h-24 mx-auto">
                          <AvatarImage
                            src="/api/placeholder/150/150"
                            alt={profileData.name}
                          />
                          <AvatarFallback>
                            {profileData.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {isEditing && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2"
                          >
                            <Camera className="w-3 h-3" />
                          </Button>
                        )}
                      </div>

                      <div className="space-y-3">
                        {isEditing ? (
                          <Input
                            value={profileData.name}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                name: e.target.value,
                              })
                            }
                            className="text-center font-semibold"
                          />
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <h2 className="text-xl font-semibold">
                              {profileData.name}
                            </h2>
                            {profileData.isVerified && (
                              <CheckCircle className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-center space-x-2">
                          <Star className="w-4 h-4 text-purple-600" />
                          <span className="font-medium">
                            Influbazzar Score: {profileData.influbazzarScore}
                          </span>
                        </div>

                        {isEditing ? (
                          <Textarea
                            value={profileData.bio}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                bio: e.target.value,
                              })
                            }
                            placeholder="Tell brands about yourself..."
                            rows={3}
                          />
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {profileData.bio}
                          </p>
                        )}

                        <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{profileData.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Audience Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="font-bold text-lg">
                          {profileData.followers.total.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Total Followers
                        </div>
                      </div>
                      <div className="text-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <div className="font-bold text-lg">4.2%</div>
                        <div className="text-xs text-muted-foreground">
                          Avg Engagement
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Instagram className="w-4 h-4 text-pink-600" />
                          <span className="text-sm">Instagram</span>
                        </div>
                        <span className="font-medium">
                          {profileData.followers.instagram.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Youtube className="w-4 h-4 text-red-600" />
                          <span className="text-sm">YouTube</span>
                        </div>
                        <span className="font-medium">
                          {profileData.followers.youtube.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Categories & Settings */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Categories & Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Content Categories
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.categories.map((category) => (
                          <Badge key={category} variant="secondary">
                            {category}
                          </Badge>
                        ))}
                        {isEditing && (
                          <Button size="sm" variant="outline" className="h-6">
                            <Plus className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Languages
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.languages.map((language) => (
                          <Badge key={language} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="space-y-1">
                        <Label className="text-sm font-medium">
                          Profile Visibility
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Allow brands to discover you
                        </p>
                      </div>
                      <Switch
                        checked={profileData.isPublic}
                        onCheckedChange={(checked) =>
                          setProfileData({ ...profileData, isPublic: checked })
                        }
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Content & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact & Links */}
              {(viewMode === "brand" || viewMode === "private") && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact & Links</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Email</Label>
                          {isEditing ? (
                            <Input
                              value={profileData.email}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  email: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-muted-foreground">
                              {profileData.email}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          {isEditing ? (
                            <Input
                              value={profileData.phone}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-muted-foreground">
                              {profileData.phone}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>Website</Label>
                          {isEditing ? (
                            <Input
                              value={profileData.website}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  website: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <a
                              href={profileData.website}
                              className="text-purple-600 hover:underline text-sm"
                            >
                              {profileData.website}
                            </a>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label>Instagram</Label>
                          {isEditing ? (
                            <Input
                              value={profileData.instagram}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  instagram: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-muted-foreground">
                              {profileData.instagram}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Content Portfolio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Camera className="w-5 h-5 mr-2" />
                        Content Portfolio
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleSyncContent}
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Sync Content
                        </Button>
                        {isEditing && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-pink-600"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Content
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {contentPortfolio.map((content, index) => {
                        const ContentIcon = getContentIcon(content.type);

                        return (
                          <motion.div
                            key={content.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <RippleCard>
                              <div className="relative group">
                                <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-lg overflow-hidden">
                                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                    <ContentIcon className="w-12 h-12 text-muted-foreground" />
                                  </div>

                                  {/* Overlay */}
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button size="sm" variant="secondary">
                                      <Eye className="w-4 h-4 mr-2" />
                                      View
                                    </Button>
                                  </div>
                                </div>

                                <div className="p-3">
                                  <h4 className="font-medium text-sm mb-1">
                                    {content.title}
                                  </h4>
                                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                                    <span>{content.platform}</span>
                                    <span>
                                      {new Date(
                                        content.date,
                                      ).toLocaleDateString()}
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2 text-xs">
                                    <div className="flex items-center">
                                      <Eye className="w-3 h-3 mr-1" />
                                      <span>
                                        {content.stats.views.toLocaleString()}
                                      </span>
                                    </div>
                                    <div className="flex items-center">
                                      <Heart className="w-3 h-3 mr-1" />
                                      <span>{content.stats.likes}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <MessageSquare className="w-3 h-3 mr-1" />
                                      <span>{content.stats.comments}</span>
                                    </div>
                                  </div>

                                  {content.campaign && (
                                    <Badge
                                      variant="outline"
                                      className="mt-2 text-xs"
                                    >
                                      {content.campaign}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </RippleCard>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonials */}
              {(viewMode === "brand" || viewMode === "public") && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <Quote className="w-5 h-5 mr-2" />
                          Brand Testimonials
                        </CardTitle>
                        {isEditing && (
                          <Button size="sm" variant="outline">
                            Request Reviews
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {testimonials.map((testimonial) => (
                          <RippleCard key={testimonial.id}>
                            <div className="p-4 border rounded-lg">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="font-semibold">
                                    {testimonial.brand}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {testimonial.campaign}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(testimonial.rating)].map(
                                    (_, i) => (
                                      <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-500 fill-current"
                                      />
                                    ),
                                  )}
                                </div>
                              </div>
                              <p className="text-muted-foreground text-sm italic">
                                "{testimonial.quote}"
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                {new Date(
                                  testimonial.date,
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </RippleCard>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatorProfile;