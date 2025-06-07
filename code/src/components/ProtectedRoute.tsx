import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingScreen } from "@/components/ui/loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
  redirectTo,
}) => {
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
