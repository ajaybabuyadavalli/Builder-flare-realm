import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, UserRole } from "@/types";
import { api } from "@/api";
import { storage } from "@/lib/utils";

/**
 * Authentication Context for Influbazzar Platform
 *
 * This context manages user authentication state, login/logout functionality,
 * and provides user data throughout the application.
 *
 * Backend Integration Notes:
 *
 * 1. JWT Token Management:
 *    - Implement secure token storage (consider HttpOnly cookies)
 *    - Add automatic token refresh logic
 *    - Handle token expiration gracefully
 *
 * 2. Session Management:
 *    - Track user sessions for security
 *    - Implement concurrent session limits
 *    - Add device management features
 *
 * 3. Security Features:
 *    - Implement account lockout after failed attempts
 *    - Add two-factor authentication support
 *    - Log security events for monitoring
 *
 * 4. User State Synchronization:
 *    - Real-time user data updates via WebSocket
 *    - Cross-tab synchronization
 *    - Handle profile updates from other devices
 */

interface AuthContextType {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Authentication actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userData: SignupData) => Promise<void>;
  verifyOTP: (phone: string, otp: string) => Promise<void>;

  // User management
  updateUser: (userData: Partial<User>) => void;
  refreshUser: () => Promise<void>;

  // Onboarding management
  hasCompletedOnboarding: () => boolean;
  completeOnboarding: (onboardingData: any) => Promise<void>;

  // Role checking utilities
  hasRole: (role: UserRole) => boolean;
  isCreator: () => boolean;
  isBrand: () => boolean;
  isAdmin: () => boolean;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Initialize authentication state on app load
   *
   * Backend Integration:
   * - Verify stored token validity
   * - Refresh user data from server
   * - Handle token refresh if needed
   */
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = storage.get("influbazzar_token");
        const storedUser = storage.get("influbazzar_user");

        if (storedToken && storedUser) {
          // Verify token with backend
          try {
            const response = await api.getProfile();
            if (response.success && response.data) {
              setUser(response.data);
              setIsAuthenticated(true);
            } else {
              // Invalid token, clear storage
              clearAuthData();
            }
          } catch (error) {
            console.error("Token verification failed:", error);
            clearAuthData();
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        clearAuthData();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  /**
   * Clear authentication data from state and storage
   */
  const clearAuthData = () => {
    setUser(null);
    setIsAuthenticated(false);
    storage.remove("influbazzar_token");
    storage.remove("influbazzar_user");
    storage.remove("influbazzar_onboarding_data");
  };

  /**
   * Login function
   *
   * Backend Integration:
   * - POST /api/auth/login
   * - Return JWT token and user data
   * - Log security events (successful/failed login attempts)
   * - Track device information for security
   */
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.login(email, password);

      if (response.success && response.data) {
        const { user: userData, token } = response.data;

        // Store authentication data
        storage.set("influbazzar_token", token);
        storage.set("influbazzar_user", userData);

        // Update state
        setUser(userData);
        setIsAuthenticated(true);

        console.log("Login successful for user:", userData.email);
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      clearAuthData();
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Signup function
   *
   * Backend Integration:
   * - POST /api/auth/signup
   * - Send OTP to phone number
   * - Store temporary signup data
   * - Implement rate limiting for signup attempts
   */
  const signup = async (userData: SignupData): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.signup(userData);

      if (response.success) {
        // Store signup data temporarily for OTP verification
        storage.set("influbazzar_signup_data", userData);
        console.log("Signup successful, OTP sent to:", userData.phone);
      } else {
        throw new Error(response.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * OTP verification function
   *
   * Backend Integration:
   * - POST /api/auth/verify-otp
   * - Complete user registration
   * - Return JWT token
   * - Clean up temporary signup data
   */
  const verifyOTP = async (phone: string, otp: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.verifyOTP(phone, otp);

      if (response.success && response.data) {
        const { user: userData, token } = response.data;

        // Store authentication data
        storage.set("influbazzar_token", token);
        storage.set("influbazzar_user", userData);

        // Clean up temporary signup data
        storage.remove("influbazzar_signup_data");

        // Update state
        setUser(userData);
        setIsAuthenticated(true);

        console.log("OTP verification successful for user:", userData.email);
      } else {
        throw new Error(response.message || "OTP verification failed");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout function
   *
   * Backend Integration:
   * - POST /api/auth/logout (invalidate token on server)
   * - Clear all user sessions
   * - Log security event
   */
  const logout = () => {
    try {
      // Call backend logout endpoint
      api.logout();

      // Clear local state and storage
      clearAuthData();

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      // Even if backend call fails, clear local data
      clearAuthData();
    }
  };

  /**
   * Update user data in state and storage
   */
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      storage.set("influbazzar_user", updatedUser);
    }
  };

  /**
   * Refresh user data from backend
   *
   * Backend Integration:
   * - GET /api/users/profile
   * - Update local user data with latest from server
   */
  const refreshUser = async (): Promise<void> => {
    if (!isAuthenticated) return;

    try {
      const response = await api.getProfile();
      if (response.success && response.data) {
        setUser(response.data);
        storage.set("influbazzar_user", response.data);
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
      // If token is invalid, logout user
      if (error instanceof Error && error.message.includes("unauthorized")) {
        logout();
      }
    }
  };

  /**
   * Check if user has completed onboarding
   *
   * Backend Integration:
   * - Check user.onboardingCompleted field from database
   * - Alternative: GET /api/users/onboarding-status
   */
  const hasCompletedOnboarding = (): boolean => {
    return user?.onboardingCompleted || false;
  };

  /**
   * Complete onboarding process
   *
   * Backend Integration:
   * - POST /api/users/complete-onboarding
   * - Update user.onboardingCompleted = true
   * - Store all onboarding data in user profile
   */
  const completeOnboarding = async (onboardingData: any): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await api.completeOnboarding(onboardingData);

      if (response.success && response.data) {
        const updatedUser = {
          ...user,
          ...response.data,
          onboardingCompleted: true,
        };
        setUser(updatedUser as User);
        storage.set("influbazzar_user", updatedUser);

        // Clear temporary onboarding data
        storage.remove("influbazzar_onboarding_data");

        console.log("Onboarding completed successfully");
      } else {
        throw new Error(response.message || "Onboarding completion failed");
      }
    } catch (error) {
      console.error("Onboarding completion error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Role checking utility functions
   */
  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const isCreator = (): boolean => hasRole("creator");
  const isBrand = (): boolean => hasRole("brand");
  const isAdmin = (): boolean => hasRole("admin");

  const contextValue: AuthContextType = {
    // State
    user,
    isAuthenticated,
    isLoading,

    // Authentication actions
    login,
    logout,
    signup,
    verifyOTP,

    // User management
    updateUser,
    refreshUser,

    // Onboarding
    hasCompletedOnboarding,
    completeOnboarding,

    // Role checking
    hasRole,
    isCreator,
    isBrand,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

/**
 * Backend Database Schema Suggestions:
 *
 * 1. users table:
 *    - id (UUID, primary key)
 *    - email (unique, indexed)
 *    - phone (unique, indexed)
 *    - password_hash (bcrypt)
 *    - role (enum: creator, brand, agency, admin)
 *    - first_name, last_name
 *    - avatar_url
 *    - is_email_verified (boolean)
 *    - is_phone_verified (boolean)
 *    - onboarding_completed (boolean)
 *    - last_login_at (timestamp)
 *    - created_at, updated_at (timestamps)
 *
 * 2. user_sessions table:
 *    - id (UUID, primary key)
 *    - user_id (foreign key to users)
 *    - token_hash (indexed)
 *    - device_info (JSON)
 *    - ip_address
 *    - expires_at (timestamp)
 *    - created_at (timestamp)
 *
 * 3. creator_profiles table:
 *    - user_id (foreign key to users, primary key)
 *    - username (unique)
 *    - bio (text)
 *    - city, state
 *    - social_handles (JSON)
 *    - follower_count (integer)
 *    - influbazzar_score (float)
 *    - content_niches (JSON array)
 *    - languages (JSON array)
 *    - rates (JSON)
 *    - preferences (JSON)
 *
 * 4. brand_profiles table:
 *    - user_id (foreign key to users, primary key)
 *    - company_name
 *    - website
 *    - industry
 *    - company_size
 *    - description (text)
 *    - verification_status (enum)
 *
 * 5. otp_verifications table:
 *    - id (UUID, primary key)
 *    - phone (indexed)
 *    - otp_code (hashed)
 *    - expires_at (timestamp)
 *    - attempts (integer)
 *    - verified (boolean)
 *    - created_at (timestamp)
 */
