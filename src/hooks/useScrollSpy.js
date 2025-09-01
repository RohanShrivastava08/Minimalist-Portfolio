import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handler = () => {
      const scrollPosition = window.scrollY + offset;
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handler);
    handler(); // run once on load
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return activeId;
}
