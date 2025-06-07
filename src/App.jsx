import { Suspense, lazy } from "react";
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
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />

              {/* Creator Routes */}
              <Route path="/creator/login" element={<CreatorLogin />} />
              <Route path="/creator/signup" element={<CreatorSignup />} />
              <Route path="/creator/dashboard" element={<CreatorDashboard />} />
              <Route
                path="/creator/discover-campaigns"
                element={<DiscoverCampaigns />}
              />
              <Route path="/creator/my-campaigns" element={<MyCampaigns />} />
              <Route path="/creator/profile" element={<CreatorProfile />} />
              <Route path="/creator/earnings" element={<CreatorEarnings />} />
              <Route path="/creator/analytics" element={<CreatorAnalytics />} />
              <Route path="/creator/support" element={<CreatorSupport />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
