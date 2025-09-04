import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import { FileDown, ExternalLink } from "lucide-react";

function Resume() {
  const lastUpdated = new Date().toLocaleString(undefined, {
    month: "short",
    year: "numeric",
  });

  return (
    <section id="resume" className="py-24 border-t border-gray-200 dark:border-gray-800">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold text-center tracking-tight"
      >
        Resume
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 font-[var(--font-body)]"
      >
        Snapshot of experience, skills, and selected projects
      </motion.p>

      {/* Accent divider */}
      <div className="mx-auto mt-6 mb-8 h-px w-24 bg-gray-200 dark:bg-gray-800"></div>

      {/* Meta row */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto -mt-2 mb-8 flex items-center justify-center gap-3 text-xs text-gray-600 dark:text-gray-400 font-[var(--font-body)]"
      >
        <span>PDF</span>
        <span className="h-3 w-px bg-gray-300 dark:bg-gray-700" />
        <span>1–2 pages</span>
        <span className="h-3 w-px bg-gray-300 dark:bg-gray-700" />
        <span>Last updated: {lastUpdated}</span>
      </motion.div>

      {/* Actions */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4"
      >
        {/* Primary: Download */}
        <a
          href="/Rohan-Shrivastava-Resume.pdf" /* ensure file exists in /public */
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition font-[var(--font-heading)] text-sm"
          aria-label="Download resume as PDF"
        >
          <FileDown className="w-4 h-4" />
          Download PDF
        </a>

        {/* Secondary: simple text link */}
        <a
          href="/Rohan-Shrivastava-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-[var(--font-heading)] text-gray-700 dark:text-gray-300 hover:underline"
          aria-label="Open resume in a new tab"
        >
          <ExternalLink className="w-4 h-4" />
          View in browser
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;
