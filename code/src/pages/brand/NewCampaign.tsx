import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Upload,
  Target,
  Users,
  Calendar,
  DollarSign,
  Camera,
  Video,
  Image,
  Hash,
  Globe,
  MapPin,
} from "lucide-react";

const NewCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [campaignData, setCampaignData] = useState({
    // Step 1: Campaign Basics
    name: "",
    objective: "",
    description: "",
    brandLogo: null,

    // Step 2: Creator Requirements
    platforms: [],
    followerRange: { min: 1000, max: 100000 },
    regions: [],
    languages: [],
    campaignType: "paid",
    maxBudgetPerCreator: 5000,

    // Step 3: Deliverables
    posts: 2,
    reels: 1,
    stories: 3,
    hashtags: "",
    mentions: "@glowco",
    guidelines: "",
    deadline: "",

    // Step 4: Budget & Launch
    totalBudget: 50000,
    campaignDuration: 30,
  });

  const objectives = [
    "Brand Awareness",
    "Product Launch",
    "Sales & Conversions",
    "Engagement",
    "User Generated Content",
    "Event Promotion",
  ];

  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter"];
  const regions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Ahmedabad",
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

  const handleInputChange = (field: string, value: any) => {
    setCampaignData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setCampaignData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item: string) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate campaign creation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Campaign Created Successfully! 🎉",
        description:
          "Your campaign is now live and creators can start applying.",
      });
      navigate("/brand/campaigns");
    }, 2000);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Campaign Basics";
      case 2:
        return "Creator Requirements";
      case 3:
        return "Deliverables & Guidelines";
      case 4:
        return "Review & Launch";
      default:
        return "Campaign Setup";
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          campaignData.name &&
          campaignData.objective &&
          campaignData.description
        );
      case 2:
        return (
          campaignData.platforms.length > 0 && campaignData.regions.length > 0
        );
      case 3:
        return (
          campaignData.deadline &&
          campaignData.posts + campaignData.reels + campaignData.stories > 0
        );
      case 4:
        return campaignData.totalBudget > 0;
      default:
        return false;
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => navigate("/brand/campaigns")}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Campaigns
                </Button>
                <div>
                  <h1 className="text-3xl font-bold">Create New Campaign</h1>
                  <p className="text-muted-foreground">
                    Step {currentStep} of 4: {getStepTitle()}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-24 h-1 ${
                          currentStep > step
                            ? "bg-gradient-to-r from-purple-600 to-pink-600"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / 4) * 100} className="h-2" />
            </motion.div>

            {/* Form Content */}
            <Card className="bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  {getStepTitle()}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Campaign Basics */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Campaign Name *
                      </label>
                      <Input
                        placeholder="e.g., Summer Skincare Routine"
                        value={campaignData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Campaign Objective *
                      </label>
                      <select
                        value={campaignData.objective}
                        onChange={(e) =>
                          handleInputChange("objective", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-background"
                      >
                        <option value="">Select objective</option>
                        {objectives.map((obj) => (
                          <option key={obj} value={obj}>
                            {obj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Campaign Description *
                      </label>
                      <textarea
                        placeholder="Describe your campaign goals, target audience, and key messaging..."
                        value={campaignData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-background h-24"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Brand Logo (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">
                          Upload your brand logo
                        </p>
                        <Button type="button" variant="outline" size="sm">
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Creator Requirements */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Platforms *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {platforms.map((platform) => (
                          <Button
                            key={platform}
                            type="button"
                            variant={
                              campaignData.platforms.includes(platform)
                                ? "default"
                                : "outline"
                            }
                            onClick={() =>
                              handleArrayToggle("platforms", platform)
                            }
                            className="justify-start"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            {platform}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Follower Range:{" "}
                        {campaignData.followerRange.min.toLocaleString()} -{" "}
                        {campaignData.followerRange.max.toLocaleString()}
                      </label>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm text-gray-600">
                            Minimum Followers
                          </label>
                          <input
                            type="range"
                            min="1000"
                            max="1000000"
                            step="1000"
                            value={campaignData.followerRange.min}
                            onChange={(e) =>
                              handleInputChange("followerRange", {
                                ...campaignData.followerRange,
                                min: parseInt(e.target.value),
                              })
                            }
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Maximum Followers
                          </label>
                          <input
                            type="range"
                            min="1000"
                            max="1000000"
                            step="1000"
                            value={campaignData.followerRange.max}
                            onChange={(e) =>
                              handleInputChange("followerRange", {
                                ...campaignData.followerRange,
                                max: parseInt(e.target.value),
                              })
                            }
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Target Regions *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {regions.map((region) => (
                          <Button
                            key={region}
                            type="button"
                            size="sm"
                            variant={
                              campaignData.regions.includes(region)
                                ? "default"
                                : "outline"
                            }
                            onClick={() => handleArrayToggle("regions", region)}
                          >
                            <MapPin className="w-3 h-3 mr-1" />
                            {region}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Languages
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {languages.map((language) => (
                          <Button
                            key={language}
                            type="button"
                            size="sm"
                            variant={
                              campaignData.languages.includes(language)
                                ? "default"
                                : "outline"
                            }
                            onClick={() =>
                              handleArrayToggle("languages", language)
                            }
                          >
                            {language}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Campaign Type
                        </label>
                        <select
                          value={campaignData.campaignType}
                          onChange={(e) =>
                            handleInputChange("campaignType", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-background"
                        >
                          <option value="paid">Paid Campaign</option>
                          <option value="barter">
                            Barter/Product Exchange
                          </option>
                          <option value="hybrid">Paid + Product</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Max Budget per Creator
                        </label>
                        <Input
                          type="number"
                          placeholder="5000"
                          value={campaignData.maxBudgetPerCreator}
                          onChange={(e) =>
                            handleInputChange(
                              "maxBudgetPerCreator",
                              parseInt(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Deliverables */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        Content Deliverables
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 border rounded-lg">
                          <Image className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                          <label className="block text-sm font-medium mb-2">
                            Posts
                          </label>
                          <Input
                            type="number"
                            min="0"
                            value={campaignData.posts}
                            onChange={(e) =>
                              handleInputChange(
                                "posts",
                                parseInt(e.target.value),
                              )
                            }
                            className="text-center"
                          />
                        </div>

                        <div className="text-center p-4 border rounded-lg">
                          <Video className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                          <label className="block text-sm font-medium mb-2">
                            Reels
                          </label>
                          <Input
                            type="number"
                            min="0"
                            value={campaignData.reels}
                            onChange={(e) =>
                              handleInputChange(
                                "reels",
                                parseInt(e.target.value),
                              )
                            }
                            className="text-center"
                          />
                        </div>

                        <div className="text-center p-4 border rounded-lg">
                          <Camera className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                          <label className="block text-sm font-medium mb-2">
                            Stories
                          </label>
                          <Input
                            type="number"
                            min="0"
                            value={campaignData.stories}
                            onChange={(e) =>
                              handleInputChange(
                                "stories",
                                parseInt(e.target.value),
                              )
                            }
                            className="text-center"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Required Hashtags
                        </label>
                        <Input
                          placeholder="#glowco #skincare #beauty"
                          value={campaignData.hashtags}
                          onChange={(e) =>
                            handleInputChange("hashtags", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Required Mentions
                        </label>
                        <Input
                          placeholder="@glowco @brandname"
                          value={campaignData.mentions}
                          onChange={(e) =>
                            handleInputChange("mentions", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Content Guidelines
                      </label>
                      <textarea
                        placeholder="Provide detailed instructions for creators..."
                        value={campaignData.guidelines}
                        onChange={(e) =>
                          handleInputChange("guidelines", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-background h-32"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Content Submission Deadline *
                      </label>
                      <Input
                        type="date"
                        value={campaignData.deadline}
                        onChange={(e) =>
                          handleInputChange("deadline", e.target.value)
                        }
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review & Launch */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">
                        Campaign Summary
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Campaign Details
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>
                              <strong>Name:</strong> {campaignData.name}
                            </li>
                            <li>
                              <strong>Objective:</strong>{" "}
                              {campaignData.objective}
                            </li>
                            <li>
                              <strong>Platforms:</strong>{" "}
                              {campaignData.platforms.join(", ")}
                            </li>
                            <li>
                              <strong>Regions:</strong>{" "}
                              {campaignData.regions.join(", ")}
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Deliverables</h4>
                          <ul className="text-sm space-y-1">
                            <li>
                              <strong>Posts:</strong> {campaignData.posts}
                            </li>
                            <li>
                              <strong>Reels:</strong> {campaignData.reels}
                            </li>
                            <li>
                              <strong>Stories:</strong> {campaignData.stories}
                            </li>
                            <li>
                              <strong>Deadline:</strong> {campaignData.deadline}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Total Campaign Budget
                        </label>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-gray-400" />
                          <Input
                            type="number"
                            placeholder="50000"
                            value={campaignData.totalBudget}
                            onChange={(e) =>
                              handleInputChange(
                                "totalBudget",
                                parseInt(e.target.value),
                              )
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Campaign Duration (days)
                        </label>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <Input
                            type="number"
                            placeholder="30"
                            value={campaignData.campaignDuration}
                            onChange={(e) =>
                              handleInputChange(
                                "campaignDuration",
                                parseInt(e.target.value),
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 text-green-800 dark:text-green-200">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Ready to Launch!</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Your campaign will be visible to creators matching your
                        criteria immediately after launch.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!isStepValid() || isLoading}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      {isLoading ? "Launching..." : "Launch Campaign"}
                      <Target className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewCampaign;
