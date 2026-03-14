"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function GithubSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);

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
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                GitHub Contributions
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
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
