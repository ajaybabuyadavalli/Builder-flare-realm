// User roles
export type UserRole = "creator" | "brand" | "agency" | "admin";

// Campaign types
export interface Campaign {
  id: string | number;
  title: string;
  description: string;
  brand: string;
  budget: number;
  type: "paid" | "barter" | "collaboration";
  timeline: string;
  platform: string[];
  niche: string;
  followers: {
    min: number;
    max: number;
  };
  applications: number;
  requirements: string[];
  deliverables: string[];
  featured: boolean;
  trending: boolean;
  eligible?: boolean;
}

// Creator profile
export interface Creator {
  id: string;
  name: string;
  avatar: string;
  followers: {
    instagram?: number;
    youtube?: number;
    tiktok?: number;
    total: number;
  };
  engagement: number;
  category: string[];
  languages: string[];
  location: string;
  verified: boolean;
  influbazzarScore: number;
}

// Brand profile
export interface Brand {
  id: string;
  name: string;
  logo: string;
  industry: string;
  campaigns: number;
  rating: number;
  description: string;
}

// Campaign status
export type CampaignStatus =
  | "applied"
  | "approved"
  | "submitted"
  | "paid"
  | "rejected"
  | "in-progress";

// Notification types
export interface Notification {
  id: string | number;
  type: "success" | "info" | "warning" | "error" | "award";
  title: string;
  message: string;
  timestamp: Date | string;
  read: boolean;
  campaign?: string;
  brand?: string;
}

// Earnings data
export interface EarningsData {
  total: number;
  monthly: number;
  pending: number;
  campaigns: number;
  averagePerCampaign: number;
}

// Analytics data
export interface AnalyticsData {
  reach: number;
  engagement: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
}

// API response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
  error?: string;
}

// Form state types
export interface FormState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

// Filter options
export interface FilterOptions {
  search: string;
  category: string;
  platform: string;
  type: string;
  dateRange: string;
  status: string;
}

// Theme types
export type Theme = "light" | "dark" | "system";

// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

// Authentication types
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  verified: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: UserRole;
  terms: boolean;
  additionalInfo?: Record<string, any>;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}
