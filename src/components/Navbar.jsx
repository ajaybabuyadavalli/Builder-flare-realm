import React, { useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IB</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Influbazzar
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>

            <a
              href="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Sign Up
            </a>
            <a
              href="/creator/login"
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Creator Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-3 space-x-3">
                  <a
                    href="/login"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-base font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 px-3">
                  <a
                    href="/creator/login"
                    className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Creator Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
