import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const SimplePricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for new creators",
      features: [
        "Profile creation",
        "Basic analytics",
        "Apply to campaigns",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started Free",
      buttonStyle:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      description: "For growing creators",
      features: [
        "Everything in Starter",
        "Priority campaign matching",
        "Advanced analytics",
        "Campaign templates",
        "Phone support",
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonStyle:
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For agencies and teams",
      features: [
        "Everything in Pro",
        "Team management",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                💎 Pricing Plans
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your creator journey. Start free and
              upgrade as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border ${plan.popular ? "border-purple-200 dark:border-purple-700 shadow-lg" : "border-gray-200 dark:border-gray-700"} h-full`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                      {plan.price}
                      {plan.period && (
                        <span className="text-lg text-gray-600 dark:text-gray-300">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-3 text-lg">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-md font-semibold transition-colors ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I switch plans anytime?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, debit cards, UPI, and net banking. All payments are processed securely through our payment partners.",
              },
              {
                question: "Is there a free trial for the Pro plan?",
                answer:
                  "Yes! We offer a 14-day free trial for the Pro plan. No credit card required to start your trial.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll provide a full refund within 30 days of purchase.",
              },
              {
                question: "What's included in phone support?",
                answer:
                  "Pro and Enterprise users get priority phone support during business hours (9 AM - 6 PM IST) with dedicated account managers for faster resolution.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators who are already earning with
              Influbazzar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup?role=creator"
                className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                🚀 Start Free Today
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                💬 Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default SimplePricing;
