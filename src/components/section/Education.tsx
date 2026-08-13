"use client";

import { DATA } from "@/data/resume";
import { SectionHeader } from "@/components/ui/sec-header";
import { TimelineItem, TimelineMeta } from "@/components/ui/timeline-item";

export default function Education() {
  return (
    <section id="education" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Education</SectionHeader>
      <div className="relative flex flex-col">
        {DATA.education.map((edu) => (
          <TimelineItem
            key={edu.school}
            title={edu.school}
            href={edu.href}
            logoUrl={edu.logoUrl}
            location={edu.location}
            showTimeline
            meta={
              <TimelineMeta items={[edu.trade, edu.timeline, edu.duration]} />
            }
            description={edu.description}
          />
        ))}
      </div>
    </section>
  );
}
