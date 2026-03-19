import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import ClickSpark from "@/components/reactbits/ClickSpark";
import Figlet from "@/components/Figlet";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Saptarshi Roy",
    "Saptarshi",
    "Roy",
    "saptarshiroy39",
    "hirishi",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Portfolio",
    "Projects",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "C",
    "C++",
    "LangChain",
    "Pandas",
    "MySQL",
    "Supabase",
    "Pinecone",
    "Git",
    "GitHub",
    "Docker",
    "n8n",
    "Google Cloud",
    "GCP",
    "Vercel",
    "Render",
    "AI Tools",
    "Automation",
    "Anabas Labs",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          lexend.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <ClickSpark
            sparkColor="currentColor"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
              </div>
              <ScrollProgress />
              <Navbar />
            </TooltipProvider>
          </ClickSpark>
        </ThemeProvider>
        <Figlet />
      </body>
    </html>
  );
}
