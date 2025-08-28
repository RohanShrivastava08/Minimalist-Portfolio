import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // Read saved preference on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
      setTheme(saved);
    } else {
      // System preference fallback
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      const next = prefersDark ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    }
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", mode);
  };

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-xl px-3 py-2 border border-black/10 dark:border-white/10 text-sm"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
