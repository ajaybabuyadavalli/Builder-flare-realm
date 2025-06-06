import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Eye,
  EyeOff,
  User,
  Building,
  Users,
  Shield,
  Lock,
  Camera,
  Target,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Mail,
  KeyRound,
} from "lucide-react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState(
    searchParams.get("role") || "creator",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const roles = [
    {
      id: "creator",
      label: "Creator",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
      description: "Content creators and influencers",
      avatar: "👨‍🎨",
      demoCredentials: { email: "creator@demo.com", password: "password123" },
      redirectTo: "/creator/dashboard",
    },
    {
      id: "brand",
      label: "Brand",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      description: "Businesses and marketing teams",
      avatar: "🏢",
      demoCredentials: { email: "brand@demo.com", password: "password123" },
      redirectTo: "/brand/dashboard",
    },
    {
      id: "agency",
      label: "Agency",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      description: "Marketing agencies and managers",
      avatar: "📊",
      demoCredentials: { email: "agency@demo.com", password: "password123" },
      redirectTo: "/agency/dashboard",
    },
    {
      id: "admin",
      label: "Admin",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "Platform administrators",
      avatar: "🛡️",
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

    // Simulate API call
    const loginTimeout = setTimeout(() => {
      const role = roles.find((r) => r.id === selectedRole);
      const isValidCredentials =
        formData.email === role?.demoCredentials.email &&
        formData.password === role?.demoCredentials.password;

      setIsLoading(false);

      if (isValidCredentials) {
        toast({
          title: "Login successful! 🎉",
          description: "Redirecting to your dashboard...",
        });

        const redirectTimeout = setTimeout(() => {
          navigate(role.redirectTo);
        }, 1500);

        // Cleanup on unmount
        return () => clearTimeout(redirectTimeout);
      } else {
        toast({
          title: "Invalid credentials ❌",
          description: "Please check your email and password and try again.",
          variant: "destructive",
        });
      }
    }, 2000);

    // Cleanup function
    return () => clearTimeout(loginTimeout);
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: currentRole.demoCredentials.email,
      password: currentRole.demoCredentials.password,
    });
  };

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
              className="order-2 lg:order-1"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  {currentRole.avatar}
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Welcome Back to Influbazzar
                </h1>
                <p className="text-muted-foreground text-lg">
                  Choose your role and login with your credentials
                </p>
              </div>

              <RippleCard>
                <Card className="shadow-2xl border-0 glass">
                  <CardHeader>
                    <CardTitle className="text-center">
                      Login to Your Account
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Role Selection */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">
                        Select Your Role
                      </Label>
                      <Tabs
                        value={selectedRole}
                        onValueChange={setSelectedRole}
                      >
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1">
                          {roles.map((role) => (
                            <TabsTrigger
                              key={role.id}
                              value={role.id}
                              className="flex flex-col items-center space-y-1 py-3 relative overflow-hidden group"
                            >
                              <RippleCard className="w-full h-full">
                                <div className="flex flex-col items-center space-y-1">
                                  <role.icon className="w-4 h-4" />
                                  <span className="text-xs font-medium">
                                    {role.label}
                                  </span>
                                </div>
                              </RippleCard>
                            </TabsTrigger>
                          ))}
                        </TabsList>
                      </Tabs>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={selectedRole}
                        className="text-center"
                      >
                        <Badge variant="outline" className="text-xs">
                          {currentRole.description}
                        </Badge>
                      </motion.div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
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
                            placeholder="Enter your email"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
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
                            placeholder="Enter your password"
                            className="pl-10 pr-10"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
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

                      <div className="flex items-center justify-between">
                        <Button
                          type="button"
                          variant="link"
                          size="sm"
                          className="px-0 h-auto"
                        >
                          Forgot Password?
                        </Button>
                      </div>

                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r ${currentRole.color} hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
                        disabled={
                          isLoading || !formData.email || !formData.password
                        }
                      >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Logging in...
                          </>
                        ) : (
                          <>
                            Login to Dashboard
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="pt-6 border-t">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium">
                            Demo Credentials
                          </Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={fillDemoCredentials}
                          >
                            Fill Demo Data
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-2 p-3 bg-muted/50 rounded-lg text-xs font-mono">
                          <div>Email: {currentRole.demoCredentials.email}</div>
                          <div>
                            Password: {currentRole.demoCredentials.password}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t">
                      <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                          to={`/signup${selectedRole ? `?role=${selectedRole}` : ""}`}
                          className="text-purple-600 hover:underline font-medium"
                        >
                          Signup now →
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RippleCard>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 hidden lg:block"
            >
              <div className="relative">
                {/* Animated Background */}
                {[...Array(8)].map((_, i) => (
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
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: Math.random() * 6 + 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="relative z-10 text-center py-12">
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
                    className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl flex items-center justify-center shadow-2xl"
                  >
                    <Lock className="w-24 h-24 text-purple-600" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Secure & Trusted
                    </h2>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                      Your data is protected with enterprise-grade security.
                      Login safely to access your personalized dashboard.
                    </p>

                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      {[
                        { icon: Shield, label: "Encrypted" },
                        { icon: CheckCircle, label: "Verified" },
                        { icon: Lock, label: "Secure" },
                        { icon: Users, label: "Trusted" },
                      ].map((feature, index) => (
                        <motion.div
                          key={feature.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.1,
                          }}
                          className="flex flex-col items-center p-3 bg-background/50 backdrop-blur rounded-lg"
                        >
                          <feature.icon className="w-6 h-6 text-purple-600 mb-2" />
                          <span className="text-xs font-medium">
                            {feature.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
