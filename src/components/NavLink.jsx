import { motion } from "framer-motion";

export default function NavLink({ targetId, active, children }) {
  return (
    <a
      href={`#${targetId}`}
      className="relative rounded-lg px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
    >
      <span className="opacity-80">{children}</span>
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-current"
        />
      )}
    </a>
  );
}
