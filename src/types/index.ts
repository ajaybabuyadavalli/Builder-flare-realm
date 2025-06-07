/**
 * Global Type Definitions for Influbazzar Platform
 *
 * Backend Integration Notes:
 * - These types should match your backend API response schemas
 * - Consider using tools like @apidevtools/swagger-typescript-api for auto-generation
 * - Implement proper validation with libraries like Zod or Yup
 */

export type UserRole = "creator" | "brand" | "agency" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  onboardingCompleted: boolean;
  createdAt: string;
  updatedAt: string;

  // Creator-specific fields
  username?: string;
  bio?: string;
  city?: string;
  state?: string;
  instagramHandle?: string;
  youtubeChannel?: string;
  tiktokUsername?: string;
  followerCount?: number;
  influbazzarScore?: number;
  contentNiches?: string[];
  languages?: string[];
  averagePostsPerWeek?: number;
  typicalVideoLength?: string;
  preferredCampaignTypes?: string[];
  minimumPayout?: number;
  openToBarter?: boolean;
  openToLiveCollabs?: boolean;
  paymentMethod?: string;
  gstNumber?: string;
  taxResidencyCountry?: string;
  funFact?: string;
  inspiringInfluencer?: string;

  // Brand-specific fields
  company?: string;
  website?: string;
  industry?: string;
  companySize?: string;
  description?: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  brandId: string;
  brandName: string;
  brandLogo?: string;
  category: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  requirements: {
    followerCount?: {
      min: number;
      max?: number;
    };
    platforms: string[];
    demographics?: {
      ageRange?: [number, number];
      genders?: string[];
      locations?: string[];
    };
    contentTypes: string[];
  };
  deliverables: Array<{
    type: string;
    quantity: number;
    specifications: string;
  }>;
  timeline: {
    applicationDeadline: string;
    contentDeadline: string;
    campaignStart: string;
    campaignEnd: string;
  };
  status: "draft" | "active" | "closed" | "completed" | "cancelled";
  applicationsCount: number;
  selectedCreators: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  id: string;
  campaignId: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar?: string;
  status: "pending" | "approved" | "rejected" | "withdrawn";
  proposedRate: number;
  message: string;
  portfolio: Array<{
    url: string;
    platform: string;
    description: string;
  }>;
  submittedAt: string;
  reviewedAt?: string;
  reviewNotes?: string;
}

export interface Content {
  id: string;
  campaignId: string;
  creatorId: string;
  type: "post" | "story" | "reel" | "video" | "blog";
  platform: string;
  url?: string;
  caption?: string;
  mediaUrls: string[];
  metrics: {
    views?: number;
    likes?: number;
    comments?: number;
    shares?: number;
    saves?: number;
    engagementRate?: number;
  };
  status:
    | "draft"
    | "submitted"
    | "approved"
    | "revision_requested"
    | "published";
  feedback?: string;
  submittedAt?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  campaignId: string;
  creatorId: string;
  brandId: string;
  amount: number;
  currency: string;
  status: "pending" | "processing" | "completed" | "failed" | "refunded";
  method: "upi" | "bank_transfer" | "paypal" | "wallet";
  transactionId?: string;
  processingFee: number;
  netAmount: number;
  scheduledAt?: string;
  completedAt?: string;
  failureReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Analytics {
  period: {
    start: string;
    end: string;
  };
  metrics: {
    totalReach: number;
    totalImpressions: number;
    totalEngagement: number;
    engagementRate: number;
    averageCTR: number;
    topPerformingContent: Array<{
      contentId: string;
      platform: string;
      engagementRate: number;
    }>;
    platformBreakdown: Array<{
      platform: string;
      reach: number;
      engagement: number;
    }>;
    demographicInsights: {
      ageGroups: Array<{
        range: string;
        percentage: number;
      }>;
      genderSplit: {
        male: number;
        female: number;
        other: number;
      };
      topLocations: Array<{
        location: string;
        percentage: number;
      }>;
    };
  };
}

export interface Notification {
  id: string;
  userId: string;
  type:
    | "campaign_invite"
    | "application_update"
    | "payment_received"
    | "content_feedback"
    | "system";
  title: string;
  message: string;
  actionUrl?: string;
  isRead: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: string;
  termsAccepted: boolean;
}

export interface OnboardingStep1 {
  username: string;
  profilePicture?: File;
  bio: string;
  city: string;
  state: string;
}

export interface OnboardingStep2 {
  instagramHandle?: string;
  youtubeChannel?: string;
  tiktokUsername?: string;
  followerCount: number;
}

export interface OnboardingStep3 {
  contentNiches: string[];
  languages: string[];
  averagePostsPerWeek: number;
  typicalVideoLength: string;
}

export interface OnboardingStep4 {
  preferredCampaignTypes: string[];
  minimumPayout: number;
  openToBarter: boolean;
  openToLiveCollabs: boolean;
}

export interface OnboardingStep5 {
  paymentMethod: string;
  gstNumber?: string;
  taxResidencyCountry: string;
}

export interface OnboardingStep6 {
  funFact?: string;
  inspiringInfluencer?: string;
  termsAccepted: boolean;
}
