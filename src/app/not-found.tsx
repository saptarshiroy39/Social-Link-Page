"use client";

import Link from "next/link";
import { IconCode } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center gap-8 p-4 text-center font-sans"
    >
      <div className="w-full max-w-xl py-6">
        <MorphingText
          texts={["404", "Not Found"]}
          className="text-primary font-sans font-bold"
        />
      </div>
      <Button
        size="lg"
        variant="outline"
        className="mt-4 text-lg font-sans cursor-pointer gap-2"
        asChild
      >
        <Link href="/">
          <IconCode className="h-5 w-5" />
          return 0;
        </Link>
      </Button>
    </main>
  );
}
