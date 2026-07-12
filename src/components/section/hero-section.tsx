import Link from "next/link";
import Image from "next/image";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import {
  IconFileCv,
  IconMailOpened,
  IconBrandGithub,
  IconMoodHappy,
  IconPyramid,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandPython,
  IconBrandVscode,
} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-4 flex flex-col order-2 md:order-1">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                {"Hi, I'm "}
                <span className="text-[#26A641]">Saptarshi</span>
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="flex flex-col gap-3 py-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm font-mono">
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-[#26A641] transition-colors"
                  >
                    <IconMailOpened className="size-4 shrink-0" />
                    <span>{DATA.contact.email}</span>
                  </a>
                  <span className="hidden sm:inline text-muted-foreground/30">
                    |
                  </span>
                  <a
                    href="/Saptarshi-Roy_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center gap-2 text-muted-foreground hover:text-[#26A641] transition-colors w-fit"
                  >
                    <IconFileCv className="size-4 shrink-0" />
                    <span>Download CV</span>
                  </a>
                </div>
                <div className="flex gap-2 flex-wrap pt-1.5">
                  {[
                    {
                      name: "LinkedIn",
                      href: DATA.contact.social.LinkedIn,
                      icon: IconBrandLinkedin,
                    },
                    {
                      name: "X",
                      href: DATA.contact.social.X,
                      icon: IconBrandX,
                    },
                    {
                      name: "GitHub",
                      href: DATA.contact.social.GitHub,
                      icon: IconBrandGithub,
                    },
                    {
                      name: "Hugging Face",
                      href: DATA.contact.social.HuggingFace,
                      icon: IconMoodHappy,
                    },
                    {
                      name: "PyPI",
                      href: DATA.contact.social.PyPI,
                      icon: IconBrandPython,
                    },
                    {
                      name: "Visual Studio Marketplace",
                      href: DATA.contact.social.VisualStudioMarketplace,
                      icon: IconBrandVscode,
                    },
                    {
                      name: "Codeberg",
                      href: DATA.contact.social.Codeberg,
                      icon: IconPyramid,
                    },
                  ].map((link) => (
                    <Tooltip key={link.name}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "icon",
                            }),
                            "size-10 rounded-xl transition-all duration-300 shadow-none hover:shadow-none hover:translate-y-0",
                            "border-border bg-background hover:bg-[#26A641]/10 hover:text-[#26A641] hover:border-[#26A641]/50",
                            "dark:border-border/50 dark:bg-background/50 dark:backdrop-blur-sm dark:hover:bg-[#26A641]/10 dark:hover:text-[#26A641] dark:hover:border-[#26A641]/50",
                          )}
                        >
                          <link.icon className="size-5" />
                          <span className="sr-only">{link.name}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <div className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted relative overflow-hidden bg-muted">
              <Image
                src={DATA.avatarUrl}
                alt={DATA.name}
                width={128}
                height={128}
                className="size-full object-cover"
                priority
              />
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="max-w-full text-pretty font-sans leading-relaxed text-muted-foreground">
            {DATA.summary}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
