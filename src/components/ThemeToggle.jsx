import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-2xl z-20 px-4 py-2 rounded-lg text-gray-800 dark:text-white"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
