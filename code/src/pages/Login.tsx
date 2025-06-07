import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NavbarDynamic from "@/components/NavbarDynamic";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import {
  Eye,
  EyeOff,
  User,
  Building,
  Users,
  Settings,
  Shield,
  CheckCircle,
  Lock,
  ChevronDown,
} from "lucide-react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState(
    searchParams.get("role") || "creator",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoCredentials, setShowDemoCredentials] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { login } = useAuth();

  const roles = [
    {
      id: "creator",
      label: "Creator",
      icon: User,
      description: "Content creators and influencers",
      demoCredentials: { email: "creator@demo.com", password: "password123" },
      redirectTo: "/creator/dashboard",
    },
    {
      id: "brand",
      label: "Brand",
      icon: Building,
      description: "Businesses and companies",
      demoCredentials: { email: "brand@demo.com", password: "password123" },
      redirectTo: "/brand/dashboard",
    },
    {
      id: "agency",
      label: "Agency",
      icon: Users,
      description: "Marketing agencies",
      demoCredentials: { email: "agency@demo.com", password: "password123" },
      redirectTo: "/agency/dashboard",
    },
    {
      id: "admin",
      label: "Admin",
      icon: Settings,
      description: "Platform administrators",
      demoCredentials: { email: "admin@demo.com", password: "adminpass" },
      redirectTo: "/admin/overview",
    },
  ];

  const currentRole =
    roles.find((role) => role.id === selectedRole) || roles[0];

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam && roles.find((role) => role.id === roleParam)) {
      setSelectedRole(roleParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(
        formData.email,
        formData.password,
        selectedRole,
      );

      if (success) {
        toast({
          title: "Login successful! 🎉",
          description: "Redirecting to your dashboard...",
        });

        // Redirect to the originally requested page or role dashboard
        const from = location.state?.from?.pathname;
        const role = roles.find((r) => r.id === selectedRole);
        const redirectTo = from || role?.redirectTo || "/";

        setTimeout(() => {
          navigate(redirectTo);
        }, 1500);
      } else {
        toast({
          title: "Invalid credentials ❌",
          description: "Please check your email and password and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login failed ❌",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: currentRole.demoCredentials.email,
      password: currentRole.demoCredentials.password,
    });
    setShowDemoCredentials(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Form */}
        <div className="flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your account to continue
              </p>
            </div>

            {/* Main Form Card - WHITE BACKGROUND */}
            <div className="bg-white dark:bg-white rounded-2xl p-8 border shadow-xl">
              {/* Login/Sign Up Toggle */}
              <div className="flex mb-8 bg-gray-100 dark:bg-gray-100 rounded-full p-1">
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full shadow-sm">
                  Login
                </Button>
                <Link to="/signup" className="flex-1">
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>

              {/* Role Selection */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-900">
                  Select Your Role
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role) => (
                    <motion.button
                      key={role.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center relative overflow-hidden group ${
                        selectedRole === role.id
                          ? "border-purple-500 bg-purple-50 dark:bg-purple-50"
                          : "border-gray-200 dark:border-gray-200 bg-gray-50 dark:bg-gray-50 hover:border-purple-300 dark:hover:border-purple-400"
                      }`}
                    >
                      <role.icon
                        className={`w-6 h-6 mx-auto mb-2 ${
                          selectedRole === role.id
                            ? "text-purple-500"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      />
                      <div
                        className={`font-medium ${
                          selectedRole === role.id
                            ? "text-purple-600 dark:text-purple-600"
                            : "text-gray-700 dark:text-gray-700"
                        }`}
                      >
                        {role.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {role.description}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Demo Credentials - Subtle styling */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => setShowDemoCredentials(!showDemoCredentials)}
                  className="w-full text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  Demo Credentials for {currentRole.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${showDemoCredentials ? "rotate-180" : ""}`}
                  />
                </button>

                {showDemoCredentials && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      <div>
                        Email:{" "}
                        <span className="font-mono">
                          {currentRole.demoCredentials.email}
                        </span>
                      </div>
                      <div>
                        Password:{" "}
                        <span className="font-mono">
                          {currentRole.demoCredentials.password}
                        </span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      onClick={fillDemoCredentials}
                      className="w-full mt-2 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500"
                    >
                      Use These Credentials
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="email"
                    className="font-medium text-gray-700 dark:text-gray-700"
                  >
                    Email Address *
                  </Label>
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
                    className="mt-2 bg-white dark:bg-white border-gray-300 dark:border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="password"
                    className="font-medium text-gray-700 dark:text-gray-700"
                  >
                    Password *
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      className="bg-white dark:bg-white border-gray-300 dark:border-gray-300 focus:ring-purple-500 focus:border-purple-500 pr-12 transition-all duration-200"
                      placeholder="Enter your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  disabled={isLoading || !formData.email || !formData.password}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to={`/signup${selectedRole ? `?role=${selectedRole}` : ""}`}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Secure & Trusted Section (KEPT AS-IS) */}
        <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-md"
          >
            {/* Animated Background */}
            <div className="relative mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
                  style={{
                    width: Math.random() * 60 + 30,
                    height: Math.random() * 60 + 30,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-48 h-48 mx-auto bg-white/20 dark:bg-white/10 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur"
              >
                <Lock className="w-24 h-24 text-purple-600 dark:text-purple-400" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-100">
                Secure & Trusted
              </h2>
              <p className="text-purple-700 dark:text-purple-200 mb-8 leading-relaxed">
                Your data is protected with enterprise-grade security. Login
                safely to access your personalized dashboard and grow your
                influence.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Encrypted", desc: "256-bit SSL" },
                  { icon: CheckCircle, label: "Verified", desc: "KYC Ready" },
                  { icon: Lock, label: "Secure", desc: "2FA Support" },
                  { icon: Users, label: "Trusted", desc: "50K+ Users" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex flex-col items-center p-4 bg-white/30 dark:bg-white/10 backdrop-blur rounded-lg hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">
                      {feature.label}
                    </span>
                    <span className="text-xs text-purple-700 dark:text-purple-200">
                      {feature.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
