import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFAQ, setOpenFAQ] = useState(null);

  const plans = [
    {
      name: "Creator Free",
      price: billingCycle === "monthly" ? "₹0" : "₹0",
      period: "forever",
      description: "Perfect for getting started with influencer marketing",
      features: [
        "Create profile & portfolio",
        "Apply to campaigns",
        "Basic analytics",
        "Email support",
        "Payment processing",
        "Mobile app access",
      ],
      limitations: [
        "Up to 3 active campaigns",
        "Basic campaign analytics",
        "Standard payment processing",
      ],
      buttonText: "Get Started Free",
      buttonClass:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
      popular: false,
    },
    {
      name: "Creator Pro",
      price: billingCycle === "monthly" ? "₹999" : "₹9,990",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "For serious creators who want to maximize their earnings",
      features: [
        "Everything in Free",
        "Unlimited active campaigns",
        "Advanced analytics & insights",
        "Priority customer support",
        "Personal brand consultation",
        "Early access to campaigns",
        "Custom portfolio themes",
        "Collaboration tools",
        "Tax reporting assistance",
      ],
      limitations: [],
      buttonText: "Upgrade to Pro",
      buttonClass:
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
      popular: true,
      savings: billingCycle === "yearly" ? "Save ₹2,000/year" : null,
    },
    {
      name: "Brand Starter",
      price: billingCycle === "monthly" ? "₹4,999" : "₹49,990",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "Ideal for small businesses and startups",
      features: [
        "Create up to 5 campaigns/month",
        "Access to 10K+ creators",
        "Campaign management tools",
        "Basic analytics dashboard",
        "Email support",
        "Payment processing",
        "Content approval workflow",
      ],
      limitations: [
        "Up to 5 campaigns per month",
        "Basic targeting options",
        "Standard support",
      ],
      buttonText: "Start Campaign",
      buttonClass:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
      popular: false,
      savings: billingCycle === "yearly" ? "Save ₹10,000/year" : null,
    },
    {
      name: "Brand Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large brands with complex campaign needs",
      features: [
        "Unlimited campaigns",
        "Dedicated account manager",
        "Advanced targeting & AI matching",
        "White-label solutions",
        "Custom integrations",
        "Priority support",
        "Advanced analytics & reporting",
        "Multi-brand management",
        "API access",
        "Custom contract terms",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonClass:
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does pricing work for creators?",
      answer:
        "Creators can join for free and start earning immediately. Our Pro plan offers additional features like advanced analytics, priority support, and unlimited campaigns for ₹999/month. We only take a small platform fee from your earnings to keep the service running.",
    },
    {
      question: "What's included in the Brand plans?",
      answer:
        "Brand plans include campaign creation tools, access to our creator network, analytics, and support. The Starter plan is perfect for small businesses, while Enterprise offers advanced features for large brands with complex needs.",
    },
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle. If you upgrade mid-cycle, you'll only pay the prorated difference.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund within 30 days of your initial purchase.",
    },
    {
      question: "How do payments work?",
      answer:
        "For creators, payments are processed automatically after campaign completion and approval. For brands, we charge your payment method monthly or yearly based on your billing cycle. All transactions are secure and encrypted.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for any plan! You only pay the monthly or yearly subscription fee. Everything you need to get started is included in your plan.",
    },
    {
      question: "Can I get a custom plan?",
      answer:
        "Yes! For enterprises with specific needs, we offer custom plans with tailored features, pricing, and support. Contact our sales team to discuss your requirements.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, UPI, net banking, and digital wallets. For Enterprise plans, we also accept bank transfers and can set up custom billing arrangements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Simple,
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Transparent{" "}
              </span>
              Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your needs. Start free, scale as you
              grow. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${billingCycle === "monthly" ? "text-gray-900 dark:text-white font-semibold" : "text-gray-500 dark:text-gray-400"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly",
                  )
                }
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`ml-3 ${billingCycle === "yearly" ? "text-gray-900 dark:text-white font-semibold" : "text-gray-500 dark:text-gray-400"}`}
              >
                Yearly
              </span>
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 shadow-xl"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
                } hover:shadow-xl transition-all transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  {plan.savings && (
                    <div className="text-green-600 dark:text-green-400 text-sm font-semibold">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li
                        key={limitIndex}
                        className="flex items-start opacity-60"
                      >
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Influbazzar?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built for creators and brands who want real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Smart Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI-powered algorithm matches brands with the perfect
                creators based on audience demographics, engagement rates, and
                content quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparent pricing with no hidden fees. Creators keep more of
                their earnings, and brands get better ROI with our efficient
                platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track campaign performance, engagement metrics, and ROI in
                real-time with our comprehensive analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span className="text-purple-600 text-xl">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands who are already succeeding on
            Influbazzar. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
