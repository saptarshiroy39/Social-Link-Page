"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import { useEffect, useRef, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import SectionHeader from "@/components/section-header";
import { BLUR_FADE_DELAY } from "@/lib/constants";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GithubSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollToEnd = () => {
      if (containerRef.current) {
        const scrollContainer =
          containerRef.current.querySelector('div[style*="overflow"]') ||
          containerRef.current.firstElementChild;

        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        }
      }
    };

    const timeouts = [10, 100, 500].map((ms) => setTimeout(scrollToEnd, ms));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionHeader label="GitHub Contributions" />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <div className="w-full flex justify-center py-4" ref={containerRef}>
          {mounted ? (
            <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [&_*::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [&_*]:[-ms-overflow-style:none] [scrollbar-width:none] [&_*]:[scrollbar-width:none]">
              <GitHubCalendar
                username="saptarshiroy39"
                colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              />
            </div>
          ) : (
            <div className="h-[120px] bg-muted/20 animate-pulse rounded-md w-full max-w-[800px]"></div>
          )}
        </div>
      </BlurFade>
    </div>
  );
}
