import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Clock,
  HelpCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@influbazzar.com",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      action: "mailto:support@influbazzar.com",
    },
    {
      title: "WhatsApp Support",
      description: "Quick responses via WhatsApp",
      contact: "+91-9000000000",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      action: "https://wa.me/919000000000",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+91-9000000000",
      icon: Phone,
      color: "from-purple-500 to-pink-500",
      action: "tel:+919000000000",
    },
  ];

  const officeInfo = {
    address: "123 Innovation Hub, Bangalore, Karnataka 560001",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
    timezone: "Indian Standard Time (IST)",
  };

  const faqCategories = [
    {
      title: "For Creators",
      icon: Users,
      questions: [
        "How do I get paid?",
        "What types of campaigns are available?",
        "How do I build my profile?",
        "What is the Influbazzar Score?",
      ],
    },
    {
      title: "For Brands",
      icon: Target,
      questions: [
        "How does escrow work?",
        "How do I find the right creators?",
        "What are the platform fees?",
        "Can I manage multiple campaigns?",
      ],
    },
    {
      title: "For Agencies",
      icon: BarChart3,
      questions: [
        "How do I manage multiple creators?",
        "What analytics are available?",
        "Can I white-label the platform?",
        "What are the pricing options?",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <NavbarDynamic />

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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              We're Here to Help
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Have questions about Influbazzar? Need help getting started? Our
              team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Options
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <RippleCard>
                  <Card className="h-full text-center">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <p className="font-medium mb-4">{method.contact}</p>
                      <Button asChild>
                        <a
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contact Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </RippleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Thanks for reaching out. We'll get back to you soon.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            role: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
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
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">I am a... *</Label>
                        <select
                          id="role"
                          value={formData.role}
                          onChange={(e) =>
                            setFormData({ ...formData, role: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          required
                        >
                          <option value="">Select your role</option>
                          <option value="creator">Creator/Influencer</option>
                          <option value="brand">Brand/Business</option>
                          <option value="agency">Agency/Manager</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <p className="text-muted-foreground">
                      {officeInfo.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Business Hours
                    </h4>
                    <p className="text-muted-foreground">{officeInfo.hours}</p>
                    <p className="text-sm text-muted-foreground">
                      {officeInfo.timezone}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Common Questions
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Quick answers to frequently asked questions
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqCategories.map((category) => (
                      <div
                        key={category.title}
                        className="border-b pb-4 last:border-b-0"
                      >
                        <h4 className="font-medium mb-2 flex items-center">
                          <category.icon className="w-4 h-4 mr-2" />
                          {category.title}
                        </h4>
                        <ul className="space-y-1">
                          {category.questions.slice(0, 3).map((question) => (
                            <li
                              key={question}
                              className="text-sm text-muted-foreground"
                            >
                              • {question}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <a href="/faq">View All FAQs</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Other Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RippleCard>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Sales Inquiries</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in enterprise solutions or custom pricing?
                  </p>
                  <Button variant="outline" asChild>
                    <a href="mailto:sales@influbazzar.com">
                      <Mail className="w-4 h-4 mr-2" />
                      sales@influbazzar.com
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </RippleCard>

            <RippleCard>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Partnership Opportunities
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Want to partner with us or integrate our platform?
                  </p>
                  <Button variant="outline" asChild>
                    <a href="mailto:partnerships@influbazzar.com">
                      <Mail className="w-4 h-4 mr-2" />
                      partnerships@influbazzar.com
                    </a>
                  </Button>
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

export default Contact;
