import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-pricing-card]");
      const newVisible = new Set();

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(card.dataset.pricingCard);
        }
      });

      setVisibleCards(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const creatorPlans = [
    {
      id: "creator-free",
      name: "Creator Starter",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for creators just starting their journey",
      features: [
        "Create professional profile",
        "Apply to unlimited campaigns",
        "Basic analytics dashboard",
        "Email support",
        "Payment processing",
        "Mobile app access",
        "Community access",
      ],
      limitations: [
        "Standard application priority",
        "Basic profile customization",
        "Email support only",
      ],
      buttonText: "Get Started Free",
      buttonClass:
        "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900",
      popular: false,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "creator-pro",
      name: "Creator Pro",
      price: { monthly: 999, yearly: 9990 },
      description: "For serious creators ready to maximize earnings",
      features: [
        "Everything in Starter",
        "Priority campaign matching",
        "Advanced analytics & insights",
        "Priority customer support",
        "Personal brand consultation",
        "Early access to campaigns",
        "Custom portfolio themes",
        "Collaboration tools",
        "Tax reporting assistance",
        "Exclusive creator events",
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonClass:
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
      popular: true,
      color: "from-purple-600 to-pink-600",
      glow: true,
    },
  ];

  const brandPlans = [
    {
      id: "brand-starter",
      name: "Brand Starter",
      price: { monthly: 4999, yearly: 49990 },
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 campaigns per month",
        "Access to 50K+ creators",
        "Campaign management tools",
        "Basic analytics dashboard",
        "Email support",
        "Payment processing",
        "Content approval workflow",
        "Basic targeting",
      ],
      limitations: [
        "5 campaigns per month limit",
        "Basic creator search",
        "Standard support",
      ],
      buttonText: "Start Campaigns",
      buttonClass:
        "border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900",
      popular: false,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "brand-growth",
      name: "Brand Growth",
      price: { monthly: 14999, yearly: 149990 },
      description: "For growing brands scaling their marketing",
      features: [
        "Up to 20 campaigns per month",
        "Advanced creator search & filters",
        "AI-powered creator matching",
        "Detailed campaign analytics",
        "Priority support",
        "Custom brand workspace",
        "Team collaboration tools",
        "A/B testing capabilities",
        "Performance benchmarking",
      ],
      limitations: [],
      buttonText: "Scale Your Marketing",
      buttonClass:
        "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700",
      popular: true,
      color: "from-green-600 to-emerald-600",
      glow: true,
    },
    {
      id: "brand-enterprise",
      name: "Brand Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For large brands with complex needs",
      features: [
        "Unlimited campaigns",
        "Dedicated account manager",
        "White-label solutions",
        "Custom integrations",
        "Advanced analytics & reporting",
        "Multi-brand management",
        "API access",
        "Custom contract terms",
        "24/7 priority support",
        "Training & onboarding",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonClass:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
      popular: false,
      color: "from-blue-600 to-purple-600",
    },
  ];

  const agencyPlan = {
    id: "agency",
    name: "Agency Solution",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "Complete solution for marketing agencies",
    features: [
      "Multi-client management",
      "White-label platform",
      "Dedicated agency dashboard",
      "Client billing management",
      "Advanced reporting suite",
      "API access & integrations",
      "Custom branding options",
      "Dedicated success manager",
      "Priority technical support",
      "Training & certification program",
    ],
    buttonText: "Book Demo",
    buttonClass:
      "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600",
    color: "from-yellow-500 to-orange-500",
    special: true,
  };

  const formatPrice = (price) => {
    if (typeof price === "string") return price;
    return `₹${price.toLocaleString()}`;
  };

  const getSavings = (plan) => {
    if (typeof plan.price.yearly === "string") return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
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
              💎 Simple, Transparent Pricing
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Plans That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Scale With You
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your needs. Start free, scale as you
              grow. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span
                className={`mr-4 font-semibold ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly",
                  )
                }
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly"
                      ? "translate-x-9"
                      : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`ml-4 font-semibold ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}
              >
                Yearly
              </span>
              <span className="ml-3 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full font-semibold animate-pulse">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Plans */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              For{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creators
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Start free and upgrade as you grow your influence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {creatorPlans.map((plan, index) => {
              const savings = getSavings(plan);

              return (
                <div
                  key={plan.id}
                  data-pricing-card={plan.id}
                  className={`relative group transition-all duration-700 hover:scale-105 ${
                    visibleCards.has(plan.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* Glassmorphism Card */}
                  <div
                    className={`relative rounded-3xl p-8 backdrop-blur-lg border transition-all duration-500 ${
                      plan.popular
                        ? "bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-purple-400/50 shadow-2xl shadow-purple-500/25"
                        : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-cyan-400/50"
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                          ⭐ Most Popular
                        </span>
                      </div>
                    )}

                    {/* Glow Effect */}
                    {plan.glow && hoveredPlan === plan.id && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                      />
                    )}

                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {plan.name}
                        </h3>
                        <p className="text-gray-300 mb-6">{plan.description}</p>

                        <div className="mb-4">
                          <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {formatPrice(plan.price[billingCycle])}
                          </span>
                          {typeof plan.price[billingCycle] === "number" &&
                            plan.price[billingCycle] > 0 && (
                              <span className="text-gray-400 ml-2">
                                /{billingCycle === "monthly" ? "month" : "year"}
                              </span>
                            )}
                        </div>

                        {billingCycle === "yearly" && savings && (
                          <div className="text-green-400 text-sm font-semibold mb-4">
                            Save ₹{savings.amount.toLocaleString()} (
                            {savings.percentage}%) per year
                          </div>
                        )}
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-white mb-4">
                          What's included:
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-green-400 mr-3 mt-1 text-lg">
                                ✓
                              </span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {plan.limitations.length > 0 && (
                          <div>
                            <h5 className="text-gray-400 text-sm font-medium mb-2">
                              Limitations:
                            </h5>
                            <ul className="space-y-2">
                              {plan.limitations.map(
                                (limitation, limitIndex) => (
                                  <li
                                    key={limitIndex}
                                    className="flex items-start opacity-70"
                                  >
                                    <span className="text-gray-500 mr-3 mt-1">
                                      •
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                      {limitation}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      <button
                        className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${plan.buttonClass}`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Plans */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              For{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Brands
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Powerful tools to run successful influencer campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPlans.map((plan, index) => {
              const savings = getSavings(plan);

              return (
                <div
                  key={plan.id}
                  data-pricing-card={plan.id}
                  className={`relative group transition-all duration-700 hover:scale-105 ${
                    visibleCards.has(plan.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  <div
                    className={`relative rounded-3xl p-8 h-full backdrop-blur-lg border transition-all duration-500 ${
                      plan.popular
                        ? "bg-gradient-to-br from-green-600/10 to-emerald-600/10 border-green-400/50 shadow-2xl shadow-green-500/25"
                        : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-green-400/50"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                          🔥 Most Popular
                        </span>
                      </div>
                    )}

                    {plan.glow && hoveredPlan === plan.id && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}
                      />
                    )}

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {plan.name}
                        </h3>
                        <p className="text-gray-300 mb-6">{plan.description}</p>

                        <div className="mb-4">
                          <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {formatPrice(plan.price[billingCycle])}
                          </span>
                          {typeof plan.price[billingCycle] === "number" && (
                            <span className="text-gray-400 ml-2">
                              /{billingCycle === "monthly" ? "month" : "year"}
                            </span>
                          )}
                        </div>

                        {billingCycle === "yearly" && savings && (
                          <div className="text-green-400 text-sm font-semibold mb-4">
                            Save ₹{savings.amount.toLocaleString()} (
                            {savings.percentage}%) per year
                          </div>
                        )}
                      </div>

                      <div className="flex-1 mb-8">
                        <h4 className="font-semibold text-white mb-4">
                          Everything included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-green-400 mr-3 mt-1 text-lg">
                                ✓
                              </span>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {plan.limitations.length > 0 && (
                          <div className="mt-6">
                            <h5 className="text-gray-400 text-sm font-medium mb-2">
                              Plan limits:
                            </h5>
                            <ul className="space-y-2">
                              {plan.limitations.map(
                                (limitation, limitIndex) => (
                                  <li
                                    key={limitIndex}
                                    className="flex items-start opacity-70"
                                  >
                                    <span className="text-gray-500 mr-3 mt-1">
                                      •
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                      {limitation}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      <button
                        className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${plan.buttonClass}`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agency Plan - Special Floating Box */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-pricing-card={agencyPlan.id}
            className={`relative group transition-all duration-1000 ${
              visibleCards.has(agencyPlan.id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            onMouseEnter={() => setHoveredPlan(agencyPlan.id)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="relative rounded-3xl p-12 backdrop-blur-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-400/50 shadow-2xl shadow-yellow-500/25 overflow-hidden">
              {/* Floating Highlight Effect */}
              {hoveredPlan === agencyPlan.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl transition-opacity duration-500" />
              )}

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl" />
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-sm font-medium text-yellow-300 mb-6">
                    🚀 Premium Solution
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-4">
                    {agencyPlan.name}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    {agencyPlan.description}
                  </p>

                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
                    Custom Pricing
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${agencyPlan.buttonClass}`}
                    >
                      {agencyPlan.buttonText}
                    </button>
                    <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                      View Features
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-6 text-xl">
                    Complete agency toolkit:
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {agencyPlan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-yellow-400/30 transition-colors duration-300"
                      >
                        <span className="text-yellow-400 mr-3 mt-1 text-lg">
                          ⭐
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Influbazzar?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Built for creators and brands who want real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI-Powered Matching
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our advanced algorithm matches brands with perfect creators
                based on audience demographics, engagement quality, and content
                style.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                No hidden fees or surprise charges. Clear pricing with maximum
                value for creators and measurable ROI for brands.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Analytics
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive analytics and insights to track campaign
                performance, engagement metrics, and ROI in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands who are already succeeding on
            Influbazzar. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-purple-100 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
            <button className="group relative overflow-hidden border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-600">
              <span className="relative z-10">Contact Sales</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
