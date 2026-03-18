import type { SVGProps } from "react";

const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Vercel</title>
    <path fill="currentColor" d="m12 1.608 12 20.784H0Z" />
  </svg>
);

export { Vercel };
