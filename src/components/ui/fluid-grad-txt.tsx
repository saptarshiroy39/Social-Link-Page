"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string;
  /**
   * SVG viewBox width used to scale the gradient and text layout.
   * @default 768
   * */
  svgViewBoxWidth?: number;
  /**
   * SVG viewBox height used as the base text size.
   * @default 128
   * */
  svgViewBoxHeight?: number;
};

export function FluidGradientText({
  text,
  svgViewBoxWidth = 768,
  svgViewBoxHeight = 128,
}: FluidGradientTextProps) {
  const gradientX1Raw = useMotionValue(0.5);

  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, svgViewBoxWidth]),
    {
      stiffness: 150,
      damping: 25,
    },
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width,
    );
  };

  const handleMouseLeave = () => {
    gradientX1Raw.set(0.5);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    const containerRect = event.currentTarget.getBoundingClientRect();
    gradientX1Raw.set(
      (touch.clientX - containerRect.left) / containerRect.width,
    );
  };

  const handleTouchEnd = () => {
    gradientX1Raw.set(0.5);
  };

  return (
    <div
      className="relative size-full overflow-hidden after:absolute after:bottom-0 after:h-px after:w-full after:bg-current/15 cursor-default select-none [-webkit-touch-callout:none]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <svg
        className="size-full translate-y-[25%] pointer-events-none"
        viewBox={`0 0 ${svgViewBoxWidth} ${svgViewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="2"
          fill="url(#fluid_gradient_text_linear)"
          className="select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: svgViewBoxHeight * 1.23,
            fontWeight: "bold",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {text}
        </text>
        <defs>
          <motion.linearGradient
            id="fluid_gradient_text_linear"
            x1={gradientX1}
            y1="0"
            x2={svgViewBoxWidth / 2}
            y2={svgViewBoxHeight}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  );
}
