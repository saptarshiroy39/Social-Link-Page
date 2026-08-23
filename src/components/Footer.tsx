"use client";

import { DATA } from "@/data/resume";
import { FluidGradientText } from "@/components/ui/fluid-grad-txt";
import { haptic } from "@/lib/haptic";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const firstName = DATA.name.split(" ")[0].toLowerCase();

  return (
    <footer
      id="footer"
      className="w-full max-w-3xl mx-auto flex flex-col gap-8 pt-8 -mt-8 border-t border-dotted border-border/80 pb-8"
      aria-label="Footer"
    >
      <div className="relative w-full h-24 md:h-32 text-foreground select-none [-webkit-touch-callout:none]">
        <FluidGradientText text={firstName} />
      </div>

      <p className="font-mono text-muted-foreground text-center text-sm">
        © {currentYear}{" "}
        <button
          className="cursor-pointer bg-transparent border-0 p-0 font-mono text-muted-foreground hover:text-foreground transition-colors text-sm"
          onClick={() => {
            haptic();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <u>{DATA.initials}</u>
        </button>
        . All rights reserved.
      </p>
    </footer>
  );
}
