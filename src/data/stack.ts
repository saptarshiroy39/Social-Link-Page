import { CIcon } from "@/components/stack/c";
import { CPlusPlus } from "@/components/stack/cplusplus";
import { Python } from "@/components/stack/python";
import { Bash } from "@/components/stack/bash";
import { JSONIcon } from "@/components/stack/json";
import { TOMLIcon } from "@/components/stack/toml";

import { FastAPI } from "@/components/stack/fastapi";
import { Pydantic } from "@/components/stack/pydantic";
import { UV } from "@/components/stack/uv";

import { NextJS } from "@/components/stack/nextjs";
import { TypeScript } from "@/components/stack/typescript";
import { TailwindCSS } from "@/components/stack/tailwind";
import { ShadcnUI } from "@/components/stack/shadcnui";

import { AIStudio } from "@/components/stack/aistudio";
import { LangChain } from "@/components/stack/langchain";
import { HuggingFace } from "@/components/stack/huggingface";
import { PydanticAI } from "@/components/stack/pydanticai";

import { N8n } from "@/components/stack/n8n";
import { OpenAI } from "@/components/stack/openai";

import { Oracle } from "@/components/stack/oracle";
import { Supabase } from "@/components/stack/supabase";
import { Pinecone } from "@/components/stack/pinecone";

import { GoogleCloud } from "@/components/stack/googlecloud";

import { Git } from "@/components/stack/git";
import { GitHub } from "@/components/stack/github";
import { Docker } from "@/components/stack/docker";
import { UptimeRobot } from "@/components/stack/uptimerobot";

import { Vercel } from "@/components/stack/vercel";
import { Railway } from "@/components/stack/railway";
import { Render } from "@/components/stack/render";

import { ESP32 } from "@/components/stack/esp32";
import { Quectel } from "@/components/stack/quectel";

export default [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: Python },
      { name: "C++", icon: CPlusPlus },
      { name: "C", icon: CIcon },
      { name: "Bash", icon: Bash },
      { name: "JSON", icon: JSONIcon },
      { name: "TOML", icon: TOMLIcon },
    ],
  },
  {
    category: "Backend & Frameworks",
    items: [
      { name: "FastAPI", icon: FastAPI },
      { name: "Pydantic", icon: Pydantic },
      { name: "uv", icon: UV },
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "Next.js", icon: NextJS },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "shadcn/ui", icon: ShadcnUI },
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
      { name: "Supabase", icon: Supabase },
      { name: "Pinecone", icon: Pinecone },
      { name: "Oracle SQL", icon: Oracle },
    ],
  },
  {
    category: "Cloud",
    items: [{ name: "GCP", icon: GoogleCloud }],
  },
  {
    category: "DevOps & Monitoring",
    items: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub },
      { name: "Docker", icon: Docker },
      { name: "UptimeRobot", icon: UptimeRobot },
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
] as const;
