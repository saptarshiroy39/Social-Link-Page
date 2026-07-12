import HeroSection from "@/components/section/hero-section";
import ActivitySection from "@/components/section/activity-section";
import WorkSection from "@/components/section/work-section";
import EducationSection from "@/components/section/education-section";
import SkillsSection from "@/components/section/skills-section";
import ProjectsSection from "@/components/section/projects-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <HeroSection />
      <ActivitySection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
