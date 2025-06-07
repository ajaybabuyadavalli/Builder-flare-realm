import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Search,
  Briefcase,
  Video,
  DollarSign,
  BarChart3,
  Bell,
  Settings,
  User,
  LogOut,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  Target,
} from "lucide-react";

const NavbarDynamic = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const { theme, setTheme } = useTheme();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Public navigation items (shown when not logged in)
  const publicNavItems = [
    { name: "Home", href: "/", icon: null },
    { name: "Case Studies", href: "/case-studies", icon: null },
    { name: "Testimonials", href: "/testimonials", icon: null },
    { name: "Pricing", href: "/pricing", icon: null },
    { name: "About", href: "/about", icon: null },
    { name: "Contact", href: "/contact", icon: null },
  ];

  // Creator navigation items (exact specification from user)
  const creatorNavItems = [
    {
      name: "Dashboard",
      href: "/creator/dashboard",
      icon: LayoutDashboard,
      description:
        "Quick access to performance snapshot, influbazzar score, etc.",
    },
    {
      name: "Discover Campaigns",
      href: "/creator/discover-campaigns",
      icon: Search,
      description: "View open campaigns to apply/bid on.",
    },
    {
      name: "My Campaigns",
      href: "/creator/my-campaigns",
      icon: Briefcase,
      description: "List of submitted, approved, and paid campaigns.",
    },
    {
      name: "My Reels",
      href: "/creator/reels",
      icon: Video,
      description: "All uploaded reels/content, performance, feedback.",
    },
    {
      name: "Earnings",
      href: "/creator/earnings",
      icon: DollarSign,
      description: "Earnings history, withdrawal options, payout status.",
    },
    {
      name: "Insights",
      href: "/creator/analytics",
      icon: BarChart3,
      description: "Analytics across platforms, engagement stats.",
    },
  ];

  // Brand navigation items
  const brandNavItems = [
    {
      name: "Dashboard",
      href: "/brand/dashboard",
      icon: LayoutDashboard,
      description: "Campaign overview & brand metrics",
    },
    {
      name: "Discover Creators",
      href: "/brand/discover-creators",
      icon: Search,
      description: "Find creators for your campaigns",
    },
    {
      name: "Campaigns",
      href: "/brand/campaigns",
      icon: Briefcase,
      description: "Manage your influencer campaigns",
    },
    {
      name: "Approvals",
      href: "/brand/approvals",
      icon: CheckCircle,
      description: "Review creator content submissions",
    },
    {
      name: "Analytics",
      href: "/brand/analytics",
      icon: BarChart3,
      description: "Campaign performance insights",
    },
    {
      name: "Payments",
      href: "/brand/payments",
      icon: DollarSign,
      description: "Manage escrow & payments",
    },
  ];

  // Mock notifications (with different content based on role)
  const getNotifications = () => {
    if (user?.role === "creator") {
      return [
        {
          id: 1,
          type: "campaign",
          message: "New campaign invite from GlowCo Beauty",
          time: "2 min ago",
          unread: true,
        },
        {
          id: 2,
          type: "payment",
          message: "Payment of ₹5,000 released",
          time: "1 hour ago",
          unread: true,
        },
        {
          id: 3,
          type: "approval",
          message: "Your content was approved",
          time: "3 hours ago",
          unread: false,
        },
      ];
    } else if (user?.role === "brand") {
      return [
        {
          id: 1,
          type: "approval",
          message: "Creator Ajay submitted post for #GlowFix",
          time: "2 hours ago",
          unread: true,
        },
        {
          id: 2,
          type: "application",
          message: "New creator application from Sneha Kapoor",
          time: "4 hours ago",
          unread: true,
        },
        {
          id: 3,
          type: "payment",
          message: "Escrow release pending - ₹15,000",
          time: "6 hours ago",
          unread: false,
        },
      ];
    }
    return [];
  };

  const notifications = getNotifications();
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleLogout = () => {
    logout();
    setShowProfileDropdown(false);
    navigate("/");
  };

  const isActivePath = (path: string) => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Get navigation items based on user role
  const getNavItems = () => {
    if (!isAuthenticated) return publicNavItems;
    if (user?.role === "creator") return creatorNavItems;
    if (user?.role === "brand") return brandNavItems;
    return publicNavItems;
  };

  const navItems = getNavItems();

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showProfileDropdown || showNotifications) {
        setShowProfileDropdown(false);
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileDropdown, showNotifications]);

  // Show loading state
  if (isLoading) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Influbazzar
            </div>
            <div className="animate-pulse bg-gray-200 h-8 w-8 rounded-full"></div>
          </div>
        </div>
      </nav>
    );
  }

  // Authenticated navbar (Creator or Brand)
  if (isAuthenticated && user) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to={
                  user.role === "creator"
                    ? "/creator/dashboard"
                    : "/brand/dashboard"
                }
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Influbazzar
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
                    isActivePath(item.href)
                      ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-gray-50 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                  }`}
                  title={item.description}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side - Notifications, Theme, Profile */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="rounded-full relative"
                >
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-sm">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                              notification.unread
                                ? "bg-blue-50 dark:bg-blue-900/20"
                                : ""
                            }`}
                          >
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>

                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {user.role.charAt(0).toUpperCase() +
                            user.role.slice(1)}{" "}
                          Account
                        </Badge>
                      </div>

                      <Link
                        to={`/${user.role}/settings`}
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </Link>

                      <Link
                        to={`/${user.role}/profile`}
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setShowProfileDropdown(false)}
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  {showMobileMenu ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                        isActivePath(item.href)
                          ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-gray-50 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item.icon && <item.icon className="w-5 h-5 mr-3" />}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  }

  // Public navbar (not authenticated)
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Influbazzar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {publicNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActivePath(item.href)
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {publicNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActivePath(item.href)
                        ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-gray-50 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavbarDynamic;
