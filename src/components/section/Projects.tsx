"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/Project-Card";
import { SectionHeader } from "@/components/ui/sec-header";
import { InteractiveHoverButton } from "@/components/ui/int-hover-btn";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";

const FEATURED_PROJECT_TITLES = ["Sizelib", "Arkiv", "Luna AI"] as const;

export default function Projects() {
  const featuredProjects = FEATURED_PROJECT_TITLES.map((title) =>
    DATA.projects.find((p) => p.title === title),
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="projects" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Projects ({DATA.projects.length})</SectionHeader>
      <div className="flex flex-col gap-6 w-full">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={project.title} index={idx + 1} {...project} />
        ))}
      </div>
      <div className="flex justify-center pt-2">
        <Link href="/projects" onClick={() => haptic()}>
          <InteractiveHoverButton>{"See All"}</InteractiveHoverButton>
        </Link>
      </div>
    </section>
  );
}
