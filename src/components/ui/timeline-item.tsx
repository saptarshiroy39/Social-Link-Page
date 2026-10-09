"use client";

import { Fragment } from "react";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { haptic } from "@/lib/haptic";

export interface TimelineItemProps {
  title: string;
  href?: string;
  logoUrl: string;
  location?: string;
  locationClassName?: string;
  meta?: React.ReactNode;
  description?: React.ReactNode;
  showTimeline?: boolean;
}

export function TimelineMeta({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, idx) => (
        <Fragment key={idx}>
          {idx > 0 && (
            <span
              aria-hidden="true"
              className="text-muted-foreground/30 font-light select-none"
            >
              |
            </span>
          )}
          <span className={idx === 1 ? "tabular-nums" : "font-medium"}>
            {item}
          </span>
        </Fragment>
      ))}
    </>
  );
}

export function TimelineItem({
  title,
  href,
  logoUrl,
  location,
  locationClassName,
  meta,
  description,
  showTimeline = false,
}: TimelineItemProps) {
  const logo = (
    <Image
      src={logoUrl}
      alt={title}
      width={40}
      height={40}
      className="size-8 md:size-10 p-1 border rounded-lg bg-muted/30 overflow-hidden object-contain flex-none border-border/80 relative z-10 transition-all duration-300 group-hover:scale-105 grayscale-0 md:grayscale group-hover:md:grayscale-0 select-none pointer-events-none"
      unoptimized
      draggable={false}
    />
  );

  return (
    <div className="group relative flex gap-x-4 pb-8 last:pb-0">
      {showTimeline && (
        <div className="absolute left-[16px] md:left-[20px] top-8 md:top-10 bottom-0 w-px bg-border/40 group-last:hidden select-none" />
      )}

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => haptic()}
          className="shrink-0 relative z-10 block"
        >
          {logo}
        </a>
      ) : (
        logo
      )}

      <div className="flex-1 min-w-0 flex flex-col gap-1.5 pt-0.5 md:pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-x-4 min-w-0">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => haptic()}
              className="font-semibold leading-snug sm:leading-none flex items-center gap-1.5 sm:gap-2 text-amber md:text-foreground md:group-hover:text-amber group-hover:underline decoration-amber/50 underline-offset-3 transition-colors text-sm sm:text-base min-w-0"
            >
              <span className="truncate">{title}</span>
              <IconArrowUpRight
                className="h-3.5 w-3.5 shrink-0 text-amber md:text-muted-foreground md:group-hover:text-amber transition-all duration-200 select-none"
                aria-hidden
              />
            </a>
          ) : (
            <div className="font-semibold leading-snug sm:leading-none flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base min-w-0 text-amber md:text-foreground md:group-hover:text-amber transition-colors">
              <span className="truncate">{title}</span>
            </div>
          )}

          {location && (
            <span
              className={cn(
                "text-xs sm:text-sm text-muted-foreground shrink-0 font-medium font-sans",
                locationClassName,
              )}
            >
              {location}
            </span>
          )}
        </div>

        {meta && (
          <div className="font-sans text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
            {meta}
          </div>
        )}

        {description && (
          <div className="text-xs sm:text-sm text-foreground font-sans mt-0.5 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
