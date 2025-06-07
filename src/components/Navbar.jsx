/**
 * Navbar.jsx
 *
 * Purpose: Main navigation component with theme toggle and user authentication
 *
 * Features:
 * - Responsive navigation menu
 * - Theme toggle functionality
 * - Post-login avatar dropdown
 * - Role-based navigation items
 * - Sticky scroll behavior
 *
 * Backend Integration:
 * - User authentication status
 * - Role-based menu items
 * - Logout API call
 * - User profile data
 */

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

const CreatorNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const dropdownRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const creatorNavItems = [
    { name: "Dashboard", href: "/creator/dashboard", icon: "📊" },
    { name: "Discover", href: "/creator/discover-campaigns", icon: "🔍" },
    { name: "My Campaigns", href: "/creator/my-campaigns", icon: "📋" },
    { name: "My Reels", href: "/creator/my-reels", icon: "🎬" },
    { name: "Earnings", href: "/creator/earnings", icon: "💰" },
    { name: "Analytics", href: "/creator/analytics", icon: "📈" },
  ];

  const dropdownItems = [
    { name: "Profile", href: "/creator/profile", icon: "👤" },
    { name: "Settings", href: "/creator/settings", icon: "⚙️" },
    { name: "Support", href: "/creator/support", icon: "🎧" },
    { name: "Logout", action: logout, icon: "🚪" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/creator/dashboard"
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">IB</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                Influbazzar
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {creatorNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-xl">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>

            {/* User Avatar Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="group flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={
                      user?.avatar ||
                      `https://ui-avatars.com/api/?name=${user?.initials}&background=7c3aed&color=fff`
                    }
                    alt={user?.name}
                    className="w-10 h-10 rounded-xl object-cover border-2 border-purple-500/50 group-hover:border-purple-400 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                </div>
                <div className="hidden lg:block text-left">
                  <div className="text-white font-semibold">{user?.name}</div>
                  <div className="text-purple-400 text-sm">{user?.badge}</div>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <img
                        src={
                          user?.avatar ||
                          `https://ui-avatars.com/api/?name=${user?.initials}&background=7c3aed&color=fff`
                        }
                        alt={user?.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-white font-semibold">
                          {user?.name}
                        </div>
                        <div className="text-purple-400 text-sm">
                          {user?.badge}
                        </div>
                        <div className="text-gray-400 text-xs">
                          Score: {user?.score}/100
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Items */}
                  {dropdownItems.map((item) => (
                    <div key={item.name}>
                      {item.action ? (
                        <button
                          onClick={item.action}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                        >
                          <span>{item.icon}</span>
                          <span>{item.name}</span>
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                        >
                          <span>{item.icon}</span>
                          <span>{item.name}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white transition-colors"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2.5"
                      : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-2.5"
                      : "translate-y-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700/50 mt-4 pt-4 pb-6">
            <div className="space-y-2">
              {creatorNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/**
 * PublicNavbar Component
 * Pre-login navigation for public pages
 */
const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {isOpen && (
          <div className="md:hidden border-t border-gray-700/50 mt-4 pt-4 pb-6">
            <div className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
                <a
                  href="/login"
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
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
        )}
      </div>
    </nav>
  );
};

/**
 * Main Navbar Component
 * Conditionally renders based on authentication status
 */
const Navbar = () => {
  const { isAuthenticated, user } = useAuth();

  // Show creator navbar for authenticated creator users
  if (isAuthenticated && user?.role === "creator") {
    return <CreatorNavbar />;
  }

  // Show public navbar for unauthenticated users
  return <PublicNavbar />;
};

export default Navbar;
