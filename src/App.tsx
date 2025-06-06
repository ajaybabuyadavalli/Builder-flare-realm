import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

// Creator Pages
import CreatorLogin from "./pages/creator/Login";
import CreatorSignup from "./pages/creator/Signup";
import CreatorDashboard from "./pages/creator/Dashboard";
import DiscoverCampaigns from "./pages/creator/DiscoverCampaigns";
import MyCampaigns from "./pages/creator/MyCampaigns";
import CreatorProfile from "./pages/creator/Profile";
import CreatorEarnings from "./pages/creator/Earnings";
import CreatorAnalytics from "./pages/creator/Analytics";
import CreatorSupport from "./pages/creator/Support";

const queryClient = new QueryClient();

const App = () => (
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
