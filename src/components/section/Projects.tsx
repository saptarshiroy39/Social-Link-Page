"use client";

import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { ProjectCard } from "@/components/Project-Card";
import { SectionHeader } from "@/components/ui/sec-header";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedProjects = isExpanded
    ? DATA.projects
    : DATA.projects.slice(0, 3);

  const toggleExpand = () => {
    haptic();
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="projects" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Projects ({DATA.projects.length})</SectionHeader>
      <div className="flex flex-col gap-6 w-full">
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={project.title} index={idx + 1} {...project} />
        ))}
      </div>
      {DATA.projects.length > 3 && (
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
            <span>{isExpanded ? "SHOW LESS" : "SHOW MORE"}</span>
          </button>
        </div>
      )}
    </section>
  );
}
