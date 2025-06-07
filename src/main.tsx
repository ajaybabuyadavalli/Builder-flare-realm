import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Main Application Entry Point
 *
 * This is the root entry point for the Influbazzar platform.
 * It initializes React and renders the main App component.
 *
 * Backend Integration Notes:
 * - Set up proper error tracking (Sentry, LogRocket, etc.)
 * - Add performance monitoring
 * - Configure service worker for offline capabilities
 * - Add analytics initialization (Google Analytics, Mixpanel, etc.)
 */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
