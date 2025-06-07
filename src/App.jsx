/**
 * App.jsx
 *
 * Purpose: Main application component with routing and global providers
 *
 * Features:
 * - Global theme management
 * - Authentication context
 * - Route protection and RBAC
 * - Error boundaries
 * - Query client setup
 *
 * Backend Integration:
 * - Route guards connect to auth API
 * - Theme preferences sync with user profile
 * - Query cache configuration for API calls
 */

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";

// Import main pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import Creator pages
import CreatorLogin from "./pages/creator/CreatorLogin";
import CreatorSignup from "./pages/creator/CreatorSignup";
import CreatorDashboard from "./pages/creator/CreatorDashboard";
import DiscoverCampaigns from "./pages/creator/DiscoverCampaigns";
import MyCampaigns from "./pages/creator/MyCampaigns";
import MyReels from "./pages/creator/MyReels";
import CreatorEarnings from "./pages/creator/CreatorEarnings";
import CreatorAnalytics from "./pages/creator/CreatorAnalytics";
import CreatorProfile from "./pages/creator/CreatorProfile";
import CreatorSupport from "./pages/creator/CreatorSupport";

// Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

/**
 * ProtectedRoute Component
 * Handles role-based route protection
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Array<string>} props.allowedRoles - Roles allowed to access route
 * @param {string} props.redirectTo - Redirect path if unauthorized
 */
const ProtectedRoute = ({
  children,
  allowedRoles = [],
  redirectTo = "/login",
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Show loading spinner while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Check role-based access
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

/**
 * AppRoutes Component
 * Defines all application routes with protection
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/contact" element={<Contact />} />

      {/* Creator Authentication Routes */}
      <Route path="/creator/login" element={<CreatorLogin />} />
      <Route path="/creator/signup" element={<CreatorSignup />} />

      {/* Protected Creator Routes */}
      <Route
        path="/creator/dashboard"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <CreatorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/discover-campaigns"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <DiscoverCampaigns />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/my-campaigns"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <MyCampaigns />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/my-reels"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <MyReels />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/earnings"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <CreatorEarnings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/analytics"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <CreatorAnalytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/profile"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <CreatorProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/creator/support"
        element={
          <ProtectedRoute allowedRoles={["creator"]}>
            <CreatorSupport />
          </ProtectedRoute>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

/**
 * Main App Component
 * Root application component with all providers
 */
const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <div className="app-container transition-colors duration-300">
                <AppRoutes />
              </div>
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
