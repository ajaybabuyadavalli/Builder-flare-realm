import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  User,
  Mail,
  Phone,
  Instagram,
  Youtube,
  CheckCircle,
  Users,
  Camera,
  Star,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy,
  TrendingUp,
  DollarSign,
  Shield,
} from "lucide-react";

const CreatorSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    followers: [10000],
    languages: [] as string[],
    categories: [] as string[],
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = [
    "Beauty",
    "Fashion",
    "Fitness",
    "Food",
    "Tech",
    "Travel",
    "Lifestyle",
    "Gaming",
    "Education",
    "Music",
    "Comedy",
    "Business",
  ];

  const languages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Marathi",
    "Bengali",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
    "Urdu",
  ];

  const steps = [
    { number: 1, title: "Basic Info", description: "Personal details" },
    { number: 2, title: "Social Accounts", description: "Connect platforms" },
    { number: 3, title: "Audience", description: "Followers & interests" },
    { number: 4, title: "Verification", description: "Verify phone number" },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      setOtpVerified(true);
      setShowConfetti(true);
      toast({
        title: "Phone verified!",
        description: "Your account has been created successfully.",
      });

      // Hide confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }, 2000);
  };

  const handleFinish = () => {
    navigate("/creator/dashboard");
  };

  const toggleSelection = (
    array: string[],
    item: string,
    setter: (arr: string[]) => void,
  ) => {
    if (array.includes(item)) {
      setter(array.filter((i) => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <Navbar />

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: [0, window.innerHeight + 100],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Join Creator Community
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Become an Influbazzar Creator
            </h1>
            <p className="text-muted-foreground text-lg">
              Start your monetization journey with premium brand collaborations
            </p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        currentStep >= step.number
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-purple-600 to-pink-600"
                          : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <RippleCard>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-center">
                    Step {currentStep}: {steps[currentStep - 1].title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Step 1: Basic Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Social Accounts */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram Handle</Label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="instagram"
                            value={formData.instagram}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                instagram: e.target.value,
                              })
                            }
                            placeholder="@your_handle"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="youtube">YouTube Channel</Label>
                        <div className="relative">
                          <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="youtube"
                            value={formData.youtube}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                youtube: e.target.value,
                              })
                            }
                            placeholder="@yourchannel"
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tiktok">TikTok Handle</Label>
                        <div className="relative">
                          <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            id="tiktok"
                            value={formData.tiktok}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                tiktok: e.target.value,
                              })
                            }
                            placeholder="@your_tiktok"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Audience */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label>Total Followers (across all platforms)</Label>
                        <div className="px-4">
                          <Slider
                            value={formData.followers}
                            onValueChange={(value) =>
                              setFormData({ ...formData, followers: value })
                            }
                            max={1000000}
                            min={100}
                            step={100}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground mt-2">
                            <span>100</span>
                            <span className="font-semibold text-purple-600">
                              {formData.followers[0].toLocaleString()} followers
                            </span>
                            <span>1M+</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Content Categories</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {categories.map((category) => (
                            <Button
                              key={category}
                              variant={
                                formData.categories.includes(category)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                toggleSelection(
                                  formData.categories,
                                  category,
                                  (cats) =>
                                    setFormData({
                                      ...formData,
                                      categories: cats,
                                    }),
                                )
                              }
                              className={
                                formData.categories.includes(category)
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                  : ""
                              }
                            >
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Languages</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {languages.map((language) => (
                            <Button
                              key={language}
                              variant={
                                formData.languages.includes(language)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                toggleSelection(
                                  formData.languages,
                                  language,
                                  (langs) =>
                                    setFormData({
                                      ...formData,
                                      languages: langs,
                                    }),
                                )
                              }
                              className={
                                formData.languages.includes(language)
                                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                  : ""
                              }
                            >
                              {language}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Verification */}
                  {currentStep === 4 && (
                    <div className="space-y-6 text-center">
                      {!otpVerified ? (
                        <>
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold">
                            Verify Your Phone
                          </h3>
                          <p className="text-muted-foreground">
                            We'll send a verification code to {formData.phone}
                          </p>

                          <Button
                            onClick={handleVerifyOTP}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Verifying...
                              </>
                            ) : (
                              <>
                                Send Verification Code
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="space-y-6"
                        >
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-10 h-10 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-600">
                            Welcome to Influbazzar! 🎉
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            Your creator account has been set up successfully.
                          </p>

                          <div className="grid grid-cols-3 gap-4 my-6">
                            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">
                                Start Earning
                              </p>
                            </div>
                            <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                              <TrendingUp className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">
                                Grow Audience
                              </p>
                            </div>
                            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">
                                Secure Payments
                              </p>
                            </div>
                          </div>

                          <Button
                            onClick={handleFinish}
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          >
                            <Sparkles className="w-5 h-5 mr-2" />
                            Explore Campaigns
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  {(!otpVerified || currentStep < 4) && (
                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>

                      {currentStep < 4 && (
                        <Button
                          onClick={handleNext}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          Next
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </RippleCard>
          </motion.div>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/creator/login"
                className="text-purple-600 hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorSignup;
