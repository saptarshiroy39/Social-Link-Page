import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function OpenSourceSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 3.2}>
        <SectionHeader label="Open Source Projects" />
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DATA.openSourceProjects.map((project, idx) => {
          const displayUrl = project.href.replace(/^https?:\/\//, "");

          return (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 3.4 + idx * 0.05}
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-1.5 p-3.5 pr-8 rounded-xl border border-border bg-background/50 hover:bg-secondary/5 dark:border-border/50 dark:bg-background/30 dark:hover:bg-accent/20 transition-all duration-300 h-full"
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-sm text-foreground">
                    {project.title}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {project.description}
                  </span>
                </div>
                <span className="text-xs font-mono text-blue-500 dark:text-blue-400 underline underline-offset-4 decoration-blue-500/20 group-hover:decoration-blue-500/50 transition-colors">
                  {displayUrl}
                </span>
                <IconArrowUpRight className="absolute top-3.5 right-3.5 size-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
