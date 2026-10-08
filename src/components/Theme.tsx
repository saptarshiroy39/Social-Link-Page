"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IconBrightness } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { THEME_QUOTES } from "@/data/theme";
import { haptic } from "@/lib/haptic";
import { cn } from "@/lib/utils";

interface BubblePosition {
  top: number;
  left?: number;
  right?: number;
  placement: "avatar-top" | "header-up";
}

export default function Theme() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);
  const [bubblePos, setBubblePos] = useState<BubblePosition | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = useCallback(() => {
    const avatar = document.getElementById("profile-avatar");
    const btn = buttonRef.current;
    if (!btn) return;

    if (avatar) {
      const ar = avatar.getBoundingClientRect();
      if (ar.bottom > 80 && ar.top < window.innerHeight - 20) {
        setBubblePos({
          top: ar.top - 10,
          left: Math.max(16, Math.min(window.innerWidth - 300, ar.left + 4)),
          placement: "avatar-top",
        });
        return;
      }
    }

    const br = btn.getBoundingClientRect();
    setBubblePos({
      top: br.bottom + 8,
      right: Math.max(16, window.innerWidth - br.right),
      placement: "header-up",
    });
  }, []);

  const handleBrightnessClick = () => {
    haptic();
    setQuoteIndex((prev) =>
      showQuote ? (prev + 1) % THEME_QUOTES.length : prev,
    );
    calculatePosition();
    setShowQuote(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowQuote(false), 4200);
  };

  useEffect(() => {
    if (!showQuote) return;

    window.addEventListener("scroll", calculatePosition, { passive: true });
    window.addEventListener("resize", calculatePosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculatePosition);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [showQuote, calculatePosition]);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Toggle theme"
        onClick={handleBrightnessClick}
        className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded focus:outline-none"
      >
        <IconBrightness className="size-4" stroke={1.5} />
      </button>

      <AnimatePresence>
        {showQuote && bubblePos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{
              top: bubblePos.top,
              left: bubblePos.left,
              right: bubblePos.right,
            }}
            className={cn(
              "fixed z-[999] max-w-[260px] sm:max-w-[290px] bg-[#f3eee1] text-[#1a1813] font-mono text-xs sm:text-[13px] leading-relaxed px-3.5 py-2.5 rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.45)] pointer-events-none select-none",
              bubblePos.placement === "avatar-top" && "-translate-y-full",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute w-0 h-0 border-x-[7px] border-x-transparent",
                bubblePos.placement === "avatar-top"
                  ? "-bottom-[7px] left-7 border-t-[7px] border-t-[#f3eee1]"
                  : "-top-[7px] right-[14px] border-b-[7px] border-b-[#f3eee1]",
              )}
            />
            <p className="m-0 font-medium">{THEME_QUOTES[quoteIndex]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
