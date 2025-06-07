import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleCard } from "@/components/ui/ripple-card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Sparkles,
  Shield,
  Users,
  Award,
} from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Auto-fill credentials if coming from signup
    const savedCredentials = localStorage.getItem("loginCredentials");
    if (savedCredentials) {
      const { email: savedEmail, password: savedPassword } =
        JSON.parse(savedCredentials);
      setEmail(savedEmail);
      setPassword(savedPassword);
      localStorage.removeItem("loginCredentials"); // Use only once

      toast({
        title: "Welcome back! 👋",
        description: "Your login credentials have been pre-filled.",
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        // Check if this is a first-time login by checking onboarding status
        const userKey = `onboarding_${email}`;
        const hasCompletedOnboarding = localStorage.getItem(userKey);

        if (!hasCompletedOnboarding) {
          // First-time login - redirect to onboarding
          toast({
            title: "Welcome to Influbazzar! 🎉",
            description: "Let's complete your profile to get started.",
          });
          navigate("/onboarding");
        } else {
          // Returning user - redirect to dashboard
          const returnUrl = location.state?.from || "/creator/dashboard";
          navigate(returnUrl);

          toast({
            title: "Welcome back! 👋",
            description: "Successfully logged in to your dashboard.",
          });
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role: "creator" | "brand") => {
    const demoCredentials = {
      creator: { email: "creator@demo.com", password: "password123" },
      brand: { email: "brand@demo.com", password: "password123" },
    };

    setEmail(demoCredentials[role].email);
    setPassword(demoCredentials[role].password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <NavbarDynamic />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Back Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Welcome Back
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Continue Your
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Creator Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Access your dashboard, manage campaigns, and track your
                  earnings. Your opportunities are waiting!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure Dashboard",
                    description:
                      "Your data is protected with enterprise-level security.",
                  },
                  {
                    icon: Users,
                    title: "Active Community",
                    description:
                      "50,000+ creators are already earning through our platform.",
                  },
                  {
                    icon: Award,
                    title: "Verified Opportunities",
                    description:
                      "Access to premium brand campaigns and collaborations.",
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
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <RippleCard>
                <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl text-white flex items-center justify-center">
                      <LogIn className="w-6 h-6 mr-2" />
                      Sign In
                    </CardTitle>
                    <p className="text-gray-300">
                      Access your creator dashboard
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email */}
                      <div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                            required
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
                      </div>

                      <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-300">
                            Remember me
                          </span>
                        </label>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-purple-400 hover:text-purple-300"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                        <LogIn className="w-5 h-5 ml-2" />
                      </Button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="space-y-3">
                      <p className="text-sm text-gray-400 text-center">
                        Quick demo access:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleDemoLogin("creator")}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          Creator Demo
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleDemoLogin("brand")}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          Brand Demo
                        </Button>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300">
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-purple-400 hover:text-purple-300 font-medium"
                        >
                          Create one here
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

export default Login;
