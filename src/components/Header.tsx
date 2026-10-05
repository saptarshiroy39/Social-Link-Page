"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DATA } from "@/data/resume";
import { haptic } from "@/lib/haptic";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dotted border-border/80 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => haptic()}
          className="font-heading text-xl font-normal text-foreground tracking-tight"
        >
          {DATA.initials}
        </Link>

        <nav className="flex items-center gap-4">
          {DATA.header.map((item) => {
            const isExternal = item.href.startsWith("http");
            const isActive = !isExternal && pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => {
                  haptic();
                }}
                className={cn(
                  "text-xs font-mono tracking-wider transition-colors font-medium",
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
