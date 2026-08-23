"use client";

import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/int-hover-btn";
import { SectionHeader } from "@/components/ui/sec-header";
import { haptic } from "@/lib/haptic";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>Scrolled Too Far</SectionHeader>
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <p className="text-muted-foreground text-sm sm:text-base">
          If you&apos;ve read this far, you might be interested.
        </p>
        <Link href="/contact" onClick={() => haptic()} className="mt-2">
          <InteractiveHoverButton>Let&apos;s Talk</InteractiveHoverButton>
        </Link>
      </div>
    </section>
  );
}
