import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleCard } from "@/components/ui/ripple-card";
import { useToast } from "@/hooks/use-toast";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  User,
  Mail,
  Lock,
  Phone,
  Calendar,
  Eye,
  EyeOff,
  UserPlus,
  Sparkles,
  Shield,
  Zap,
  Award,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Mock existing users for validation
  const existingUsers = [
    { email: "creator@demo.com", phone: "+911234567890" },
    { email: "brand@demo.com", phone: "+911234567891" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (existingUsers.some((user) => user.email === formData.email)) {
      newErrors.email = "This email is already registered";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    // Phone validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+91[6-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Please enter a valid Indian mobile number (+91XXXXXXXXXX)";
    } else if (
      existingUsers.some((user) => user.phone === formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "This phone number is already registered";
    }

    // Date of birth validation (must be 16+)
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 16) {
        newErrors.dateOfBirth = "You must be at least 16 years old to sign up";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      // Store signup data for OTP verification
      localStorage.setItem("pendingSignup", JSON.stringify(formData));

      toast({
        title: "Account Created! 🎉",
        description: "Please verify your phone number to continue.",
      });

      // Redirect to OTP verification
      navigate("/otp-verification");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <NavbarDynamic />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Motivation & Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join 50,000+ Creators
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your Creator
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Journey Today
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of creators earning through brand
                  collaborations. Secure payments, verified opportunities, and
                  real growth.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure Payments",
                    description:
                      "Escrow-protected payments. Get paid within 24 hours of campaign completion.",
                  },
                  {
                    icon: Zap,
                    title: "Instant Matching",
                    description:
                      "AI-powered campaign matching based on your niche and audience.",
                  },
                  {
                    icon: Award,
                    title: "Verified Brands",
                    description:
                      "Work with legitimate brands and companies. No fake campaigns.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur p-6 rounded-xl border border-purple-500/20">
                <div className="text-center">
                  <h3 className="font-bold text-xl text-white mb-2">
                    💰 Average Creator Earnings: ₹25,000/month
                  </h3>
                  <p className="text-sm text-gray-300">
                    Top creators earn ₹1L+ monthly through brand partnerships
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <RippleCard>
                <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-white flex items-center justify-center">
                      <UserPlus className="w-6 h-6 mr-2" />
                      Create Your Account
                    </CardTitle>
                    <p className="text-gray-300">
                      Start earning with brand collaborations
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                              }
                              className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                          {errors.firstName && (
                            <p className="text-red-400 text-sm mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                              }
                              className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>
                          {errors.lastName && (
                            <p className="text-red-400 text-sm mt-1">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Password */}
                      <div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) =>
                              handleInputChange("password", e.target.value)
                            }
                            className="pl-10 pr-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.password}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            placeholder="Phone Number (+91XXXXXXXXXX)"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                              handleInputChange("phoneNumber", e.target.value)
                            }
                            className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) =>
                              handleInputChange("dateOfBirth", e.target.value)
                            }
                            className="pl-10 bg-gray-700/50 border-gray-600 text-white"
                          />
                        </div>
                        {errors.dateOfBirth && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.dateOfBirth}
                          </p>
                        )}
                        <p className="text-gray-400 text-xs mt-1">
                          You must be at least 16 years old
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                        <Sparkles className="w-5 h-5 ml-2" />
                      </Button>
                    </form>

                    <div className="text-center">
                      <p className="text-gray-300">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className="text-purple-400 hover:text-purple-300 font-medium"
                        >
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RippleCard>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
