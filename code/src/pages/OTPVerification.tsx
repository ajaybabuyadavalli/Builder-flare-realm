import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RippleCard } from "@/components/ui/ripple-card";
import { useToast } from "@/hooks/use-toast";
import NavbarDynamic from "@/components/NavbarDynamic";
import { Footer } from "@/components/Footer";
import {
  Phone,
  Shield,
  RefreshCw,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [signupData, setSignupData] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Get signup data from localStorage
    const pendingSignup = localStorage.getItem("pendingSignup");
    if (!pendingSignup) {
      navigate("/signup");
      return;
    }

    setSignupData(JSON.parse(pendingSignup));

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 4-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);

      if (otp === "1234") {
        // OTP is correct
        toast({
          title: "Phone Verified! ✅",
          description: "Your account has been created successfully.",
        });

        // Store credentials for auto-fill
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify({
            email: signupData.email,
            password: signupData.password,
          }),
        );

        // Clean up pending signup
        localStorage.removeItem("pendingSignup");

        // Redirect to login
        navigate("/login");
      } else {
        // OTP is incorrect
        toast({
          title: "Invalid OTP",
          description: "Please try again.",
          variant: "destructive",
        });
        setOtp("");
      }
    }, 1500);
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setCanResend(false);
    setCountdown(30);

    // Simulate OTP resending
    setTimeout(() => {
      setIsResending(false);
      toast({
        title: "OTP Sent! 📱",
        description: "A new verification code has been sent to your phone.",
      });

      // Start countdown again
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1000);
  };

  const formatPhoneNumber = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/(\+91)(\d{2})(\d{4})(\d{4})/, "$1 $2****$4");
  };

  if (!signupData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <NavbarDynamic />

      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          <RippleCard>
            <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">
                  Verify Your Phone
                </CardTitle>
                <p className="text-gray-300">
                  We've sent a verification code to
                  <br />
                  <strong>{formatPhoneNumber(signupData.phoneNumber)}</strong>
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleOTPSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Enter 4-digit OTP
                    </label>
                    <Input
                      type="text"
                      maxLength={4}
                      placeholder="0000"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, ""))
                      }
                      className="text-center text-2xl tracking-widest bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    />
                    <p className="text-xs text-gray-400 mt-2 text-center">
                      For testing, use OTP:{" "}
                      <span className="font-bold">1234</span>
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                    disabled={isLoading || otp.length !== 4}
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Verify OTP
                      </>
                    )}
                  </Button>
                </form>

                {/* Resend OTP */}
                <div className="text-center">
                  {canResend ? (
                    <Button
                      variant="ghost"
                      onClick={handleResendOTP}
                      disabled={isResending}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      {isResending ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Resend OTP"
                      )}
                    </Button>
                  ) : (
                    <p className="text-gray-400 text-sm">
                      Resend OTP in {countdown}s
                    </p>
                  )}
                </div>

                {/* Security Info */}
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-400">
                        Security Notice
                      </h4>
                      <p className="text-xs text-gray-300 mt-1">
                        We'll never ask for your OTP via call or email. Keep
                        your verification code confidential.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Wrong Number */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      localStorage.removeItem("pendingSignup");
                      navigate("/signup");
                    }}
                    className="text-gray-400 hover:text-gray-300 text-sm underline"
                  >
                    Wrong phone number? Go back to signup
                  </button>
                </div>
              </CardContent>
            </Card>
          </RippleCard>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default OTPVerification;
