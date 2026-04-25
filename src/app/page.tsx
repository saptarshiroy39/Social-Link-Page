import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import {
  IconFileCv,
  IconMailOpened,
  IconBrandGithub,
  IconMoodHappy,
  IconPyramid,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import EducationSection from "@/components/section/education-section";
import SkillsSection from "@/components/section/skills-section";
import GithubSection from "@/components/section/github-section";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
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
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex gap-2 flex-wrap py-2">
              {[
                {
                  name: "Download CV",
                  href: "/Saptarshi-Roy_CV.pdf",
                  icon: IconFileCv,
                  download: true,
                },
                {
                  name: "Email",
                  href: `mailto:saptarshiroy39@gmail.com`,
                  icon: IconMailOpened,
                },
                {
                  name: "GitHub",
                  href: DATA.contact.social.GitHub.url,
                  icon: IconBrandGithub,
                },
                {
                  name: "Hugging Face",
                  href: "https://huggingface.co/saptarshiroy39",
                  icon: IconMoodHappy,
                },
                {
                  name: "Codeberg",
                  href: "https://codeberg.org/saptarshiroy39",
                  icon: IconPyramid,
                },
                {
                  name: "X",
                  href: DATA.contact.social.X.url,
                  icon: IconBrandX,
                },
                {
                  name: "LinkedIn",
                  href: DATA.contact.social.LinkedIn.url,
                  icon: IconBrandLinkedin,
                },
              ].map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "icon" }),
                        "size-10 rounded-xl transition-all duration-300 shadow-none hover:shadow-none hover:translate-y-0",
                        "border-border bg-background hover:bg-secondary/10",
                        "dark:border-border/50 dark:bg-background/50 dark:backdrop-blur-sm dark:hover:bg-accent dark:hover:text-accent-foreground",
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
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
          <GithubSection />
        </div>
      </section>
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
      <Footer />
    </main>
  );
}
