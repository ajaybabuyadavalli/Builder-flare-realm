import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
const OnboardingProtectedRoute = ({
  children,
  allowedRoles,
  requireOnboarding = true,
}) => {
  const { isAuthenticated, user, isLoading, hasCompletedOnboarding } =
    useAuth();
  const location = useLocation();

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 w-8 h-8 mx-auto" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
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

    const userDashboard = roleDashboards[user.role];

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
