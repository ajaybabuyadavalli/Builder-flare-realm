import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import {
  Users,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Instagram,
  Play,
  ChevronRight,
  Target,
  DollarSign,
  BarChart3,
  Globe,
  Camera,
  Heart,
  MessageSquare,
  Eye,
  Share2,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            #1 Creator Platform in India
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Where Creators Meet
            <br />
            <span className="relative">
              Opportunities
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 50,000+ creators earning through brand collaborations. Secure
            payments, verified brands, and real opportunities await.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {isAuthenticated ? (
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/creator/dashboard">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Go to Dashboard
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/signup">
                  <Users className="w-5 h-5 mr-2" />
                  Start as Creator
                </Link>
              </Button>
            )}

            {isAuthenticated ? (
              <Button size="lg" variant="outline" asChild>
                <Link to="/creator/discover-campaigns">
                  Discover More Creators
                </Link>
              </Button>
            ) : (
              <Button size="lg" variant="outline" asChild>
                <Link to="/login?role=brand">🔒 Login to View Creators</Link>
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Active Creators" },
              { number: "500+", label: "Brand Partners" },
              { number: "₹10Cr+", label: "Creator Earnings" },
              { number: "99.9%", label: "Payment Success" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Counter
                  from={0}
                  to={parseInt(stat.number.replace(/\D/g, "")) || 50}
                  className="text-2xl md:text-3xl font-bold text-purple-600"
                  suffix={
                    stat.number.includes("+")
                      ? "+"
                      : stat.number.includes("%")
                        ? "%"
                        : ""
                  }
                  prefix={stat.number.includes("₹") ? "₹" : ""}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Value Metrics Section
const ValueMetricsSection = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Creators Choose Influbazzar
        </h2>
        <p className="text-xl text-muted-foreground">
          More than just a platform - we're your growth partner
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "Secure Escrow System",
            description:
              "Your payments are protected. Get paid within 24 hours of campaign completion.",
            color: "from-green-500 to-emerald-500",
          },
          {
            icon: Target,
            title: "Verified Brand Partners",
            description:
              "Work with legitimate brands. No fake campaigns or payment delays.",
            color: "from-blue-500 to-cyan-500",
          },
          {
            icon: TrendingUp,
            title: "Performance Analytics",
            description:
              "Track your growth with detailed insights and audience analytics.",
            color: "from-purple-500 to-pink-500",
          },
          {
            icon: Users,
            title: "Community Support",
            description:
              "Join a community of 50,000+ creators sharing tips and opportunities.",
            color: "from-orange-500 to-red-500",
          },
          {
            icon: Zap,
            title: "Instant Matching",
            description:
              "Our AI matches you with relevant campaigns in real-time.",
            color: "from-yellow-500 to-orange-500",
          },
          {
            icon: Award,
            title: "Recognition Program",
            description:
              "Top performers get featured and priority access to premium campaigns.",
            color: "from-indigo-500 to-purple-500",
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <RippleCard>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </RippleCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "How does escrow work?",
      answer:
        "Escrow ensures secure payments. Brands deposit funds when posting campaigns, and creators get paid after successful content delivery and approval.",
    },
    {
      question: "What if the creator doesn't post?",
      answer:
        "We have a robust dispute resolution system. If deliverables aren't met within agreed timeframes, brands can request refunds through our support team.",
    },
    {
      question: "Can brands do barter-only deals?",
      answer:
        "Yes! Brands can offer product-only collaborations, paid campaigns, or a combination of both. Creators can filter campaigns based on their preferences.",
    },
    {
      question: "How do I get verified?",
      answer:
        "Verification is automatic for creators with 1K+ followers and authentic engagement. Complete your profile and link your social accounts to get verified faster.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "Creators get paid within 24-48 hours after content approval. We support UPI, bank transfers, and international payments for global creators.",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Influbazzar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Main Homepage Component
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueMetricsSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
