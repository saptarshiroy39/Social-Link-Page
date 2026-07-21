import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import VerticalNav from "@/components/vertical-nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";
import "@fontsource/google-sans-code/index.css";
import "@fontsource/google-sans-code/500.css";
import "@fontsource/google-sans-code/700.css";
import "./globals.css";

const ScrollProgress = dynamic(() =>
  import("@/components/magicui/scroll-progress").then(
    (mod) => mod.ScrollProgress,
  ),
);

const ClickSpark = dynamic(() => import("@/components/reactbits/ClickSpark"));

const Figlet = dynamic(() => import("@/components/Figlet"));

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  applicationName: DATA.name,
  keywords: [
    "Saptarshi Roy",
    "Saptarshi",
    "Roy",
    "saptarshiroy39",
    "hirishi",
    "hirishi.in",
    "https://hirishi.in",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Portfolio",
    "Projects",
    "Arkiv",
    "arkiv.hirishi.in",
    "Cipher",
    "cipher.hirishi.in",
    "Ranno",
    "ranno.hirishi.in",
    "luna-ai",
    "Portyard",
    "Sizelib",
    "XPMC",
    "Hourly",
    "Agentic AI",
    "AI Agents",
    "Autonomous Workflows",
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
    "Asynchronous Task",
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
    card: "summary_large_image",
    title: `${DATA.name}`,
    description: DATA.description,
    site: "@saptarshiroy39",
    creator: "@saptarshiroy39",
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
        )}
      >
        <ClickSpark
          sparkColor="#26A641"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <TooltipProvider delayDuration={0}>
            <div className="relative z-10 max-w-2xl mx-auto pt-12 pb-4 sm:pt-24 sm:pb-4 px-6">
              {children}
            </div>
            <ScrollProgress />
            <VerticalNav />
          </TooltipProvider>
        </ClickSpark>
        <Figlet />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
