"use client";

import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/Project-Card";
import { SectionHeader } from "@/components/ui/sec-header";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";

const INITIAL_VISIBLE_PROJECTS = 3;

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    haptic();
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="projects" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Projects ({DATA.projects.length})</SectionHeader>
      <div className="flex flex-col gap-6 w-full">
        {DATA.projects.slice(0, INITIAL_VISIBLE_PROJECTS).map((project, idx) => (
          <ProjectCard key={project.title} index={idx + 1} {...project} />
        ))}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="extra-projects"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-6 w-full overflow-hidden"
            >
              {DATA.projects.slice(INITIAL_VISIBLE_PROJECTS).map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  index={idx + 1 + INITIAL_VISIBLE_PROJECTS}
                  {...project}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {DATA.projects.length > INITIAL_VISIBLE_PROJECTS && (
        <div className="flex justify-center pt-2">
          <button
            onClick={toggleExpand}
            className="flex items-center gap-1.5 text-xs font-mono font-bold border border-border/80 bg-muted/30 px-3 py-1 text-muted-foreground rounded-full hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer select-none w-fit"
          >
            {isExpanded ? (
              <IconEyeOff className="size-3.5 select-none" />
            ) : (
              <IconEye className="size-3.5 select-none" />
            )}
            <span>
              {isExpanded
                ? "SHOW LESS"
                : `SHOW MORE (+${DATA.projects.length - INITIAL_VISIBLE_PROJECTS})`}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
