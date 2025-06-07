/**
 * Main Application Component
 *
 * This is the root component that sets up the entire application structure including:
 * - Theme providers for dark/light mode
 * - Authentication context for user management
 * - React Router for navigation
 * - Global loading states
 * - Protected routes for role-based access
 *
 * Architecture Notes:
 * - Uses React Router v6 for client-side routing
 * - Implements lazy loading for code splitting
 * - Role-based route protection (Creator, Brand, Agency, Admin)
 * - Onboarding flow management for new users
 *
 * Backend Integration:
 * {{Dynamic}} - Authentication tokens should be managed here
 * {{Dynamic}} - API base URL configuration
 * {{Dynamic}} - User session persistence
 */

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import ProtectedRoute from "./components/ProtectedRoute";
import OnboardingProtectedRoute from "./components/OnboardingProtectedRoute";
import { LoadingScreen } from "./components/ui/loading";
import { Toaster } from "./components/ui/toaster";

// ===== LAZY LOADED COMPONENTS =====
// Code splitting for better performance - components are loaded only when needed

// Public pages - accessible to all users
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));

// Authentication pages - public access for login/signup
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const OTPVerification = lazy(() => import("./pages/auth/OTPVerification"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

// Onboarding flow - authenticated users only
const Onboarding = lazy(() => import("./pages/Onboarding"));

// Creator dashboard pages - Creator role only
const CreatorDashboard = lazy(() => import("./pages/creator/Dashboard"));
const DiscoverCampaigns = lazy(
  () => import("./pages/creator/DiscoverCampaigns"),
);
const MyCampaigns = lazy(() => import("./pages/creator/MyCampaigns"));
const MyReels = lazy(() => import("./pages/creator/MyReels"));
const CreatorEarnings = lazy(() => import("./pages/creator/Earnings"));
const CreatorAnalytics = lazy(() => import("./pages/creator/Analytics"));
const CreatorProfile = lazy(() => import("./pages/creator/Profile"));
const CreatorSettings = lazy(() => import("./pages/creator/Settings"));

// Brand dashboard pages - Brand role only
const BrandDashboard = lazy(() => import("./pages/brand/Dashboard"));
const DiscoverCreators = lazy(() => import("./pages/brand/DiscoverCreators"));
const BrandCampaigns = lazy(() => import("./pages/brand/Campaigns"));
const NewCampaign = lazy(() => import("./pages/brand/NewCampaign"));
const BrandAnalytics = lazy(() => import("./pages/brand/Analytics"));
const BrandApprovals = lazy(() => import("./pages/brand/Approvals"));
const BrandPayments = lazy(() => import("./pages/brand/Payments"));
const BrandSettings = lazy(() => import("./pages/brand/Settings"));

// Error and utility pages
const NotFound = lazy(() => import("./pages/NotFound"));

/**
 * Main App Component
 *
 * Provides the foundational structure for the entire application including
 * routing, authentication, theming, and error boundaries.
 */
function App() {
  return (
    // Theme Provider - Manages dark/light mode across the application
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      {/* Authentication Provider - Manages user authentication state */}
      <AuthProvider>
        {/* Router Provider - Enables client-side routing */}
        <Router>
          <div className="App min-h-screen bg-background text-foreground">
            {/* 
              Suspense Wrapper - Shows loading state while lazy components load
              {{Dynamic}} - Loading states can be customized based on route
            */}
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* ===== PUBLIC ROUTES ===== */}
                {/* These routes are accessible to all users regardless of authentication */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />

                {/* ===== AUTHENTICATION ROUTES ===== */}
                {/* Public access for users to sign up and log in */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/otp-verification" element={<OTPVerification />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* ===== ONBOARDING ROUTES ===== */}
                {/* 
                  Special route that requires authentication but allows incomplete onboarding
                  {{Dynamic}} - Onboarding steps can be configured based on user role
                */}
                <Route
                  path="/onboarding"
                  element={
                    <OnboardingProtectedRoute
                      allowedRoles={["creator", "brand"]}
                      requireOnboarding={false}
                    >
                      <Onboarding />
                    </OnboardingProtectedRoute>
                  }
                />

                {/* ===== CREATOR PROTECTED ROUTES ===== */}
                {/* All creator routes require authentication AND completed onboarding */}
                <Route
                  path="/creator/dashboard"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorDashboard />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/discover-campaigns"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <DiscoverCampaigns />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/my-campaigns"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <MyCampaigns />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/reels"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <MyReels />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/earnings"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorEarnings />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/analytics"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorAnalytics />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/profile"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorProfile />
                    </OnboardingProtectedRoute>
                  }
                />
                <Route
                  path="/creator/settings"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorSettings />
                    </OnboardingProtectedRoute>
                  }
                />

                {/* ===== BRAND PROTECTED ROUTES ===== */}
                {/* All brand routes require authentication and brand role */}
                <Route
                  path="/brand/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/discover-creators"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <DiscoverCreators />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/campaigns"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandCampaigns />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/campaigns/new"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <NewCampaign />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/analytics"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandAnalytics />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/approvals"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandApprovals />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/payments"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandPayments />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/settings"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <BrandSettings />
                    </ProtectedRoute>
                  }
                />

                {/* ===== CATCH-ALL ROUTES ===== */}
                {/* 
                  These routes catch unauthorized access attempts and redirect appropriately
                  {{Dynamic}} - Could be enhanced with analytics tracking
                */}
                <Route
                  path="/creator/*"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <NotFound />
                    </OnboardingProtectedRoute>
                  }
                />

                <Route
                  path="/brand/*"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <NotFound />
                    </ProtectedRoute>
                  }
                />

                {/* 404 fallback for all other routes */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            {/* 
              Global Toast Notifications
              Shows success/error messages throughout the application
              {{Dynamic}} - Can be enhanced with different toast types and positioning
            */}
            <Toaster />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
