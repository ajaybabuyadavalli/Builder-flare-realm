import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const SimpleNotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />

      <section className="py-20 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 text-4xl">
              🎯
            </div>
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The page you're looking for seems to have gone on a content
              creation spree and can't be found right now.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="/"
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-md font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              🏠 Go Home
            </a>

            <button
              onClick={() => window.history.back()}
              className="block w-full border border-purple-600 text-purple-600 dark:text-purple-400 py-3 px-6 rounded-md font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              ← Go Back
            </button>
          </div>

          <div className="flex justify-center space-x-4 pt-6">
            <a
              href="/case-studies"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              🔍 Browse Content
            </a>

            <a
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              ❓ Get Help
            </a>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default SimpleNotFound;
