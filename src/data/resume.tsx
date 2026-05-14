import { Icons } from "@/components/icons";
import {
  IconHome,
  IconInfoCircle,
  IconSettings,
  IconBulb,
} from "@tabler/icons-react";
import { CIcon } from "@/components/ui/svgs/c";
import { CPlusPlus } from "@/components/ui/svgs/cplusplus";
import { Python } from "@/components/ui/svgs/python";
import { Bash } from "@/components/ui/svgs/bash";
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
import { Vercel } from "@/components/ui/svgs/vercel";
import { Pinecone } from "@/components/ui/svgs/pinecone";
import { Requestly } from "@/components/ui/svgs/requestly";
import { Pandas } from "@/components/ui/svgs/pandas";
import { UptimeRobot } from "@/components/ui/svgs/uptimerobot";
import { HuggingFace } from "@/components/ui/svgs/huggingface";
import { Redstone } from "@/components/ui/svgs/redstone";

export const DATA = {
  name: "Saptarshi Roy",

  initials: "SR",

  url: "https://hirishi.in",

  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",

  summary:
    "I'm a Software Developer focused on building Full-Stack web apps, AI tools, and Automation systems. I pursued a Bachelor's Degree in Computer Science and Engineering. I work with Python, FastAPI, Databases, and scalable backend services to create practical, user-centric products that solve real business problems and improve everyday workflows.",

  avatarUrl: "/me.png",

  skills: [
    {
      category: "Languages",
      items: [
        { name: "C", icon: CIcon },
        { name: "C++", icon: CPlusPlus },
        { name: "Python", icon: Python },
        { name: "Bash", icon: Bash },
        { name: "Redstone", icon: Redstone },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "FastAPI", icon: FastAPI },
        { name: "LangChain", icon: LangChain },
        { name: "Pandas", icon: Pandas },
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
      category: "DevOps & Automation",
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
        { name: "Vercel", icon: Vercel },
        { name: "Railway", icon: Railway },
        { name: "Render", icon: Render },
      ],
    },
    {
      category: "Miscellaneous",
      items: [
        { name: "Requestly", icon: Requestly },
        { name: "UptimeRobot", icon: UptimeRobot },
        { name: "Hugging Face", icon: HuggingFace },
      ],
    },
  ],

  navbar: [
    { href: "#hero", icon: IconHome, label: "Home" },
    { href: "#work", icon: IconInfoCircle, label: "About" },
    { href: "#skills", icon: IconSettings, label: "Skills" },
    { href: "#projects", icon: IconBulb, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saptarshiroy39",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saptarshiroy39",
        icon: Icons.linkedin,
        navbar: true,
      },

      PyPI: {
        name: "PyPI",
        url: "https://pypi.org/user/saptarshiroy39",
        icon: Icons.python,
        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/saptarshiroy39",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Anabas Labs",
      href: "https://anabaslabs.com",
      title: "Co-Founder & Developer",
      logoUrl: "/anabas-labs.png",
      start: "Jan 2026",
      end: "Present",
    },

    {
      company: "XPMC (Employability.life)",
      href: "https://verify.employability.life/verify?data=U2FsdGVkX1%2FM5SKLM9SGLpDBcfCLYci49QNPdWwzhSTUjJXHu2BAGxH1Q%2FohQeh%2F%2FjnVa0cOR3E8XKFdDIiDhgVw7dPUJ2jCUM5GyOw81Uk%3D",
      title: "Digital Transformation Service Design (Training Program)",
      logoUrl: "/xpmc.png",
      start: "Nov 2025",
      end: "Jan 2026",
    },
  ],

  education: [
    {
      school: "Sister Nivedita University",
      href: "https://www.snuniv.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/snu.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Ranno",
      href: "https://pypi.org/project/ranno/",
      dates: "Apr 2026 - Present",
      description:
        "A Python library that converts natural language into executable code & executes them for instant data processing & analysis.",
      technologies: ["Python", "FastAPI", "Vercel", "PyPI"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/ranno/",
          icon: <Icons.python className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Ranno",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Ranno.png",
    },

    {
      title: "Speed Bar",
      href: "https://marketplace.visualstudio.com/items?itemName=saptarshiroy39.speedbar",
      dates: "Mar 2026 - Mar 2026",
      description:
        "A VS Code extension for running internet speed tests and viewing network details directly in your Activity Bar.",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Visual Studio Marketplace",
      ],
      links: [
        {
          type: "Marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=saptarshiroy39.speedbar",
          icon: <Icons.brandVscode className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Speed-Bar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Speed-Bar.png",
    },

    {
      title: "Cipher",
      href: "https://cipher.hirishi.in",
      dates: "Feb 2026 - Feb 2026",
      description:
        "A cryptography toolkit for encryption, decryption & frequency analysis attacks with accuracy measurement.",
      technologies: [
        "Python",
        "FastAPI",
        "Hugging Face",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Next.js",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://cipher.hirishi.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Cipher",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Cipher.png",
    },

    {
      title: "Arkiv",
      href: "https://arkiv.hirishi.in",
      dates: "Dec 2025 - Present",
      description:
        "A multi-file-format RAG application for context-aware conversations & accurate information retrieval from uploaded files.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Hugging Face",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Next.js",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://arkiv.hirishi.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Arkiv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Arkiv.png",
    },

    {
      title: "Luna AI",
      href: "https://github.com/saptarshiroy39/Luna-AI",
      dates: "Oct 2025 - Dec 2025",
      description:
        "A multi-agent AI assistant that intelligently routes requests for specialized research, coding & media generation tasks.",
      technologies: ["n8n", "Gemini API", "GCP"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Luna-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Luna-AI.png",
    },

    {
      title: "Hourly",
      href: "https://github.com/saptarshiroy39/Hourly",
      dates: "Jul 2025 - Jul 2025",
      description:
        "An AI-powered email digest delivering personalized hourly updates on weather, news & entertainment.",
      technologies: ["n8n", "Gmail SMTP", "GCP"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Hourly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Hourly.png",
    },
  ],
} as const;
