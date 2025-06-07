import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [animatingStats, setAnimatingStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-card]");
      const newVisible = new Set();

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(card.dataset.card);
        }
      });

      setVisibleCards(newVisible);

      // Trigger stats animation
      const statsSection = document.querySelector("[data-stats]");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !animatingStats) {
          setAnimatingStats(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatingStats]);

  const categories = [
    { id: "all", name: "All Categories", count: 45 },
    { id: "fashion", name: "Fashion & Lifestyle", count: 12 },
    { id: "tech", name: "Technology", count: 8 },
    { id: "food", name: "Food & Beverage", count: 10 },
    { id: "fitness", name: "Health & Fitness", count: 7 },
    { id: "travel", name: "Travel", count: 5 },
    { id: "beauty", name: "Beauty & Skincare", count: 3 },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fashion Brand Achieves 450% ROI",
      brand: "StyleCo",
      creator: "Priya Sharma",
      category: "fashion",
      platform: ["Instagram", "TikTok"],
      budget: "high",
      duration: "3 months",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      results: {
        reach: "3.2M",
        engagement: "12.5%",
        conversions: "18,500",
        roi: "450%",
      },
      featured: true,
      description:
        "StyleCo partnered with fashion influencer Priya Sharma to launch their new sustainable collection, achieving unprecedented engagement and sales.",
      highlights: [
        "Viral TikTok campaign",
        "Instagram Shopping integration",
        "Sustainable fashion focus",
      ],
      testimonial:
        "The results exceeded our wildest expectations. Priya's authentic content resonated perfectly with our target audience.",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Tech Startup Gains 100K Users",
      brand: "InnovateApp",
      creator: "Tech Guru Raj",
      category: "tech",
      platform: ["YouTube", "LinkedIn"],
      budget: "medium",
      duration: "2 months",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      results: {
        reach: "2.8M",
        engagement: "18.2%",
        conversions: "100K",
        roi: "320%",
      },
      featured: false,
      description:
        "InnovateApp leveraged tech reviewer partnerships to drive massive user acquisition with authentic product demonstrations.",
      highlights: [
        "In-depth product reviews",
        "Live Q&A sessions",
        "Developer testimonials",
      ],
      testimonial:
        "The quality of users we acquired through creator partnerships was exceptional with 85% retention rate.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Food Brand's Viral Recipe Campaign",
      brand: "TasteMakers",
      creator: "Chef Ravi & Food Network",
      category: "food",
      platform: ["Instagram", "YouTube", "TikTok"],
      budget: "high",
      duration: "4 months",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      results: {
        reach: "5.1M",
        engagement: "22.8%",
        conversions: "45,000",
        roi: "380%",
      },
      featured: true,
      description:
        "TasteMakers created a viral recipe series that became a cultural phenomenon, driving massive brand awareness and sales.",
      highlights: [
        "Viral recipe challenges",
        "Celebrity chef collaborations",
        "Regional cuisine focus",
      ],
      testimonial:
        "Our brand became synonymous with authentic Indian flavors. The campaign created a movement, not just sales.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Fitness Brand's Transformation Stories",
      brand: "FitRevolution",
      creator: "Fitness Squad",
      category: "fitness",
      platform: ["Instagram", "YouTube"],
      budget: "medium",
      duration: "6 months",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      results: {
        reach: "4.3M",
        engagement: "25.6%",
        conversions: "35,000",
        roi: "420%",
      },
      featured: false,
      description:
        "FitRevolution's authentic transformation stories inspired thousands to start their fitness journey with measurable results.",
      highlights: [
        "Real transformation stories",
        "Expert workout plans",
        "Nutrition guidance",
      ],
      testimonial:
        "We didn't just sell products, we changed lives. The community engagement was beyond our expectations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Travel Brand's Adventure Series",
      brand: "Wanderlust Adventures",
      creator: "Travel Nomads",
      category: "travel",
      platform: ["Instagram", "YouTube", "Blog"],
      budget: "high",
      duration: "5 months",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      results: {
        reach: "6.2M",
        engagement: "19.4%",
        conversions: "28,000",
        roi: "350%",
      },
      featured: true,
      description:
        "Wanderlust Adventures showcased India's hidden gems through immersive storytelling, inspiring sustainable travel.",
      highlights: [
        "Hidden destination reveals",
        "Sustainable travel focus",
        "Cultural immersion content",
      ],
      testimonial:
        "The campaign didn't just drive bookings, it positioned us as leaders in sustainable tourism.",
      color: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      title: "Beauty Brand's Skincare Revolution",
      brand: "GlowUp Naturals",
      creator: "Beauty Experts",
      category: "beauty",
      platform: ["Instagram", "TikTok", "YouTube"],
      budget: "medium",
      duration: "3 months",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
      results: {
        reach: "2.9M",
        engagement: "28.3%",
        conversions: "22,000",
        roi: "390%",
      },
      featured: false,
      description:
        "GlowUp Naturals educated audiences about natural skincare through expert-led content and real results.",
      highlights: [
        "Scientific skincare education",
        "Before/after transformations",
        "Expert dermatologist content",
      ],
      testimonial:
        "The educational approach built incredible trust. Our customers became brand advocates.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const overallStats = [
    {
      label: "Average ROI",
      value: "385%",
      icon: "📈",
      prefix: "",
      suffix: "%",
    },
    {
      label: "Total Reach",
      value: "24.5",
      icon: "👥",
      prefix: "",
      suffix: "M+",
    },
    {
      label: "Avg Engagement",
      value: "20.8",
      icon: "💝",
      prefix: "",
      suffix: "%",
    },
    { label: "Success Rate", value: "96", icon: "🎯", prefix: "", suffix: "%" },
  ];

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    const matchesBudget =
      selectedBudget === "all" || study.budget === selectedBudget;
    const matchesPlatform =
      selectedPlatform === "all" || study.platform.includes(selectedPlatform);

    return matchesSearch && matchesCategory && matchesBudget && matchesPlatform;
  });

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!animatingStats) return;

      const numericValue = parseFloat(value);
      const increment = numericValue / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [animatingStats, value, duration]);

    return <span>{Math.round(displayValue * 10) / 10}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-blue-900/40" />
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ left: "10%", top: "20%" }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"
            style={{ right: "15%", top: "40%", animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6 animate-pulse">
              🏆 Real Results, Real Impact
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how brands and creators are achieving extraordinary
              results through authentic partnerships on Influbazzar.
            </p>

            {/* Overall Stats */}
            <div
              data-stats
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {overallStats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.prefix}
                    <AnimatedNumber value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - Sticky on Scroll */}
      <section className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search campaigns, brands, creators..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="all">All Budgets</option>
                <option value="low">₹10K - ₹50K</option>
                <option value="medium">₹50K - ₹2L</option>
                <option value="high">₹2L+</option>
              </select>
            </div>

            <div>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="all">All Platforms</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="TikTok">TikTok</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-400">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case
              studies
            </p>
          </div>

          {/* Featured Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Featured
              </span>{" "}
              Case Studies
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredCaseStudies
                .filter((study) => study.featured)
                .map((study, index) => (
                  <div
                    key={study.id}
                    data-card={`featured-${study.id}`}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-yellow-500/50 hover:border-yellow-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 ${
                      visibleCards.has(`featured-${study.id}`)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        ⭐ Featured
                      </span>
                    </div>

                    {/* Glowing Border Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                    />

                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />

                      {/* Platform Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {study.platform.map((platform, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`bg-gradient-to-r ${study.color} bg-clip-text text-transparent font-bold`}
                        >
                          {study.brand}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {study.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {study.title}
                      </h3>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {study.description}
                      </p>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-yellow-500/50 transition-colors duration-300">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {study.results.reach}
                          </div>
                          <div className="text-xs text-gray-400">Reach</div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-yellow-500/50 transition-colors duration-300">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {study.results.engagement}
                          </div>
                          <div className="text-xs text-gray-400">
                            Engagement
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-yellow-500/50 transition-colors duration-300">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {study.results.conversions}
                          </div>
                          <div className="text-xs text-gray-400">
                            Conversions
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-yellow-500/50 transition-colors duration-300">
                          <div className="text-2xl font-bold text-yellow-400 mb-1">
                            +{study.results.roi}
                          </div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {study.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-800/30 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                        <p className="text-gray-300 italic text-sm mb-2">
                          "{study.testimonial}"
                        </p>
                      </div>

                      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold py-3 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/25">
                        View Full Case Study →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Regular Case Studies */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              All{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies
                .filter((study) => !study.featured)
                .map((study, index) => (
                  <div
                    key={study.id}
                    data-card={study.id}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                      visibleCards.has(study.id.toString())
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                    />

                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                      <div className="absolute top-4 left-4 flex gap-2">
                        {study.platform.map((platform, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`bg-gradient-to-r ${study.color} bg-clip-text text-transparent font-semibold`}
                        >
                          {study.brand}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {study.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {study.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                        {study.description}
                      </p>

                      {/* Compact Results */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                          <div className="text-lg font-bold text-green-400">
                            {study.results.reach}
                          </div>
                          <div className="text-xs text-gray-400">Reach</div>
                        </div>
                        <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                          <div className="text-lg font-bold text-yellow-400">
                            +{study.results.roi}
                          </div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                      </div>

                      <button
                        className={`w-full bg-gradient-to-r ${study.color} text-white font-semibold py-2 rounded-xl hover:shadow-lg transition-all duration-300`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No case studies found
              </h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedBudget("all");
                  setSelectedPlatform("all");
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of brands and creators achieving remarkable results.
            Your success story could be featured next!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Start Your Campaign</span>
              <div className="absolute inset-0 bg-purple-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
            <button className="group relative overflow-hidden border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-600">
              <span className="relative z-10">Join as Creator</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
