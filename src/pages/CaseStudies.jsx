import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "fashion", name: "Fashion & Lifestyle" },
    { id: "tech", name: "Technology" },
    { id: "food", name: "Food & Beverage" },
    { id: "fitness", name: "Health & Fitness" },
    { id: "travel", name: "Travel" },
    { id: "beauty", name: "Beauty & Skincare" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fashion Brand Increases Sales by 340%",
      brand: "StyleCo",
      creator: "Priya Sharma",
      category: "fashion",
      platform: "Instagram",
      duration: "3 months",
      budget: "₹2,50,000",
      results: {
        reach: "2.5M",
        engagement: "8.2%",
        conversions: "12,500",
        roi: "340%",
      },
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      description:
        "StyleCo partnered with fashion influencer Priya Sharma to launch their new summer collection. Through authentic styling videos and outfit posts, they achieved remarkable engagement and sales.",
      challenge:
        "StyleCo needed to increase brand awareness and drive sales for their new summer collection among young urban women aged 18-35.",
      solution:
        "We matched StyleCo with fashion influencer Priya Sharma (@priyastyles) who had a highly engaged audience in their target demographic. The campaign included outfit styling videos, shopping hauls, and discount code promotions.",
      hashtag: "#StyleCoSummer",
      testimonial:
        "The results exceeded our wildest expectations. Priya's authentic content resonated perfectly with our target audience and drove incredible sales.",
      testimonialAuthor: "Sarah Johnson, Marketing Director at StyleCo",
    },
    {
      id: 2,
      title: "Tech Startup Gains 50K App Downloads",
      brand: "TechFlow",
      creator: "Rajesh Kumar",
      category: "tech",
      platform: "YouTube",
      duration: "2 months",
      budget: "₹1,80,000",
      results: {
        reach: "1.8M",
        engagement: "12.5%",
        conversions: "50,000",
        roi: "280%",
      },
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      description:
        "TechFlow collaborated with tech reviewer Rajesh Kumar to showcase their productivity app through detailed review videos and tutorials.",
      challenge:
        "TechFlow needed to drive app downloads and increase user acquisition for their new productivity app in a competitive market.",
      solution:
        "We connected TechFlow with tech reviewer Rajesh Kumar who created in-depth app reviews, tutorial videos, and comparison content showcasing the app's unique features.",
      hashtag: "#TechFlowApp",
      testimonial:
        "Rajesh's detailed reviews helped users understand our app's value proposition. The quality of downloads was exceptional with high user retention.",
      testimonialAuthor: "Amit Singh, Founder of TechFlow",
    },
    {
      id: 3,
      title: "Restaurant Chain Boosts Foot Traffic by 150%",
      brand: "Spice Route",
      creator: "Foodie Anita",
      category: "food",
      platform: "Instagram",
      duration: "1 month",
      budget: "₹80,000",
      results: {
        reach: "800K",
        engagement: "15.2%",
        conversions: "8,500",
        roi: "150%",
      },
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      description:
        "Spice Route partnered with food blogger Anita to showcase their authentic Indian cuisine through mouth-watering posts and stories.",
      challenge:
        "Spice Route wanted to increase foot traffic to their restaurants and build awareness about their authentic regional Indian dishes.",
      solution:
        "Food influencer Anita created engaging content featuring signature dishes, behind-the-scenes kitchen tours, and interactive polls about favorite Indian cuisines.",
      hashtag: "#SpiceRouteEats",
      testimonial:
        "Anita's content made our dishes look absolutely irresistible. We saw immediate impact on restaurant visits and online orders.",
      testimonialAuthor: "Ravi Patel, Owner of Spice Route",
    },
    {
      id: 4,
      title: "Fitness Brand Reaches 1M+ Health Enthusiasts",
      brand: "FitLife",
      creator: "Fitness Guru Sam",
      category: "fitness",
      platform: "Instagram",
      duration: "4 months",
      budget: "₹3,00,000",
      results: {
        reach: "3.2M",
        engagement: "18.7%",
        conversions: "25,000",
        roi: "420%",
      },
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      description:
        "FitLife collaborated with fitness influencer Sam to promote their premium supplement line through workout videos and transformation stories.",
      challenge:
        "FitLife needed to establish credibility in the competitive fitness supplement market and drive sales among serious fitness enthusiasts.",
      solution:
        "Fitness influencer Sam created workout routines featuring FitLife products, shared personal transformation stories, and provided honest product reviews.",
      hashtag: "#FitLifeJourney",
      testimonial:
        "Sam's authentic approach to fitness and genuine product reviews built incredible trust with our target audience. Sales skyrocketed!",
      testimonialAuthor: "Lisa Chen, Marketing Manager at FitLife",
    },
    {
      id: 5,
      title: "Travel Agency Drives 5K Bookings in 2 Months",
      brand: "Wanderlust Travels",
      creator: "Travel Blogger Maya",
      category: "travel",
      platform: "Instagram",
      duration: "2 months",
      budget: "₹2,00,000",
      results: {
        reach: "1.5M",
        engagement: "14.8%",
        conversions: "5,000",
        roi: "250%",
      },
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      description:
        "Wanderlust Travels partnered with travel blogger Maya to showcase exotic destinations and drive bookings through stunning visual content.",
      challenge:
        "Wanderlust Travels wanted to increase bookings for their premium travel packages to exotic destinations in Southeast Asia.",
      solution:
        "Travel influencer Maya created immersive content from various destinations, shared travel tips, and offered exclusive discount codes to her audience.",
      hashtag: "#WanderlustAdventures",
      testimonial:
        "Maya's travel content inspired our audience to book trips. Her storytelling made our destinations come alive for potential travelers.",
      testimonialAuthor: "Priya Joshi, Founder of Wanderlust Travels",
    },
    {
      id: 6,
      title: "Beauty Brand Launches Successfully with 200% ROI",
      brand: "GlowUp Cosmetics",
      creator: "Beauty Guru Neha",
      category: "beauty",
      platform: "Instagram",
      duration: "6 weeks",
      budget: "₹1,50,000",
      results: {
        reach: "1.2M",
        engagement: "16.3%",
        conversions: "8,000",
        roi: "200%",
      },
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop",
      description:
        "GlowUp Cosmetics collaborated with beauty influencer Neha for their product launch, featuring tutorials and honest reviews.",
      challenge:
        "GlowUp Cosmetics needed to successfully launch their new skincare line in a saturated market and build brand credibility.",
      solution:
        "Beauty influencer Neha created detailed skincare routines, before/after content, and honest product reviews that highlighted the effectiveness of GlowUp products.",
      hashtag: "#GlowUpSkincare",
      testimonial:
        "Neha's authentic reviews and tutorials perfectly showcased our products. Her audience trusted her recommendations completely.",
      testimonialAuthor: "Kavya Reddy, Brand Manager at GlowUp Cosmetics",
    },
  ];

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      searchTerm === "" ||
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.hashtag.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how brands and creators are achieving remarkable results
              with Influbazzar. Real campaigns, real results, real impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  340%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  10M+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Total Reach
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15.2%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Avg Engagement
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search case studies, brands, creators, or hashtags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case
              studies
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                      {
                        categories.find((cat) => cat.id === study.category)
                          ?.name
                      }
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {study.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <span>
                      <strong>Brand:</strong> {study.brand}
                    </span>
                    <span>
                      <strong>Creator:</strong> {study.creator}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {study.results.reach}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Reach
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600 mb-1">
                        {study.results.engagement}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Engagement
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {study.results.conversions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Conversions
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600 mb-1">
                        +{study.results.roi}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        ROI
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {study.challenge}
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {study.solution}
                    </p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                      "{study.testimonial}"
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      — {study.testimonialAuthor}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-purple-600 dark:text-purple-400 font-medium">
                      {study.hashtag}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="capitalize">{study.platform}</span>
                      <span>•</span>
                      <span>{study.budget} budget</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No case studies found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of brands and creators who are achieving remarkable
            results with Influbazzar. Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Your Campaign
            </a>
            <a
              href="/creator/signup"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Join as Creator
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
