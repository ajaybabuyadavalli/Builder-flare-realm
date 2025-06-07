// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const isValidPassword = (
  password: string,
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Phone number validation (Indian format)
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[+]?[91]?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ""));
};

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Social media handle validation
export const isValidHandle = (
  handle: string,
  platform: "instagram" | "twitter" | "youtube" | "tiktok",
): boolean => {
  const patterns = {
    instagram: /^@?[a-zA-Z0-9._]{1,30}$/,
    twitter: /^@?[a-zA-Z0-9_]{1,15}$/,
    youtube: /^@?[a-zA-Z0-9_-]{1,100}$/,
    tiktok: /^@?[a-zA-Z0-9._]{1,24}$/,
  };

  return patterns[platform].test(handle);
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, "").trim().slice(0, 1000); // Limit length
};

// Validate file upload
export const isValidImageFile = (
  file: File,
): { valid: boolean; error?: string } => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Please upload a valid image file (JPEG, PNG, or WebP)",
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: "Image size must be less than 5MB",
    };
  }

  return { valid: true };
};

// Form validation wrapper
export const validateForm = <T extends Record<string, any>>(
  data: T,
  rules: Record<keyof T, (value: any) => string | null>,
): { valid: boolean; errors: Partial<Record<keyof T, string>> } => {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const [field, validator] of Object.entries(rules)) {
    const error = validator(data[field as keyof T]);
    if (error) {
      errors[field as keyof T] = error;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Common validation rules
export const validationRules = {
  required: (value: any) => {
    if (!value || (typeof value === "string" && !value.trim())) {
      return "This field is required";
    }
    return null;
  },

  email: (value: string) => {
    if (!isValidEmail(value)) {
      return "Please enter a valid email address";
    }
    return null;
  },

  phone: (value: string) => {
    if (!isValidPhoneNumber(value)) {
      return "Please enter a valid phone number";
    }
    return null;
  },

  minLength: (min: number) => (value: string) => {
    if (value.length < min) {
      return `Must be at least ${min} characters long`;
    }
    return null;
  },

  maxLength: (max: number) => (value: string) => {
    if (value.length > max) {
      return `Must be no more than ${max} characters long`;
    }
    return null;
  },

  url: (value: string) => {
    if (value && !isValidUrl(value)) {
      return "Please enter a valid URL";
    }
    return null;
  },
};
