import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Users,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Instagram,
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

const Index = () => {
  const [email, setEmail] = useState("");

  const stats = [
    { label: "Active Creators", value: "25K+", icon: Users },
    { label: "Brand Partners", value: "100+", icon: TrendingUp },
    { label: "Campaigns Completed", value: "500+", icon: Target },
    { label: "Total Revenue Generated", value: "₹2.5Cr+", icon: DollarSign },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Creators",
      description:
        "All creators are thoroughly verified for authenticity and quality.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track campaign performance with detailed analytics and insights.",
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description:
        "AI-powered matching connects brands with perfect creators instantly.",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description:
        "Support for Instagram, YouTube, TikTok, and other major platforms.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Beauty Creator",
      followers: "125K",
      content:
        "Influbazzar helped me land my dream brand collaborations. The platform is user-friendly and the support team is amazing!",
      avatar: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Rohit Mehta",
      role: "Tech Reviewer",
      followers: "89K",
      content:
        "As a tech creator, finding the right brands was always challenging. Influbazzar made it effortless with their smart matching system.",
      avatar: "/api/placeholder/100/100",
      rating: 5,
    },
    {
      name: "Anjali Singh",
      role: "Fashion Influencer",
      followers: "200K",
      content:
        "The payment process is transparent and quick. I've earned more in 6 months than I did in 2 years on other platforms!",
      avatar: "/api/placeholder/100/100",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              India's Premier Influencer Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Connecting Brands, Creators, and Agencies
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              All in One Platform. Join 25K+ verified creators and 100+ brands
              building the future of influencer marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/signup?role=creator">
                  <Camera className="w-5 h-5 mr-2" />
                  Join as Creator
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/signup?role=brand">
                  <Target className="w-5 h-5 mr-2" />
                  Start a Campaign
                </Link>
              </Button>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Influbazzar?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Creators Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Success stories from our creator community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.followers}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators and brands who are already growing with
              Influbazzar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup?role=creator">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Creator
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <Link to="/signup?role=brand">
                  <Target className="w-5 h-5 mr-2" />
                  Start Campaign
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
