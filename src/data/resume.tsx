import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { CIcon } from "@/components/ui/svgs/c";
import { CPlusPlus } from "@/components/ui/svgs/cplusplus";
import { Python } from "@/components/ui/svgs/python";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { LangChain } from "@/components/ui/svgs/langchain";
import { N8n } from "@/components/ui/svgs/n8n";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Supabase } from "@/components/ui/svgs/supabase";
import { GoogleCloud } from "@/components/ui/svgs/googlecloud";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { GitHub } from "@/components/ui/svgs/github";
import { Railway } from "@/components/ui/svgs/railway";
import { Render } from "@/components/ui/svgs/render";
import { Pinecone } from "@/components/ui/svgs/pinecone";
import { VSCode } from "@/components/ui/svgs/vscode";
import { Requestly } from "@/components/ui/svgs/requestly";
import { Linux } from "@/components/ui/svgs/linux";

export const DATA = {
  name: "Saptarshi Roy",

  initials: "SR",

  url: "https://hirishi.in",

  location: "Kolkata, IN",

  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal,+India",

  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",

  summary:
    "I'm a Software Developer focused on building [Full-Stack web apps, AI tools, and Automation systems](/#projects). I pursued a Bachelor's Degree in [Computer Science and Engineering](/#education). I work with [Python, FastAPI, Databases, and scalable backend services](/#skills) to create practical, user-centric products that solve real business problems and improve everyday workflows.",

  avatarUrl: "/me.png",

  skills: [
    {
      category: "Languages",
      items: [
        { name: "C", icon: CIcon },
        { name: "C++", icon: CPlusPlus },
        { name: "Python", icon: Python },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "FastAPI", icon: FastAPI },
        { name: "LangChain", icon: LangChain },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: MySQL },
        { name: "Supabase", icon: Supabase },
        { name: "Pinecone", icon: Pinecone },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: GitHub },
        { name: "Docker", icon: Docker },
        { name: "n8n", icon: N8n },
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        { name: "GCP", icon: GoogleCloud },
        { name: "Railway", icon: Railway },
        { name: "Render", icon: Render },
      ],
    },
    {
      category: "Miscellaneous",
      items: [
        { name: "VS Code", icon: VSCode },
        { name: "Requestly", icon: Requestly },
        { name: "Linux", icon: Linux },
      ],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saptarshiroy39",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saptarshiroy39/",
        icon: Icons.linkedin,

        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/saptarshiroy39",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Anabas Labs",
      href: "https://anabaslabs.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/anabas-labs.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "AnabasLabs is a software engineering studio building scalable web, mobile, and AI-powered systems for real-world use. We work with startups and businesses to turn complex problems into reliable, production-ready software that performs, grows, and actually gets used",
    },
  ],

  education: [
    {
      school: "Sister Nivedita University",
      href: "https://www.snuniv.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/snu.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

} as const;
