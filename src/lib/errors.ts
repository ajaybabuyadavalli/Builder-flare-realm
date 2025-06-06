import { AppError } from "@/types";

// Custom error classes
export class APIError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number,
    public details?: any,
  ) {
    super(message);
    this.name = "APIError";
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value?: any,
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

export class NetworkError extends Error {
  constructor(message: string = "Network connection failed") {
    super(message);
    this.name = "NetworkError";
  }
}

// Error code constants
export const ERROR_CODES = {
  NETWORK_ERROR: "NETWORK_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  NOT_FOUND: "NOT_FOUND",
  SERVER_ERROR: "SERVER_ERROR",
  RATE_LIMIT: "RATE_LIMIT",
  INVALID_INPUT: "INVALID_INPUT",
  FILE_UPLOAD_ERROR: "FILE_UPLOAD_ERROR",
} as const;

// Error message mappings
export const ERROR_MESSAGES = {
  [ERROR_CODES.NETWORK_ERROR]:
    "Unable to connect to the server. Please check your internet connection.",
  [ERROR_CODES.VALIDATION_ERROR]: "Please check your input and try again.",
  [ERROR_CODES.AUTHENTICATION_ERROR]: "Invalid credentials. Please try again.",
  [ERROR_CODES.AUTHORIZATION_ERROR]:
    "You don't have permission to perform this action.",
  [ERROR_CODES.NOT_FOUND]: "The requested resource was not found.",
  [ERROR_CODES.SERVER_ERROR]:
    "Something went wrong on our end. Please try again later.",
  [ERROR_CODES.RATE_LIMIT]:
    "Too many requests. Please wait a moment before trying again.",
  [ERROR_CODES.INVALID_INPUT]: "Invalid input provided.",
  [ERROR_CODES.FILE_UPLOAD_ERROR]: "Failed to upload file. Please try again.",
} as const;

// Error handler utility
export const handleError = (error: unknown): AppError => {
  console.error("Error caught:", error);

  // Handle API errors
  if (error instanceof APIError) {
    return {
      code: error.code,
      message: error.message,
      details: error.details,
    };
  }

  // Handle validation errors
  if (error instanceof ValidationError) {
    return {
      code: ERROR_CODES.VALIDATION_ERROR,
      message: error.message,
      details: { field: error.field, value: error.value },
    };
  }

  // Handle network errors
  if (error instanceof NetworkError) {
    return {
      code: ERROR_CODES.NETWORK_ERROR,
      message: error.message,
    };
  }

  // Handle fetch errors
  if (error instanceof TypeError && error.message.includes("fetch")) {
    return {
      code: ERROR_CODES.NETWORK_ERROR,
      message: ERROR_MESSAGES[ERROR_CODES.NETWORK_ERROR],
    };
  }

  // Handle generic errors
  if (error instanceof Error) {
    return {
      code: ERROR_CODES.SERVER_ERROR,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : ERROR_MESSAGES[ERROR_CODES.SERVER_ERROR],
      details: process.env.NODE_ENV === "development" ? error.stack : undefined,
    };
  }

  // Fallback for unknown errors
  return {
    code: ERROR_CODES.SERVER_ERROR,
    message: ERROR_MESSAGES[ERROR_CODES.SERVER_ERROR],
  };
};

// Retry mechanism for failed operations
export const withRetry = async <T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3,
  delay: number = 1000,
): Promise<T> => {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt === maxAttempts) {
        break;
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError;
};

// Safe async operation wrapper
export const safeAsync = async <T>(
  operation: () => Promise<T>,
): Promise<{ data?: T; error?: AppError }> => {
  try {
    const data = await operation();
    return { data };
  } catch (error) {
    return { error: handleError(error) };
  }
};

// Error boundary helper
export const logError = (error: Error, errorInfo?: any) => {
  console.error("Error boundary caught:", error);
  if (errorInfo) {
    console.error("Error info:", errorInfo);
  }

  // In production, you would send this to an error tracking service
  if (process.env.NODE_ENV === "production") {
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }
};

// Format error for user display
export const formatErrorMessage = (error: AppError): string => {
  const baseMessage =
    ERROR_MESSAGES[error.code as keyof typeof ERROR_MESSAGES] || error.message;

  if (process.env.NODE_ENV === "development" && error.details) {
    return `${baseMessage}\n\nDetails: ${JSON.stringify(error.details, null, 2)}`;
  }

  return baseMessage;
};
