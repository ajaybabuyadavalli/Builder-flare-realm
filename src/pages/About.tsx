import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Counter } from "@/components/ui/counter";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Heart,
  Users,
  Target,
  Globe,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Founded with a mission to democratize influencer marketing in India",
    },
    {
      year: "2024 Q1",
      title: "Early Traction",
      description: "Onboarded first 1,000 creators and launched beta platform",
    },
    {
      year: "2024 Q2",
      title: "Market Expansion",
      description: "Reached 10,000+ creators and introduced escrow payments",
    },
    {
      year: "2024 Q3",
      title: "Platform Evolution",
      description: "Launched agency tools and advanced analytics dashboard",
    },
    {
      year: "2024 Q4",
      title: "Scale & Growth",
      description: "25K+ creators, ₹2Cr+ payouts, multilingual support",
    },
    {
      year: "2025",
      title: "The Future",
      description:
        "AI-powered matching, video content tools, international expansion",
    },
  ];

  const team = [
    {
      name: "Arjun Patel",
      role: "Co-Founder & CEO",
      bio: "Former product lead at top tech companies. Passionate about creator economy.",
      avatar: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arjun@influbazzar.com",
      },
    },
    {
      name: "Priya Singh",
      role: "Co-Founder & CTO",
      bio: "Full-stack engineer with expertise in scalable platforms and AI.",
      avatar: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@influbazzar.com",
      },
    },
    {
      name: "Kiran Kumar",
      role: "Head of Marketing",
      bio: "Digital marketing veteran with 8+ years in D2C and influencer space.",
      avatar: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kiran@influbazzar.com",
      },
    },
    {
      name: "Sneha Gupta",
      role: "Head of Creator Relations",
      bio: "Former influencer turned platform advocate. Understands creator needs deeply.",
      avatar: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sneha@influbazzar.com",
      },
    },
  ];

  const values = [
    {
      title: "Creator First",
      description:
        "We believe creators are the heart of digital marketing. Every decision prioritizes their success and fair compensation.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Transparency",
      description:
        "No hidden fees, clear pricing, open communication. What you see is what you get.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Innovation",
      description:
        "Continuously improving our platform with cutting-edge technology and user feedback.",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Bharat Focus",
      description:
        "Built for India, supporting regional languages, local creators, and D2C brands.",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const impact = [
    { value: 2, suffix: " Cr+", label: "Creator Earnings" },
    { value: 25000, suffix: "+", label: "Active Creators" },
    { value: 100, suffix: "+", label: "Partner Brands" },
    { value: 200, suffix: "+", label: "Successful Campaigns" },
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
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Empowering the Creator Economy
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're building the most creator-friendly platform in India, where
              authentic connections drive meaningful collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Influbazzar?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  The creator economy in India is exploding, but creators and
                  brands still struggle with finding the right matches, fair
                  pricing, and secure payments.
                </p>
                <p>
                  We founded Influbazzar to solve these fundamental problems
                  with a platform that's transparent, secure, and built
                  specifically for the Indian market.
                </p>
                <p>
                  From supporting regional languages to understanding local
                  creator challenges, we're building the infrastructure that
                  empowers both emerging and established creators to monetize
                  their influence effectively.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <RippleCard key={value.title}>
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </RippleCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From idea to India's leading influencer platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-background"></div>

                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <RippleCard>
                      <Card>
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.year}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </RippleCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <Counter
                    end={metric.value}
                    prefix="₹"
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The people building the future of creator economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RippleCard>
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.bio}
                      </p>

                      <div className="flex justify-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a href={`mailto:${member.social.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Bharat Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Bharat
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating India's digital diversity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RippleCard>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">
                    Multilingual Support
                  </h3>
                  <p className="text-muted-foreground">
                    Platform available in Hindi and English, with plans for
                    regional languages.
                  </p>
                </CardContent>
              </Card>
            </RippleCard>

            <RippleCard>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">
                    Rural Inclusion
                  </h3>
                  <p className="text-muted-foreground">
                    Supporting creators from Tier 2 and Tier 3 cities with
                    simplified tools.
                  </p>
                </CardContent>
              </Card>
            </RippleCard>

            <RippleCard>
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Local Brands</h3>
                  <p className="text-muted-foreground">
                    Empowering D2C and small businesses to scale through
                    influencer marketing.
                  </p>
                </CardContent>
              </Card>
            </RippleCard>
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a creator, brand, or agency, there's a place for
              you in our growing community.
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
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
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

export default About;
