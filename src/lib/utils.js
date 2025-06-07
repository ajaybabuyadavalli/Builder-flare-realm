import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency amounts
 */
export function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format large numbers (e.g., follower counts)
 */
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

/**
 * Format dates in user-friendly format
 */
export function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date) {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  }
  return "Just now";
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[+]?[91]?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ""));
}

/**
 * Validate age (must be 16 or older)
 */
export function isValidAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1 >= 16;
  }
  return age >= 16;
}

/**
 * Generate a random ID
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Deep clone an object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Debounce function for search inputs
 */
export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Calculate engagement rate
 */
export function calculateEngagementRate(likes, comments, shares, followers) {
  if (followers === 0) return 0;
  return ((likes + comments + shares) / followers) * 100;
}

/**
 * Get platform info
 */
export function getPlatformInfo(platform) {
  const platforms = {
    instagram: { color: "#E4405F", icon: "Instagram" },
    youtube: { color: "#FF0000", icon: "Youtube" },
    tiktok: { color: "#000000", icon: "TikTok" },
    twitter: { color: "#1DA1F2", icon: "Twitter" },
    linkedin: { color: "#0077B5", icon: "Linkedin" },
  };
  return (
    platforms[platform.toLowerCase()] || {
      color: "#6B7280",
      icon: "Globe",
    }
  );
}

/**
 * Storage helpers for localStorage
 */
export const storage = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage error:", error);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Storage error:", error);
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Storage error:", error);
    }
  },
};

/**
 * URL slug generator
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
