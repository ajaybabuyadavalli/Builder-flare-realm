import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  Eye,
  EyeOff,
  User,
  Building,
  Users,
  Shield,
  Rocket,
  Camera,
  Target,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Mail,
  KeyRound,
  Sparkles,
  Heart,
  Star,
  Zap,
  Globe,
} from "lucide-react";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState(
    searchParams.get("role") || "creator",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    platform: "",
    niche: "",
    campaignsHandled: "",
    termsAccepted: false,
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
      avatar: "🎨",
      redirectTo: "/creator/dashboard",
      additionalFields: [
        {
          key: "platform",
          label: "Primary Platform",
          type: "select",
          options: ["Instagram", "YouTube", "TikTok", "Twitter"],
        },
        {
          key: "niche",
          label: "Content Niche",
          type: "select",
          options: [
            "Beauty",
            "Fashion",
            "Fitness",
            "Food",
            "Tech",
            "Travel",
            "Lifestyle",
          ],
        },
      ],
    },
    {
      id: "brand",
      label: "Brand",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      description: "Businesses and marketing teams",
      avatar: "🏢",
      redirectTo: "/brand/dashboard",
      additionalFields: [
        {
          key: "companyName",
          label: "Company Name",
          type: "text",
          placeholder: "Enter your company name",
        },
      ],
    },
    {
      id: "agency",
      label: "Agency",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      description: "Marketing agencies and managers",
      avatar: "📊",
      redirectTo: "/agency/dashboard",
      additionalFields: [
        {
          key: "companyName",
          label: "Agency Name",
          type: "text",
          placeholder: "Enter your agency name",
        },
        {
          key: "campaignsHandled",
          label: "Campaigns Handled Monthly",
          type: "select",
          options: ["1-10", "11-50", "51-100", "100+"],
        },
      ],
    },
    {
      id: "admin",
      label: "Admin",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "Platform administrators",
      avatar: "🛡️",
      redirectTo: "/admin/overview",
      additionalFields: [],
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

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch ❌",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Terms required ❌",
        description: "Please accept the Terms & Privacy Policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    const signupTimeout = setTimeout(() => {
      setIsLoading(false);

      toast({
        title: "Account created successfully! 🎉",
        description: "Welcome to Influbazzar! Redirecting to your dashboard...",
      });

      const redirectTimeout = setTimeout(() => {
        navigate(currentRole.redirectTo);
      }, 1500);

      // Cleanup redirect timeout
      return () => clearTimeout(redirectTimeout);
    }, 2000);

    // Cleanup signup timeout
    return () => clearTimeout(signupTimeout);
  };

  const fillDemoData = () => {
    setFormData({
      ...formData,
      email: `demo.${selectedRole}@influbazzar.com`,
      password: "password123",
      confirmPassword: "password123",
      companyName:
        selectedRole === "brand"
          ? "Demo Brand Co."
          : selectedRole === "agency"
            ? "Demo Agency Ltd."
            : "",
      platform: selectedRole === "creator" ? "Instagram" : "",
      niche: selectedRole === "creator" ? "Lifestyle" : "",
      campaignsHandled: selectedRole === "agency" ? "11-50" : "",
      termsAccepted: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      <NavbarDynamic />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  {currentRole.avatar}
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Influbazzar Today
                </h1>
                <p className="text-muted-foreground text-lg">
                  Select your role and start collaborating!
                </p>
              </div>

              <RippleCard>
                <Card className="shadow-2xl border-0 glass">
                  <CardHeader>
                    <CardTitle className="text-center">
                      Create Your Account
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

                    {/* Signup Form */}
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              placeholder="Create password"
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

                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirm Password
                          </Label>
                          <div className="relative">
                            <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  confirmPassword: e.target.value,
                                })
                              }
                              placeholder="Confirm password"
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Role-specific fields */}
                      {currentRole.additionalFields.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div className="pt-4 border-t">
                            <Label className="text-sm font-medium mb-3 block">
                              Additional Information
                            </Label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {currentRole.additionalFields.map((field) => (
                                <div key={field.key} className="space-y-2">
                                  <Label htmlFor={field.key}>
                                    {field.label}
                                  </Label>
                                  {field.type === "select" ? (
                                    <select
                                      id={field.key}
                                      value={
                                        formData[
                                          field.key as keyof typeof formData
                                        ] as string
                                      }
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          [field.key]: e.target.value,
                                        })
                                      }
                                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                                    >
                                      <option value="">
                                        Select {field.label}
                                      </option>
                                      {field.options?.map((option) => (
                                        <option key={option} value={option}>
                                          {option}
                                        </option>
                                      ))}
                                    </select>
                                  ) : (
                                    <Input
                                      id={field.key}
                                      type="text"
                                      value={
                                        formData[
                                          field.key as keyof typeof formData
                                        ] as string
                                      }
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          [field.key]: e.target.value,
                                        })
                                      }
                                      placeholder={field.placeholder}
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Terms Checkbox */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              termsAccepted: checked as boolean,
                            })
                          }
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-purple-600 hover:underline"
                          >
                            Terms & Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r ${currentRole.color} hover:shadow-lg transition-all duration-300 relative overflow-hidden group`}
                        disabled={
                          isLoading ||
                          !formData.email ||
                          !formData.password ||
                          !formData.confirmPassword ||
                          !formData.termsAccepted
                        }
                      >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Creating account...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Create My Account
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>

                    {/* Demo Data */}
                    <div className="pt-6 border-t">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium">
                            Demo Account Setup
                          </Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={fillDemoData}
                          >
                            <Zap className="w-3 h-3 mr-1" />
                            Fill Demo Data
                          </Button>
                        </div>

                        <div className="p-3 bg-muted/50 rounded-lg text-xs">
                          <p className="text-muted-foreground">
                            Click above to auto-fill with demo credentials for
                            quick testing
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t">
                      <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                          to={`/login${selectedRole ? `?role=${selectedRole}` : ""}`}
                          className="text-purple-600 hover:underline font-medium"
                        >
                          Login →
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
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
                    style={{
                      width: Math.random() * 80 + 30,
                      height: Math.random() * 80 + 30,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <div className="relative z-10 text-center py-12">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-3xl flex items-center justify-center shadow-2xl"
                  >
                    <Rocket className="w-24 h-24 text-purple-600" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Start Your Journey
                    </h2>
                    <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                      Join thousands of creators, brands, and agencies building
                      meaningful collaborations on Influbazzar.
                    </p>

                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      {[
                        {
                          icon: Heart,
                          label: "Connect",
                          color: "text-red-500",
                        },
                        { icon: Star, label: "Grow", color: "text-yellow-500" },
                        { icon: Zap, label: "Earn", color: "text-blue-500" },
                        {
                          icon: Globe,
                          label: "Scale",
                          color: "text-green-500",
                        },
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
                          <feature.icon
                            className={`w-6 h-6 ${feature.color} mb-2`}
                          />
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

export default Signup;
