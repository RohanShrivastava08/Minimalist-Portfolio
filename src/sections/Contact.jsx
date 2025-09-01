import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import { Mail, Github, Linkedin, Copy } from "lucide-react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [hovering, setHovering] = useState(false);
  const email = "rohansh0808@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-xl mx-auto p-8 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:shadow-md transition"
      >
        <p className="mb-6 text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
          I’m always open to opportunities, collaborations, or just a friendly
          chat. Feel free to reach out:
        </p>

        {/* Email Box + Copy Button */}
        <div className="flex justify-center items-center gap-2 relative">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm font-[var(--font-body)]"
          >
            <Mail className="w-4 h-4" />
            {email}
          </a>

          <div
            className="relative flex items-center"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <button
              onClick={handleCopy}
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-center"
              aria-label="Copy email"
            >
              <Copy className="w-4 h-4" />
            </button>

            {/* Tooltip */}
            {(hovering || copied) && (
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap font-[var(--font-body)]">
                {copied ? "Copied!" : "Copy Email"}
              </span>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://github.com/RohanShrivastava08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline font-[var(--font-body)]"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-shrivastava-887a15251/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline font-[var(--font-body)]"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
