import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "../hooks/useScrollSpy";

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Certifications", href: "certifications" },
    { name: "Volunteering", href: "volunteering" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  const activeId = useScrollSpy(links.map((l) => l.href), 150);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-[var(--font-heading)] font-bold tracking-wide">
          Rohan.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-[var(--font-heading)] font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.href}`}
                className={`relative pb-1 transition ${
                  activeId === link.href
                    ? "text-black dark:text-white font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black dark:after:bg-white after:rounded"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            className="md:hidden focus:outline-none text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
          >
            <ul className="flex flex-col p-4 space-y-4 text-sm font-[var(--font-heading)] font-medium">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.href}`}
                    className={`block ${
                      activeId === link.href
                        ? "font-semibold text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
