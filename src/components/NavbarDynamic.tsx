/**
 * Dynamic Navigation Component
 *
 * This component renders different navigation menus based on user authentication status and role.
 * It provides a responsive navigation experience with role-specific menu items, notifications,
 * theme switching, and user profile management.
 *
 * Key Features:
 * - Role-based navigation (Public, Creator, Brand, Agency)
 * - Real-time notifications system
 * - Dark/Light theme toggle
 * - User profile dropdown with settings
 * - Mobile-responsive design
 * - Active route highlighting
 *
 * Backend Integration Points:
 * {{Dynamic}} - Notifications should be fetched from API
 * {{Dynamic}} - User avatar images from CDN/cloud storage
 * {{Dynamic}} - Role-based menu items from backend permissions
 * {{Dynamic}} - Unread notification count from real-time system
 *
 * API Endpoints Expected:
 * - GET /api/notifications
 * - PATCH /api/notifications/:id/read
 * - GET /api/users/me/avatar
 */

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
  Home,
  CreditCard,
  FileText,
} from "lucide-react";

// ===== TYPE DEFINITIONS =====

/**
 * Navigation Item Interface
 *
 * Defines the structure for navigation menu items
 */
interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  badge?: string; // Optional badge text (e.g., "New", "3")
}

/**
 * Notification Interface
 *
 * {{Dynamic}} - This should match your backend notification model
 */
interface NotificationItem {
  id: string;
  type: "campaign" | "payment" | "approval" | "system";
  title: string;
  message: string;
  time: string;
  unread: boolean;
  actionUrl?: string; // Optional URL for notification action
  metadata?: Record<string, any>; // Additional data for the notification
}

/**
 * Dynamic Navigation Component
 *
 * Renders appropriate navigation based on user authentication and role
 */
const NavbarDynamic: React.FC = () => {
  // ===== HOOKS =====
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // ===== STATE MANAGEMENT =====
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // ===== NAVIGATION CONFIGURATIONS =====

  /**
   * Public Navigation Items
   *
   * Shown to unauthenticated users
   */
  const publicNavItems: NavigationItem[] = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      description: "Return to homepage",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
      icon: FileText,
      description: "View success stories and case studies",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
      icon: Target,
      description: "Read testimonials from creators and brands",
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: CreditCard,
      description: "View pricing plans and features",
    },
    {
      name: "About",
      href: "/about",
      icon: User,
      description: "Learn more about Influbazzar",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Target,
      description: "Get in touch with our team",
    },
  ];

  /**
   * Creator Navigation Items
   *
   * Shown to authenticated creators
   * {{Dynamic}} - Menu items can be customized based on creator tier/permissions
   */
  const creatorNavItems: NavigationItem[] = [
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

  /**
   * Brand Navigation Items
   *
   * Shown to authenticated brands
   * {{Dynamic}} - Menu items can be customized based on subscription plan
   */
  const brandNavItems: NavigationItem[] = [
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

  // ===== NOTIFICATION SYSTEM =====

  /**
   * Get Notifications for Current User
   *
   * {{Dynamic}} - Replace with real API call
   * Backend API: GET /api/notifications?limit=10&unread_only=false
   */
  const getNotifications = (): NotificationItem[] => {
    if (!user) return [];

    // {{Dynamic}} - This data should come from your backend API
    const baseNotifications: Record<string, NotificationItem[]> = {
      creator: [
        {
          id: "notif-001",
          type: "campaign",
          title: "New Campaign Invite",
          message: "GlowCo Beauty invited you to their summer campaign",
          time: "2 min ago",
          unread: true,
          actionUrl: "/creator/campaigns/summer-beauty-2024",
          metadata: { campaignId: "camp-001", brandName: "GlowCo Beauty" },
        },
        {
          id: "notif-002",
          type: "payment",
          title: "Payment Released",
          message: "₹5,000 has been released to your account",
          time: "1 hour ago",
          unread: true,
          actionUrl: "/creator/earnings",
          metadata: { amount: 5000, currency: "INR", campaignId: "camp-002" },
        },
        {
          id: "notif-003",
          type: "approval",
          title: "Content Approved",
          message: "Your reel for FitLife campaign has been approved",
          time: "3 hours ago",
          unread: false,
          actionUrl: "/creator/reels/reel-001",
          metadata: { contentId: "reel-001", campaignId: "camp-003" },
        },
      ],
      brand: [
        {
          id: "notif-004",
          type: "approval",
          title: "Content Submission",
          message: "Ajay Kumar submitted content for #GlowFix campaign",
          time: "2 hours ago",
          unread: true,
          actionUrl: "/brand/approvals/submission-001",
          metadata: { creatorId: "creator-001", campaignId: "camp-001" },
        },
        {
          id: "notif-005",
          type: "campaign",
          title: "New Creator Application",
          message: "Sneha Kapoor applied for Urban Campus campaign",
          time: "4 hours ago",
          unread: true,
          actionUrl: "/brand/campaigns/urban-campus/applications",
          metadata: { creatorId: "creator-002", campaignId: "camp-004" },
        },
        {
          id: "notif-006",
          type: "payment",
          title: "Escrow Release Pending",
          message: "₹15,000 ready for release - UrbanOnCampus campaign",
          time: "6 hours ago",
          unread: false,
          actionUrl: "/brand/payments/pending",
          metadata: { amount: 15000, currency: "INR", campaignId: "camp-004" },
        },
      ],
    };

    return baseNotifications[user.role] || [];
  };

  const notifications = getNotifications();
  const unreadCount = notifications.filter((n) => n.unread).length;

  // ===== UTILITY FUNCTIONS =====

  /**
   * Get Navigation Items Based on User Role
   *
   * Returns appropriate navigation items for current user
   */
  const getNavItems = (): NavigationItem[] => {
    if (!isAuthenticated || !user) return publicNavItems;

    switch (user.role) {
      case "creator":
        return creatorNavItems;
      case "brand":
        return brandNavItems;
      case "agency":
        // {{Dynamic}} - Add agency navigation items
        return brandNavItems; // Fallback to brand items for now
      case "admin":
        // {{Dynamic}} - Add admin navigation items
        return [...creatorNavItems, ...brandNavItems]; // Combine all for admin
      default:
        return publicNavItems;
    }
  };

  /**
   * Check if Current Path is Active
   *
   * Determines if a navigation item should be highlighted as active
   */
  const isActivePath = (path: string): boolean => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  /**
   * Handle User Logout
   *
   * Logs out user and redirects to homepage
   */
  const handleLogout = () => {
    logout();
    setShowProfileDropdown(false);
    navigate("/");
  };

  /**
   * Toggle Theme (Dark/Light Mode)
   *
   * Switches between dark and light themes
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /**
   * Handle Notification Click
   *
   * Marks notification as read and navigates to action URL
   * {{Dynamic}} - Should call API to mark notification as read
   */
  const handleNotificationClick = (notification: NotificationItem) => {
    if (notification.unread) {
      // {{Dynamic}} - Call API to mark as read
      // await api.patch(`/api/notifications/${notification.id}/read`);
      console.log("Marking notification as read:", notification.id);
    }

    if (notification.actionUrl) {
      navigate(notification.actionUrl);
    }

    setShowNotifications(false);
  };

  // ===== CLICK OUTSIDE HANDLER =====

  /**
   * Handle Clicks Outside Dropdowns
   *
   * Closes open dropdowns when user clicks outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showProfileDropdown || showNotifications || showMobileMenu) {
        setShowProfileDropdown(false);
        setShowNotifications(false);
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileDropdown, showNotifications, showMobileMenu]);

  // ===== LOADING STATE =====

  /**
   * Loading State Navigation
   *
   * Shows skeleton navigation while authentication is loading
   */
  if (isLoading) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Influbazzar
            </div>
            {/* Loading skeleton */}
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full"></div>
          </div>
        </div>
      </nav>
    );
  }

  const navItems = getNavItems();

  // ===== AUTHENTICATED NAVIGATION =====

  /**
   * Authenticated Navigation Render
   *
   * Shows role-specific navigation for authenticated users
   */
  if (isAuthenticated && user) {
    return (
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* ===== LOGO SECTION ===== */}
            <div className="flex items-center">
              <Link
                to={
                  user.role === "creator"
                    ? "/creator/dashboard"
                    : "/brand/dashboard"
                }
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Influbazzar
              </Link>
            </div>

            {/* ===== DESKTOP NAVIGATION ===== */}
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
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                  {item.badge && (
                    <Badge className="ml-2 text-xs" variant="secondary">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>

            {/* ===== RIGHT SIDE CONTROLS ===== */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* ===== NOTIFICATIONS DROPDOWN ===== */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="rounded-full relative"
                  title="View notifications"
                >
                  <Bell className="h-4 w-4" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                      {unreadCount > 9 ? "9+" : unreadCount}
                    </Badge>
                  )}
                </Button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-sm">
                            Notifications
                          </h3>
                          {unreadCount > 0 && (
                            <Badge variant="secondary" className="text-xs">
                              {unreadCount} new
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              onClick={() =>
                                handleNotificationClick(notification)
                              }
                              className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
                                notification.unread
                                  ? "bg-blue-50 dark:bg-blue-900/20 border-l-2 border-l-blue-500"
                                  : ""
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  {notification.type === "campaign" && (
                                    <Briefcase className="w-4 h-4 text-blue-500" />
                                  )}
                                  {notification.type === "payment" && (
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                  )}
                                  {notification.type === "approval" && (
                                    <CheckCircle className="w-4 h-4 text-orange-500" />
                                  )}
                                  {notification.type === "system" && (
                                    <Bell className="w-4 h-4 text-gray-500" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                            <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No notifications yet</p>
                          </div>
                        )}
                      </div>
                      {notifications.length > 0 && (
                        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => {
                              navigate(`/${user.role}/notifications`);
                              setShowNotifications(false);
                            }}
                          >
                            View All Notifications
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ===== USER PROFILE DROPDOWN ===== */}
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                      onError={(e) => {
                        // {{Dynamic}} - Handle avatar loading errors
                        console.log("Avatar failed to load for user:", user.id);
                      }}
                    />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>

                {/* Profile Dropdown */}
                <AnimatePresence>
                  {showProfileDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    >
                      {/* User Info Section */}
                      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {user.email}
                        </p>
                        <div className="flex items-center mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {user.role.charAt(0).toUpperCase() +
                              user.role.slice(1)}{" "}
                            Account
                          </Badge>
                          {user.isEmailVerified && (
                            <CheckCircle className="w-3 h-3 text-green-500 ml-2" />
                          )}
                        </div>
                      </div>

                      {/* Profile Actions */}
                      <div className="py-1">
                        <Link
                          to={`/${user.role}/settings`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>

                        <Link
                          to={`/${user.role}/profile`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>

                        <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
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

          {/* ===== MOBILE NAVIGATION ===== */}
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
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActivePath(item.href)
                          ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-gray-50 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      {item.badge && (
                        <Badge className="ml-auto text-xs" variant="secondary">
                          {item.badge}
                        </Badge>
                      )}
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

  // ===== PUBLIC NAVIGATION =====

  /**
   * Public Navigation Render
   *
   * Shows public navigation for unauthenticated users
   */
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
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
                title={item.description}
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
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
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
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
