<<<<<<< HEAD
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Creator Pages
const CreatorLogin = lazy(() => import("./pages/creator/Login"));
const CreatorSignup = lazy(() => import("./pages/creator/Signup"));
const CreatorDashboard = lazy(() => import("./pages/creator/Dashboard"));
const DiscoverCampaigns = lazy(
  () => import("./pages/creator/DiscoverCampaigns"),
);
const MyCampaigns = lazy(() => import("./pages/creator/MyCampaigns"));
const CreatorProfile = lazy(() => import("./pages/creator/Profile"));
const CreatorEarnings = lazy(() => import("./pages/creator/Earnings"));
const CreatorAnalytics = lazy(() => import("./pages/creator/Analytics"));
const CreatorSupport = lazy(() => import("./pages/creator/Support"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/case-studies" element={<CaseStudies />} />

                {/* Creator Routes */}
                <Route path="/creator/login" element={<CreatorLogin />} />
                <Route path="/creator/signup" element={<CreatorSignup />} />
                <Route
                  path="/creator/dashboard"
                  element={<CreatorDashboard />}
                />
                <Route
                  path="/creator/discover-campaigns"
                  element={<DiscoverCampaigns />}
                />
                <Route path="/creator/my-campaigns" element={<MyCampaigns />} />
                <Route path="/creator/profile" element={<CreatorProfile />} />
                <Route path="/creator/earnings" element={<CreatorEarnings />} />
                <Route
                  path="/creator/analytics"
                  element={<CreatorAnalytics />}
                />
                <Route path="/creator/support" element={<CreatorSupport />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
=======
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import {
  ProtectedRoute,
  OnboardingProtectedRoute,
  PublicRoute,
  AdminRoute,
} from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

/**
 * Main Application Component
 *
 * This is the root component that sets up routing, authentication,
 * and global providers for the Influbazzar platform.
 *
 * Backend Integration Notes:
 * - Configure error tracking (Sentry integration)
 * - Set up analytics tracking (Google Analytics, Mixpanel)
 * - Add service worker registration for PWA features
 * - Implement global error boundaries
 * - Add performance monitoring
 */

// Loading Component
const AppLoader = ({ message = "Loading..." }: { message?: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  </div>
>>>>>>> c4186891ff887a93dfc37ca11a103ebd04644a3d
);

// Lazy load all page components for better performance
// Public Pages
const LandingPage = React.lazy(() => import("@/pages/LandingPage"));
const AboutPage = React.lazy(() => import("@/pages/AboutPage"));
const PricingPage = React.lazy(() => import("@/pages/PricingPage"));
const ContactPage = React.lazy(() => import("@/pages/ContactPage"));

// Authentication Pages
const LoginPage = React.lazy(() => import("@/pages/auth/LoginPage"));
const SignupPage = React.lazy(() => import("@/pages/auth/SignupPage"));
const OTPVerificationPage = React.lazy(
  () => import("@/pages/auth/OTPVerificationPage"),
);
const ForgotPasswordPage = React.lazy(
  () => import("@/pages/auth/ForgotPasswordPage"),
);

// Onboarding
const OnboardingPage = React.lazy(() => import("@/pages/OnboardingPage"));

// Creator Pages
const CreatorDashboard = React.lazy(() => import("@/pages/creator/Dashboard"));
const DiscoverCampaigns = React.lazy(
  () => import("@/pages/creator/DiscoverCampaigns"),
);
const MyCampaigns = React.lazy(() => import("@/pages/creator/MyCampaigns"));
const MyContent = React.lazy(() => import("@/pages/creator/MyContent"));
const CreatorEarnings = React.lazy(() => import("@/pages/creator/Earnings"));
const CreatorAnalytics = React.lazy(() => import("@/pages/creator/Analytics"));
const CreatorProfile = React.lazy(() => import("@/pages/creator/Profile"));
const CreatorSettings = React.lazy(() => import("@/pages/creator/Settings"));

// Brand Pages
const BrandDashboard = React.lazy(() => import("@/pages/brand/Dashboard"));
const DiscoverCreators = React.lazy(
  () => import("@/pages/brand/DiscoverCreators"),
);
const BrandCampaigns = React.lazy(() => import("@/pages/brand/Campaigns"));
const CreateCampaign = React.lazy(() => import("@/pages/brand/CreateCampaign"));
const CampaignDetails = React.lazy(
  () => import("@/pages/brand/CampaignDetails"),
);
const BrandAnalytics = React.lazy(() => import("@/pages/brand/Analytics"));
const CreatorApplications = React.lazy(
  () => import("@/pages/brand/CreatorApplications"),
);
const BrandPayments = React.lazy(() => import("@/pages/brand/Payments"));
const BrandProfile = React.lazy(() => import("@/pages/brand/Profile"));
const BrandSettings = React.lazy(() => import("@/pages/brand/Settings"));

// Shared Pages
const NotFoundPage = React.lazy(() => import("@/pages/NotFoundPage"));
const NotificationsPage = React.lazy(() => import("@/pages/NotificationsPage"));

// Admin Pages
const AdminDashboard = React.lazy(() => import("@/pages/admin/Dashboard"));
const UserManagement = React.lazy(() => import("@/pages/admin/UserManagement"));
const PlatformAnalytics = React.lazy(
  () => import("@/pages/admin/PlatformAnalytics"),
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App min-h-screen bg-background">
          <Suspense fallback={<AppLoader />}>
            <Routes>
              {/* Public Routes - accessible to non-authenticated users */}
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <LandingPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PublicRoute>
                    <AboutPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/pricing"
                element={
                  <PublicRoute>
                    <PricingPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PublicRoute>
                    <ContactPage />
                  </PublicRoute>
                }
              />

              {/* Authentication Routes */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <PublicRoute>
                    <SignupPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/verify-otp"
                element={
                  <PublicRoute>
                    <OTPVerificationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <PublicRoute>
                    <ForgotPasswordPage />
                  </PublicRoute>
                }
              />

              {/* Onboarding Route - requires authentication but allows incomplete onboarding */}
              <Route
                path="/onboarding"
                element={
                  <OnboardingProtectedRoute
                    allowedRoles={["creator"]}
                    requireOnboarding={false}
                    allowIncompleteOnboarding={true}
                  >
                    <OnboardingPage />
                  </OnboardingProtectedRoute>
                }
              />

              {/* Creator Routes - require completed onboarding */}
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
                path="/creator/content"
                element={
                  <OnboardingProtectedRoute allowedRoles={["creator"]}>
                    <MyContent />
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

              {/* Brand Routes - require authentication */}
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
                path="/brand/campaigns/create"
                element={
                  <ProtectedRoute allowedRoles={["brand"]}>
                    <CreateCampaign />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/brand/campaigns/:campaignId"
                element={
                  <ProtectedRoute allowedRoles={["brand"]}>
                    <CampaignDetails />
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
                path="/brand/applications"
                element={
                  <ProtectedRoute allowedRoles={["brand"]}>
                    <CreatorApplications />
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
                path="/brand/profile"
                element={
                  <ProtectedRoute allowedRoles={["brand"]}>
                    <BrandProfile />
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

              {/* Shared Authenticated Routes */}
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute>
                    <NotificationsPage />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes - super restricted */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/analytics"
                element={
                  <AdminRoute>
                    <PlatformAnalytics />
                  </AdminRoute>
                }
              />

              {/* Catch-all for role-based redirects */}
              <Route
                path="/creator/*"
                element={
                  <OnboardingProtectedRoute allowedRoles={["creator"]}>
                    <NotFoundPage />
                  </OnboardingProtectedRoute>
                }
              />
              <Route
                path="/brand/*"
                element={
                  <ProtectedRoute allowedRoles={["brand"]}>
                    <NotFoundPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/*"
                element={
                  <AdminRoute>
                    <NotFoundPage />
                  </AdminRoute>
                }
              />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>

          {/* Global Toast Notifications */}
          <Toaster position="top-right" richColors />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

/**
 * Backend Deployment and Configuration Notes:
 *
 * 1. Environment Variables:
 *    - VITE_API_URL: Backend API base URL
 *    - VITE_SENTRY_DSN: Error tracking
 *    - VITE_GA_TRACKING_ID: Google Analytics
 *    - VITE_STRIPE_PUBLISHABLE_KEY: Payment processing
 *    - VITE_RAZORPAY_KEY_ID: Indian payment gateway
 *
 * 2. Build Configuration:
 *    - Configure proper asset optimization
 *    - Set up CDN for static assets
 *    - Implement proper caching strategies
 *    - Add service worker for offline capabilities
 *
 * 3. Security Headers:
 *    - Content Security Policy (CSP)
 *    - X-Frame-Options: DENY
 *    - X-Content-Type-Options: nosniff
 *    - Referrer-Policy: strict-origin-when-cross-origin
 *
 * 4. Performance Optimizations:
 *    - Code splitting at route level (already implemented)
 *    - Image optimization and lazy loading
 *    - API response caching
 *    - Bundle size optimization
 *
 * 5. Monitoring and Analytics:
 *    - Real User Monitoring (RUM)
 *    - Core Web Vitals tracking
 *    - User behavior analytics
 *    - Error rate monitoring
 *
 * 6. SEO and Meta Tags:
 *    - Dynamic meta tags for social sharing
 *    - Structured data for search engines
 *    - Sitemap generation
 *    - robots.txt configuration
 */
