import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "@/components/ErrorBoundary";

// Import pages directly (no lazy loading to fix spinner issue)
import WorkingIndex from "./pages/WorkingIndex";
import SimpleLogin from "./pages/SimpleLogin";
import SimpleSignup from "./pages/SimpleSignup";
import SimpleAbout from "./pages/SimpleAbout";
import SimplePricing from "./pages/SimplePricing";
import SimpleCaseStudies from "./pages/SimpleCaseStudies";
import SimpleContact from "./pages/SimpleContact";
import SimpleNotFound from "./pages/SimpleNotFound";

// Creator Pages - Import directly
import SimpleCreatorLogin from "./pages/creator/SimpleCreatorLogin";
import SimpleCreatorSignup from "./pages/creator/SimpleCreatorSignup";
import SimpleCreatorDashboard from "./pages/creator/SimpleCreatorDashboard";
import SimpleDiscoverCampaigns from "./pages/creator/SimpleDiscoverCampaigns";
import SimpleMyCampaigns from "./pages/creator/SimpleMyCampaigns";
import SimpleCreatorProfile from "./pages/creator/SimpleCreatorProfile";
import SimpleCreatorEarnings from "./pages/creator/SimpleCreatorEarnings";
import SimpleCreatorAnalytics from "./pages/creator/SimpleCreatorAnalytics";
import SimpleCreatorSupport from "./pages/creator/SimpleCreatorSupport";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WorkingIndex />} />
              <Route path="/login" element={<SimpleLogin />} />
              <Route path="/signup" element={<SimpleSignup />} />
              <Route path="/about" element={<SimpleAbout />} />
              <Route path="/pricing" element={<SimplePricing />} />
              <Route path="/case-studies" element={<SimpleCaseStudies />} />
              <Route path="/contact" element={<SimpleContact />} />

              {/* Creator Routes */}
              <Route path="/creator/login" element={<SimpleCreatorLogin />} />
              <Route path="/creator/signup" element={<SimpleCreatorSignup />} />
              <Route
                path="/creator/dashboard"
                element={<SimpleCreatorDashboard />}
              />
              <Route
                path="/creator/discover-campaigns"
                element={<SimpleDiscoverCampaigns />}
              />
              <Route
                path="/creator/my-campaigns"
                element={<SimpleMyCampaigns />}
              />
              <Route
                path="/creator/profile"
                element={<SimpleCreatorProfile />}
              />
              <Route
                path="/creator/earnings"
                element={<SimpleCreatorEarnings />}
              />
              <Route
                path="/creator/analytics"
                element={<SimpleCreatorAnalytics />}
              />
              <Route
                path="/creator/support"
                element={<SimpleCreatorSupport />}
              />

              {/* Catch all route */}
              <Route path="*" element={<SimpleNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
