import React, { useState } from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

const SimpleLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be connected to backend");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <SimpleNavbar />
      <div className="min-h-[80vh] bg-gray-50 dark:bg-gray-800 flex items-center justify-center py-12">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">IB</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default SimpleLogin;