import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import ProtectedRoute from "./components/ProtectedRoute";
import OnboardingProtectedRoute from "./components/OnboardingProtectedRoute";
import { LoadingScreen } from "./components/ui/loading-simple";

// Public pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials.jsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const OTPVerification = lazy(() => import("./pages/OTPVerification"));
const Onboarding = lazy(() => import("./pages/Onboarding"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Creator pages
const CreatorLogin = lazy(() => import("./pages/creator/Login"));
const CreatorSignup = lazy(() => import("./pages/creator/Signup"));
const CreatorDashboard = lazy(() => import("./pages/creator/Dashboard"));
const DiscoverCampaigns = lazy(
  () => import("./pages/creator/DiscoverCampaigns"),
);
const MyCampaigns = lazy(() => import("./pages/creator/MyCampaigns"));
const MyReels = lazy(() => import("./pages/creator/MyReels"));
const CreatorEarnings = lazy(() => import("./pages/creator/Earnings"));
const CreatorAnalytics = lazy(() => import("./pages/creator/Analytics"));
const CreatorProfile = lazy(() => import("./pages/creator/Profile"));
const CreatorSupport = lazy(() => import("./pages/creator/Support"));

// Brand pages
const BrandLogin = lazy(() => import("./pages/brand/Login"));
const BrandSignup = lazy(() => import("./pages/brand/Signup"));
const BrandDashboard = lazy(() => import("./pages/brand/Dashboard"));
const DiscoverCreators = lazy(() => import("./pages/brand/DiscoverCreators"));
const BrandCampaigns = lazy(() => import("./pages/brand/Campaigns"));
const NewCampaign = lazy(() => import("./pages/brand/NewCampaign"));
const BrandAnalytics = lazy(() => import("./pages/brand/Analytics"));

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <Router>
          <div className="App">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/otp-verification" element={<OTPVerification />} />

                {/* Onboarding route - requires authentication but allows incomplete onboarding */}
                <Route
                  path="/onboarding"
                  element={
                    <OnboardingProtectedRoute
                      allowedRoles={["creator"]}
                      requireOnboarding={false}
                    >
                      <Onboarding />
                    </OnboardingProtectedRoute>
                  }
                />

                {/* Creator authentication routes (public) */}
                <Route path="/creator/login" element={<CreatorLogin />} />
                <Route path="/creator/signup" element={<CreatorSignup />} />

                {/* Protected Creator routes - require onboarding completion */}
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
                  path="/creator/support"
                  element={
                    <OnboardingProtectedRoute allowedRoles={["creator"]}>
                      <CreatorSupport />
                    </OnboardingProtectedRoute>
                  }
                />

                {/* Brand authentication routes (public) */}
                <Route path="/brand/login" element={<BrandLogin />} />
                <Route path="/brand/signup" element={<BrandSignup />} />

                {/* Protected Brand routes */}
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

                {/* Catch-all redirects for role-based access */}
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

                {/* 404 route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
