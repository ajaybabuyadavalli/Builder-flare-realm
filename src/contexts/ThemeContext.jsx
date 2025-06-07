/**
 * ThemeContext.jsx
 *
 * Purpose: Centralized theme management for the entire application
 *
 * Features:
 * - Dark/Light mode toggle functionality
 * - Persistent theme storage in localStorage
 * - System theme detection
 * - Theme-aware component styling
 *
 * Backend Integration:
 * - API endpoint: GET/POST /user/preferences/theme
 * - Store user theme preference in user profile
 * - Sync theme across devices for logged-in users
 *
 * Usage:
 * - Wrap App component with ThemeProvider
 * - Use useTheme hook in any component
 * - Call toggleTheme() to switch themes
 */

import React, { createContext, useContext, useEffect, useState } from "react";

// Theme configuration object - centralized for easy backend integration
const THEME_CONFIG = {
  STORAGE_KEY: "influbazzar-theme",
  DEFAULT_THEME: "dark",
  THEMES: {
    light: {
      name: "light",
      colors: {
        primary: "rgb(147, 51, 234)",
        secondary: "rgb(219, 39, 119)",
        background: "rgb(255, 255, 255)",
        surface: "rgb(249, 250, 251)",
        text: "rgb(17, 24, 39)",
        textSecondary: "rgb(75, 85, 99)",
      },
    },
    dark: {
      name: "dark",
      colors: {
        primary: "rgb(168, 85, 247)",
        secondary: "rgb(236, 72, 153)",
        background: "rgb(3, 7, 18)",
        surface: "rgb(17, 24, 39)",
        text: "rgb(248, 250, 252)",
        textSecondary: "rgb(156, 163, 175)",
      },
    },
  },
};

const ThemeContext = createContext({
  theme: THEME_CONFIG.DEFAULT_THEME,
  setTheme: () => {},
  toggleTheme: () => {},
  themeConfig: THEME_CONFIG.THEMES[THEME_CONFIG.DEFAULT_THEME],
  isDark: true,
});

/**
 * ThemeProvider Component
 * Manages theme state and provides theme context to child components
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_CONFIG.DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_CONFIG.STORAGE_KEY);
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      const initialTheme =
        savedTheme || systemTheme || THEME_CONFIG.DEFAULT_THEME;

      setTheme(initialTheme);
      applyTheme(initialTheme);
    } catch (error) {
      console.warn("Theme initialization failed:", error);
      setTheme(THEME_CONFIG.DEFAULT_THEME);
      applyTheme(THEME_CONFIG.DEFAULT_THEME);
    }
    setMounted(true);
  }, []);

  // Apply theme to document and save to localStorage
  const applyTheme = (newTheme) => {
    try {
      const root = document.documentElement;

      // Remove all theme classes
      root.classList.remove("light", "dark");

      // Add new theme class
      root.classList.add(newTheme);

      // Apply CSS variables for theme colors
      const themeColors = THEME_CONFIG.THEMES[newTheme]?.colors;
      if (themeColors) {
        Object.entries(themeColors).forEach(([key, value]) => {
          root.style.setProperty(`--color-${key}`, value);
        });
      }

      // Save to localStorage
      localStorage.setItem(THEME_CONFIG.STORAGE_KEY, newTheme);

      // TODO: API call to save user theme preference
      // await fetch('/api/user/preferences/theme', {
      //   method: 'POST',
      //   body: JSON.stringify({ theme: newTheme })
      // });
    } catch (error) {
      console.error("Failed to apply theme:", error);
    }
  };

  // Set theme with persistence
  const handleSetTheme = (newTheme) => {
    if (THEME_CONFIG.THEMES[newTheme]) {
      setTheme(newTheme);
      applyTheme(newTheme);
    }
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    handleSetTheme(newTheme);
  };

  // Context value object
  const value = {
    theme,
    setTheme: handleSetTheme,
    toggleTheme,
    themeConfig: THEME_CONFIG.THEMES[theme],
    isDark: theme === "dark",
    isLight: theme === "light",
    mounted,
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 * Custom hook to access theme context
 *
 * @returns {Object} Theme context object
 * @throws {Error} If used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeContext;
