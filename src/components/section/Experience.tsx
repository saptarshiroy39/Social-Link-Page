"use client";

import { DATA } from "@/data/resume";
import { SectionHeader } from "@/components/ui/sec-header";
import { TimelineItem, TimelineMeta } from "@/components/ui/timeline-item";

export default function Experience() {
  return (
    <section id="experience" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Experience</SectionHeader>
      <div className="relative flex flex-col">
        {DATA.experience.map((exp) => (
          <TimelineItem
            key={exp.company}
            title={exp.company}
            href={exp.href}
            logoUrl={exp.logoUrl}
            location={exp.location}
            showTimeline
            meta={
              <TimelineMeta items={[exp.type, exp.timeline, exp.duration]} />
            }
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}
