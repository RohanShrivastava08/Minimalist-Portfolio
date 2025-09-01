import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-6 space-y-4 md:space-y-0">
        {/* Left: Copyright */}
        <p className="font-[var(--font-body)]">
          © {new Date().getFullYear()} Rohan Shrivastava · All Rights Reserved
        </p>

        {/* Middle: Quick Nav */}
        <div className="flex space-x-6 font-[var(--font-heading)] font-medium">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/RohanShrivastava08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-shrivastava-887a15251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
