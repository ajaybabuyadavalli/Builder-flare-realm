import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Building,
  Globe,
  Users,
  Mail,
  Upload,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const BrandSignup = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    website: "",
    industry: "",
    companySize: "",
    contactEmail: "",
    otp: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const industries = [
    "Beauty & Skincare",
    "Fashion & Lifestyle",
    "Health & Fitness",
    "Technology",
    "Food & Beverage",
    "Travel & Tourism",
    "Education",
    "Finance",
    "Gaming",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-100 employees",
    "101-500 employees",
    "500+ employees",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSendOTP = async () => {
    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
      toast({
        title: "OTP Sent!",
        description: "Please check your email for the verification code.",
      });
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created Successfully! 🎉",
        description: "Welcome to Influbazzar! Let's start your first campaign.",
      });
      navigate("/brand/campaigns/new");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <Navbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Brand Registration
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Join 500+ Brands Growing with Influbazzar 🚀
            </h1>
            <p className="text-muted-foreground text-lg">
              Start collaborating with authentic creators in minutes
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((step) => (
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
                  {step < 3 && (
                    <div
                      className={`w-16 h-1 ${
                        currentStep > step
                          ? "bg-gradient-to-r from-purple-600 to-pink-600"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-16 text-sm text-muted-foreground">
                <span>Company Info</span>
                <span>Verification</span>
                <span>Complete</span>
              </div>
            </div>
          </div>

          <Card className="bg-white dark:bg-white border shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-gray-900 dark:text-gray-900">
                {currentStep === 1 && "Tell us about your brand"}
                {currentStep === 2 && "Verify your email"}
                {currentStep === 3 && "You're all set!"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          placeholder="Brand/Company Name"
                          value={formData.brandName}
                          onChange={(e) =>
                            handleInputChange("brandName", e.target.value)
                          }
                          className="pl-10 bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          placeholder="Website URL"
                          value={formData.website}
                          onChange={(e) =>
                            handleInputChange("website", e.target.value)
                          }
                          className="pl-10 bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          handleInputChange("industry", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        required
                      >
                        <option value="">Select Industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>

                      <select
                        value={formData.companySize}
                        onChange={(e) =>
                          handleInputChange("companySize", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        required
                      >
                        <option value="">Company Size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Business Email Address"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          handleInputChange("contactEmail", e.target.value)
                        }
                        className="pl-10 bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                        required
                      />
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-600 mb-2">
                        Upload Brand Logo (Optional)
                      </p>
                      <Button type="button" variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={
                        !formData.brandName ||
                        !formData.contactEmail ||
                        !formData.industry
                      }
                    >
                      Continue to Verification
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6 text-center"
                  >
                    <div className="bg-gray-50 dark:bg-gray-50 p-6 rounded-lg">
                      <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900 mb-2">
                        Verify Your Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-600 mb-4">
                        We've sent a verification code to:
                        <br />
                        <strong>{formData.contactEmail}</strong>
                      </p>

                      {!otpSent ? (
                        <Button
                          type="button"
                          onClick={handleSendOTP}
                          disabled={isLoading}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          {isLoading ? "Sending..." : "Send Verification Code"}
                        </Button>
                      ) : (
                        <div className="space-y-4">
                          <Input
                            placeholder="Enter 6-digit OTP"
                            value={formData.otp}
                            onChange={(e) =>
                              handleInputChange("otp", e.target.value)
                            }
                            className="text-center text-lg tracking-wider bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                            maxLength={6}
                          />
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            disabled={formData.otp.length !== 6}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          >
                            Verify & Continue
                          </Button>
                          <Button
                            type="button"
                            variant="link"
                            onClick={handleSendOTP}
                            className="text-purple-600"
                          >
                            Resend Code
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6 text-center"
                  >
                    <div className="bg-green-50 dark:bg-green-50 p-8 rounded-lg">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900 mb-2">
                        Welcome to Influbazzar! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-600 mb-6">
                        Your brand account has been created successfully.
                        <br />
                        You can now start discovering creators and launching
                        campaigns.
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          {isLoading
                            ? "Creating Account..."
                            : "Start Your First Campaign"}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => navigate("/brand/dashboard")}
                          className="border-gray-300 text-gray-700"
                        >
                          Go to Dashboard
                        </Button>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Need help getting started?{" "}
                        <Link
                          to="/brand/support"
                          className="text-purple-600 hover:underline"
                        >
                          Contact our support team
                        </Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-gray-600 dark:text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/brand/login"
                className="text-purple-600 hover:text-purple-500 font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandSignup;
