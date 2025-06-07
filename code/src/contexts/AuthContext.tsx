import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "creator" | "brand" | "agency" | "admin";
  avatar?: string;
  followers?: string;
  influbazzarScore?: number;
  company?: string;
  website?: string;
  industry?: string;
  companySize?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Demo users database
  const demoUsers = {
    "creator@demo.com": {
      id: "1",
      name: "Ajay Kumar",
      email: "creator@demo.com",
      role: "creator" as const,
      avatar: "/api/placeholder/100/100",
      followers: "45K",
      influbazzarScore: 84,
    },
    "brand@demo.com": {
      id: "2",
      name: "Srinivas Reddy",
      email: "brand@demo.com",
      role: "brand" as const,
      avatar: "/api/placeholder/100/100",
      company: "GlowCo Beauty",
      website: "glowco.in",
      industry: "Beauty & Skincare",
      companySize: "50-100",
    },
    "agency@demo.com": {
      id: "3",
      name: "Raj Patel",
      email: "agency@demo.com",
      role: "agency" as const,
      avatar: "/api/placeholder/100/100",
    },
    "admin@demo.com": {
      id: "4",
      name: "Admin User",
      email: "admin@demo.com",
      role: "admin" as const,
      avatar: "/api/placeholder/100/100",
    },
  };

  // Check for stored authentication on mount
  useEffect(() => {
    const checkStoredAuth = () => {
      try {
        const storedUser = localStorage.getItem("influbazzar_user");
        const storedAuth = localStorage.getItem("influbazzar_authenticated");

        if (storedUser && storedAuth === "true") {
          const userData = JSON.parse(storedUser);
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking stored auth:", error);
        // Clear invalid stored data
        localStorage.removeItem("influbazzar_user");
        localStorage.removeItem("influbazzar_authenticated");
      } finally {
        setIsLoading(false);
      }
    };

    checkStoredAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const demoUser = demoUsers[email as keyof typeof demoUsers];

      if (demoUser && password === "password123") {
        setUser(demoUser);
        setIsAuthenticated(true);

        // Store in localStorage for persistence
        localStorage.setItem("influbazzar_user", JSON.stringify(demoUser));
        localStorage.setItem("influbazzar_authenticated", "true");

        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Clear stored data
    localStorage.removeItem("influbazzar_user");
    localStorage.removeItem("influbazzar_authenticated");
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);

      // Update stored data
      localStorage.setItem("influbazzar_user", JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
