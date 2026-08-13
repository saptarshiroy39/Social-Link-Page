"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBook,
  IconBrandGithub,
  IconBrandPython,
  IconBrandVscode,
  IconChevronDown,
  IconDiamonds,
  IconWorld,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { haptic } from "@/lib/haptic";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  book: IconBook,
  python: IconBrandPython,
  github: IconBrandGithub,
  vscode: IconBrandVscode,
  diamonds: IconDiamonds,
  world: IconWorld,
};

interface Props {
  index?: number;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    iconName?: string;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  index,
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const [showTags, setShowTags] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-start gap-5 group",
        className,
      )}
    >
      {/* Project Visual (Left side on desktop, top on mobile) */}
      <div className="w-full md:w-60 aspect-video rounded-lg overflow-hidden border border-border/80 shrink-0 relative bg-muted">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => haptic()}
          className="block w-full h-full relative"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:md:grayscale-0 group-hover:scale-105 transition-all duration-300"
            />
          ) : image && !imageError ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 240px"
              className="object-cover grayscale-0 md:grayscale group-hover:md:grayscale-0 group-hover:scale-105 transition-all duration-300 select-none pointer-events-none"
              onError={() => setImageError(true)}
              draggable={false}
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
          {/* Number Badge Overlay */}
          {index !== undefined && (
            <div className="absolute top-2 left-2 z-10 flex items-center justify-center h-6 min-w-6 px-1.5 text-xs font-mono font-medium leading-none tabular-nums bg-background/90 border border-border/80 text-foreground rounded-md select-none">
              {String(index).padStart(2, "0")}
            </div>
          )}
          {/* Link Arrow Overlay */}
          <div className="absolute top-2 right-2 z-10 size-6 bg-muted/30 border border-border/80 text-muted-foreground group-hover:text-foreground flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            <IconArrowUpRight className="size-4" />
          </div>
        </Link>
      </div>

      {/* Project Info (Right side on desktop) */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        {/* Title and Dates */}
        <div className="flex items-baseline gap-x-2 min-w-0">
          <h3 className="font-semibold text-sm group-hover:text-foreground transition-colors shrink-0">
            {title}
          </h3>
          <time className="text-xs font-mono text-muted-foreground truncate before:content-['·_']">
            {dates}
          </time>
        </div>

        {/* Description */}
        <p className="text-xs flex-1 max-w-full font-mono leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Project Links / Badges */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1 group/links">
            {links.map((link, idx) => {
              const Icon = link.iconName ? ICON_MAP[link.iconName] : null;
              return (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => haptic()}
                  className="transition-all duration-200 group-hover/links:opacity-40 hover:!opacity-100"
                >
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-muted/30 border border-border/80 text-foreground rounded-md py-0.5 px-2 hover:bg-muted/20 hover:border-muted-foreground/30 transition-colors"
                    variant="default"
                  >
                    {Icon && <Icon className="size-3 select-none" />}
                    {link.type}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}

        {/* Collapsible Stack */}
        {tags && tags.length > 0 && (
          <div className="flex flex-col gap-2 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                haptic();
                setShowTags(!showTags);
              }}
              className="flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none w-fit"
            >
              <IconChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200 select-none",
                  showTags && "rotate-180",
                )}
              />
              <span>{showTags ? "Hide Stack" : "Show Stack"}</span>
            </button>
            {showTags && (
              <div className="flex flex-wrap gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="text-xs font-mono font-normal border border-border/80 bg-muted/30 px-2 py-0.5 text-muted-foreground/90 rounded-md hover:text-foreground transition-colors"
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
