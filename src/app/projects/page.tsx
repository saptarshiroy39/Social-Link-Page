import type { Metadata } from "next";
import ProjectsView from "./ProjectsView";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore all projects, tools, Python libraries, and AI agents built by Saptarshi Roy.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
