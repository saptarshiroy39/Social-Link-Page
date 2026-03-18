"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleClick(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function playSound(src: string) {
    const audio = new Audio(src);
    audio.play().catch((err) => console.error("Error playing sound:", err));
  }

  return (
    <footer id="footer" className="w-full -mt-10" aria-label="Footer">
      <p className="font-mono text-muted-foreground text-center">
        &copy; {currentYear}{" "}
        <Button
          variant="link"
          className="p-0 hover:cursor-pointer"
          onClick={() => playSound("/meow.mp3")}
        >
          <u>{DATA.initials}</u>
        </Button>
        . All rights reserved
        <Button
          variant="link"
          className="px-2 py-0 hover:cursor-pointer min-w-[20px]"
          onClick={() => playSound("/faahhh.mp3")}
        >
          <u>.</u>
        </Button>
      </p>
    </footer>
  );
}
