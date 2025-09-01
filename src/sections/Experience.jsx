import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Experience() {
  const jobs = [
    {
      role: "Full Stack Developer Intern",
      company: "Pregrad",
      date: "Apr 2024 – Aug 2024",
      details: [
        "Built MERN stack projects, optimizing frontend performance with React.js and Redux.",
        "Implemented dynamic dashboards and API integrations.",
      ],
    },
    {
      role: "Software Trainee",
      company: "Infosys",
      date: "Jan 2023 – May 2023",
      details: [
        "Learnt Java, DBMS, Cloud Computing, Unix, and Networking fundamentals.",
        "Applied frontend technologies to create interactive UI components.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Zidio Development",
      date: "Jul 2024 – Sep 2024",
      details: [
        "Worked with React.js, Tailwind CSS, and JavaScript frameworks.",
        "Developed interactive UI components and improved website performance.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Experience & Internships
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full border-l border-gray-300 dark:border-gray-700"></div>

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Circle Marker */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>

              {/* Card */}
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-[var(--font-heading)] font-semibold">
                  {job.role} | <span className="font-normal">{job.company}</span>
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-[var(--font-body)]">
                  {job.date}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
                  {job.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
