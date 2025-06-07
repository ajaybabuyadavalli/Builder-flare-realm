import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleIndex from "./pages/SimpleIndex";

// Simple test component
const TestPage = ({ title }) => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">
        This is a test page to verify functionality.
      </p>
      <a href="/" className="text-purple-600 hover:underline">
        ← Back to Home
      </a>
    </div>
  </div>
);

const TestApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleIndex />} />
        <Route path="/about" element={<TestPage title="About Us" />} />
        <Route path="/pricing" element={<TestPage title="Pricing" />} />
        <Route path="/contact" element={<TestPage title="Contact" />} />
        <Route path="/login" element={<TestPage title="Login" />} />
        <Route path="/signup" element={<TestPage title="Sign Up" />} />
        <Route path="*" element={<TestPage title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TestApp;
