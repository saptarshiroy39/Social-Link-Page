import { Icons } from "@/components/icons";

import { CIcon } from "@/components/ui/svgs/c";
import { CPlusPlus } from "@/components/ui/svgs/cplusplus";
import { Python } from "@/components/ui/svgs/python";
import { Bash } from "@/components/ui/svgs/bash";
import { JSONIcon } from "@/components/ui/svgs/json";
import { TOMLIcon } from "@/components/ui/svgs/toml";

import { FastAPI } from "@/components/ui/svgs/fastapi";

import { AIStudio } from "@/components/ui/svgs/aistudio";
import { HuggingFace } from "@/components/ui/svgs/huggingface";
import { LangChain } from "@/components/ui/svgs/langchain";
import { PydanticAI } from "@/components/ui/svgs/pydanticai";

import { N8n } from "@/components/ui/svgs/n8n";
import { OpenAI } from "@/components/ui/svgs/openai";

import { Oracle } from "@/components/ui/svgs/oracle";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Pinecone } from "@/components/ui/svgs/pinecone";

import { GoogleCloud } from "@/components/ui/svgs/googlecloud";

import { Git } from "@/components/ui/svgs/git";
import { GitHub } from "@/components/ui/svgs/github";
import { Docker } from "@/components/ui/svgs/docker";

import { Vercel } from "@/components/ui/svgs/vercel";
import { Railway } from "@/components/ui/svgs/railway";
import { Render } from "@/components/ui/svgs/render";

import { ESP32 } from "@/components/ui/svgs/esp32";
import { Quectel } from "@/components/ui/svgs/quectel";

import { UptimeRobot } from "@/components/ui/svgs/uptimerobot";
import { ShadcnUI } from "@/components/ui/svgs/shadcnui";

import { UV } from "@/components/ui/svgs/uv";
import { Ruff } from "@/components/ui/svgs/ruff";

export const DATA = {
  name: "Saptarshi Roy",

  initials: "SR",

  url: "https://hirishi.in",

  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",

  summary:
    "A Gen AI and Agentic Developer building open-source full-stack web applications, CLI tools, and autonomous workflows. Currently pursuing a B.Tech in Computer Science and Engineering. I specialize in Python, FastAPI, and backend system integration to build scalable, AI-driven products that solve real business problems.",

  avatarUrl: "/me.png",

  skills: [
    {
      category: "Languages",
      items: [
        { name: "C", icon: CIcon },
        { name: "C++", icon: CPlusPlus },
        { name: "Python", icon: Python },
        { name: "Bash", icon: Bash },
        { name: "JSON", icon: JSONIcon },
        { name: "TOML", icon: TOMLIcon },
      ],
    },
    {
      category: "Backend & Frameworks",
      items: [
        { name: "FastAPI", icon: FastAPI },
        { name: "uv", icon: UV },
      ],
    },
    {
      category: "Gen AI",
      items: [
        { name: "AI Studio", icon: AIStudio },
        { name: "LangChain", icon: LangChain },
        { name: "Hugging Face", icon: HuggingFace },
        { name: "Pydantic AI", icon: PydanticAI },
      ],
    },
    {
      category: "Agents & Automation",
      items: [
        { name: "n8n", icon: N8n },
        { name: "Agent Builder", icon: OpenAI },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Oracle SQL", icon: Oracle },
        { name: "Supabase", icon: Supabase },
        { name: "Pinecone", icon: Pinecone },
      ],
    },
    {
      category: "Cloud",
      items: [{ name: "GCP", icon: GoogleCloud }],
    },
    {
      category: "DevOps",
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: GitHub },
        { name: "Docker", icon: Docker },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", icon: Vercel },
        { name: "Railway", icon: Railway },
        { name: "Render", icon: Render },
      ],
    },
    {
      category: "IoT",
      items: [
        { name: "ESP32", icon: ESP32 },
        { name: "L89HA", icon: Quectel },
      ],
    },
    {
      category: "Miscellaneous",
      items: [
        { name: "UptimeRobot", icon: UptimeRobot },
        { name: "shadcn/ui", icon: ShadcnUI },
        { name: "Ruff", icon: Ruff },
      ],
    },
  ],

  contact: {
    email: "saptarshiroy39@gmail.com",
    social: {
      GitHub: "https://github.com/saptarshiroy39",
      LinkedIn: "https://www.linkedin.com/in/saptarshiroy39",
      X: "https://x.com/saptarshiroy39",
      HuggingFace: "https://huggingface.co/saptarshiroy39",
      PyPI: "https://pypi.org/user/saptarshiroy39",
      VisualStudioMarketplace:
        "https://marketplace.visualstudio.com/publishers/saptarshiroy39",
      Codeberg: "https://codeberg.org/saptarshiroy39",
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
      title: "Sizelib",
      href: "https://pypi.org/project/sizelib",
      dates: "Jun 2026 - Jun 2026",
      description:
        "A lightweight, type-safe Python library for working with & humanizing file sizes with clean, type-preserving helpers.",
      technologies: ["Python", "Pytest", "Ruff", "Setuptools", "PyPI"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/sizelib",
          icon: <Icons.python className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/sizelib",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sizelib.png",
    },
    {
      title: "Ranno",
      href: "https://ranno.hirishi.in",
      dates: "Apr 2026 - May 2026",
      description:
        "A Python library that converts natural language into executable code & executes them for instant data processing & analysis.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "Gemini API",
        "Hugging Face",
        "Ruff",
        "Setuptools",
        "PyPI",
        "Vercel",
      ],
      links: [
        {
          type: "Docs",
          href: "https://ranno.hirishi.in",
          icon: <Icons.book className="size-3" />,
        },
        {
          type: "PyPI",
          href: "https://pypi.org/project/ranno",
          icon: <Icons.python className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/ranno",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ranno.png",
    },

    {
      title: "Portyard",
      href: "https://marketplace.visualstudio.com/items?itemName=saptarshiroy39.portyard",
      dates: "May 2026 - Jun 2026",
      description:
        "A VS Code extension to discover active local ports, manage running processes & forward them directly from the Activity Bar.",
      technologies: [
        "TypeScript",
        "Antigravity",
        "Visual Studio Marketplace",
        "Open VSX Registry",
      ],
      links: [
        {
          type: "Marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=saptarshiroy39.portyard",
          icon: <Icons.brandVscode className="size-3" />,
        },
        {
          type: "Open VSX",
          href: "https://open-vsx.org/extension/saptarshiroy39/portyard",
          icon: <Icons.openvsx className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/portyard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portyard.png",
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
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Hugging Face",
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
          href: "https://github.com/saptarshiroy39/cipher",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cipher.png",
    },

    {
      title: "Arkiv",
      href: "https://arkiv.hirishi.in",
      dates: "Dec 2025 - May 2026",
      description:
        "A multi-file-format RAG application for context-aware conversations & accurate information retrieval from uploaded files.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Hugging Face",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
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
          href: "https://github.com/saptarshiroy39/arkiv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/arkiv.png",
    },

    {
      title: "Luna AI",
      href: "https://github.com/saptarshiroy39/luna-ai",
      dates: "Oct 2025 - Dec 2025",
      description:
        "A multi-agent AI assistant that intelligently routes requests for specialized research, coding & media generation tasks.",
      technologies: [
        "n8n",
        "Gemini API",
        "GCP",
        "GitHub API",
        "YouTube API",
        "Translate API",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/luna-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/luna-ai.png",
    },

    {
      title: "Hourly",
      href: "https://github.com/saptarshiroy39/hourly",
      dates: "Jul 2025 - Jul 2025",
      description:
        "An AI-powered email digest delivering personalized hourly updates on weather, news & entertainment.",
      technologies: [
        "n8n",
        "Gemini API",
        "GCP",
        "Google Sheet API",
        "Gmail SMTP",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/hourly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hourly.png",
    },
  ],
  openSourceProjects: [
    {
      title: "Arkiv",
      href: "https://arkiv.hirishi.in",
      description: "RAG Application.",
    },
    {
      title: "Cipher",
      href: "https://cipher.hirishi.in",
      description: "Cryptography Toolkit.",
    },
    {
      title: "Sizelib",
      href: "https://sizelib.hirishi.in",
      description: "Python Library.",
    },
    {
      title: "Ranno",
      href: "https://ranno.hirishi.in",
      description: "Python Library.",
    },
    {
      title: "Luna AI",
      href: "https://github.com/saptarshiroy39/luna-ai",
      description: "Multi-Agent AI System.",
    },
    {
      title: "Portyard",
      href: "https://github.com/saptarshiroy39/portyard",
      description: "VS Code Extension.",
    },
  ],
} as const;
