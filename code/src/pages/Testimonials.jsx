import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Star,
  Quote,
  Users,
  Target,
  Instagram,
  ArrowRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const creatorTestimonials = [
    {
      name: "Ajay Kumar",
      role: "Fitness Creator",
      location: "Mumbai",
      followers: "45K",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "Within 2 weeks I had 3 paid collaborations! The escrow system gave me confidence that I'll actually get paid for my work.",
      earnings: "₹35,000",
      campaigns: 8,
      platform: "Instagram",
      specialty: "Fitness & Nutrition",
    },
    {
      name: "Rhea Kapoor",
      role: "Beauty Influencer",
      location: "Delhi",
      followers: "28K",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "Influbazzar connected me with authentic brands that actually align with my values. The platform is so easy to use!",
      earnings: "₹52,000",
      campaigns: 12,
      platform: "Instagram",
      specialty: "Beauty & Skincare",
    },
    {
      name: "Rajat Singh",
      role: "Tech Reviewer",
      location: "Bangalore",
      followers: "67K",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "The analytics dashboard helps me understand my audience better and price my content appropriately. Game changer!",
      earnings: "₹78,000",
      campaigns: 15,
      platform: "YouTube",
      specialty: "Tech Reviews",
    },
  ];

  const brandTestimonials = [
    {
      company: "GlowCo Beauty",
      name: "Srinivas Reddy",
      role: "Marketing Director",
      location: "Hyderabad",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "Escrow gave us confidence as a growing D2C brand. We've seen 3.2x ROI on our influencer campaigns through Influbazzar.",
      metrics: {
        campaigns: 25,
        creators: 85,
        roi: "3.2x",
        reach: "2.5M",
      },
      industry: "Beauty & Skincare",
    },
    {
      company: "FitLife Nutrition",
      name: "Priya Sharma",
      role: "Brand Manager",
      location: "Chennai",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "The creator quality on Influbazzar is outstanding. We found micro-influencers who delivered better engagement than macro influencers.",
      metrics: {
        campaigns: 18,
        creators: 42,
        roi: "4.1x",
        reach: "1.8M",
      },
      industry: "Health & Fitness",
    },
  ];

  // Filter testimonials based on search term and selected role
  const filteredCreatorTestimonials = creatorTestimonials.filter(
    (testimonial) => {
      const matchesSearch =
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === "all" || selectedRole === "creator";
      return matchesSearch && matchesRole;
    },
  );

  const filteredBrandTestimonials = brandTestimonials.filter((testimonial) => {
    const matchesSearch =
      testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || selectedRole === "brand";
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Real Stories, Real Results
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Hear from creators, brands, and agencies who are growing their
              business with Influbazzar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background"
            >
              <option value="all">All Roles</option>
              <option value="creator">Creators</option>
              <option value="brand">Brands</option>
              <option value="agency">Agencies</option>
            </select>
          </motion.div>
        </div>
      </section>

      {/* Creator Testimonials */}
      {(selectedRole === "all" || selectedRole === "creator") && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Creator Success Stories
                </h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Real creators sharing their journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCreatorTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RippleCard>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
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
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {testimonial.name}
                                </h3>
                                <p className="text-purple-600 font-medium">
                                  {testimonial.role}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.location}
                                </p>
                              </div>
                              <Badge
                                variant="secondary"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {testimonial.followers} followers
                              </Badge>
                            </div>
                            <div className="flex items-center mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-500 fill-current"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative mb-6">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-600/20" />
                          <p className="text-muted-foreground italic pl-6">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                          <div className="text-center">
                            <div className="font-bold text-green-600">
                              {testimonial.earnings}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Total Earned
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold">
                              {testimonial.campaigns}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Campaigns
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                          <Badge variant="outline">
                            {testimonial.specialty}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Instagram className="w-4 h-4 mr-1" />
                            {testimonial.platform}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </RippleCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brand Testimonials */}
      {(selectedRole === "all" || selectedRole === "brand") && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Brand Success Stories
                </h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Brands achieving measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredBrandTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RippleCard>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-lg mb-1">
                            {testimonial.company}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.industry}
                          </p>
                          <Badge variant="secondary" className="mt-2">
                            {testimonial.location}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="relative mb-6">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-600/20" />
                          <p className="text-muted-foreground italic pl-6 text-sm">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              ROI
                            </span>
                            <span className="font-bold text-green-600">
                              {testimonial.metrics.roi}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              Campaigns
                            </span>
                            <span className="font-semibold">
                              {testimonial.metrics.campaigns}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              Creators
                            </span>
                            <span className="font-semibold">
                              {testimonial.metrics.creators}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">
                              Reach
                            </span>
                            <span className="font-semibold">
                              {testimonial.metrics.reach}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center pt-4 border-t">
                          <Avatar className="w-10 h-10 mr-3">
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
                            <p className="font-medium text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </RippleCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators, brands, and agencies growing with
              Influbazzar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <Link to="/signup?role=creator">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Creator
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/signup?role=brand">
                  <Target className="w-5 h-5 mr-2" />
                  Start Campaign
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-muted-foreground mb-4">
                Want your story featured here?
              </p>
              <Button variant="link" asChild>
                <Link to="/contact">
                  Share Your Success Story
                  <ArrowRight className="w-4 h-4 ml-2" />
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

export default Testimonials;
