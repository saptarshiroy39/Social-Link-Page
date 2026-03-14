"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");
  const activeSectionRef = useRef("hero");

  useEffect(() => {
    const sectionIds = DATA.navbar.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            if (visibleSections.size > 0) {
              let best = "";
              let bestRatio = 0;
              visibleSections.forEach((ratio, sectionId) => {
                if (ratio > bestRatio) {
                  best = sectionId;
                  bestRatio = ratio;
                }
              });
              setActiveSection(best);
              if (activeSectionRef.current !== best) {
                activeSectionRef.current = best;
                history.replaceState(null, "", `#${best}`);
              }
            }
          });
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <TooltipProvider>
        <Dock direction="middle" className="pointer-events-auto bg-card/80 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
          {DATA.navbar.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      onClick={() => {
                        const audio = new Audio("/teleport.ogg");
                        audio.volume = 0.1;
                        audio.play()
                      }}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full transition-colors duration-200",
                        isActive && "bg-primary/10 text-primary"
                      )}
                    >
                      <item.icon
                        className={cn("size-6", isActive && "stroke-[2.5]")}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full cursor-pointer"
                  )}
                >
                  <AnimatedThemeToggler />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
