import Footer from "@/components/Footer";
import About from "@/components/section/About";
import Activity from "@/components/section/Activity";
import Contact from "@/components/section/Contact";
import Education from "@/components/section/Education";
import Experience from "@/components/section/Experience";
import Home from "@/components/section/Home";
import Projects from "@/components/section/Projects";
import Stack from "@/components/section/Stack";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      <ScrollProgress />
      <Home />
      <About />
      <Activity />
      <Experience />
      <Education />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
