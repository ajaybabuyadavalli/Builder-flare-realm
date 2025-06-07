/**
 * Authentication Context Provider
 *
 * This context manages the global authentication state for the application.
 * It handles user login, logout, session persistence, and role-based access control.
 *
 * Key Features:
 * - JWT token management (ready for backend integration)
 * - User session persistence across browser sessions
 * - Role-based access control (Creator, Brand, Agency, Admin)
 * - Onboarding flow tracking
 * - Auto-logout on token expiration
 *
 * Backend Integration Points:
 * {{Dynamic}} - Replace demo authentication with real API calls
 * {{Dynamic}} - JWT token refresh mechanism
 * {{Dynamic}} - User profile data fetching
 * {{Dynamic}} - Role permissions from backend
 *
 * API Endpoints Expected:
 * - POST /api/auth/login
 * - POST /api/auth/logout
 * - POST /api/auth/refresh
 * - GET /api/auth/me
 * - POST /api/auth/verify-email
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// ===== TYPE DEFINITIONS =====

/**
 * User Interface Definition
 *
 * Represents the authenticated user object
 * {{Dynamic}} - Extend this interface based on your backend user model
 */
interface User {
  id: string; // Unique user identifier from backend
  name: string; // User's display name
  email: string; // User's email address (unique)
  role: UserRole; // User's role for access control
  avatar?: string; // Profile picture URL (optional)
  isEmailVerified: boolean; // Email verification status

  // Creator-specific fields
  followers?: string; // Follower count (e.g., "45K")
  influbazzarScore?: number; // Platform-specific scoring (0-100)

  // Brand-specific fields
  company?: string; // Company name for brand users
  website?: string; // Company website URL
  industry?: string; // Business industry category
  companySize?: string; // Company size range

  // Metadata
  createdAt: string; // Account creation timestamp
  lastLoginAt?: string; // Last login timestamp
  onboardingCompleted: boolean; // Onboarding completion status
}

/**
 * User Role Enumeration
 *
 * Defines the different types of users in the system
 * {{Dynamic}} - Add new roles as needed (e.g., 'moderator', 'super-admin')
 */
type UserRole = "creator" | "brand" | "agency" | "admin";

/**
 * Authentication Context Interface
 *
 * Defines all authentication-related functions and state
 */
interface AuthContextType {
  // State
  user: User | null; // Current authenticated user
  isAuthenticated: boolean; // Authentication status
  isLoading: boolean; // Loading state for auth operations
  token: string | null; // JWT access token

  // Actions
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<RegisterResult>;
  updateUser: (userData: Partial<User>) => void;
  refreshToken: () => Promise<boolean>;

  // Utility functions
  hasCompletedOnboarding: (userEmail: string) => boolean;
  hasPermission: (permission: string) => boolean;
  isTokenExpired: () => boolean;
}

/**
 * Login Result Interface
 *
 * Standardized response structure for login operations
 */
interface LoginResult {
  success: boolean;
  user?: User;
  token?: string;
  refreshToken?: string;
  error?: string;
  requiresEmailVerification?: boolean;
  requiresOnboarding?: boolean;
}

/**
 * Registration Data Interface
 *
 * Data structure for user registration
 */
interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dateOfBirth: string;
  role: UserRole;
  agreeToTerms: boolean;
}

/**
 * Registration Result Interface
 *
 * Standardized response structure for registration operations
 */
interface RegisterResult {
  success: boolean;
  user?: User;
  error?: string;
  requiresEmailVerification?: boolean;
}

// ===== CONTEXT CREATION =====

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Authentication Hook
 *
 * Custom hook to access authentication context
 * Throws error if used outside AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ===== DEMO DATA =====
/**
 * Demo Users Database
 *
 * {{Dynamic}} - Remove this in production and replace with real API calls
 * This is used for development and testing purposes only
 */
const demoUsers: Record<string, User> = {
  "creator@demo.com": {
    id: "creator-001",
    name: "Ajay Kumar",
    email: "creator@demo.com",
    role: "creator",
    avatar: "/api/placeholder/100/100",
    followers: "45K",
    influbazzarScore: 84,
    isEmailVerified: true,
    createdAt: "2024-01-15T10:30:00Z",
    lastLoginAt: "2024-01-20T09:15:00Z",
    onboardingCompleted: true,
  },
  "brand@demo.com": {
    id: "brand-001",
    name: "Srinivas Reddy",
    email: "brand@demo.com",
    role: "brand",
    avatar: "/api/placeholder/100/100",
    company: "GlowCo Beauty",
    website: "https://glowco.in",
    industry: "Beauty & Skincare",
    companySize: "50-100",
    isEmailVerified: true,
    createdAt: "2024-01-10T14:20:00Z",
    lastLoginAt: "2024-01-20T11:45:00Z",
    onboardingCompleted: true,
  },
  "agency@demo.com": {
    id: "agency-001",
    name: "Raj Patel",
    email: "agency@demo.com",
    role: "agency",
    avatar: "/api/placeholder/100/100",
    company: "Creative Minds Agency",
    website: "https://creativeminds.co",
    industry: "Marketing Agency",
    companySize: "20-50",
    isEmailVerified: true,
    createdAt: "2024-01-05T16:00:00Z",
    lastLoginAt: "2024-01-19T13:30:00Z",
    onboardingCompleted: true,
  },
};

// ===== PROVIDER COMPONENT =====

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 *
 * Wraps the application and provides authentication context to all child components
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // ===== STATE MANAGEMENT =====
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  // ===== STORAGE KEYS =====
  const STORAGE_KEYS = {
    USER: "influbazzar_user",
    TOKEN: "influbazzar_token",
    REFRESH_TOKEN: "influbazzar_refresh_token",
    AUTHENTICATED: "influbazzar_authenticated",
  } as const;

  // ===== INITIALIZATION =====

  /**
   * Initialize Authentication State
   *
   * Checks for existing authentication data in localStorage
   * and restores user session if valid
   */
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setIsLoading(true);

        // Check for stored authentication data
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
        const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
        const storedAuth = localStorage.getItem(STORAGE_KEYS.AUTHENTICATED);

        if (storedUser && storedToken && storedAuth === "true") {
          const userData = JSON.parse(storedUser);

          // {{Dynamic}} - In production, verify token with backend
          // const isValidToken = await verifyTokenWithBackend(storedToken);

          // For demo purposes, assume token is valid
          setUser(userData);
          setToken(storedToken);
          setIsAuthenticated(true);

          console.log("🔐 User session restored:", userData.email);
        }
      } catch (error) {
        console.error("❌ Error initializing auth:", error);
        // Clear invalid stored data
        clearStoredAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // ===== UTILITY FUNCTIONS =====

  /**
   * Clear Stored Authentication Data
   *
   * Removes all authentication-related data from localStorage
   */
  const clearStoredAuthData = () => {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  };

  /**
   * Store Authentication Data
   *
   * Saves authentication data to localStorage for session persistence
   */
  const storeAuthData = (
    userData: User,
    accessToken: string,
    refreshToken?: string,
  ) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    localStorage.setItem(STORAGE_KEYS.TOKEN, accessToken);
    localStorage.setItem(STORAGE_KEYS.AUTHENTICATED, "true");

    if (refreshToken) {
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
    }
  };

  // ===== AUTHENTICATION FUNCTIONS =====

  /**
   * Login Function
   *
   * Authenticates user with email and password
   * {{Dynamic}} - Replace with real API call to your backend
   *
   * Backend API Call:
   * POST /api/auth/login
   * Body: { email, password }
   * Response: { user, accessToken, refreshToken }
   */
  const login = async (
    email: string,
    password: string,
  ): Promise<LoginResult> => {
    try {
      setIsLoading(true);

      // {{Dynamic}} - Replace with real API call
      console.log("🔐 Attempting login for:", email);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Demo authentication logic
      const demoUser = demoUsers[email];

      if (demoUser && password === "password123") {
        const accessToken = `demo_token_${Date.now()}`;
        const refreshToken = `demo_refresh_${Date.now()}`;

        // Update user with current login time
        const updatedUser = {
          ...demoUser,
          lastLoginAt: new Date().toISOString(),
        };

        // Update state
        setUser(updatedUser);
        setToken(accessToken);
        setIsAuthenticated(true);

        // Persist to localStorage
        storeAuthData(updatedUser, accessToken, refreshToken);

        console.log("✅ Login successful for:", email);

        return {
          success: true,
          user: updatedUser,
          token: accessToken,
          refreshToken: refreshToken,
          requiresOnboarding: !updatedUser.onboardingCompleted,
        };
      }

      console.log("❌ Login failed: Invalid credentials");
      return {
        success: false,
        error: "Invalid email or password",
      };
    } catch (error) {
      console.error("❌ Login error:", error);
      return {
        success: false,
        error: "An unexpected error occurred during login",
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Registration Function
   *
   * Creates new user account
   * {{Dynamic}} - Replace with real API call to your backend
   *
   * Backend API Call:
   * POST /api/auth/register
   * Body: RegisterData
   * Response: { user, requiresEmailVerification }
   */
  const register = async (userData: RegisterData): Promise<RegisterResult> => {
    try {
      setIsLoading(true);

      console.log("📝 Attempting registration for:", userData.email);

      // {{Dynamic}} - Replace with real API call
      // const response = await api.post('/api/auth/register', userData);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Demo registration logic
      if (demoUsers[userData.email]) {
        return {
          success: false,
          error: "Email already registered",
        };
      }

      // Create new user object
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: userData.role,
        isEmailVerified: false, // Requires email verification
        createdAt: new Date().toISOString(),
        onboardingCompleted: false,
      };

      console.log("✅ Registration successful for:", userData.email);

      return {
        success: true,
        user: newUser,
        requiresEmailVerification: true,
      };
    } catch (error) {
      console.error("❌ Registration error:", error);
      return {
        success: false,
        error: "An unexpected error occurred during registration",
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout Function
   *
   * Clears user session and authentication data
   * {{Dynamic}} - Should notify backend to invalidate tokens
   */
  const logout = () => {
    console.log("🚪 Logging out user:", user?.email);

    // {{Dynamic}} - Call backend to invalidate tokens
    // await api.post('/api/auth/logout', { token });

    // Clear state
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);

    // Clear stored data
    clearStoredAuthData();

    console.log("✅ User logged out successfully");
  };

  /**
   * Update User Function
   *
   * Updates user profile data
   * {{Dynamic}} - Should sync with backend user profile
   */
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);

      // Update localStorage
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUser));

      // {{Dynamic}} - Sync with backend
      // await api.patch('/api/users/me', userData);

      console.log("👤 User profile updated:", Object.keys(userData));
    }
  };

  /**
   * Token Refresh Function
   *
   * Refreshes expired access tokens using refresh token
   * {{Dynamic}} - Implement with your backend token refresh endpoint
   */
  const refreshToken = async (): Promise<boolean> => {
    try {
      const storedRefreshToken = localStorage.getItem(
        STORAGE_KEYS.REFRESH_TOKEN,
      );

      if (!storedRefreshToken) {
        return false;
      }

      // {{Dynamic}} - Call backend refresh endpoint
      // const response = await api.post('/api/auth/refresh', { refreshToken: storedRefreshToken });

      // Demo implementation
      const newAccessToken = `refreshed_token_${Date.now()}`;
      setToken(newAccessToken);
      localStorage.setItem(STORAGE_KEYS.TOKEN, newAccessToken);

      return true;
    } catch (error) {
      console.error("❌ Token refresh failed:", error);
      logout(); // Force logout on refresh failure
      return false;
    }
  };

  // ===== UTILITY FUNCTIONS =====

  /**
   * Check Onboarding Completion
   *
   * Determines if a user has completed the onboarding process
   */
  const hasCompletedOnboarding = (userEmail: string): boolean => {
    return localStorage.getItem(`onboarding_${userEmail}`) === "completed";
  };

  /**
   * Permission Check Function
   *
   * Checks if current user has specific permission
   * {{Dynamic}} - Implement with role-based permissions from backend
   */
  const hasPermission = (permission: string): boolean => {
    if (!user) return false;

    // {{Dynamic}} - Replace with real permission system
    const rolePermissions: Record<UserRole, string[]> = {
      creator: ["view_campaigns", "apply_campaigns", "upload_content"],
      brand: ["create_campaigns", "view_creators", "manage_payments"],
      agency: ["manage_creators", "create_campaigns", "view_analytics"],
      admin: ["*"], // All permissions
    };

    const userPermissions = rolePermissions[user.role] || [];
    return (
      userPermissions.includes("*") || userPermissions.includes(permission)
    );
  };

  /**
   * Token Expiration Check
   *
   * Checks if the current access token is expired
   * {{Dynamic}} - Implement JWT token validation
   */
  const isTokenExpired = (): boolean => {
    if (!token) return true;

    // {{Dynamic}} - Implement JWT token expiration check
    // const decoded = jwt.decode(token);
    // return decoded.exp < Date.now() / 1000;

    // Demo implementation - tokens expire after 1 hour
    const tokenAge = Date.now() - parseInt(token.split("_")[2] || "0");
    return tokenAge > 3600000; // 1 hour in milliseconds
  };

  // ===== CONTEXT VALUE =====

  /**
   * Context Value Object
   *
   * All authentication state and functions provided to child components
   */
  const contextValue: AuthContextType = {
    // State
    user,
    isAuthenticated,
    isLoading,
    token,

    // Actions
    login,
    logout,
    register,
    updateUser,
    refreshToken,

    // Utilities
    hasCompletedOnboarding,
    hasPermission,
    isTokenExpired,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
