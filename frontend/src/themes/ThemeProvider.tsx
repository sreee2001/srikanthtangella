import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { lightTheme, type Theme } from "./Themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function setCSSVariables(theme: Theme) {
  Object.entries(theme).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS variable names
    const cssVar = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    document.documentElement.style.setProperty(cssVar, value);
  });
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    setCSSVariables(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
