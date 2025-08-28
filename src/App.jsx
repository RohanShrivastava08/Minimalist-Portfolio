import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <main className="min-h-dvh grid place-items-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight">
            Rohan’s Minimal Portfolio
          </h1>
          <p className="mt-3 text-balance text-sm opacity-70">
            Framer Motion installed ✔️ Tailwind ready ✔️
          </p>
        </motion.div>
      </main>
    </>
  );
}

export default App;
