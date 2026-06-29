import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import SectionHeader from "@/components/section-header";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionHeader label="Skills" />
        </BlurFade>
        <div className="flex flex-col gap-4">
          {DATA.skills.map((category, catIdx) => (
            <BlurFade
              key={category.category}
              delay={BLUR_FADE_DELAY * 10 + catIdx * 0.08}
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2"
                    >
                      {skill.icon && (
                        <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                      )}
                      <span className="text-foreground text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
