import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Eye, EyeOff, ArrowLeft, Users, Building } from "lucide-react";
import { toast } from "sonner";
import { isValidEmail, isValidPhone, isValidAge } from "@/lib/utils";

/**
 * Signup Page Component
 *
 * Handles new user registration for both creators and brands.
 * Includes role selection, form validation, and OTP verification flow.
 *
 * Backend Integration Notes:
 * - POST /api/auth/signup
 * - Implement duplicate email/phone checking
 * - Send OTP via SMS/WhatsApp
 * - Store temporary user data for verification
 * - Add referral code tracking
 * - Implement terms and privacy policy versioning
 */

interface FormData {
  role: "creator" | "brand" | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  companyName?: string;
  termsAccepted: boolean;
  marketingOptIn: boolean;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const [step, setStep] = useState<"role" | "details">("role");
  const [formData, setFormData] = useState<FormData>({
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    companyName: "",
    termsAccepted: false,
    marketingOptIn: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Indian phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else if (!isValidAge(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "You must be at least 16 years old";
    }

    if (formData.role === "brand" && !formData.companyName?.trim()) {
      newErrors.companyName = "Company name is required for brands";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Please accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoleSelect = (role: "creator" | "brand") => {
    setFormData((prev) => ({ ...prev, role }));
    setErrors({});
    setStep("details");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) {
      return;
    }

    try {
      await signup({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        phone: formData.phone.replace(/\s+/g, ""),
        dateOfBirth: formData.dateOfBirth,
      });

      toast.success("Account created! Please verify your phone number.");

      // Navigate to OTP verification with phone number
      navigate("/verify-otp", {
        state: {
          phone: formData.phone,
          email: formData.email,
        },
      });
    } catch (error) {
      console.error("Signup failed:", error);

      if (error instanceof Error) {
        if (error.message.includes("Email already exists")) {
          setErrors({ email: "An account with this email already exists" });
        } else if (error.message.includes("Phone already exists")) {
          setErrors({
            phone: "An account with this phone number already exists",
          });
        } else {
          setErrors({
            general: error.message || "Signup failed. Please try again.",
          });
        }
      } else {
        setErrors({
          general: "An unexpected error occurred. Please try again.",
        });
      }

      toast.error("Signup failed. Please check your information.");
    }
  };

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Join Influbazzar</h2>
        <p className="text-muted-foreground">
          Choose how you want to use our platform
        </p>
      </div>

      <div className="grid gap-4">
        <Card
          className={`cursor-pointer border-2 transition-all hover:shadow-md ${
            formData.role === "creator"
              ? "border-primary bg-primary/5"
              : "border-border"
          }`}
          onClick={() => handleRoleSelect("creator")}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I'm a Creator</h3>
                <p className="text-muted-foreground text-sm">
                  Influencer, content creator, or social media personality
                  looking for brand partnerships
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`cursor-pointer border-2 transition-all hover:shadow-md ${
            formData.role === "brand"
              ? "border-primary bg-primary/5"
              : "border-border"
          }`}
          onClick={() => handleRoleSelect("brand")}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I'm a Brand</h3>
                <p className="text-muted-foreground text-sm">
                  Business or marketing agency looking to collaborate with
                  creators
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {errors.role && (
        <Alert className="border-destructive">
          <AlertDescription className="text-destructive">
            {errors.role}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );

  const renderDetailsForm = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          Create your {formData.role} account
        </h2>
        <p className="text-muted-foreground">
          Fill in your details to get started
        </p>
      </div>

      {errors.general && (
        <Alert className="border-destructive">
          <AlertDescription className="text-destructive">
            {errors.general}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {errors.lastName && (
              <p className="text-sm text-destructive">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "border-destructive" : ""}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? "border-destructive" : ""}
            disabled={isLoading}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="text-sm font-medium">
            Date of Birth *
          </label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={errors.dateOfBirth ? "border-destructive" : ""}
            disabled={isLoading}
            max={
              new Date(Date.now() - 16 * 365 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0]
            }
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-destructive">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Company Name (for brands) */}
        {formData.role === "brand" && (
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium">
              Company Name *
            </label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Acme Inc."
              value={formData.companyName}
              onChange={handleInputChange}
              className={errors.companyName ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {errors.companyName && (
              <p className="text-sm text-destructive">{errors.companyName}</p>
            )}
          </div>
        )}

        {/* Password Fields */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password *
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleInputChange}
                className={
                  errors.password ? "border-destructive pr-10" : "pr-10"
                }
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password *
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={
                  errors.confirmPassword ? "border-destructive pr-10" : "pr-10"
                }
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Terms and Marketing */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
              disabled={isLoading}
            />
            <label
              htmlFor="termsAccepted"
              className="text-sm text-muted-foreground"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              *
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-sm text-destructive">{errors.termsAccepted}</p>
          )}

          <div className="flex items-start space-x-2">
            <input
              id="marketingOptIn"
              name="marketingOptIn"
              type="checkbox"
              checked={formData.marketingOptIn}
              onChange={handleInputChange}
              className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
              disabled={isLoading}
            />
            <label
              htmlFor="marketingOptIn"
              className="text-sm text-muted-foreground"
            >
              Send me updates about new features and opportunities
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Navigation */}
        <div className="mb-6">
          {step === "details" ? (
            <button
              onClick={() => setStep("role")}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              disabled={isLoading}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to role selection
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          )}
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  I
                </span>
              </div>
              <span className="font-bold text-xl">Influbazzar</span>
            </div>
          </CardHeader>

          <CardContent>
            {step === "role" ? renderRoleSelection() : renderDetailsForm()}

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
