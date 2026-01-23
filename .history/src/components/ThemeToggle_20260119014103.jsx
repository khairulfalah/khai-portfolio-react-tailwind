import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={cn(
        "p-2 rounded-full bg-card border border-border",
        "hover:bg-accent transition-colors",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
};
