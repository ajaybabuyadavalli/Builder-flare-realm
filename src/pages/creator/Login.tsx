import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Smartphone,
  ArrowRight,
  Users,
  Camera,
  TrendingUp,
  Star,
  Shield,
  DollarSign,
  Eye,
  Heart,
  MessageSquare,
} from "lucide-react";

const CreatorLogin = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "otp">("email");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful!",
        description: "Welcome back to Influbazzar.",
      });
      navigate("/creator/dashboard");
    }, 2000);
  };

  const handleSendOTP = async () => {
    setIsLoading(true);

    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      toast({
        title: "OTP Sent!",
        description: `Verification code sent to ${formData.phone}`,
      });
    }, 1500);
  };

  const features = [
    {
      icon: DollarSign,
      title: "Earn Money",
      description: "Get paid for your content",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected by escrow system",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Reach",
      description: "Access premium brand campaigns",
    },
    {
      icon: Star,
      title: "Build Reputation",
      description: "Increase your Influbazzar Score",
    },
  ];

  const stats = [
    { value: "25K+", label: "Active Creators" },
    { value: "₹2Cr+", label: "Earnings Paid" },
    { value: "1500+", label: "Campaigns" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <Navbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Creator Portal
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome Back!
                </h1>
                <p className="text-muted-foreground text-lg">
                  Sign in to continue your creator journey
                </p>
              </div>

              <RippleCard>
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-center">Creator Login</CardTitle>

                    {/* Login Method Toggle */}
                    <div className="flex space-x-2 p-1 bg-muted rounded-lg">
                      <Button
                        variant={loginMethod === "email" ? "default" : "ghost"}
                        className="flex-1"
                        onClick={() => setLoginMethod("email")}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button
                        variant={loginMethod === "otp" ? "default" : "ghost"}
                        className="flex-1"
                        onClick={() => setLoginMethod("otp")}
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        OTP
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                      {loginMethod === "email" ? (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="creator@example.com"
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Signing In...
                              </>
                            ) : (
                              <>
                                Continue with Email
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>

                          {!otpSent ? (
                            <Button
                              type="button"
                              onClick={handleSendOTP}
                              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                  Sending OTP...
                                </>
                              ) : (
                                <>
                                  Send OTP
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </>
                              )}
                            </Button>
                          ) : (
                            <>
                              <div className="space-y-2">
                                <Label htmlFor="otp">Enter OTP</Label>
                                <Input
                                  id="otp"
                                  type="text"
                                  value={formData.otp}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      otp: e.target.value,
                                    })
                                  }
                                  placeholder="6-digit code"
                                  maxLength={6}
                                  required
                                />
                              </div>

                              <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                    Verifying...
                                  </>
                                ) : (
                                  <>
                                    Verify & Login
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </>
                                )}
                              </Button>

                              <Button
                                type="button"
                                variant="ghost"
                                className="w-full"
                                onClick={() => setOtpSent(false)}
                              >
                                Resend OTP
                              </Button>
                            </>
                          )}
                        </>
                      )}
                    </form>

                    <div className="mt-6 pt-6 border-t text-center">
                      <p className="text-muted-foreground mb-4">
                        New to Influbazzar?
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/creator/signup">
                          <Users className="w-4 h-4 mr-2" />
                          Apply as New Creator
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </RippleCard>
            </motion.div>

            {/* Right Side - Features & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Animated Background Illustration */}
              <div className="relative">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
                    style={{
                      width: Math.random() * 100 + 50,
                      height: Math.random() * 100 + 50,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="relative z-10 text-center py-12">
                  <Camera className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                  <h2 className="text-2xl font-bold mb-2">
                    Create. Connect. Earn.
                  </h2>
                  <p className="text-muted-foreground">
                    Join thousands of successful creators
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <RippleCard>
                      <Card className="text-center p-4">
                        <CardContent className="p-0">
                          <div className="text-2xl font-bold text-purple-600 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </RippleCard>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <RippleCard>
                      <div className="flex items-center space-x-4 p-4 bg-background/50 backdrop-blur rounded-lg border">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </RippleCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorLogin;
