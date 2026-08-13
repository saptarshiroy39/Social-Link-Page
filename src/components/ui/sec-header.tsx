import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl sm:text-4xl font-normal font-heading border-b border-dotted border-border/80 pb-1.5 tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}
