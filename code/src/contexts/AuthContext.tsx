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
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: string) => Promise<boolean>;
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

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("influbazzar_user");
    const savedAuth = localStorage.getItem("influbazzar_authenticated");

    if (savedUser && savedAuth === "true") {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing saved user data:", error);
        localStorage.removeItem("influbazzar_user");
        localStorage.removeItem("influbazzar_authenticated");
      }
    }
  }, []);

  const login = async (
    email: string,
    password: string,
    role: string,
  ): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check demo credentials
    const demoUser = demoUsers[email as keyof typeof demoUsers];
    const validPasswords = {
      "creator@demo.com": "password123",
      "brand@demo.com": "password123",
      "agency@demo.com": "password123",
      "admin@demo.com": "adminpass",
    };

    const isValidCredentials =
      demoUser &&
      validPasswords[email as keyof typeof validPasswords] === password &&
      demoUser.role === role;

    if (isValidCredentials) {
      setUser(demoUser);
      setIsAuthenticated(true);

      // Persist to localStorage
      localStorage.setItem("influbazzar_user", JSON.stringify(demoUser));
      localStorage.setItem("influbazzar_authenticated", "true");

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Clear localStorage
    localStorage.removeItem("influbazzar_user");
    localStorage.removeItem("influbazzar_authenticated");
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("influbazzar_user", JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
