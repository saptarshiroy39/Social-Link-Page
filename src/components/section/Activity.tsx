import { Suspense } from "react";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/GH-Contri";
import { SectionHeader } from "@/components/ui/sec-header";
import { getCachedContributions } from "@/lib/cached-git";
import { DATA } from "@/data/resume";

const GITHUB_USERNAME = DATA.contact.social.GitHub.user;

export default function Activity() {
  const contributions = getCachedContributions(GITHUB_USERNAME);

  return (
    <section id="activity" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>GitHub Activity</SectionHeader>
      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions contributions={contributions} />
      </Suspense>
    </section>
  );
}
