import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      desc: "React.js, Next.js, JavaScript (ES6+), TypeScript, Angular",
    },
    {
      category: "Styling",
      desc: "Tailwind CSS, Material-UI, Bootstrap, SCSS, Responsive Design, Accessibility",
    },
    {
      category: "Backend & Databases",
      desc: "Node.js, Express.js, MongoDB, Firebase, RESTful APIs, GraphQL",
    },
    {
      category: "Tools & DevOps",
      desc: "Git, GitHub, Vercel, Netlify, Postman, Webpack, Babel, VS Code, Figma, Cursor",
    },
    {
      category: "AI & Productivity",
      desc: "ChatGPT, Gemini AI, Claude, Bolt AI, Deep Seek AI",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Technical Skills
      </motion.h2>

      <div className="space-y-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-lg font-[var(--font-heading)] font-semibold mb-1">
              {skill.category}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-[var(--font-body)]">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
