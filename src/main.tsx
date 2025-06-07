/**
 * Main Application Entry Point
 *
 * This file serves as the root entry point for the Influbazzar React application.
 * It sets up the React DOM rendering and includes global providers for theming and routing.
 *
 * Key Responsibilities:
 * - Initialize React application
 * - Mount app to DOM
 * - Setup global error boundaries
 * - Configure development tools
 *
 * Backend Integration Notes:
 * - This is purely frontend setup
 * - No API calls are made here
 * - Environment variables should be loaded here if needed
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Enable React DevTools in development
if (import.meta.env.DEV) {
  // React DevTools will automatically detect and connect
  console.log("🚀 Influbazzar Frontend - Development Mode");
  console.log("📊 React DevTools should be available");
}

// Global error boundary for unhandled errors
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  // {{Dynamic}} - In production, send errors to monitoring service (e.g., Sentry)
  // Example: sendErrorToMonitoring(event.reason)
});

// Create root element and render application
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure index.html has an element with id="root"',
  );
}

// Mount React application to DOM
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 
      React.StrictMode helps identify potential problems in development:
      - Identifies components with unsafe lifecycles
      - Warns about legacy string ref API usage
      - Warns about deprecated findDOMNode usage
      - Detects unexpected side effects
      - Detects legacy context API
      - Ensures reusable state
    */}
    <App />
  </React.StrictMode>,
);
