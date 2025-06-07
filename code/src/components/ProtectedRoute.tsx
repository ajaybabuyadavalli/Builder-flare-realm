import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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

    const userDashboard = roleDashboards[user.role];

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
