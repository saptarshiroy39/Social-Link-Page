import { DATA } from "@/data/resume";
import { SectionHeader } from "@/components/ui/sec-header";

export default function Stack() {
  return (
    <section id="stack" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Stack</SectionHeader>
      <div className="flex flex-col">
        {DATA.stack.map((category, catIdx) => (
          <div
            key={category.category}
            className="flex flex-col sm:flex-row sm:items-start py-3 first:pt-0 border-b border-dotted border-border/80 gap-y-3 sm:gap-y-0 gap-x-6"
          >
            <div className="w-full sm:w-[195px] flex-shrink-0 flex items-center gap-2 py-1">
              <span className="text-muted-foreground font-mono text-xs tabular-nums">
                {String(catIdx + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-sm text-muted-foreground font-medium tracking-tight">
                {category.category}
              </span>
            </div>
            <div className="hidden sm:block w-[1px] border-r border-dotted border-border/80 self-stretch my-1 mr-2" />
            <div className="flex-1 flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="group rounded-md border border-border/80 bg-muted/30 px-2.5 flex items-center gap-1.5 h-7 text-xs font-mono font-normal tracking-tight text-foreground hover:bg-amber hover:border-amber hover:text-background transition-all duration-200 cursor-default"
                >
                  <tech.icon className="size-3.5 shrink-0 object-contain grayscale-0 md:grayscale group-hover:md:grayscale-0 transition-all duration-300 select-none" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
