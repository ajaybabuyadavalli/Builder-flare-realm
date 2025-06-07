import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CreatorSupport = () => {
  const [activeTab, setActiveTab] = useState("help");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "medium",
    message: "",
    attachments: [],
  });

  const supportCategories = [
    { id: "all", name: "All Topics", icon: "📋" },
    { id: "account", name: "Account & Profile", icon: "👤" },
    { id: "campaigns", name: "Campaigns & Applications", icon: "📊" },
    { id: "payments", name: "Payments & Earnings", icon: "💰" },
    { id: "technical", name: "Technical Issues", icon: "🔧" },
    { id: "content", name: "Content Guidelines", icon: "📝" },
    { id: "partnerships", name: "Brand Partnerships", icon: "🤝" },
  ];

  const faqData = [
    {
      id: 1,
      category: "account",
      question: "How do I update my profile information?",
      answer:
        "You can update your profile by going to Profile Settings from your dashboard. Click 'Edit Profile' and make the necessary changes. Don't forget to save your changes.",
    },
    {
      id: 2,
      category: "campaigns",
      question:
        "How long does it take to hear back after applying to a campaign?",
      answer:
        "Brands typically respond within 3-5 business days. You'll receive an email notification and see updates in your dashboard when there's a status change.",
    },
    {
      id: 3,
      category: "payments",
      question: "When will I receive payment for completed campaigns?",
      answer:
        "Payments are processed within 7-14 business days after campaign completion and approval. You'll receive payments via your selected payment method.",
    },
    {
      id: 4,
      category: "technical",
      question: "I'm having trouble uploading content. What should I do?",
      answer:
        "Ensure your file size is under 50MB and in supported formats (JPG, PNG, MP4). Clear your browser cache or try a different browser. Contact support if issues persist.",
    },
    {
      id: 5,
      category: "content",
      question: "What are the content guidelines I need to follow?",
      answer:
        "Content should be authentic, high-quality, and align with brand values. Avoid inappropriate language, copyright violations, and ensure proper disclosure of sponsored content.",
    },
    {
      id: 6,
      category: "partnerships",
      question: "Can I negotiate campaign terms with brands?",
      answer:
        "Yes, you can discuss terms through our messaging system. However, major changes should be agreed upon before starting the campaign work.",
    },
    {
      id: 7,
      category: "account",
      question: "How do I verify my social media accounts?",
      answer:
        "Go to Profile Settings > Social Media Accounts. Click 'Verify' next to each platform and follow the verification process. This helps build trust with brands.",
    },
    {
      id: 8,
      category: "campaigns",
      question: "What happens if I can't complete a campaign on time?",
      answer:
        "Contact the brand immediately through our messaging system. Extensions may be possible depending on circumstances. Late submissions may affect your creator rating.",
    },
  ];

  const supportTickets = [
    {
      id: "TK-001",
      subject: "Payment not received for StyleCo campaign",
      category: "payments",
      status: "In Progress",
      priority: "high",
      created: "2024-02-05",
      lastUpdate: "2024-02-06",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "TK-002",
      subject: "Unable to upload video content",
      category: "technical",
      status: "Resolved",
      priority: "medium",
      created: "2024-02-01",
      lastUpdate: "2024-02-02",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "TK-003",
      subject: "Question about content guidelines",
      category: "content",
      status: "Waiting for Response",
      priority: "low",
      created: "2024-01-28",
      lastUpdate: "2024-01-30",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  const resources = [
    {
      title: "Creator Handbook",
      description: "Complete guide to succeeding as a creator on Influbazzar",
      type: "PDF",
      icon: "📖",
      downloadUrl: "#",
    },
    {
      title: "Content Creation Best Practices",
      description:
        "Tips and tricks for creating engaging content that brands love",
      type: "Video",
      icon: "🎥",
      downloadUrl: "#",
    },
    {
      title: "Negotiation Guide",
      description: "How to negotiate fair rates and terms with brands",
      type: "Article",
      icon: "📝",
      downloadUrl: "#",
    },
    {
      title: "Platform-Specific Guidelines",
      description: "Best practices for each social media platform",
      type: "PDF",
      icon: "📱",
      downloadUrl: "#",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    alert(
      "Support ticket submitted successfully! We'll get back to you within 24 hours.",
    );
    setTicketForm({
      subject: "",
      category: "",
      priority: "medium",
      message: "",
      attachments: [],
    });
  };

  const handleInputChange = (field, value) => {
    setTicketForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              How can we help you?
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Find answers to your questions or get in touch with our support
              team
            </p>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for help articles, FAQs, or common issues..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Live Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Get instant help from our support team
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
              Start Chat
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Email Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Send us a detailed message
            </p>
            <button
              onClick={() => setActiveTab("contact")}
              className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              Create Ticket
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Phone Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Speak directly with our team
            </p>
            <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
              Call Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "help", name: "Help Center", icon: "���" },
                { id: "tickets", name: "My Tickets", icon: "🎫" },
                { id: "contact", name: "Contact Support", icon: "📝" },
                { id: "resources", name: "Resources", icon: "📚" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? "border-purple-500 text-purple-600 dark:text-purple-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "help" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {supportCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center space-x-3 ${
                        selectedCategory === category.id
                          ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h3>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      No articles found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Try adjusting your search terms or category filter
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "tickets" && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Support Tickets
              </h3>
              <button
                onClick={() => setActiveTab("contact")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                New Ticket
              </button>
            </div>

            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {ticket.subject}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          #{ticket.id}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                        <span>Created: {ticket.created}</span>
                        <span>Updated: {ticket.lastUpdate}</span>
                        <span className="capitalize">
                          Priority: {ticket.priority}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${ticket.statusColor}`}
                      >
                        {ticket.status}
                      </span>
                      <button className="text-purple-600 dark:text-purple-400 hover:text-purple-500 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {supportTickets.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No support tickets
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You haven't submitted any support tickets yet
                </p>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Create Your First Ticket
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Submit a Support Ticket
              </h3>

              <form onSubmit={handleTicketSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={ticketForm.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={ticketForm.category}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      {supportCategories
                        .filter((cat) => cat.id !== "all")
                        .map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      value={ticketForm.priority}
                      onChange={(e) =>
                        handleInputChange("priority", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={ticketForm.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Attachments
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                    <div className="text-gray-400 mb-2">📎</div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Drag and drop files here or click to browse
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Max 5 files, 10MB each
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
                >
                  Submit Ticket
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">📧</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        support@influbazzar.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">📞</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">⏰</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Hours
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Mon-Fri, 9 AM - 6 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Response Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Low Priority
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      2-3 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Medium Priority
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      1-2 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      High Priority
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      4-8 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      Urgent
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      1-2 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                      {resource.type}
                    </span>
                    <button className="text-purple-600 dark:text-purple-400 hover:text-purple-500 text-sm font-medium">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CreatorSupport;
