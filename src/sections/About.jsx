import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function About() {
  const summaryPoints = [
    "Front-End Developer skilled in React.js, Next.js, and modern frameworks.",
    "Experienced in building responsive and user-friendly applications.",
    "Proficient in UI/UX design, Tailwind CSS, Material-UI, and accessibility.",
    "Strong problem-solving skills with API integrations and scalable solutions.",
    "Collaborative team player delivering clean, high-performance code.",
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Professional Summary
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {summaryPoints.map((point, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition font-[var(--font-body)]"
          >
            {point}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
