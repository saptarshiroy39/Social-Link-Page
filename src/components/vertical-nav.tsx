"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "activity", label: "Activity" },
  { id: "Experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function VerticalNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const offsets = SECTIONS.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return 0;
        return el.getBoundingClientRect().top + window.scrollY;
      });

      let activeIdx = 0;
      const triggerPoint = scrollY + window.innerHeight / 3;

      for (let i = 0; i < offsets.length; i++) {
        if (triggerPoint >= offsets[i]) {
          activeIdx = i;
        }
      }

      if (scrollY <= 10) {
        activeIdx = 0;
      } else if (
        scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10
      ) {
        activeIdx = SECTIONS.length - 1;
      }

      setActiveIndex(activeIdx);

      const activeSectionId = SECTIONS[activeIdx].id;
      if (activeSectionId === "hero") {
        if (window.location.hash !== "" && window.location.hash !== "#") {
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        }
      } else {
        const currentHash = window.location.hash;
        if (currentHash !== `#${activeSectionId}`) {
          window.history.replaceState(null, "", `#${activeSectionId}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    handleScroll();

    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (id === "hero") {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      } else {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  };

  return (
    <nav
      className="fixed right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-1.5 select-none"
      aria-label="Side Navigation"
    >
      <div className="flex flex-col items-end gap-3.5">
        {SECTIONS.map((section, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={section.id}
              className="group/tick relative flex items-center justify-end h-3 cursor-pointer"
              onClick={() => scrollToSection(section.id)}
            >
              <span
                className={cn(
                  "absolute right-full pr-3 text-[10px] font-mono whitespace-nowrap tracking-wider transition-all duration-300 pointer-events-none select-none",
                  isActive
                    ? "text-[#26A641] font-semibold opacity-100 translate-x-0"
                    : "text-muted-foreground opacity-0 translate-x-2 group-hover/tick:opacity-100 group-hover/tick:translate-x-0",
                  "hidden md:block",
                )}
              >
                {section.label}
              </span>

              <div
                className={cn(
                  "h-[2.5px] rounded-full transition-all duration-300 ease-out shadow-xs",
                  isActive
                    ? "w-8 bg-[#26A641] opacity-100 scale-y-125"
                    : "w-4 bg-muted-foreground/30 opacity-40 group-hover/tick:bg-[#26A641] group-hover/tick:w-8 group-hover/tick:opacity-100",
                )}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
