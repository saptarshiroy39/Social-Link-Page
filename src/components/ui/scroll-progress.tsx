"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";
import { haptic } from "@/lib/haptic";
import navigation from "@/data/navigation";

export type ScrollProgressSection = { id: string; label: string };

const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const SIZE_SPRING = { type: "spring", bounce: 0.16, duration: 0.5 } as const;
const LABEL_CROSSFADE = { duration: 0.22, ease: EASE_OUT } as const;
const LAYER_FADE = { duration: 0.24, ease: EASE_IN_OUT } as const;

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Size = { width: number; height: number };

const DEFAULT_SECTIONS: readonly ScrollProgressSection[] = navigation;

export type ScrollProgressProps = React.ComponentProps<"div"> & {
  sections?: readonly ScrollProgressSection[] | ScrollProgressSection[];
  containerRef?: React.RefObject<HTMLElement | null>;
  offset?: number;
};

const ScrollProgress = ({
  className,
  sections = DEFAULT_SECTIONS,
  containerRef,
  offset = 120,
  ...props
}: ScrollProgressProps) => {
  const layoutId = React.useId();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : undefined,
  );
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const [activeId, setActiveId] = React.useState(sections[0]?.id);
  const [open, setOpen] = React.useState(false);

  const scrollLock = React.useRef(false);
  const scrollLockTimer =
    React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const labelMap = React.useMemo(
    () => new Map(sections.map((s) => [s.id, s.label])),
    [sections],
  );

  React.useEffect(() => {
    const scroller = containerRef?.current ?? window;

    const update = () => {
      if (scrollLock.current) return;
      if (!containerRef && window.scrollY < 60) {
        setActiveId(sections[0]?.id);
        return;
      }
      const anchor =
        (containerRef?.current?.getBoundingClientRect().top ?? 0) + offset;
      const active = sections.findLast(({ id }) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        return top !== undefined && top <= anchor;
      });
      const nextId = active?.id ?? sections[0]?.id;
      setActiveId((prev) => (prev === nextId ? prev : nextId));
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections, containerRef, offset]);

  React.useEffect(() => {
    if (!activeId) return;
    const isFirst = activeId === (sections[0]?.id ?? "home");
    const targetHash = isFirst ? window.location.pathname : `#${activeId}`;
    const currentHash = window.location.hash;
    if (
      (isFirst && currentHash) ||
      (!isFirst && currentHash !== `#${activeId}`)
    ) {
      window.history.replaceState(null, "", targetHash);
    }
  }, [activeId, sections]);

  const label = labelMap.get(activeId) ?? sections[0]?.label;

  const collapsedRef = React.useRef<HTMLDivElement>(null);
  const openRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const [collapsedSize, setCollapsedSize] = React.useState<Size>();
  const [openSize, setOpenSize] = React.useState<Size>();
  const [labelWidth, setLabelWidth] = React.useState<number>();

  useIsoLayoutEffect(() => {
    const measure = () => {
      if (labelRef.current) {
        const w = labelRef.current.offsetWidth;
        setLabelWidth((prev) => (prev === w ? prev : w));
      }
      if (collapsedRef.current) {
        const w = collapsedRef.current.offsetWidth;
        const h = collapsedRef.current.offsetHeight;
        setCollapsedSize((prev) =>
          prev?.width === w && prev?.height === h
            ? prev
            : { width: w, height: h },
        );
      }
      if (openRef.current) {
        const w = openRef.current.offsetWidth;
        const h = openRef.current.offsetHeight;
        setOpenSize((prev) =>
          prev?.width === w && prev?.height === h
            ? prev
            : { width: w, height: h },
        );
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (labelRef.current) ro.observe(labelRef.current);
    if (collapsedRef.current) ro.observe(collapsedRef.current);
    if (openRef.current) ro.observe(openRef.current);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [sections]);

  React.useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        haptic();
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        haptic();
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  React.useEffect(() => () => clearTimeout(scrollLockTimer.current), []);

  const selectSection = (id: string) => {
    haptic();
    scrollLock.current = true;
    clearTimeout(scrollLockTimer.current);
    scrollLockTimer.current = setTimeout(
      () => {
        scrollLock.current = false;
      },
      reduceMotion ? 0 : 700,
    );

    setActiveId(id);
    setOpen(false);

    const isFirst = id === (sections[0]?.id ?? "home");
    const targetHash = isFirst ? window.location.pathname : `#${id}`;
    window.history.replaceState(null, "", targetHash);

    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const size = open ? openSize : collapsedSize;
  const radius = open ? 26 : (collapsedSize?.height ?? 32) / 2;
  const squircle = "[corner-shape:squircle]";

  return (
    <div
      ref={rootRef}
      data-slot="scroll-progress"
      className={cn("fixed bottom-6 left-1/2 z-50 -translate-x-1/2", className)}
      {...props}
    >
      <div className="pointer-events-none invisible absolute" aria-hidden>
        <div
          ref={collapsedRef}
          className="inline-flex items-center gap-2.5 py-1.5 pl-2 pr-4"
        >
          <span className="h-5 w-5" />
          <span
            ref={labelRef}
            className="whitespace-nowrap text-sm font-medium leading-none"
          >
            {label}
          </span>
        </div>
        <div ref={openRef} className="w-max p-1.5">
          {sections.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium leading-none"
            >
              <span className="h-1.5 w-1.5" />
              <span className="whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {size && (
        <motion.div
          data-slot="scroll-progress-surface"
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden border border-foreground/10 bg-foreground text-background shadow-none",
            squircle,
          )}
          initial={false}
          animate={{
            width: size.width,
            height: size.height,
            borderRadius: radius,
          }}
          transition={reduceMotion ? { duration: 0 } : SIZE_SPRING}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {open ? (
              <motion.ul
                key="list"
                className="absolute inset-0 flex flex-col p-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={LAYER_FADE}
              >
                {sections.map((s, i) => {
                  const isActive = s.id === activeId;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => selectSection(s.id)}
                        className={cn(
                          "relative flex w-full items-center gap-3 rounded-[14px] px-3 py-2 text-left text-sm font-medium leading-none transition-colors",
                          squircle,
                          isActive
                            ? "text-background font-semibold"
                            : "text-background/60 hover:text-background/90",
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId={`${layoutId}-active`}
                            className={cn(
                              "absolute inset-0 rounded-[14px] bg-background/10",
                              squircle,
                            )}
                            transition={
                              reduceMotion ? { duration: 0 } : SIZE_SPRING
                            }
                          />
                        )}
                        <motion.span
                          className={cn(
                            "relative h-1.5 w-1.5 shrink-0 rounded-full",
                            isActive ? "bg-background" : "bg-background/30",
                          )}
                          initial={
                            reduceMotion ? undefined : { opacity: 0, y: 4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            ease: EASE_IN_OUT,
                            delay: reduceMotion ? 0 : 0.03 + i * 0.02,
                          }}
                        />
                        <motion.span
                          className="relative whitespace-nowrap"
                          initial={
                            reduceMotion ? undefined : { opacity: 0, y: 4 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            ease: EASE_IN_OUT,
                            delay: reduceMotion ? 0 : 0.03 + i * 0.02,
                          }}
                        >
                          {s.label}
                        </motion.span>
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            ) : (
              <motion.button
                key="pill"
                type="button"
                onClick={() => {
                  haptic();
                  setOpen(true);
                }}
                aria-label="Show sections"
                className="absolute inset-0 flex items-center gap-2.5 py-1.5 pl-2 pr-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={LAYER_FADE}
              >
                <span className="shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 -rotate-90"
                    aria-hidden
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      strokeWidth="2.5"
                      className="stroke-background/20"
                    />
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="stroke-background"
                      style={{ pathLength: progress }}
                    />
                  </svg>
                </span>

                <span
                  className="relative h-5 shrink-0"
                  style={{ width: labelWidth }}
                >
                  <AnimatePresence initial={false}>
                    {label && (
                      <motion.span
                        key={activeId ?? label}
                        data-slot="scroll-progress-label"
                        className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap text-sm font-medium leading-none text-background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={LABEL_CROSSFADE}
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export { ScrollProgress };
export default ScrollProgress;
