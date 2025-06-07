import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState("creator");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    agencyName: "",
    website: "",
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      fields: ["name", "email", "password", "confirmPassword"],
    },
    {
      id: "brand",
      name: "Brand",
      icon: "🏢",
      description: "Businesses and marketing teams",
      color: "from-blue-600 to-cyan-600",
      fields: [
        "name",
        "email",
        "password",
        "confirmPassword",
        "companyName",
        "website",
      ],
    },
    {
      id: "agency",
      name: "Agency",
      icon: "🏛",
      description: "Marketing agencies and consultants",
      color: "from-green-600 to-emerald-600",
      fields: [
        "name",
        "email",
        "password",
        "confirmPassword",
        "agencyName",
        "website",
      ],
    },
    {
      id: "admin",
      name: "Admin",
      icon: "⚙️",
      description: "Platform administrators",
      color: "from-gray-600 to-gray-700",
      fields: ["name", "email", "password", "confirmPassword"],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert(
        `${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} account created successfully! Welcome to Influbazzar!`,
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
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  const journeySteps = {
    creator: [
      { icon: "🎨", title: "Create", desc: "Build your amazing profile" },
      { icon: "🚀", title: "Connect", desc: "Find perfect brand matches" },
      { icon: "💰", title: "Earn", desc: "Get paid for great content" },
    ],
    brand: [
      { icon: "🎯", title: "Target", desc: "Find your ideal audience" },
      { icon: "🤝", title: "Partner", desc: "Connect with creators" },
      { icon: "📈", title: "Grow", desc: "Scale your marketing" },
    ],
    agency: [
      { icon: "🏢", title: "Manage", desc: "Handle multiple clients" },
      { icon: "📊", title: "Optimize", desc: "Track all campaigns" },
      { icon: "🎯", title: "Scale", desc: "Grow your agency" },
    ],
    admin: [
      { icon: "⚙️", title: "Configure", desc: "Set up the platform" },
      { icon: "👥", title: "Monitor", desc: "Oversee all users" },
      { icon: "📈", title: "Analyze", desc: "Track platform metrics" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${15 + mousePosition.x * 0.01}%`,
              top: `${15 + mousePosition.y * 0.01}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"
            style={{
              right: `${20 + mousePosition.x * 0.008}%`,
              top: `${50 + mousePosition.y * 0.005}%`,
              transform: "translate(50%, -50%)",
              animationDelay: "1.5s",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${60 + mousePosition.x * 0.006}%`,
              bottom: `${25 + mousePosition.y * 0.004}%`,
              transform: "translate(-50%, 50%)",
              animationDelay: "3s",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel - Signup Form */}
            <div className="order-2 lg:order-1">
              <div className="max-w-md mx-auto lg:mx-0">
                {/* Header */}
                <div className="text-center lg:text-left mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-6">
                    <span className="mr-2">{selectedRoleData?.icon}</span>
                    Join Influbazzar Today
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      Join Influbazzar
                    </span>
                  </h1>

                  <p className="text-xl text-gray-300">
                    Select your role and start collaborating!
                  </p>
                </div>

                {/* Signup Form Card */}
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

                  {/* Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-gray-400 text-lg">👤</span>
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

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
                          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Role-specific Fields */}
                    {selectedRole === "brand" && (
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">🏢</span>
                          </div>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    )}

                    {selectedRole === "agency" && (
                      <div>
                        <label
                          htmlFor="agencyName"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Agency Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">🏛</span>
                          </div>
                          <input
                            type="text"
                            id="agencyName"
                            name="agencyName"
                            required
                            value={formData.agencyName}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your agency name"
                          />
                        </div>
                      </div>
                    )}

                    {(selectedRole === "brand" ||
                      selectedRole === "agency") && (
                      <div>
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Website (Optional)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">🌐</span>
                          </div>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                      </div>
                    )}

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                            placeholder="Create password"
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
                      </div>

                      <div>
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Confirm Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-gray-400 text-lg">🔒</span>
                          </div>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-12 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                            placeholder="Confirm password"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <span className="text-lg">
                              {showConfirmPassword ? "🙈" : "👁️"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        required
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
                      />
                      <label
                        htmlFor="termsAccepted"
                        className="ml-3 text-sm text-gray-300"
                      >
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-green-400 hover:text-green-300 font-medium"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-green-400 hover:text-green-300 font-medium"
                        >
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    {/* Signup Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                        isLoading
                          ? "bg-gray-600 cursor-not-allowed"
                          : `bg-gradient-to-r ${selectedRoleData?.color} hover:shadow-lg hover:shadow-green-500/25`
                      } text-white`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Creating account...
                        </div>
                      ) : (
                        `Create ${selectedRoleData?.name} Account`
                      )}
                    </button>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                      <p className="text-gray-400">
                        Already have an account?{" "}
                        <a
                          href="/login"
                          className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Panel - Journey Info */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      🚀
                    </span>
                    <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl group-hover:bg-white/20 transition-all duration-300"></div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Join thousands of creators, brands, and agencies who are
                  already building successful partnerships and growing their
                  businesses on Influbazzar.
                </p>

                {/* Journey Steps */}
                <div className="space-y-6">
                  {journeySteps[selectedRole].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
                    >
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    Why Choose Influbazzar?
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        50K+
                      </div>
                      <div className="text-gray-400 text-sm">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        ₹50Cr+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Creator Earnings
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        25K+
                      </div>
                      <div className="text-gray-400 text-sm">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        98%
                      </div>
                      <div className="text-gray-400 text-sm">Satisfaction</div>
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

export default Signup;
