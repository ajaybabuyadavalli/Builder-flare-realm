/**
 * main.jsx
 *
 * Purpose: Application entry point
 *
 * Features:
 * - React 18 concurrent features
 * - Initial theme setup
 * - Development tools integration
 * - Performance monitoring setup
 *
 * Backend Integration:
 * - Analytics initialization
 * - Error tracking setup
 * - Performance monitoring
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Initialize dark theme immediately to prevent flash
const initializeTheme = () => {
  try {
    const savedTheme = localStorage.getItem("influbazzar-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const theme = savedTheme || systemTheme || "dark";

    document.documentElement.classList.add(theme);
  } catch (error) {
    document.documentElement.classList.add("dark");
  }
};

// Initialize theme before React renders
initializeTheme();

// TODO: Initialize analytics and monitoring
// import { initAnalytics } from './lib/analytics';
// import { initErrorTracking } from './lib/errorTracking';
//
// if (import.meta.env.PROD) {
//   initAnalytics();
//   initErrorTracking();
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
