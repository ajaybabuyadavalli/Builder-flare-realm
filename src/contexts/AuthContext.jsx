/**
 * AuthContext.jsx
 *
 * Purpose: Centralized authentication and user management
 *
 * Features:
 * - User authentication state management
 * - Role-based access control (RBAC)
 * - Protected route handling
 * - Token management and refresh
 *
 * Backend Integration:
 * - API endpoints: POST /auth/login, POST /auth/logout, GET /auth/me
 * - JWT token handling and refresh
 * - User profile and role fetching
 * - Session management
 */

import React, { createContext, useContext, useEffect, useState } from "react";

// Auth configuration - centralized for easy backend integration
const AUTH_CONFIG = {
  STORAGE_KEYS: {
    TOKEN: "influbazzar-token",
    REFRESH_TOKEN: "influbazzar-refresh-token",
    USER: "influbazzar-user",
  },
  ROLES: {
    CREATOR: "creator",
    BRAND: "brand",
    AGENCY: "agency",
    ADMIN: "admin",
  },
  API_ENDPOINTS: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
    ME: "/api/auth/me",
  },
};

// Mock user data for development - TODO: Replace with actual API calls
const MOCK_USERS = {
  creator: {
    id: "creator-001",
    name: "Creator User",
    username: "creatoruser",
    email: "creator@influbazzar.com",
    role: AUTH_CONFIG.ROLES.CREATOR,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    initials: "CU",
    score: 84,
    badge: "Gold Creator",
    stats: {
      totalEarnings: 45250,
      activeCampaigns: 3,
      approvalRate: 96,
      avgEngagement: 4.2,
    },
  },
  brand: {
    id: "brand-001",
    name: "Brand Manager",
    username: "brandmanager",
    email: "brand@company.com",
    role: AUTH_CONFIG.ROLES.BRAND,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
    initials: "BM",
    company: "TechCorp",
  },
};

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
  hasRole: () => false,
  canAccess: () => false,
});

/**
 * AuthProvider Component
 * Manages authentication state and provides auth context
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    initializeAuth();
  }, []);

  /**
   * Initialize authentication state
   * Checks localStorage for existing session
   */
  const initializeAuth = async () => {
    try {
      const savedToken = localStorage.getItem(AUTH_CONFIG.STORAGE_KEYS.TOKEN);
      const savedUser = localStorage.getItem(AUTH_CONFIG.STORAGE_KEYS.USER);

      if (savedToken && savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setToken(savedToken);
        setUser(parsedUser);

        // TODO: Verify token with backend
        // await verifyToken(savedToken);
      }
    } catch (error) {
      console.error("Auth initialization failed:", error);
      clearAuthData();
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Login function
   * Authenticates user and stores session data
   *
   * @param {string} email - User email
   * @param {string} password - User password
   * @param {string} role - User role (creator, brand, agency, admin)
   * @returns {Promise<boolean>} Success status
   */
  const login = async (email, password, role = "creator") => {
    try {
      setIsLoading(true);

      // TODO: Replace with actual API call
      // const response = await fetch(AUTH_CONFIG.API_ENDPOINTS.LOGIN, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password, role })
      // });

      // Mock login for development
      const mockUser = MOCK_USERS[role] || MOCK_USERS.creator;
      const mockToken = "mock-jwt-token-" + Date.now();

      // Store auth data
      localStorage.setItem(AUTH_CONFIG.STORAGE_KEYS.TOKEN, mockToken);
      localStorage.setItem(
        AUTH_CONFIG.STORAGE_KEYS.USER,
        JSON.stringify(mockUser),
      );

      setToken(mockToken);
      setUser(mockUser);

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout function
   * Clears session data and redirects to login
   */
  const logout = async () => {
    try {
      // TODO: API call to invalidate token on backend
      // await fetch(AUTH_CONFIG.API_ENDPOINTS.LOGOUT, {
      //   method: 'POST',
      //   headers: { 'Authorization': `Bearer ${token}` }
      // });

      clearAuthData();

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
      clearAuthData();
    }
  };

  /**
   * Clear authentication data
   */
  const clearAuthData = () => {
    localStorage.removeItem(AUTH_CONFIG.STORAGE_KEYS.TOKEN);
    localStorage.removeItem(AUTH_CONFIG.STORAGE_KEYS.USER);
    localStorage.removeItem(AUTH_CONFIG.STORAGE_KEYS.REFRESH_TOKEN);

    setToken(null);
    setUser(null);
  };

  /**
   * Check if user has specific role
   *
   * @param {string} role - Role to check
   * @returns {boolean} Has role
   */
  const hasRole = (role) => {
    return user?.role === role;
  };

  /**
   * Check if user can access specific resource
   *
   * @param {string} resource - Resource to check
   * @param {Array<string>} allowedRoles - Allowed roles for resource
   * @returns {boolean} Can access
   */
  const canAccess = (resource, allowedRoles = []) => {
    if (!user) return false;
    if (allowedRoles.length === 0) return true;
    return allowedRoles.includes(user.role);
  };

  /**
   * Update user profile
   *
   * @param {Object} updates - Profile updates
   */
  const updateProfile = async (updates) => {
    try {
      // TODO: API call to update profile
      // const response = await fetch('/api/user/profile', {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${token}`
      //   },
      //   body: JSON.stringify(updates)
      // });

      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem(
        AUTH_CONFIG.STORAGE_KEYS.USER,
        JSON.stringify(updatedUser),
      );

      return true;
    } catch (error) {
      console.error("Profile update failed:", error);
      return false;
    }
  };

  // Context value
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    token,
    login,
    logout,
    hasRole,
    canAccess,
    updateProfile,
    roles: AUTH_CONFIG.ROLES,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * useAuth Hook
 * Custom hook to access auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default AuthContext;
