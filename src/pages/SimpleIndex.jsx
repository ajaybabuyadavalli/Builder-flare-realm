import React from "react";

const SimpleIndex = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                Influbazzar
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connecting Brands with Creators
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join India's premier influencer marketing platform. Connect verified
            creators with authentic brands for meaningful collaborations.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700">
              Join as Creator
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-50">
              Start Campaign
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">25K+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Active Creators
            </h3>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">100+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Brand Partners
            </h3>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">500+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Campaigns</h3>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">
                ₹2.5Cr+
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Revenue Generated
            </h3>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Influbazzar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleIndex;
