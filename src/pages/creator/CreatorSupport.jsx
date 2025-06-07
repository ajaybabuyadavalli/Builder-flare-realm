/**
 * CreatorSupport.jsx
 *
 * Purpose: Comprehensive support center with FAQ, ticketing system, and live chat
 *
 * Features:
 * - FAQ accordion with search functionality
 * - Ticket creation with emoji picker and attachments
 * - Simulated chat widget with bot responses
 * - Ticket status tracking and filtering
 * - Support categories and priority levels
 * - Score improvement guidance
 *
 * Backend Integration:
 * - Support ticket management
 * - Real-time chat functionality
 * - Knowledge base search
 * - File upload for ticket attachments
 */

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

const CreatorSupport = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("faq");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [ticketFilter, setTicketFilter] = useState("all");
  const [newTicket, setNewTicket] = useState({
    subject: "",
    category: "general",
    priority: "medium",
    description: "",
    attachments: [],
  });
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // FAQ data
  const faqData = [
    {
      id: 1,
      category: "Getting Started",
      question: "How do I improve my Influbazzar Score?",
      answer:
        "Your Influbazzar Score is based on content quality (40%), engagement rate (30%), reliability (20%), and growth rate (10%). To improve: 1) Post high-quality, original content consistently, 2) Engage with your audience actively, 3) Complete campaigns on time and meet requirements, 4) Maintain steady follower growth across platforms.",
    },
    {
      id: 2,
      category: "Payments",
      question: "When will I receive my campaign payments?",
      answer:
        "Payments are typically released 7-14 days after campaign completion and brand approval. You can track payment status in your Earnings section. If a payment is delayed beyond 30 days, you can raise an escrow release request.",
    },
    {
      id: 3,
      category: "Campaigns",
      question: "Why was my campaign application rejected?",
      answer:
        "Common reasons include: not meeting follower requirements, content style mismatch with brand, low engagement rate, or incomplete profile. Review the campaign requirements carefully and ensure your profile showcases relevant work.",
    },
    {
      id: 4,
      category: "Profile",
      question: "How do I verify my social media accounts?",
      answer:
        "Go to Profile > Platforms section and click 'Verify' next to each platform. You'll be redirected to authorize the connection. Verified accounts get higher visibility and trust from brands.",
    },
    {
      id: 5,
      category: "Technical",
      question: "Why can't I upload my content?",
      answer:
        "Ensure your file size is under 100MB and in supported formats (JPG, PNG, MP4, MOV). Check your internet connection and try refreshing the page. Contact support if the issue persists.",
    },
    {
      id: 6,
      category: "Payments",
      question: "How do I update my bank details?",
      answer:
        "Go to Profile > Settings > Payment Information. You can add multiple bank accounts and set a primary account for payments. Changes take 24-48 hours to reflect.",
    },
    {
      id: 7,
      category: "Campaigns",
      question: "Can I negotiate campaign rates?",
      answer:
        "Some campaigns allow rate negotiation, indicated by a 'Negotiable' tag. You can propose your rate when applying. Fixed-rate campaigns don't allow negotiations.",
    },
    {
      id: 8,
      category: "Analytics",
      question: "How is engagement rate calculated?",
      answer:
        "Engagement rate = (Likes + Comments + Shares) / Impressions × 100. We calculate this across all your connected platforms and campaigns over the last 30 days.",
    },
  ];

  // Sample tickets data
  useEffect(() => {
    const sampleTickets = [
      {
        id: 1,
        subject: "Payment not received for StyleCo campaign",
        category: "payments",
        priority: "high",
        status: "open",
        createdDate: "2024-02-10",
        lastUpdate: "2024-02-12",
        messages: 3,
      },
      {
        id: 2,
        subject: "How to improve content quality score?",
        category: "general",
        priority: "medium",
        status: "resolved",
        createdDate: "2024-02-08",
        lastUpdate: "2024-02-09",
        messages: 2,
      },
      {
        id: 3,
        subject: "Technical issue with video upload",
        category: "technical",
        priority: "medium",
        status: "in_progress",
        createdDate: "2024-02-12",
        lastUpdate: "2024-02-12",
        messages: 1,
      },
    ];
    setTickets(sampleTickets);
  }, []);

  // Initialize chat with welcome message
  useEffect(() => {
    setChatMessages([
      {
        id: 1,
        sender: "bot",
        message: `Hi ${user?.name?.split(" ")[0] || "there"}! 👋 I'm here to help you with any questions about Influbazzar. What can I assist you with today?`,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, [user]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredTickets = tickets.filter((ticket) => {
    if (ticketFilter === "all") return true;
    return ticket.status === ticketFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-600/20 text-blue-400 border-blue-400/30";
      case "in_progress":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-400/30";
      case "resolved":
        return "bg-green-600/20 text-green-400 border-green-400/30";
      case "closed":
        return "bg-gray-600/20 text-gray-400 border-gray-400/30";
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-400/30";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const ticket = {
      id: tickets.length + 1,
      ...newTicket,
      status: "open",
      createdDate: new Date().toISOString().split("T")[0],
      lastUpdate: new Date().toISOString().split("T")[0],
      messages: 1,
    };
    setTickets((prev) => [ticket, ...prev]);
    setNewTicket({
      subject: "",
      category: "general",
      priority: "medium",
      description: "",
      attachments: [],
    });
    alert(
      "Ticket created successfully! We'll get back to you within 24 hours.",
    );
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: chatInput,
      timestamp: new Date().toISOString(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thanks for your question! Let me help you with that. Can you provide more details?",
        "I understand your concern. This is a common issue that we can resolve quickly.",
        "Great question! Based on your profile, I'd recommend checking your analytics section for detailed insights.",
        "I can help you with that! For immediate assistance, you can also check our FAQ section.",
        "Thanks for reaching out! I've noted your query and our support team will follow up if needed.",
      ];

      const botMessage = {
        id: chatMessages.length + 2,
        sender: "bot",
        message: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date().toISOString(),
      };

      setChatMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleFileAttachment = (event) => {
    const files = Array.from(event.target.files);
    setNewTicket((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeAttachment = (index) => {
    setNewTicket((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const emojis = ["😊", "😢", "😡", "😕", "🤔", "👍", "👎", "❤️", "🔥", "⭐"];

  const addEmoji = (emoji) => {
    setNewTicket((prev) => ({
      ...prev,
      description: prev.description + emoji,
    }));
    setShowEmojiPicker(false);
  };

  const tabs = [
    { id: "faq", name: "FAQ", icon: "❓" },
    { id: "ticket", name: "Raise Ticket", icon: "🎫" },
    { id: "tickets", name: "My Tickets", icon: "📋" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🎧 Support Center
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get help, find answers, and improve your creator journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all duration-300"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full p-6 text-left hover:bg-gray-800/20 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-purple-400 font-medium">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white mt-1">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          expandedFAQ === faq.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6 border-t border-gray-700/50">
                      <p className="text-gray-300 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">
                  Try different search terms or browse all FAQs
                </p>
              </div>
            )}
          </div>
        )}

        {/* Raise Ticket Section */}
        {activeTab === "ticket" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6">
                🎫 Create Support Ticket
              </h2>

              <form onSubmit={handleTicketSubmit} className="space-y-6">
                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTicket.subject}
                    onChange={(e) =>
                      setNewTicket((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50"
                    placeholder="Brief description of your issue"
                  />
                </div>

                {/* Category and Priority */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Category
                    </label>
                    <select
                      value={newTicket.category}
                      onChange={(e) =>
                        setNewTicket((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
                    >
                      <option value="general">General</option>
                      <option value="payments">Payments</option>
                      <option value="campaigns">Campaigns</option>
                      <option value="technical">Technical</option>
                      <option value="account">Account</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Priority
                    </label>
                    <select
                      value={newTicket.priority}
                      onChange={(e) =>
                        setNewTicket((prev) => ({
                          ...prev,
                          priority: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400/50"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Description *
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      value={newTicket.description}
                      onChange={(e) =>
                        setNewTicket((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 resize-none h-32"
                      placeholder="Describe your issue in detail..."
                    />

                    {/* Emoji Picker */}
                    <div className="absolute bottom-3 right-3">
                      <button
                        type="button"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        😊
                      </button>

                      {showEmojiPicker && (
                        <div className="absolute bottom-full right-0 mb-2 bg-gray-800/95 backdrop-blur-lg rounded-xl p-3 border border-gray-700/50 grid grid-cols-5 gap-2">
                          {emojis.map((emoji, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => addEmoji(emoji)}
                              className="hover:bg-gray-700/50 p-1 rounded transition-colors duration-300"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* File Attachments */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Attachments
                  </label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full bg-gray-800/50 border-2 border-dashed border-gray-700/50 rounded-lg px-4 py-6 text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center"
                    >
                      <svg
                        className="w-8 h-8 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span>Click to attach files</span>
                      <span className="text-xs">PNG, JPG, PDF up to 10MB</span>
                    </button>

                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".png,.jpg,.jpeg,.pdf,.txt"
                      onChange={handleFileAttachment}
                      className="hidden"
                    />

                    {/* Attached Files */}
                    {newTicket.attachments.length > 0 && (
                      <div className="space-y-2">
                        {newTicket.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3"
                          >
                            <span className="text-white text-sm">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-red-400 hover:text-red-300 transition-colors duration-300"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>
        )}

        {/* My Tickets Section */}
        {activeTab === "tickets" && (
          <div className="max-w-4xl mx-auto">
            {/* Filter */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
              {["all", "open", "in_progress", "resolved", "closed"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setTicketFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      ticketFilter === filter
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() +
                      filter.slice(1).replace("_", " ")}
                  </button>
                ),
              )}
            </div>

            {/* Tickets List */}
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {ticket.subject}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>#{ticket.id}</span>
                        <span className="capitalize">{ticket.category}</span>
                        <span className={getPriorityColor(ticket.priority)}>
                          {ticket.priority} priority
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(ticket.status)}`}
                    >
                      {ticket.status.replace("_", " ")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>
                      Created:{" "}
                      {new Date(ticket.createdDate).toLocaleDateString()}
                    </span>
                    <span>
                      Last update:{" "}
                      {new Date(ticket.lastUpdate).toLocaleDateString()}
                    </span>
                    <span>{ticket.messages} messages</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredTickets.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No tickets found
                </h3>
                <p className="text-gray-500 mb-6">
                  {ticketFilter === "all"
                    ? "You haven't created any support tickets yet"
                    : `No ${ticketFilter.replace("_", " ")} tickets found`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen && (
          <div className="bg-gray-800/95 backdrop-blur-lg rounded-2xl w-80 h-96 border border-gray-700/50 shadow-2xl mb-4 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Support Assistant
                  </h3>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ×
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 text-sm"
                />
                <button
                  onClick={handleChatSend}
                  className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreatorSupport;
