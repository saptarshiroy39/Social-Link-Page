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
      title: "Arkiv",
      href: "https://arkiv.hirishi.in/",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Arkiv is an AI-powered document assistant (RAG) that lets you upload files and have accurate context-aware conversations about their content.",
      technologies: [
        "Python",
        "Pandas",
        "LangChain",
        "Pinecone",
        "Gemini API",
        "FastAPI",
        "Supabase",
        "React",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://arkiv.hirishi.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Arkiv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/saptarshiroy39/Arkiv/blob/master/Arkiv.png?raw=true",
      video: "",
    },
    {
      title: "Luna AI",
      href: "https://github.com/saptarshiroy39/Luna-AI",
      dates: "Oct 2025 - Dec 2025",
      active: true,
      description:
        "Luna AI is a multi-agent assistant that routes queries to specialized agents for research, coding, writing, and media generation through one unified interface.",
      technologies: [
        "n8n",
        "Gemini API",
        "GitHub API",
        "Translate API",
        "YouTube API",
        "OpenWeatherMap",
        "SerpAPI",
        "Nano Banana",
        "Veo 3.1",
        "VoiceRSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/saptarshiroy39/Luna-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/saptarshiroy39/Luna-AI/blob/master/Luna-AI.png?raw=true",
      video: "",
    },
  ],

} as const;
