import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

const BrandLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to your brand dashboard.",
      });
      navigate("/brand/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail("brand@demo.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <Navbar />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  Brand Login
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Welcome Back, Brand Partner! 👋
                </h1>
                <p className="text-muted-foreground text-lg">
                  Access your campaign dashboard and manage influencer
                  collaborations
                </p>
              </div>

              {/* Main Form Card - WHITE BACKGROUND */}
              <div className="bg-white dark:bg-white rounded-2xl p-8 border shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Brand email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 w-5 h-5" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 bg-white dark:bg-white border-gray-300 dark:border-gray-300 text-gray-900 dark:text-gray-900"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400"
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
                      <span className="text-sm text-gray-600 dark:text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="/brand/forgot-password"
                      className="text-sm text-purple-600 hover:text-purple-500"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In to Dashboard"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-600">
                      New to Influbazzar?{" "}
                      <Link
                        to="/brand/signup"
                        className="text-purple-600 hover:text-purple-500 font-medium"
                      >
                        Create Brand Account
                      </Link>
                    </p>
                  </div>

                  {/* Demo Credentials */}
                  <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-700">
                          Demo Credentials
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          brand@demo.com / password123
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleDemoLogin}
                        className="border-gray-300 dark:border-gray-300 text-gray-700 dark:text-gray-700"
                      >
                        Use Demo
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Secure & Trusted Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Secure & Trusted Brand Platform
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Join 500+ brands managing successful influencer campaigns
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Escrow Protection",
                    description:
                      "Your payments are secured until campaign completion",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    description:
                      "Review and approve all content before it goes live",
                  },
                  {
                    icon: Users,
                    title: "Verified Creators",
                    description:
                      "Access to 10,000+ verified and authentic creators",
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
                      <h3 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border-none">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">
                      🎯 Average Campaign ROI: 4.2x
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Based on 1000+ completed brand campaigns
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandLogin;
