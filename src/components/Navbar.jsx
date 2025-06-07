import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">IB</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Influbazzar
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>

            {/* Login Button */}
            <a
              href="/login"
              className="group relative px-6 py-3 text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Sign Up Button */}
            <a
              href="/signup"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Creator Portal Button */}
            <a
              href="/creator/login"
              className="group relative overflow-hidden border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-gray-900"
            >
              <span className="relative z-10">Creator Portal</span>
              <div className="absolute inset-0 bg-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="text-xl">{theme === "dark" ? "☀️" : "🌙"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group p-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2.5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-2.5" : "translate-y-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-4 pb-3 space-y-3 bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700/50 mt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group block px-4 py-3 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative">
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}

            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="space-y-3">
                <a
                  href="/login"
                  className="group block px-4 py-3 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>

                <a
                  href="/signup"
                  className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </a>

                <a
                  href="/creator/login"
                  className="block border-2 border-cyan-400 text-cyan-400 px-4 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Creator Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar for mobile menu */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
