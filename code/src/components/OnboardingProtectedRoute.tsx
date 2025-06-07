import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingScreen } from "./ui/loading-simple";

interface OnboardingProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  requireOnboarding?: boolean;
}

/**
 * OnboardingProtectedRoute Component
 *
 * Enhanced protection that includes onboarding completion checks.
 * This component ensures users complete their onboarding before accessing
 * main application features.
 *
 * Features:
 * - All ProtectedRoute features
 * - Onboarding completion verification
 * - Automatic redirection to onboarding flow
 * - Flexible onboarding requirement control
 *
 * Backend Integration Notes:
 * - onboarding_completed field should be stored in user profile {{Dynamic}}
 * - Track onboarding progress in separate onboarding_steps table {{Dynamic}}
 * - API endpoint: GET /api/user/onboarding-status {{Dynamic}}
 *
 * Usage:
 * <OnboardingProtectedRoute allowedRoles={["creator"]} requireOnboarding={true}>
 *   <CreatorDashboard />
 * </OnboardingProtectedRoute>
 */
const OnboardingProtectedRoute: React.FC<OnboardingProtectedRouteProps> = ({
  children,
  allowedRoles,
  requireOnboarding = true,
}) => {
  const { isAuthenticated, user, isLoading, hasCompletedOnboarding } =
    useAuth();
  const location = useLocation();

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen text="Checking authentication..." />;
  }

  // Not authenticated - redirect to login with return URL
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Wrong role - redirect to appropriate dashboard
  if (!allowedRoles.includes(user.role)) {
    const roleDashboards = {
      creator: "/creator/dashboard",
      brand: "/brand/dashboard",
      agency: "/agency/dashboard",
      admin: "/admin/dashboard",
    };

    const userDashboard =
      roleDashboards[user.role as keyof typeof roleDashboards];

    if (userDashboard) {
      return <Navigate to={userDashboard} replace />;
    }

    return <Navigate to="/" replace />;
  }

  // If onboarding is required and not completed, redirect to onboarding
  if (requireOnboarding && !hasCompletedOnboarding(user.email)) {
    // Allow access to onboarding page itself
    if (location.pathname === "/onboarding") {
      return <>{children}</>;
    }

    return <Navigate to="/onboarding" replace />;
  }

  // If trying to access onboarding but already completed, redirect to dashboard
  if (
    location.pathname === "/onboarding" &&
    hasCompletedOnboarding(user.email)
  ) {
    const dashboardPath =
      user.role === "creator" ? "/creator/dashboard" : "/brand/dashboard";
    return <Navigate to={dashboardPath} replace />;
  }

  // All checks passed - render children
  return <>{children}</>;
};

export default OnboardingProtectedRoute;
