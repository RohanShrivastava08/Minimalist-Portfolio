import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Volunteering() {
  const volunteering = [
    {
      role: "Ninja Leader",
      org: "Coding Ninjas",
      date: "Feb 2024",
      desc: "Promoted tech events and webinars, hosted coding competitions, and built leadership skills through campus outreach.",
    },
    {
      role: "Campus Ambassador",
      org: "TRYST, IIT Delhi",
      date: "Feb 2024",
      desc: "Promoted TRYST on social media, coordinated peers, boosted participation, and earned a Letter of Recommendation.",
    },
    {
      role: "Community Captain",
      org: "Zuno by Foundit",
      date: "May 2024",
      desc: "Represented Zuno, promoted campaigns, engaged peers on LinkedIn, and earned bonuses through contests.",
    },
    {
      role: "API Fundamentals Student Expert",
      org: "Postman",
      date: "Apr 2024",
      desc: "Earned Postman certification, built an AI text summarizer project, and strengthened API testing knowledge.",
    },
  ];

  return (
    <section
      id="volunteering"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Volunteering
      </motion.h2>

      <div className="space-y-6 max-w-5xl mx-auto">
        {volunteering.map((vol, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-[var(--font-heading)] font-semibold">
              {vol.role} | <span className="font-normal">{vol.org}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-[var(--font-body)]">
              {vol.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
              {vol.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Volunteering;
