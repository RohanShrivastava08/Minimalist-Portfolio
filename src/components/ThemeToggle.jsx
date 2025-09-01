import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-gray-200" />
      )}
    </button>
  );
}

export default ThemeToggle;
