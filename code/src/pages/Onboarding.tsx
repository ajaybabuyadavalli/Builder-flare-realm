import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RippleCard } from "@/components/ui/ripple-card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Camera,
  Globe,
  Video,
  Heart,
  DollarSign,
  CheckCircle,
  Skip,
  ArrowRight,
  ArrowLeft,
  Upload,
  Instagram,
  Youtube,
  Star,
  Sparkles,
} from "lucide-react";

interface OnboardingData {
  // Step 1: Profile Basics
  username: string;
  profilePicture: string;
  bio: string;
  city: string;
  state: string;

  // Step 2: Platform Details
  primaryPlatform: string;
  instagramHandle: string;
  youtubeChannel: string;
  tiktokUsername: string;
  followerCount: string;

  // Step 3: Content Preferences
  niches: string[];
  languages: string[];
  postsPerWeek: string;
  videoLength: string;

  // Step 4: Collaboration Preferences
  campaignTypes: string[];
  minimumPayout: string;
  openToBarter: boolean;
  openToLiveCollabs: boolean;

  // Step 5: Monetization
  paymentMethod: string;
  gstNumber: string;
  taxResidency: string;

  // Step 6: Final Info
  funFact: string;
  inspiration: string;
  agreeToTerms: boolean;
}

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    username: "",
    profilePicture: "",
    bio: "",
    city: "",
    state: "",
    primaryPlatform: "",
    instagramHandle: "",
    youtubeChannel: "",
    tiktokUsername: "",
    followerCount: "",
    niches: [],
    languages: [],
    postsPerWeek: "",
    videoLength: "",
    campaignTypes: [],
    minimumPayout: "",
    openToBarter: false,
    openToLiveCollabs: false,
    paymentMethod: "",
    gstNumber: "",
    taxResidency: "",
    funFact: "",
    inspiration: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const motivationalTips = [
    "Complete your profile to get more campaign invites! 🎯",
    "Creators with full profiles receive 3x more invites! 📈",
    "Your unique story makes you stand out to brands! ✨",
    "Almost there! Each step brings you closer to success! 🚀",
    "Setting up payments ensures you get paid faster! 💰",
    "You're ready to launch your creator journey! 🎉",
  ];

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      navigate("/login");
      return;
    }

    // Auto-fill username from user data
    if (user.name && !data.username) {
      const autoUsername = user.name.toLowerCase().replace(/\s+/g, "");
      setData((prev) => ({ ...prev, username: autoUsername }));
    }

    // Load saved progress
    const savedProgress = localStorage.getItem(
      `onboarding_progress_${user.email}`,
    );
    if (savedProgress) {
      const { step, data: savedData } = JSON.parse(savedProgress);
      setCurrentStep(step);
      setData(savedData);
    }
  }, [user, navigate]);

  // Save progress automatically
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `onboarding_progress_${user.email}`,
        JSON.stringify({
          step: currentStep,
          data: data,
        }),
      );
    }
  }, [currentStep, data, user]);

  const handleInputChange = (field: keyof OnboardingData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: keyof OnboardingData, value: string) => {
    const currentArray = data[field] as string[];
    if (currentArray.includes(value)) {
      handleInputChange(
        field,
        currentArray.filter((item) => item !== value),
      );
    } else {
      handleInputChange(field, [...currentArray, value]);
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleComplete = async () => {
    if (!data.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate profile completion
    setTimeout(() => {
      // Mark onboarding as complete
      localStorage.setItem(`onboarding_${user?.email}`, "completed");
      localStorage.removeItem(`onboarding_progress_${user?.email}`);

      // Update user profile with onboarding data (in real app, this would be an API call)

      setIsLoading(false);

      // Show success animation and redirect
      toast({
        title: "Profile Setup Complete! 🎉",
        description: "You're ready to get discovered by brands!",
      });

      // Redirect to creator dashboard
      navigate("/creator/dashboard");
    }, 2000);
  };

  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter", "Other"];
  const niches = [
    "Fashion",
    "Beauty",
    "Fitness",
    "Tech",
    "Food",
    "Travel",
    "Lifestyle",
    "Gaming",
    "Education",
    "Comedy",
  ];
  const languages = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Marathi",
    "Bengali",
    "Gujarati",
    "Punjabi",
  ];
  const campaignTypes = [
    "Product Reviews",
    "Unboxing",
    "Tutorials",
    "Lifestyle",
    "Giveaways",
    "Brand Stories",
  ];
  const paymentMethods = ["UPI", "Bank Transfer", "PayPal"];

  const getStepTitle = () => {
    const titles = [
      "Profile & Personalization",
      "Platform Details",
      "Content Preferences",
      "Collaboration Preferences",
      "Monetization",
      "Final Touch",
    ];
    return titles[currentStep - 1];
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return data.username && data.bio && data.city;
      case 2:
        return data.primaryPlatform && data.followerCount;
      case 3:
        return data.niches.length > 0 && data.languages.length > 0;
      case 4:
        return data.campaignTypes.length > 0 && data.minimumPayout;
      case 5:
        return data.paymentMethod && data.taxResidency;
      case 6:
        return data.agreeToTerms;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-white font-semibold">Creator Profile Setup</h1>
            <Badge className="bg-purple-600">Step {currentStep} of 6</Badge>
          </div>
          <Progress value={(currentStep / 6) * 100} className="h-2" />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            {[
              "Profile",
              "Platforms",
              "Content",
              "Collabs",
              "Payments",
              "Finish",
            ].map((label, index) => (
              <span
                key={label}
                className={index + 1 <= currentStep ? "text-purple-400" : ""}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RippleCard>
              <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">
                    {getStepTitle()}
                  </CardTitle>
                  <p className="text-gray-300">
                    {motivationalTips[currentStep - 1]}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Step 1: Profile Basics */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            placeholder="your_username"
                            value={data.username}
                            onChange={(e) =>
                              handleInputChange("username", e.target.value)
                            }
                            className="pl-10 bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Profile Picture
                        </label>
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400 mb-2">
                            Upload your profile picture
                          </p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Bio (150 characters max)
                        </label>
                        <textarea
                          placeholder="Tell us about yourself..."
                          value={data.bio}
                          onChange={(e) =>
                            handleInputChange("bio", e.target.value)
                          }
                          maxLength={150}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 resize-none"
                          rows={3}
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          {data.bio.length}/150
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            City
                          </label>
                          <Input
                            placeholder="Mumbai"
                            value={data.city}
                            onChange={(e) =>
                              handleInputChange("city", e.target.value)
                            }
                            className="bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            State
                          </label>
                          <Input
                            placeholder="Maharashtra"
                            value={data.state}
                            onChange={(e) =>
                              handleInputChange("state", e.target.value)
                            }
                            className="bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Platform Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Primary Platform
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {platforms.map((platform) => (
                            <Button
                              key={platform}
                              type="button"
                              variant={
                                data.primaryPlatform === platform
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() =>
                                handleInputChange("primaryPlatform", platform)
                              }
                              className="justify-start"
                            >
                              {platform === "Instagram" && (
                                <Instagram className="w-4 h-4 mr-2" />
                              )}
                              {platform === "YouTube" && (
                                <Youtube className="w-4 h-4 mr-2" />
                              )}
                              {platform === "TikTok" && (
                                <Video className="w-4 h-4 mr-2" />
                              )}
                              {platform}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Instagram Handle
                          </label>
                          <Input
                            placeholder="@your_handle"
                            value={data.instagramHandle}
                            onChange={(e) =>
                              handleInputChange(
                                "instagramHandle",
                                e.target.value,
                              )
                            }
                            className="bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            YouTube Channel
                          </label>
                          <Input
                            placeholder="Channel URL"
                            value={data.youtubeChannel}
                            onChange={(e) =>
                              handleInputChange(
                                "youtubeChannel",
                                e.target.value,
                              )
                            }
                            className="bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Follower Count (Primary Platform)
                        </label>
                        <select
                          value={data.followerCount}
                          onChange={(e) =>
                            handleInputChange("followerCount", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                        >
                          <option value="">Select range</option>
                          <option value="1K-5K">1K - 5K</option>
                          <option value="5K-10K">5K - 10K</option>
                          <option value="10K-50K">10K - 50K</option>
                          <option value="50K-100K">50K - 100K</option>
                          <option value="100K+">100K+</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Content Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Content Niches (Select all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {niches.map((niche) => (
                            <Button
                              key={niche}
                              type="button"
                              size="sm"
                              variant={
                                data.niches.includes(niche)
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() => handleArrayToggle("niches", niche)}
                            >
                              {niche}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Languages Used in Content
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {languages.map((language) => (
                            <Button
                              key={language}
                              type="button"
                              size="sm"
                              variant={
                                data.languages.includes(language)
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Average Posts Per Week
                          </label>
                          <select
                            value={data.postsPerWeek}
                            onChange={(e) =>
                              handleInputChange("postsPerWeek", e.target.value)
                            }
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                          >
                            <option value="">Select frequency</option>
                            <option value="1-2">1-2 posts</option>
                            <option value="3-5">3-5 posts</option>
                            <option value="Daily">Daily</option>
                            <option value="Multiple daily">
                              Multiple daily
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Typical Video Length
                          </label>
                          <select
                            value={data.videoLength}
                            onChange={(e) =>
                              handleInputChange("videoLength", e.target.value)
                            }
                            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                          >
                            <option value="">Select length</option>
                            <option value="15s">15 seconds</option>
                            <option value="30s">30 seconds</option>
                            <option value="60s+">60+ seconds</option>
                            <option value="Mixed">Mixed lengths</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Collaboration Preferences */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preferred Campaign Types
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {campaignTypes.map((type) => (
                            <Button
                              key={type}
                              type="button"
                              variant={
                                data.campaignTypes.includes(type)
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() =>
                                handleArrayToggle("campaignTypes", type)
                              }
                              className="justify-start"
                            >
                              {type}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Minimum Acceptable Payout (INR)
                        </label>
                        <Input
                          type="number"
                          placeholder="5000"
                          value={data.minimumPayout}
                          onChange={(e) =>
                            handleInputChange("minimumPayout", e.target.value)
                          }
                          className="bg-gray-700/50 border-gray-600 text-white"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-300">
                            Open to Barter Collaborations?
                          </label>
                          <Button
                            type="button"
                            variant={data.openToBarter ? "default" : "outline"}
                            onClick={() =>
                              handleInputChange(
                                "openToBarter",
                                !data.openToBarter,
                              )
                            }
                          >
                            {data.openToBarter ? "Yes" : "No"}
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-300">
                            Open to Live Collaborations?
                          </label>
                          <Button
                            type="button"
                            variant={
                              data.openToLiveCollabs ? "default" : "outline"
                            }
                            onClick={() =>
                              handleInputChange(
                                "openToLiveCollabs",
                                !data.openToLiveCollabs,
                              )
                            }
                          >
                            {data.openToLiveCollabs ? "Yes" : "No"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Monetization */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Preferred Payment Method
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {paymentMethods.map((method) => (
                            <Button
                              key={method}
                              type="button"
                              variant={
                                data.paymentMethod === method
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() =>
                                handleInputChange("paymentMethod", method)
                              }
                            >
                              {method}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          GST Number (Optional)
                        </label>
                        <Input
                          placeholder="Enter GST number if applicable"
                          value={data.gstNumber}
                          onChange={(e) =>
                            handleInputChange("gstNumber", e.target.value)
                          }
                          className="bg-gray-700/50 border-gray-600 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Country of Tax Residency
                        </label>
                        <select
                          value={data.taxResidency}
                          onChange={(e) =>
                            handleInputChange("taxResidency", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white"
                        >
                          <option value="">Select country</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Final Info */}
                  {currentStep === 6 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Fun Fact About You (Optional)
                        </label>
                        <Input
                          placeholder="Something interesting about yourself..."
                          value={data.funFact}
                          onChange={(e) =>
                            handleInputChange("funFact", e.target.value)
                          }
                          className="bg-gray-700/50 border-gray-600 text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Influencer Who Inspires You (Optional)
                        </label>
                        <Input
                          placeholder="Name of your inspiration..."
                          value={data.inspiration}
                          onChange={(e) =>
                            handleInputChange("inspiration", e.target.value)
                          }
                          className="bg-gray-700/50 border-gray-600 text-white"
                        />
                      </div>

                      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-500/20">
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={data.agreeToTerms}
                            onChange={(e) =>
                              handleInputChange(
                                "agreeToTerms",
                                e.target.checked,
                              )
                            }
                            className="mt-1"
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-300"
                          >
                            I agree to Influbazzar's{" "}
                            <a
                              href="/terms"
                              className="text-purple-400 hover:underline"
                            >
                              Terms & Conditions
                            </a>{" "}
                            and{" "}
                            <a
                              href="/community-guidelines"
                              className="text-purple-400 hover:underline"
                            >
                              Community Guidelines
                            </a>
                          </label>
                        </div>
                      </div>

                      <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-6 text-center">
                        <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                          You're Almost Ready! 🎉
                        </h3>
                        <p className="text-gray-300">
                          Complete your profile setup to start discovering
                          amazing brand opportunities and build your creator
                          career.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-gray-700">
                    <div className="flex space-x-3">
                      {currentStep > 1 && (
                        <Button
                          variant="outline"
                          onClick={handleBack}
                          className="border-gray-600 text-gray-300"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back
                        </Button>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      {currentStep < 6 && (
                        <Button
                          variant="ghost"
                          onClick={handleSkip}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <Skip className="w-4 h-4 mr-2" />
                          Skip
                        </Button>
                      )}

                      {currentStep < 6 ? (
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
                          onClick={handleComplete}
                          disabled={!isStepValid() || isLoading}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          {isLoading ? "Setting up..." : "Complete Profile"}
                          <CheckCircle className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RippleCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
