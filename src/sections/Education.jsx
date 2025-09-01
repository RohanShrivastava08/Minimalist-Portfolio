import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "Bhilai Institute of Technology, Durg",
      date: "Aug 2018",
      desc: "Graduated with 76% aggregate, built strong foundation in programming, web development, and software engineering.",
    },
    {
      degree: "IT & Fintech Specialization",
      school: "Manipal University Jaipur",
      date: "Aug 2023",
      desc: "Focused on emerging technologies and financial technology trends.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Education
      </motion.h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-[var(--font-heading)] font-semibold">
              {edu.degree} | <span className="font-normal">{edu.school}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-[var(--font-body)]">
              {edu.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
              {edu.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
