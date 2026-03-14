/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">
                  Work Experience
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Accordion type="single" collapsible className="w-full grid gap-6">
            {DATA.work.map((work) => (
              <AccordionItem
                key={work.company}
                value={work.company}
                className="w-full border-b-0 grid gap-2"
              >
                <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                  <div className="flex items-center gap-x-3 justify-between w-full text-left">
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      <LogoImage src={work.logoUrl} alt={work.company} />
                      <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {work.company}
                          <span className="relative inline-flex items-center w-3.5 h-3.5">
                            <IconChevronRight
                              className={cn(
                                "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                                "translate-x-0 opacity-0",
                                "group-hover:translate-x-1 group-hover:opacity-100",
                                "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                              )}
                            />
                            <IconChevronDown
                              className={cn(
                                "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                                "opacity-0 rotate-0",
                                "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                              )}
                            />
                          </span>
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {work.title}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {work.start} - {work.end ?? "Present"}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                  {work.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
