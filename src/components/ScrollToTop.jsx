import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    window.addEventListener("scroll", handleScroll);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Scroll to top"
        >
          <span
            className={`text-lg font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
