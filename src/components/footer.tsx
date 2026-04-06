"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full -mt-10" aria-label="Footer">
      <p className="font-mono text-muted-foreground text-center">
        &copy; {currentYear}{" "}
        <Button
          variant="link"
          className="p-0 hover:cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <u>{DATA.initials}</u>
        </Button>
        . All rights reserved
        <Button
          variant="link"
          className="px-2 py-0 hover:cursor-pointer min-w-[20px]"
          onClick={() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <u>.</u>
        </Button>
      </p>
    </footer>
  );
}
