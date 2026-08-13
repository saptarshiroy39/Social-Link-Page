"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { ProjectCard } from "@/components/Project-Card";
import { SectionHeader } from "@/components/ui/sec-header";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";

export default function ProjectsView() {
  return (
    <div className="flex flex-col gap-y-8 pt-2 pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Bar */}
      <div className="flex items-center">
        <Link
          href="/"
          onClick={() => haptic()}
          className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 uppercase tracking-wider font-semibold"
        >
          <IconArrowLeft className="size-3.5" />
          Home
        </Link>
      </div>

      <section className="flex min-h-0 flex-col gap-y-4">
        <SectionHeader>Projects ({DATA.projects.length})</SectionHeader>
        <div className="flex flex-col gap-6 w-full">
          {DATA.projects.map((project, idx) => (
            <ProjectCard key={project.title} index={idx + 1} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
