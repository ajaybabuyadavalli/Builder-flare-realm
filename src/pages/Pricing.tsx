import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Zap,
  Crown,
  Star,
  ArrowRight,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const creatorFeatures = [
    "Unlimited campaign applications",
    "Zero platform fees",
    "Secure escrow payments",
    "Basic analytics dashboard",
    "Community support",
    "Mobile app access",
  ];

  const brandPlans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for testing the waters",
      features: [
        "2 campaigns per month",
        "Up to 10 creator applications",
        "Basic creator filters",
        "Escrow protection included",
        "Email support",
        "Standard analytics",
      ],
      limitations: [
        "Limited advanced filters",
        "No team collaboration",
        "Basic reporting only",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Starter",
      price: { monthly: 499, annual: 399 },
      description: "For growing D2C brands",
      features: [
        "10 campaigns per month",
        "Unlimited creator applications",
        "Advanced creator filters",
        "Priority creator matching",
        "Enhanced analytics",
        "Chat support",
        "Campaign templates",
        "Content approval workflow",
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Growth",
      price: { monthly: 2999, annual: 2399 },
      description: "For established brands",
      features: [
        "Unlimited campaigns",
        "Advanced audience insights",
        "Team collaboration tools",
        "Export detailed reports",
        "Dedicated account manager",
        "Phone support",
        "Custom campaign types",
        "API access",
        "White-label options",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const agencyFeatures = [
    "Manage unlimited creators",
    "White-label dashboard",
    "Bulk campaign management",
    "Advanced analytics suite",
    "Client management tools",
    "Revenue sharing options",
    "Priority support",
    "Custom integrations",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no setup costs.
            </p>

            {/* Annual/Monthly Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`text-lg ${!isAnnual ? "font-semibold" : "text-muted-foreground"}`}
              >
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-purple-600"
              />
              <span
                className={`text-lg ${isAnnual ? "font-semibold" : "text-muted-foreground"}`}
              >
                Annual
              </span>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              >
                Save 20%
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creator Pricing */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Creator Access</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Free forever for all creators
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <RippleCard>
              <Card className="border-2 border-purple-200 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Creator Plan</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    ₹0
                  </div>
                  <p className="text-muted-foreground">Free forever</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {creatorFeatures.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    asChild
                  >
                    <Link to="/signup?role=creator">
                      Join as Creator
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </RippleCard>
          </div>
        </div>
      </section>

      {/* Brand Pricing */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Brand Plans</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Scale your influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <RippleCard>
                  <Card
                    className={`h-full ${plan.popular ? "border-2 border-purple-200 shadow-xl" : "shadow-lg"}`}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold mb-2">
                        ₹
                        {isAnnual
                          ? plan.price.annual.toLocaleString()
                          : plan.price.monthly.toLocaleString()}
                        <span className="text-sm font-normal text-muted-foreground">
                          {plan.price.monthly > 0 ? "/month" : ""}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {plan.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link
                          to={
                            plan.name === "Growth"
                              ? "/contact"
                              : "/signup?role=brand"
                          }
                        >
                          {plan.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Pricing */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Agency Solutions
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Custom pricing for agencies and enterprises
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RippleCard>
              <Card className="border-2 border-orange-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">
                            Enterprise Plan
                          </h3>
                          <p className="text-muted-foreground">
                            Custom pricing
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {agencyFeatures.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold mb-4">
                          Ready to scale?
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          Get a custom quote based on your specific needs and
                          creator volume.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button
                          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          asChild
                        >
                          <Link to="/contact">
                            <Phone className="w-4 h-4 mr-2" />
                            Schedule a Demo
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Get Custom Quote
                          </Link>
                        </Button>
                      </div>

                      <div className="text-center pt-4 border-t">
                        <p className="text-sm text-muted-foreground">
                          Questions? Our team is here to help
                        </p>
                        <div className="flex items-center justify-center space-x-4 mt-2">
                          <a
                            href="mailto:sales@influbazzar.com"
                            className="text-sm text-purple-600 hover:underline"
                          >
                            sales@influbazzar.com
                          </a>
                          <span className="text-muted-foreground">|</span>
                          <a
                            href="tel:+919000000000"
                            className="text-sm text-purple-600 hover:underline"
                          >
                            +91-9000000000
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RippleCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
