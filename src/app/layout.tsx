import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import { LineNavSidebar } from "@/components/Line-Nav-Sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Geist_Mono, Instrument_Serif } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const instrumentSerifHeading = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const ScrollProgress = dynamic(() =>
  import("@/components/ui/scroll-progress").then((mod) => mod.ScrollProgress),
);

const Figlet = dynamic(() => import("@/components/Figlet"));

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hirishi.in"),
  title: {
    default: "Saptarshi Roy",
    template: "%s | SR",
  },
  description:
    "Gen AI & Agentic AI Developer crafting intelligent AI agents and automated workflows.",
  applicationName: "Saptarshi Roy",
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
    "Qdrant",
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
  authors: [{ name: "Saptarshi Roy", url: "https://hirishi.in" }],
  creator: "Saptarshi Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hirishi.in",
    title: "Saptarshi Roy",
    description:
      "Gen AI & Agentic AI Developer crafting intelligent AI agents and automated workflows.",
    siteName: "Saptarshi Roy",
    images: [
      {
        url: "https://hirishi.in/OG.png",
        width: 1200,
        height: 630,
        alt: "Saptarshi Roy - Gen AI & Agentic AI Developer",
      },
    ],
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
    title: "Saptarshi Roy",
    description:
      "Gen AI & Agentic AI Developer crafting intelligent AI agents and automated workflows.",
    images: ["https://hirishi.in/OG.png"],
    site: "@saptarshiroy39",
    creator: "@saptarshiroy39",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://hirishi.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark font-mono",
        geistMono.variable,
        instrumentSerifHeading.variable,
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased relative overflow-x-hidden",
        )}
      >
        <TooltipProvider delayDuration={0}>
          <Header />
          <div className="relative z-10 max-w-3xl w-full mx-auto pt-4 pb-4 sm:pt-6 sm:pb-4 px-4 sm:px-6">
            {children}
          </div>
          <ScrollProgress />
          <LineNavSidebar />
        </TooltipProvider>
        <Figlet />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
