import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { RippleCard } from "@/components/ui/ripple-card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  HelpCircle,
  MessageSquare,
  Send,
  Search,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Zap,
  FileText,
  DollarSign,
  Settings,
  User,
  Camera,
  Target,
  SmilePlus,
  Frown,
  Smile,
  Meh,
  Heart,
  Filter,
  Calendar,
} from "lucide-react";

const CreatorSupport = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "medium",
    description: "",
    mood: "",
  });
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hi! I'm here to help. What can I assist you with today?",
      timestamp: new Date(Date.now() - 5000),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const { toast } = useToast();

  const faqData = [
    {
      category: "payments",
      question: "How do I get paid for my campaigns?",
      answer:
        "Payments are processed through our secure escrow system. Once you submit your content and it's approved by the brand, the payment is automatically released to your account within 3-5 business days.",
    },
    {
      category: "campaigns",
      question: "How do I apply for campaigns?",
      answer:
        "Browse available campaigns in the 'Discover Campaigns' section. You can filter by niche, platform, and payment type. Click 'Apply Now' on campaigns that match your profile and follow the application process.",
    },
    {
      category: "score",
      question: "What is the Influbazzar Score and how is it calculated?",
      answer:
        "Your Influbazzar Score is a trust metric based on content quality (25%), engagement rate (20%), reliability (25%), professionalism (15%), and growth trend (15%). Higher scores increase your visibility to brands.",
    },
    {
      category: "content",
      question: "What content formats are supported?",
      answer:
        "We support Instagram posts, stories, reels, YouTube videos, TikTok videos, and Twitter posts. Each campaign specifies the required content format and deliverables.",
    },
    {
      category: "payments",
      question: "What if my payment is delayed?",
      answer:
        "Payments are typically processed within 3-5 business days after content approval. If your payment is delayed beyond 7 days, you can raise an escrow release request from your earnings page.",
    },
    {
      category: "campaigns",
      question: "Can I negotiate campaign terms?",
      answer:
        "Some brands allow negotiation on deliverables and timeline. Look for campaigns marked as 'Negotiable' or contact the brand directly through our messaging system.",
    },
    {
      category: "account",
      question: "How do I verify my social media accounts?",
      answer:
        "Go to your profile settings and click 'Verify Account' next to each social platform. Follow the verification steps which typically involve posting a verification code or connecting your account.",
    },
    {
      category: "content",
      question: "What happens if my content is rejected?",
      answer:
        "If content is rejected, you'll receive feedback from the brand. You can revise and resubmit within the campaign timeline. Multiple rejections may affect your Influbazzar Score.",
    },
    {
      category: "score",
      question: "How can I improve my Influbazzar Score?",
      answer:
        "Maintain consistent posting, engage with your audience, complete campaigns on time, respond professionally to brands, and focus on quality content creation.",
    },
    {
      category: "account",
      question: "Can I change my niche or categories?",
      answer:
        "Yes, you can update your categories in profile settings. However, frequent changes may affect brand matching algorithms. It's best to choose 2-3 consistent niches.",
    },
  ];

  const tickets = [
    {
      id: "TKT-001",
      subject: "Payment not received for completed campaign",
      category: "payment",
      priority: "high",
      status: "open",
      createdDate: "2024-01-20",
      lastUpdate: "2024-01-21",
      responses: 2,
    },
    {
      id: "TKT-002",
      subject: "Unable to upload content for campaign",
      category: "technical",
      priority: "medium",
      status: "in-progress",
      createdDate: "2024-01-18",
      lastUpdate: "2024-01-19",
      responses: 1,
    },
    {
      id: "TKT-003",
      subject: "Influbazzar Score calculation query",
      category: "account",
      priority: "low",
      status: "resolved",
      createdDate: "2024-01-15",
      lastUpdate: "2024-01-16",
      responses: 3,
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "payments", label: "Payments & Earnings" },
    { value: "campaigns", label: "Campaigns" },
    { value: "content", label: "Content & Upload" },
    { value: "account", label: "Account & Profile" },
    { value: "score", label: "Influbazzar Score" },
    { value: "technical", label: "Technical Issues" },
  ];

  const ticketCategories = [
    { value: "payment", label: "Payment Issue", icon: DollarSign },
    { value: "technical", label: "Technical Problem", icon: Settings },
    { value: "account", label: "Account Help", icon: User },
    { value: "content", label: "Content Upload", icon: Camera },
    { value: "campaign", label: "Campaign Query", icon: Target },
    { value: "other", label: "Other", icon: HelpCircle },
  ];

  const moodOptions = [
    { value: "happy", label: "Happy", icon: Smile, color: "text-green-600" },
    { value: "neutral", label: "Neutral", icon: Meh, color: "text-yellow-600" },
    {
      value: "frustrated",
      label: "Frustrated",
      icon: Frown,
      color: "text-red-600",
    },
    {
      value: "love",
      label: "Love Platform",
      icon: Heart,
      color: "text-pink-600",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      open: {
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
        label: "Open",
      },
      "in-progress": {
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        label: "In Progress",
      },
      resolved: {
        color:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        label: "Resolved",
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.open;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      low: {
        color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100",
        label: "Low",
      },
      medium: {
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        label: "Medium",
      },
      high: {
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
        label: "High",
      },
    };

    const config =
      priorityConfig[priority as keyof typeof priorityConfig] ||
      priorityConfig.medium;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket submitted successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setTicketForm({
      subject: "",
      category: "",
      priority: "medium",
      description: "",
      mood: "",
    });
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      message: chatMessage,
      timestamp: new Date(),
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        type: "bot" as const,
        message:
          "Thanks for your message! I'm processing your request. Is there anything specific I can help you with regarding campaigns, payments, or your Influbazzar Score?",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Support Center
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get help with campaigns, payments, and account management. We're
              here to support your creator journey.
            </p>
          </motion.div>

          {/* Quick Help Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                title: "Payment Help",
                icon: DollarSign,
                description: "Earnings & escrow support",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Campaign Issues",
                icon: Target,
                description: "Application & content help",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Score Boost",
                icon: Star,
                description: "Improve your rating",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Technical Support",
                icon: Settings,
                description: "Platform & upload issues",
                color: "from-orange-500 to-red-500",
              },
            ].map((card, index) => (
              <RippleCard key={card.title}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </RippleCard>
            ))}
          </motion.div>

          {/* Main Support Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="faq"
                  className="flex items-center space-x-2"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tickets"
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>My Tickets</span>
                </TabsTrigger>
                <TabsTrigger
                  value="chat"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Live Chat</span>
                </TabsTrigger>
              </TabsList>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                      <CardTitle>Frequently Asked Questions</CardTitle>

                      <div className="flex space-x-3">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
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
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-2">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <RippleCard>
                            <AccordionTrigger className="hover:no-underline p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Badge variant="outline" className="capitalize">
                                  {faq.category}
                                </Badge>
                                <span className="text-left">
                                  {faq.question}
                                </span>
                              </div>
                            </AccordionTrigger>
                          </RippleCard>
                          <AccordionContent className="px-4 pb-4">
                            <p className="text-muted-foreground">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    {filteredFAQs.length === 0 && (
                      <div className="text-center py-8">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">No FAQs found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your search or category filter.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Create Ticket Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Still need help? Create a support ticket
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            value={ticketForm.subject}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                subject: e.target.value,
                              })
                            }
                            placeholder="Brief description of your issue"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <select
                            id="category"
                            value={ticketForm.category}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                category: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                            required
                          >
                            <option value="">Select category</option>
                            {ticketCategories.map((category) => (
                              <option
                                key={category.value}
                                value={category.value}
                              >
                                {category.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority</Label>
                          <select
                            id="priority"
                            value={ticketForm.priority}
                            onChange={(e) =>
                              setTicketForm({
                                ...ticketForm,
                                priority: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label>How are you feeling? (Optional)</Label>
                          <div className="flex space-x-2">
                            {moodOptions.map((mood) => (
                              <Button
                                key={mood.value}
                                type="button"
                                variant={
                                  ticketForm.mood === mood.value
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                onClick={() =>
                                  setTicketForm({
                                    ...ticketForm,
                                    mood: mood.value,
                                  })
                                }
                                className="flex items-center space-x-1"
                              >
                                <mood.icon
                                  className={`w-4 h-4 ${mood.color}`}
                                />
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          value={ticketForm.description}
                          onChange={(e) =>
                            setTicketForm({
                              ...ticketForm,
                              description: e.target.value,
                            })
                          }
                          placeholder="Please provide detailed information about your issue..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* My Tickets Tab */}
              <TabsContent value="tickets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>My Support Tickets</CardTitle>
                      <Button
                        onClick={() => setActiveTab("faq")}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Create New Ticket
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {tickets.map((ticket) => (
                        <RippleCard key={ticket.id}>
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-medium">
                                    {ticket.subject}
                                  </h4>
                                  <Badge variant="outline">#{ticket.id}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {ticket.category}
                                </p>
                              </div>

                              <div className="flex items-center space-x-2">
                                {getPriorityBadge(ticket.priority)}
                                {getStatusBadge(ticket.status)}
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  <span>
                                    Created:{" "}
                                    {new Date(
                                      ticket.createdDate,
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  <span>
                                    Updated:{" "}
                                    {new Date(
                                      ticket.lastUpdate,
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2">
                                <Badge variant="secondary">
                                  {ticket.responses} responses
                                </Badge>
                                <Button size="sm" variant="outline">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </RippleCard>
                      ))}
                    </div>

                    {tickets.length === 0 && (
                      <div className="text-center py-8">
                        <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">
                          No support tickets
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          You haven't created any support tickets yet.
                        </p>
                        <Button onClick={() => setActiveTab("faq")}>
                          Create Your First Ticket
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Live Chat Tab */}
              <TabsContent value="chat" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Live Support Chat
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="border rounded-lg">
                      {/* Chat Messages */}
                      <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {chatMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-start space-x-2 max-w-xs ${
                                message.type === "user"
                                  ? "flex-row-reverse space-x-reverse"
                                  : ""
                              }`}
                            >
                              <Avatar className="w-8 h-8">
                                <AvatarImage
                                  src={
                                    message.type === "bot"
                                      ? "/api/placeholder/50/50"
                                      : "/api/placeholder/100/100"
                                  }
                                />
                                <AvatarFallback>
                                  {message.type === "bot" ? "AI" : "You"}
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className={`rounded-lg px-3 py-2 ${
                                  message.type === "user"
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                    : "bg-muted"
                                }`}
                              >
                                <p className="text-sm">{message.message}</p>
                                <p
                                  className={`text-xs mt-1 ${
                                    message.type === "user"
                                      ? "text-purple-100"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback>AI</AvatarFallback>
                              </Avatar>
                              <div className="bg-muted rounded-lg px-3 py-2">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Chat Input */}
                      <div className="border-t p-4">
                        <div className="flex space-x-2">
                          <Input
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={(e) =>
                              e.key === "Enter" && handleSendMessage()
                            }
                            className="flex-1"
                          />
                          <Button
                            onClick={handleSendMessage}
                            disabled={!chatMessage.trim()}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Get detailed help via email
                    </p>
                    <a
                      href="mailto:support@influbazzar.com"
                      className="text-purple-600 hover:underline"
                    >
                      support@influbazzar.com
                    </a>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Mon-Fri, 9 AM - 6 PM IST
                    </p>
                    <a
                      href="tel:+919000000000"
                      className="text-purple-600 hover:underline"
                    >
                      +91-9000000000
                    </a>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Premium Support</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Priority help for top creators
                    </p>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Upgrade
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorSupport;
