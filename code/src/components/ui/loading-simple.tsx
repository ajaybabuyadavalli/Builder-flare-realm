import React from "react";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export const Loading = ({
  className = "",
  size = "md",
  text,
}: LoadingProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
      />
      {text && <span className="ml-2 text-gray-600">{text}</span>}
    </div>
  );
};

export const LoadingScreen = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loading size="lg" />
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};
