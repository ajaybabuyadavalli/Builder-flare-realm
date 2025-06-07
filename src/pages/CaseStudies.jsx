import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Search,
  Filter,
  TrendingUp,
  Star,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "beauty", label: "Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "tech", label: "Tech" },
    { value: "food", label: "Food" },
  ];

  const caseStudies = [
    {
      id: 1,
      hashtag: "#BareGlowRoutine",
      title: "Boosted sales 2.5x with 20+ micro creators",
      brand: "GlowCo Beauty",
      category: "beauty",
      creator: {
        name: "Rhea Kapoor",
        followers: "8.2K",
        avatar: "/api/placeholder/100/100",
      },
      results: {
        reach: "2.5M",
        engagement: "4.2%",
        conversions: "1,200",
        roi: "2.5x",
      },
      featured: true,
    },
    {
      id: 2,
      hashtag: "#TechReviewHonest",
      title: "Achieved 95% positive sentiment score",
      brand: "GadgetPro",
      category: "tech",
      creator: {
        name: "Arjun Mehta",
        followers: "180K",
        avatar: "/api/placeholder/100/100",
      },
      results: {
        reach: "3.1M",
        engagement: "7.2%",
        conversions: "1,500",
        roi: "4.1x",
      },
      featured: false,
    },
    {
      id: 3,
      hashtag: "#StyleStatement2024",
      title: "Generated 500+ UGC posts in 10 days",
      brand: "StyleBox Fashion",
      category: "fashion",
      creator: {
        name: "Sneha Patel",
        followers: "120K",
        avatar: "/api/placeholder/100/100",
      },
      results: {
        reach: "4.2M",
        engagement: "3.8%",
        conversions: "2,100",
        roi: "2.8x",
      },
      featured: true,
    },
  ];

  const featuredCaseStudies = caseStudies.filter((study) => study.featured);
  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              <Award className="w-4 h-4 mr-2" />
              Case Studies
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Campaign Success Stories
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore real campaigns with real results. Get inspired by
              successful collaborations across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {filteredCaseStudies.length} results found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most impactful campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.slice(0, 3).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-purple-200 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant="outline">{study.category}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-purple-600 mb-2">
                      {study.hashtag}
                    </h3>
                    <p className="text-muted-foreground">{study.title}</p>

                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={study.creator.avatar}
                          alt={study.creator.name}
                        />
                        <AvatarFallback>
                          {study.creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{study.creator.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {study.creator.followers} followers
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="font-bold text-green-600 text-lg">
                          {study.results.roi}
                        </div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="font-bold text-blue-600 text-lg">
                          {study.results.reach}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Reach
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="font-bold text-purple-600 text-lg">
                          {study.results.engagement}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Engagement
                        </div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <div className="font-bold text-orange-600 text-lg">
                          {study.results.conversions}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Conversions
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
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
              Want Your Story Featured?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create successful campaigns with Influbazzar and showcase your
              results to inspire others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup?role=brand">Start Your Campaign</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <Link to="/contact">Submit Your Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
