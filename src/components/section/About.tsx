import { DATA } from "@/data/resume";
import { SectionHeader } from "@/components/ui/sec-header";

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={idx} className="text-foreground font-semibold">
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="flex min-h-0 flex-col gap-y-4">
      <SectionHeader>About</SectionHeader>
      <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-muted-foreground font-mono">
        {DATA.about.map((item, idx) => (
          <li key={idx}>
            <span className="text-foreground font-semibold">{item.title}</span>
            <FormattedText text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
