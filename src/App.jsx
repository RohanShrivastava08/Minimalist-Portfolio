import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Volunteering from "./sections/Volunteering";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-[var(--font-body)]">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-6 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Volunteering />
        <Education />
        <Resume /> 
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
