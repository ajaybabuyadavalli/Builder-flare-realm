import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { UserRole } from "@/types";
import { Loader2 } from "lucide-react";

/**
 * ProtectedRoute Component
 *
 * Provides role-based access control for authenticated routes.
 * This component ensures users can only access routes that match their role
 * and redirects them appropriately based on authentication status.
 *
 * Backend Integration Notes:
 * - Implement server-side route protection as well
 * - Add API endpoint authorization checks
 * - Log unauthorized access attempts for security monitoring
 * - Consider implementing IP-based restrictions for admin routes
 */

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
  requireAuth?: boolean;
}

const LoadingSpinner = ({ message = "Loading..." }: { message?: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  </div>
);

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = [],
  redirectTo,
  requireAuth = true,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner message="Verifying access..." />;
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return (
      <Navigate
        to={redirectTo || "/login"}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // If user is authenticated but roles are specified and user doesn't have required role
  if (
    isAuthenticated &&
    allowedRoles.length > 0 &&
    user &&
    !allowedRoles.includes(user.role)
  ) {
    // Redirect to appropriate dashboard based on user role
    const roleDashboards: Record<UserRole, string> = {
      creator: "/creator/dashboard",
      brand: "/brand/dashboard",
      agency: "/agency/dashboard",
      admin: "/admin/dashboard",
    };

    const userDashboard = roleDashboards[user.role];

    if (userDashboard && location.pathname !== userDashboard) {
      return <Navigate to={userDashboard} replace />;
    }

    // If no specific dashboard exists, redirect to home
    return <Navigate to="/" replace />;
  }

  // All checks passed, render the protected content
  return <>{children}</>;
};

/**
 * OnboardingProtectedRoute Component
 *
 * Enhanced protection that includes onboarding completion checks.
 * This component ensures users complete their onboarding process before
 * accessing main application features.
 *
 * Backend Integration Notes:
 * - Track onboarding completion in user profile
 * - Implement onboarding step validation
 * - Store onboarding progress for resumption
 * - Add onboarding analytics for optimization
 */

interface OnboardingProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  requireOnboarding?: boolean;
  allowIncompleteOnboarding?: boolean;
}

export const OnboardingProtectedRoute: React.FC<
  OnboardingProtectedRouteProps
> = ({
  children,
  allowedRoles = [],
  requireOnboarding = true,
  allowIncompleteOnboarding = false,
}) => {
  const { isAuthenticated, user, isLoading, hasCompletedOnboarding } =
    useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner message="Checking authentication..." />;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Check role permissions
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    const roleDashboards: Record<UserRole, string> = {
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

  // Handle onboarding requirements
  if (requireOnboarding) {
    const onboardingCompleted = hasCompletedOnboarding();

    // If onboarding is not completed and this route doesn't allow incomplete onboarding
    if (!onboardingCompleted && !allowIncompleteOnboarding) {
      // Allow access to onboarding page itself
      if (location.pathname === "/onboarding") {
        return <>{children}</>;
      }

      // Redirect to onboarding
      return <Navigate to="/onboarding" replace />;
    }

    // If trying to access onboarding but already completed
    if (onboardingCompleted && location.pathname === "/onboarding") {
      const dashboardPath =
        user.role === "creator" ? "/creator/dashboard" : "/brand/dashboard";
      return <Navigate to={dashboardPath} replace />;
    }
  }

  // All checks passed, render the protected content
  return <>{children}</>;
};

/**
 * Public Route Component
 *
 * For routes that should only be accessible to non-authenticated users
 * (e.g., login, signup pages). Redirects authenticated users to their dashboard.
 */

interface PublicRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  redirectTo,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner message="Loading..." />;
  }

  // If user is authenticated, redirect to appropriate dashboard
  if (isAuthenticated && user) {
    const roleDashboards: Record<UserRole, string> = {
      creator: "/creator/dashboard",
      brand: "/brand/dashboard",
      agency: "/agency/dashboard",
      admin: "/admin/dashboard",
    };

    const userDashboard = roleDashboards[user.role];
    const destination = redirectTo || userDashboard || "/";

    return <Navigate to={destination} replace />;
  }

  // User is not authenticated, show public content
  return <>{children}</>;
};

/**
 * Admin Route Component
 *
 * Special protection for admin-only routes with additional security checks
 */

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner message="Verifying admin access..." />;
  }

  if (!isAuthenticated || !user || user.role !== "admin") {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname, message: "Admin access required" }}
        replace
      />
    );
  }

  return <>{children}</>;
};

/**
 * Backend Security Implementation Notes:
 *
 * 1. Route Protection:
 *    - Implement middleware for API route protection
 *    - Validate JWT tokens on every protected endpoint
 *    - Check user roles and permissions server-side
 *    - Rate limit sensitive endpoints
 *
 * 2. Session Management:
 *    - Track active user sessions
 *    - Implement session timeout and renewal
 *    - Log security events (failed access attempts)
 *    - Monitor for suspicious activity patterns
 *
 * 3. Role-Based Access Control (RBAC):
 *    - Define granular permissions for each role
 *    - Implement permission inheritance and hierarchies
 *    - Store permissions in database for flexibility
 *    - Cache permissions for performance
 *
 * 4. Admin Security:
 *    - Require additional authentication factors for admin routes
 *    - Implement IP whitelisting for admin access
 *    - Log all admin actions for audit trails
 *    - Set up alerts for unusual admin activity
 *
 * 5. API Security Headers:
 *    - Content-Security-Policy
 *    - X-Frame-Options
 *    - X-Content-Type-Options
 *    - Strict-Transport-Security
 */
