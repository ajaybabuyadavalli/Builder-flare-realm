import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
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

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
