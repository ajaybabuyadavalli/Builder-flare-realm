import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LoadingScreen } from "./ui/loading-simple";

interface ProtectedRouteProps {
  children: any;
  allowedRoles: string[];
  redirectTo?: string;
}

/**
 * ProtectedRoute Component
 *
 * Provides role-based access control for authenticated routes.
 * This component ensures users can only access routes that match their role.
 *
 * Features:
 * - Authentication verification
 * - Role-based access control
 * - Automatic redirection to appropriate dashboards
 * - Loading state management
 *
 * Usage:
 * <ProtectedRoute allowedRoles={["brand"]}>
 *   <BrandDashboard />
 * </ProtectedRoute>
 */
const ProtectedRoute = ({ children, allowedRoles, redirectTo }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen text="Checking authentication..." />;
  }

  // Not authenticated - redirect to login with return URL
  if (!isAuthenticated || !user) {
    return (
      <Navigate
        to={redirectTo || "/login"}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // Authenticated but wrong role - redirect to appropriate dashboard
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

    // Fallback to home if role doesn't have a dashboard
    return <Navigate to="/" replace />;
  }

  // Authenticated and has correct role - render children
  return <>{children}</>;
};

export default ProtectedRoute;
