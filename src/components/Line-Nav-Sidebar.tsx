"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { haptic } from "@/lib/haptic";
import LineSidebar from "@/components/ui/line-sidebar";
import { cn } from "@/lib/utils";

const ITEMS = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Activity", href: "#activity" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Stack", href: "#stack" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export function LineNavSidebar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveIndex(0);
        return;
      }

      const triggerPoint = window.scrollY + window.innerHeight / 3;
      let currentIdx = 0;

      for (let i = 0; i < ITEMS.length; i++) {
        const item = ITEMS[i];
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (triggerPoint >= top) {
            currentIdx = i;
          }
        }
      }

      setActiveIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" || activeIndex === null) return;
    const currentItem = ITEMS[activeIndex];
    if (!currentItem) return;
    const targetHash =
      currentItem.href === "#home"
        ? window.location.pathname
        : currentItem.href;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, "", targetHash);
    }
  }, [activeIndex, pathname]);

  const handleItemClick = (index: number) => {
    haptic();
    const item = ITEMS[index];
    const id = item.href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(
        null,
        "",
        item.href === "#home" ? window.location.pathname : item.href,
      );
      setActiveIndex(index);
    }
  };

  const isHome = pathname === "/";

  return (
    <aside
      className={cn(
        "hidden lg:block fixed left-[calc(50%+35rem)] top-[30%] w-60 z-50 transition-opacity duration-300",
        isHome
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <LineSidebar
        items={ITEMS.map((item) => item.title)}
        activeIndex={activeIndex}
        accentColor="var(--foreground)"
        textColor="var(--muted-foreground)"
        markerColor="var(--border)"
        showIndex={true}
        showMarker={true}
        proximityRadius={60}
        maxShift={15}
        falloff="smooth"
        markerLength={30}
        markerGap={10}
        tickScale={0.5}
        scaleTick={true}
        itemGap={10}
        fontSize={0.9}
        smoothing={100}
        onItemClick={handleItemClick}
      />
    </aside>
  );
}
