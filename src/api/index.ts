/**
 * API Service Layer for Influbazzar Platform
 *
 * This file contains all API service functions for communicating with the backend.
 * Each function includes detailed backend implementation notes.
 *
 * Backend Integration Guide:
 *
 * 1. Authentication Endpoints:
 *    POST /api/auth/login
 *    POST /api/auth/signup
 *    POST /api/auth/verify-otp
 *    POST /api/auth/refresh-token
 *    POST /api/auth/logout
 *    POST /api/auth/forgot-password
 *    POST /api/auth/reset-password
 *
 * 2. User Management:
 *    GET /api/users/profile
 *    PUT /api/users/profile
 *    POST /api/users/upload-avatar
 *    GET /api/users/onboarding-status
 *    POST /api/users/complete-onboarding
 *
 * 3. Campaigns:
 *    GET /api/campaigns (with filters)
 *    GET /api/campaigns/:id
 *    POST /api/campaigns (brand only)
 *    PUT /api/campaigns/:id (brand only)
 *    DELETE /api/campaigns/:id (brand only)
 *
 * 4. Applications:
 *    POST /api/campaigns/:id/apply
 *    GET /api/applications/my-applications
 *    PUT /api/applications/:id/status
 *
 * 5. Content:
 *    POST /api/content/upload
 *    GET /api/content/my-content
 *    PUT /api/content/:id
 *
 * 6. Analytics:
 *    GET /api/analytics/dashboard
 *    GET /api/analytics/campaigns/:id
 *
 * 7. Payments:
 *    GET /api/payments/history
 *    POST /api/payments/initiate
 *    GET /api/payments/status/:id
 */

import {
  ApiResponse,
  PaginatedResponse,
  User,
  Campaign,
  Application,
  Content,
  Analytics,
  Payment,
  Notification,
} from "@/types";

// Mock API base URL - replace with actual backend URL
const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:8000/api";

/**
 * API Client Configuration
 *
 * Backend Integration Notes:
 * - Implement JWT token refresh logic
 * - Add request/response interceptors for error handling
 * - Configure CORS policies on backend
 * - Implement rate limiting
 * - Add request logging for debugging
 */
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = this.getStoredToken();
  }

  private getStoredToken(): string | null {
    try {
      return localStorage.getItem("influbazzar_token");
    } catch {
      return null;
    }
  }

  private setToken(token: string) {
    this.token = token;
    localStorage.setItem("influbazzar_token", token);
  }

  private removeToken() {
    this.token = null;
    localStorage.removeItem("influbazzar_token");
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      return data;
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
    }
  }

  // Authentication APIs
  async login(
    email: string,
    password: string,
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    // Mock implementation - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user data
    const mockUser: User = {
      id: "1",
      email,
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      role: "creator",
      isEmailVerified: true,
      isPhoneVerified: true,
      onboardingCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const token = "mock-jwt-token";
    this.setToken(token);

    return {
      success: true,
      data: { user: mockUser, token },
      message: "Login successful",
    };
  }

  async signup(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: string;
  }): Promise<ApiResponse<{ message: string }>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: { message: "OTP sent to your phone" },
      message: "Signup successful",
    };
  }

  async verifyOTP(
    phone: string,
    otp: string,
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (otp !== "1234") {
      throw new Error("Invalid OTP");
    }

    const mockUser: User = {
      id: "1",
      email: "user@example.com",
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      role: "creator",
      phone,
      isEmailVerified: true,
      isPhoneVerified: true,
      onboardingCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const token = "mock-jwt-token";
    this.setToken(token);

    return {
      success: true,
      data: { user: mockUser, token },
      message: "OTP verified successfully",
    };
  }

  async logout(): Promise<void> {
    this.removeToken();
    // Call backend logout endpoint to invalidate token
  }

  // User Management APIs
  async getProfile(): Promise<ApiResponse<User>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser: User = {
      id: "1",
      email: "creator@example.com",
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      role: "creator",
      isEmailVerified: true,
      isPhoneVerified: true,
      onboardingCompleted: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      data: mockUser,
    };
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: { ...userData } as User,
      message: "Profile updated successfully",
    };
  }

  async completeOnboarding(onboardingData: any): Promise<ApiResponse<User>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: {} as User,
      message: "Onboarding completed successfully",
    };
  }

  // Campaign APIs
  async getCampaigns(filters?: {
    category?: string;
    budget?: [number, number];
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Campaign>>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockCampaigns: Campaign[] = [
      {
        id: "1",
        title: "Summer Fashion Campaign",
        description: "Promote our latest summer collection",
        brandId: "brand1",
        brandName: "Fashion Forward",
        category: "Fashion",
        budget: { min: 10000, max: 50000, currency: "INR" },
        requirements: {
          platforms: ["instagram", "youtube"],
          contentTypes: ["post", "reel"],
          followerCount: { min: 10000 },
        },
        deliverables: [
          {
            type: "instagram_post",
            quantity: 2,
            specifications: "1080x1080 image with product showcase",
          },
        ],
        timeline: {
          applicationDeadline: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          contentDeadline: new Date(
            Date.now() + 14 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          campaignStart: new Date(
            Date.now() + 21 * 24 * 60 * 60 * 1000,
          ).toISOString(),
          campaignEnd: new Date(
            Date.now() + 35 * 24 * 60 * 60 * 1000,
          ).toISOString(),
        },
        status: "active",
        applicationsCount: 15,
        selectedCreators: [],
        tags: ["fashion", "summer", "trendy"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    return {
      success: true,
      data: {
        data: mockCampaigns,
        pagination: {
          page: 1,
          limit: 10,
          total: 1,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        },
      },
    };
  }

  async getCampaign(id: string): Promise<ApiResponse<Campaign>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Return mock campaign data
    return {
      success: true,
      data: {} as Campaign,
    };
  }

  // Application APIs
  async applyToCampaign(
    campaignId: string,
    applicationData: {
      proposedRate: number;
      message: string;
      portfolio: Array<{ url: string; platform: string; description: string }>;
    },
  ): Promise<ApiResponse<Application>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: {} as Application,
      message: "Application submitted successfully",
    };
  }

  async getMyApplications(): Promise<ApiResponse<Application[]>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: [],
    };
  }

  // Content APIs
  async getMyContent(): Promise<ApiResponse<Content[]>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: [],
    };
  }

  async uploadContent(contentData: FormData): Promise<ApiResponse<Content>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      data: {} as Content,
      message: "Content uploaded successfully",
    };
  }

  // Analytics APIs
  async getDashboardAnalytics(): Promise<ApiResponse<Analytics>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockAnalytics: Analytics = {
      period: {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        end: new Date().toISOString(),
      },
      metrics: {
        totalReach: 125000,
        totalImpressions: 450000,
        totalEngagement: 15000,
        engagementRate: 3.33,
        averageCTR: 2.1,
        topPerformingContent: [],
        platformBreakdown: [
          { platform: "instagram", reach: 75000, engagement: 9000 },
          { platform: "youtube", reach: 50000, engagement: 6000 },
        ],
        demographicInsights: {
          ageGroups: [
            { range: "18-24", percentage: 35 },
            { range: "25-34", percentage: 45 },
            { range: "35-44", percentage: 20 },
          ],
          genderSplit: { male: 40, female: 58, other: 2 },
          topLocations: [
            { location: "Mumbai", percentage: 25 },
            { location: "Delhi", percentage: 20 },
            { location: "Bangalore", percentage: 15 },
          ],
        },
      },
    };

    return {
      success: true,
      data: mockAnalytics,
    };
  }

  // Payment APIs
  async getPaymentHistory(): Promise<ApiResponse<Payment[]>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      data: [],
    };
  }

  // Notification APIs
  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      success: true,
      data: [],
    };
  }
}

// Export singleton instance
export const api = new ApiClient(API_BASE_URL);

/**
 * Backend Implementation Checklist:
 *
 * 1. Database Schema:
 *    - Users table with role-based fields
 *    - Campaigns table with requirements and timeline
 *    - Applications table linking users and campaigns
 *    - Content table for deliverables
 *    - Payments table for financial transactions
 *    - Notifications table for user communication
 *
 * 2. Authentication:
 *    - JWT token-based authentication
 *    - Phone OTP verification system
 *    - Role-based access control (RBAC)
 *    - Password hashing with bcrypt
 *
 * 3. File Upload:
 *    - Secure file upload for avatars and content
 *    - Image/video processing and optimization
 *    - CDN integration for fast delivery
 *
 * 4. Payment Integration:
 *    - Payment gateway integration (Razorpay, Stripe)
 *    - Escrow system for secure payments
 *    - Automated payout processing
 *
 * 5. Real-time Features:
 *    - WebSocket for live notifications
 *    - Real-time campaign updates
 *    - Chat system for brand-creator communication
 *
 * 6. Analytics:
 *    - Social media API integrations
 *    - Data aggregation and processing
 *    - Caching for performance
 *
 * 7. Security:
 *    - Input validation and sanitization
 *    - Rate limiting for API endpoints
 *    - HTTPS enforcement
 *    - SQL injection prevention
 */
