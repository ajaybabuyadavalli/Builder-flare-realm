import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const OTPVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verifyOTP, isLoading } = useAuth();
  const [otp, setOtp] = useState("");

  const phone = location.state?.phone || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await verifyOTP(phone, otp);
      toast.success("Phone verified successfully!");
      navigate("/login", { state: { email: location.state?.email } });
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Verify Your Phone</CardTitle>
          <p className="text-muted-foreground">Enter the OTP sent to {phone}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Verify OTP
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Use OTP: <strong>1234</strong> for testing
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerificationPage;
