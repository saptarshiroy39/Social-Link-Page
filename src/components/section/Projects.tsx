"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { ProjectCard } from "@/components/Project-Card";
import { SectionHeader } from "@/components/ui/sec-header";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";
import { cn } from "@/lib/utils";

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
            className="flex items-center gap-1.5 text-xs font-mono border border-border/80 bg-muted/30 px-2.5 py-1 text-muted-foreground rounded-md hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer select-none w-fit"
          >
            <IconChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200 select-none",
                isExpanded && "rotate-180",
              )}
            />
            <span>{isExpanded ? "Show Less" : "Show More"}</span>
          </button>
        </div>
      )}
    </section>
  );
}
