import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
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

// Creator Pages
import CreatorLogin from "./pages/creator/CreatorLogin";
import CreatorSignup from "./pages/creator/CreatorSignup";
import CreatorDashboard from "./pages/creator/CreatorDashboard";
import DiscoverCampaigns from "./pages/creator/DiscoverCampaigns";
import MyCampaigns from "./pages/creator/MyCampaigns";
import CreatorProfile from "./pages/creator/CreatorProfile";
import CreatorEarnings from "./pages/creator/CreatorEarnings";
import CreatorAnalytics from "./pages/creator/CreatorAnalytics";
import CreatorSupport from "./pages/creator/CreatorSupport";

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
              {/* Main Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />

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

              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
