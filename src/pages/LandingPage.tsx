import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

/**
 * Landing Page Component
 *
 * The main landing page that showcases Influbazzar platform features,
 * benefits, and drives user conversion to signup.
 *
 * Backend Integration Notes:
 * - Add analytics tracking for conversion optimization
 * - Implement A/B testing for different landing page variants
 * - Track user interactions and scroll depth
 * - Add dynamic testimonials from database
 * - Implement lead capture forms with email automation
 */

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: "Connect Creators & Brands",
      description:
        "Bridge the gap between talented creators and innovative brands looking for authentic partnerships.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Track campaign performance with detailed analytics and insights across all social media platforms.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Escrow-based payment system ensures creators get paid on time and brands get quality content.",
    },
    {
      icon: Zap,
      title: "Instant Matching",
      description:
        "AI-powered matching algorithm connects the right creators with the right campaigns instantly.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Fashion Creator",
      content:
        "Influbazzar helped me connect with amazing brands and grow my income by 300% in just 6 months!",
      avatar: "/api/placeholder/64/64",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Brand Manager, TechCorp",
      content:
        "The quality of creators and the campaign results we've seen on Influbazzar are outstanding.",
      avatar: "/api/placeholder/64/64",
      rating: 5,
    },
    {
      name: "Ananya Desai",
      role: "Lifestyle Influencer",
      content:
        "Finally, a platform that values creators and ensures fair compensation. Highly recommended!",
      avatar: "/api/placeholder/64/64",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Creators" },
    { value: "500+", label: "Brand Partners" },
    { value: "₹50L+", label: "Creator Earnings" },
    { value: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                I
              </span>
            </div>
            <span className="font-bold text-xl">Influbazzar</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Connect, Create, and Earn with India's Leading Influencer Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of creators and brands who trust Influbazzar for
              authentic partnerships, fair payments, and measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Start as Creator <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/signup">Join as Brand</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Influbazzar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've built the most comprehensive platform for creator-brand
              partnerships in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to start your influencer marketing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Sign Up & Create Profile
              </h3>
              <p className="text-muted-foreground">
                Join as a creator or brand and build your compelling profile
                with portfolio and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Discover & Connect</h3>
              <p className="text-muted-foreground">
                Brands post campaigns, creators apply, and our AI helps make
                perfect matches
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Create & Earn</h3>
              <p className="text-muted-foreground">
                Collaborate on amazing content and get paid securely through our
                escrow system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from creators and brands who found success with
              Influbazzar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of creators and brands who are already building
            successful partnerships on Influbazzar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/signup">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    I
                  </span>
                </div>
                <span className="font-bold text-xl">Influbazzar</span>
              </div>
              <p className="text-muted-foreground">
                India's leading influencer marketing platform connecting
                creators with brands.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Creators</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-foreground transition-colors"
                  >
                    Join as Creator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-foreground transition-colors"
                  >
                    Creator Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Brands</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-foreground transition-colors"
                  >
                    Join as Brand
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-foreground transition-colors"
                  >
                    Brand Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Influbazzar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

/**
 * Backend Integration Requirements for Landing Page:
 *
 * 1. Analytics and Tracking:
 *    - GET /api/analytics/landing-page-stats (for real-time stats)
 *    - POST /api/analytics/track-interaction (button clicks, scroll depth)
 *    - Implement conversion funnel tracking
 *
 * 2. Dynamic Content:
 *    - GET /api/testimonials/featured (for dynamic testimonials)
 *    - GET /api/platform-stats (for real-time platform statistics)
 *    - A/B testing variants management
 *
 * 3. Lead Generation:
 *    - POST /api/leads/capture (for newsletter signups)
 *    - POST /api/contact/demo-request (for demo scheduling)
 *    - Integration with email marketing tools (SendGrid, Mailchimp)
 *
 * 4. SEO Optimization:
 *    - Dynamic meta tags generation
 *    - Structured data for search engines
 *    - Social media preview optimization
 *
 * 5. Performance Monitoring:
 *    - Core Web Vitals tracking
 *    - Page load time monitoring
 *    - User engagement metrics
 */
