import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="uppercase text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-[var(--font-heading)]"
      >
        Front-End Developer
      </motion.p>

      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-6xl font-[var(--font-heading)] font-bold tracking-tight mb-6"
      >
        Hi, I’m Rohan
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-10 font-[var(--font-body)]"
      >
        I specialize in building clean, minimal, and user-friendly web
        applications using React.js, Next.js, and modern frameworks.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="flex space-x-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-[var(--font-heading)] text-sm"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-[var(--font-heading)] text-sm"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
