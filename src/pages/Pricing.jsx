import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for new creators",
      features: [
        "Profile creation",
        "Basic analytics",
        "Apply to campaigns",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      description: "For growing creators",
      features: [
        "Everything in Starter",
        "Priority campaign matching",
        "Advanced analytics",
        "Campaign templates",
        "Phone support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For agencies and teams",
      features: [
        "Everything in Pro",
        "Team management",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your creator journey. Start free and
              upgrade as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`h-full ${plan.popular ? "border-2 border-purple-200 shadow-lg" : ""}`}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price}
                      {plan.period && (
                        <span className="text-lg text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span>{feature}</span>
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
                      <Link to="/signup?role=creator">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
