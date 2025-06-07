import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("creator");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const roles = [
    {
      id: "creator",
      name: "Creator",
      icon: "🧑‍🎨",
      description: "Content creators and influencers",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: "brand",
      name: "Brand",
      icon: "🏢",
      description: "Businesses and marketing teams",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "agency",
      name: "Agency",
      icon: "🏛",
      description: "Marketing agencies and consultants",
      color: "from-green-600 to-emerald-600",
    },
    {
      id: "admin",
      name: "Admin",
      icon: "⚙️",
      description: "Platform administrators",
      color: "from-gray-600 to-gray-700",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert(
        `${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} login successful! Redirecting to dashboard...`,
      );
      // Redirect based on role
      const redirectPaths = {
        creator: "/creator/dashboard",
        brand: "/brand/dashboard",
        agency: "/agency/dashboard",
        admin: "/admin/dashboard",
      };
      window.location.href = redirectPaths[selectedRole] || "/";
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${20 + mousePosition.x * 0.01}%`,
              top: `${10 + mousePosition.y * 0.01}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse"
            style={{
              right: `${15 + mousePosition.x * 0.008}%`,
              top: `${60 + mousePosition.y * 0.005}%`,
              transform: "translate(50%, -50%)",
              animationDelay: "1s",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel - Login Form */}
            <div className="order-2 lg:order-1">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Header */}
                <div className="text-center lg:text-left mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
                    <span className="mr-2">🎉</span>
                    Welcome Back to Influbazzar
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      Welcome Back
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300">
                    Choose your role and login with your credentials
                  </p>
                </div>

                {/* Login Form Card */}
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                  {/* Role Selection Tabs */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Select Your Role
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {roles.map((role) => (
                        <button
                          key={role.id}
                          onClick={() => setSelectedRole(role.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            selectedRole === role.id
                              ? `border-transparent bg-gradient-to-r ${role.color} text-white shadow-lg`
                              : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                          }`}
                        >
                          <div className="text-2xl mb-2">{role.icon}</div>
                          <div className="font-semibold">{role.name}</div>
                        </button>
                      ))}
                    </div>
                    {selectedRoleData && (
                      <p className="text-gray-400 text-sm text-center">
                        {selectedRoleData.description}
                      </p>
                    )}
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-gray-400 text-lg">📧</span>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-gray-400 text-lg">🔑</span>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <span className="text-lg">
                            {showPassword ? "🙈" : "👁️"}
                          </span>
                        </button>
                      </div>
                      <div className="mt-2 text-right">
                        <a
                          href="#"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                        isLoading
                          ? "bg-gray-600 cursor-not-allowed"
                          : `bg-gradient-to-r ${selectedRoleData?.color} hover:shadow-lg hover:shadow-purple-500/25`
                      } text-white`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Signing in...
                        </div>
                      ) : (
                        `Login to Dashboard →`
                      )}
                    </button>

                    {/* Divider */}
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-gray-800 text-gray-400">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center py-3 px-4 border border-gray-600 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
                      >
                        <span className="mr-2 text-lg">📱</span>
                        Google
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center py-3 px-4 border border-gray-600 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
                      >
                        <span className="mr-2 text-lg">📘</span>
                        Facebook
                      </button>
                    </div>

                    {/* Signup Link */}
                    <div className="text-center mt-6">
                      <p className="text-gray-400">
                        Don't have an account?{" "}
                        <a
                          href="/signup"
                          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                        >
                          Sign up here
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Panel - Security Info */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      🔐
                    </span>
                    <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Secure &{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Trusted
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Your data is protected with enterprise-grade security. We use
                  advanced encryption and industry best practices to keep your
                  information safe and secure.
                </p>

                {/* Security Features */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      🔒
                    </div>
                    <h3 className="font-semibold text-white mb-2">Encrypted</h3>
                    <p className="text-gray-400 text-sm">
                      256-bit SSL encryption
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      ✅
                    </div>
                    <h3 className="font-semibold text-white mb-2">Verified</h3>
                    <p className="text-gray-400 text-sm">
                      Identity verification
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      🛡️
                    </div>
                    <h3 className="font-semibold text-white mb-2">Trusted</h3>
                    <p className="text-gray-400 text-sm">SOC 2 compliant</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        50K+
                      </div>
                      <div className="text-gray-400 text-sm">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-400 mb-1">
                        99.9%
                      </div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        24/7
                      </div>
                      <div className="text-gray-400 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
