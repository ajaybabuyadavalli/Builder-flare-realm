import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Star,
  Quote,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  BarChart3,
  Instagram,
  Camera,
  Heart,
  MessageSquare,
  ArrowRight,
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
    {
      name: "Sneha Patel",
      role: "Fashion Creator",
      location: "Pune",
      followers: "32K",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "I love how I can filter campaigns by my preferences. No more irrelevant brand outreach emails!",
      earnings: "₹41,000",
      campaigns: 10,
      platform: "Instagram",
      specialty: "Fashion & Lifestyle",
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
    {
      company: "StyleBox Fashion",
      name: "Arjun Mehta",
      role: "CEO",
      location: "Jaipur",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      quote:
        "From campaign creation to payment - everything is streamlined. Our team loves the dashboard and analytics.",
      metrics: {
        campaigns: 32,
        creators: 120,
        roi: "2.8x",
        reach: "4.2M",
      },
      industry: "Fashion & Lifestyle",
    },
  ];

  const agencyTestimonial = {
    company: "Creator Connect Agency",
    name: "Yoshitha Reddy",
    role: "Founder & CEO",
    location: "Mumbai",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    quote:
      "Onboarded 100+ creators, reduced delivery time by 40%. The white-label dashboard is perfect for client presentations.",
    metrics: {
      creatorsManaged: 150,
      campaigns: 280,
      timeReduction: "40%",
      clientSatisfaction: "95%",
    },
    beforeAfter: {
      before: "Manual tracking, delayed payments, scattered communication",
      after: "Automated workflows, instant payments, centralized dashboard",
    },
  };

  const successMetrics = [
    {
      label: "Average Creator Earnings",
      value: "₹45,000",
      period: "per month",
    },
    { label: "Brand ROI", value: "3.4x", period: "average return" },
    { label: "Campaign Success Rate", value: "98%", period: "completion rate" },
    { label: "Creator Satisfaction", value: "4.9/5", period: "average rating" },
  ];

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

      {/* Success Metrics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <p className="font-medium">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Testimonials */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creatorTestimonials.map((testimonial, index) => (
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
                        <Badge variant="outline">{testimonial.specialty}</Badge>
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

      {/* Brand Testimonials */}
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandTestimonials.map((testimonial, index) => (
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

      {/* Agency Testimonial */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 mr-3" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Agency Success Story
                    </h2>
                  </div>
                  <p className="text-xl opacity-90">
                    Scaling operations with Influbazzar
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <Avatar className="w-16 h-16 mr-4">
                        <AvatarImage
                          src={agencyTestimonial.avatar}
                          alt={agencyTestimonial.name}
                        />
                        <AvatarFallback>
                          {agencyTestimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl">
                          {agencyTestimonial.name}
                        </h3>
                        <p className="opacity-90">{agencyTestimonial.role}</p>
                        <p className="text-sm opacity-75">
                          {agencyTestimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 opacity-30" />
                      <p className="text-lg italic pl-8 opacity-90">
                        "{agencyTestimonial.quote}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Before Influbazzar:
                        </h4>
                        <p className="text-sm opacity-90">
                          {agencyTestimonial.beforeAfter.before}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          After Influbazzar:
                        </h4>
                        <p className="text-sm opacity-90">
                          {agencyTestimonial.beforeAfter.after}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <div className="text-3xl font-bold mb-2">
                        {agencyTestimonial.metrics.creatorsManaged}+
                      </div>
                      <div className="text-sm opacity-90">Creators Managed</div>
                    </div>
                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <div className="text-3xl font-bold mb-2">
                        {agencyTestimonial.metrics.campaigns}+
                      </div>
                      <div className="text-sm opacity-90">Campaigns Run</div>
                    </div>
                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <div className="text-3xl font-bold mb-2">
                        {agencyTestimonial.metrics.timeReduction}
                      </div>
                      <div className="text-sm opacity-90">Time Reduction</div>
                    </div>
                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <div className="text-3xl font-bold mb-2">
                        {agencyTestimonial.metrics.clientSatisfaction}
                      </div>
                      <div className="text-sm opacity-90">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

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
