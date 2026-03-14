import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import GlassIcons from "@/components/reactbits/GlassIcons";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const socialItems = [
  {
    icon: <IconBrandGithub className="size-full" />,
    color: "#000",
    label: "GitHub",
    href: "https://github.com/saptarshiroy39",
  },
  {
    icon: <IconBrandLinkedin className="size-full" />,
    color: "#000",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saptarshiroy39/",
  },
  {
    icon: <IconBrandX className="size-full" />,
    color: "#000",
    label: "X",
    href: "https://x.com/saptarshiroy39",
  },
];

export default function ContactSection() {
  return (
    <div id="contact" className="border rounded-xl px-10 py-2 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          Get in Touch
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center text-center">
        <GlassIcons items={socialItems} />
      </div>
    </div>
  );
}
