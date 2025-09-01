import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Certifications() {
  const certifications = [
    {
      title: "Web Development Bootcamp",
      org: "Coding Ninjas",
      date: "Jan 2023",
      desc: "Completed full-stack training with focus on modern web technologies.",
    },
    {
      title: "React.js Advanced Workshop",
      org: "Self-paced",
      date: "Mar 2023",
      desc: "Enhanced skills in advanced React concepts and performance optimization.",
    },
    {
      title: "Cloud Computing Fundamentals",
      org: "Infosys Training",
      date: "May 2023",
      desc: "Covered cloud basics, virtualization, and infrastructure fundamentals.",
    },
    {
      title: "API Fundamentals Student Expert",
      org: "Postman",
      date: "Apr 2024",
      desc: "Earned Postman certification after completing API fundamentals program.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Certifications
      </motion.h2>

      <div className="space-y-6 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-[var(--font-heading)] font-semibold">
              {cert.title} | <span className="font-normal">{cert.org}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-[var(--font-body)]">
              {cert.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
              {cert.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
