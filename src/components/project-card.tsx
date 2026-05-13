"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IconCornerRightUp } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Python } from "@/components/ui/svgs/python";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Vercel } from "@/components/ui/svgs/vercel";
import { PyPI } from "@/components/ui/svgs/pypi";
import { HTML } from "@/components/ui/svgs/html";
import { CSS } from "@/components/ui/svgs/css";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { VisualStudioMarketplace } from "@/components/ui/svgs/visualstudiomarketplace";
import { HuggingFace } from "@/components/ui/svgs/huggingface";
import { TypeScript } from "@/components/ui/svgs/typescript";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { ShadcnUI } from "@/components/ui/svgs/shadcnui";
import { NextJS } from "@/components/ui/svgs/nextjs";
import { LangChain } from "@/components/ui/svgs/langchain";
import { N8n } from "@/components/ui/svgs/n8n";
import { GoogleCloud } from "@/components/ui/svgs/googlecloud";
import { Gemini } from "@/components/ui/svgs/gemini";
import { YouTube } from "@/components/ui/svgs/youtube";
import { GitHub } from "@/components/ui/svgs/github";
import { GmailSMTP } from "@/components/ui/svgs/gmailsmtp";

const TECH_ICONS: Record<string, { icon: React.ReactNode; label: string }> = {
  Python: { icon: <Python className="w-3.5 h-3.5" />, label: "Python" },
  FastAPI: { icon: <FastAPI className="w-3.5 h-3.5" />, label: "FastAPI" },
  Vercel: { icon: <Vercel className="w-3.5 h-3.5" />, label: "Vercel" },
  PyPI: { icon: <PyPI className="w-3.5 h-3.5" />, label: "PyPI" },
  HTML: { icon: <HTML className="w-3.5 h-3.5" />, label: "HTML" },
  CSS: { icon: <CSS className="w-3.5 h-3.5" />, label: "CSS" },
  JavaScript: {
    icon: <JavaScript className="w-3.5 h-3.5" />,
    label: "JavaScript",
  },
  "Visual Studio Marketplace": {
    icon: <VisualStudioMarketplace className="w-3.5 h-3.5" />,
    label: "VS Marketplace",
  },
  "Hugging Face": {
    icon: <HuggingFace className="w-3.5 h-3.5" />,
    label: "Hugging Face",
  },
  TypeScript: {
    icon: <TypeScript className="w-3.5 h-3.5" />,
    label: "TypeScript",
  },
  "Tailwind CSS": {
    icon: <TailwindCSS className="w-3.5 h-3.5" />,
    label: "Tailwind CSS",
  },
  "shadcn/ui": {
    icon: <ShadcnUI className="w-3.5 h-3.5" />,
    label: "shadcn/ui",
  },
  "Next.js": { icon: <NextJS className="w-3.5 h-3.5" />, label: "Next.js" },
  LangChain: {
    icon: <LangChain className="w-3.5 h-3.5" />,
    label: "LangChain",
  },
  n8n: { icon: <N8n className="w-3.5 h-3.5" />, label: "n8n" },
  GCP: { icon: <GoogleCloud className="w-3.5 h-3.5" />, label: "GCP" },
  "Gemini API": {
    icon: <Gemini className="w-3.5 h-3.5" />,
    label: "Gemini API",
  },
  "YouTube API": {
    icon: <YouTube className="w-3.5 h-3.5" />,
    label: "YouTube API",
  },
  "GitHub API": {
    icon: <GitHub className="w-3.5 h-3.5" />,
    label: "GitHub API",
  },
  "Gmail SMTP": {
    icon: <GmailSMTP className="w-3.5 h-3.5" />,
    label: "Gmail SMTP",
  },
};

function TechBadge({ tag }: { tag: string }) {
  const tech = TECH_ICONS[tag];
  if (tech) {
    return (
      <div className="group relative flex items-center justify-center w-6 h-6 rounded-md border border-border hover:border-muted-foreground/50 transition-colors cursor-default">
        {tech.icon}
        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-1.5 py-0.5 text-[10px] font-mono text-background opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          {tech.label}
        </span>
      </div>
    );
  }
  return (
    <Badge
      className="text-[11px] font-mono font-medium border border-border h-6 w-fit px-2"
      variant="outline"
    >
      {tag}
    </Badge>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full aspect-video bg-muted" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={640}
      height={360}
      className="w-full aspect-video object-cover block"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
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
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className,
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover block"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full aspect-video bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 z-10 flex flex-wrap justify-end gap-2 max-w-[calc(100%-1rem)]">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="px-4 py-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-sm">{title}</h3>
            <time className="text-[10px] font-mono text-muted-foreground">
              {dates}
            </time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <IconCornerRightUp className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <p className="text-[11px] flex-1 max-w-full text-pretty font-mono leading-snug text-muted-foreground">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto items-center">
            {tags.map((tag) => (
              <TechBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
