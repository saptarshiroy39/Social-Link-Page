import type { SVGProps } from "react";

const ShadcnUI = (props: SVGProps<SVGSVGElement>) => (
  <>
    <svg
      {...props}
      className={`dark:hidden ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
    <svg
      {...props}
      className={`hidden dark:block ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  </>
);

export { ShadcnUI };
