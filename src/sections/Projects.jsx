import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Projects() {
  const projects = [
    {
      title: "Notion Project | Live Project",
      desc: "Developed a Notion-inspired web app using Next.js, TypeScript, ShadCN UI, Convex, and Clerk with real-time collaboration features.",
      date: "2024",
      link: "https://note-making-sepia.vercel.app/", 
      github: "https://github.com/RohanShrivastava08/Notion-Clone-using-Next-Typescript", // replace with repo link
    },
    {
      title: "Portfolio Project | Live Project",
      desc: "Built a personal portfolio using Bolt AI and enhanced it with ChatGPT, Framer Motion animations, and EmailJS integration. Deployed on Vercel.",
      date: "2024",
      link: "https://my-portfolio-by-bolt-ai.vercel.app/",
      github: "https://github.com/RohanShrivastava08/Portfolio-by-Bolt-AI",
    },
    {
      title: "Apple Website | Live Project",
      desc: "Created an Apple-inspired immersive website with GSAP animations, Three.js 3D models, and Tailwind CSS for elegant UI and smooth scrolling.",
      date: "2024",
      link: "https://apple-project-using-three-js-gsap.vercel.app/",
      github: "https://github.com/RohanShrivastava08/Apple-Project-using-Three.js-GSAP",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-[var(--font-heading)] font-bold mb-12 text-center tracking-tight"
      >
        Projects
      </motion.h2>

      <div className="space-y-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition"
          >
            <h3 className="text-xl font-[var(--font-heading)] font-semibold mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-[var(--font-body)]">
              {p.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-[var(--font-body)]">
              {p.desc}
            </p>
            <div className="flex space-x-4 text-sm font-[var(--font-heading)]">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
