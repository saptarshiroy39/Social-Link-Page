import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${DATA.url}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${DATA.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
