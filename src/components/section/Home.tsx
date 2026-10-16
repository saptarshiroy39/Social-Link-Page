"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCheck,
  IconClockHour4,
  IconMail,
  IconMapPin,
  IconPaperclip,
  IconRosetteDiscountCheckFilled,
  IconWorld,
} from "@tabler/icons-react";

import { DATA } from "@/data/resume";
import { formatTimeInTimezone, getHourInTimezone } from "@/lib/time";
import { haptic } from "@/lib/haptic";
import { Typewriter } from "@/components/ui/typewriter";

interface DetailItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href: string;
  download?: boolean;
  copyValue: string;
}

function DetailRow({ detail }: { detail: DetailItem }) {
  const Icon = detail.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    haptic();
    navigator.clipboard?.writeText(detail.copyValue).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group/row flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono min-w-0">
      <button
        type="button"
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy"}
        className={`flex items-center justify-center size-7 rounded-md border transition-colors shrink-0 cursor-pointer ${
          copied
            ? "bg-primary border-primary text-background"
            : "bg-muted/30 border-border/80 text-foreground/80 group-hover/row:bg-amber group-hover/row:border-amber group-hover/row:text-background"
        }`}
      >
        {copied ? (
          <IconCheck className="size-4 stroke-[2.5]" />
        ) : (
          <Icon className="size-4" />
        )}
      </button>
      <div className="min-w-0 truncate">
        <a
          href={detail.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => haptic()}
          download={detail.download ? "Saptarshi-Roy_CV.pdf" : undefined}
          className="link-underline block truncate"
        >
          {detail.text}
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [bannerSrc, setBannerSrc] = useState<string>(DATA.bannerImages[0]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(formatTimeInTimezone(now, DATA.timezone));

      const hour = getHourInTimezone(now, DATA.timezone);
      const bannerIndex = Math.floor(hour / 3) % DATA.bannerImages.length;
      setBannerSrc(DATA.bannerImages[bannerIndex]);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeDisplay = time
    ? `${time} [${DATA.timezoneOffset}]`
    : `--:--:-- [${DATA.timezoneOffset}]`;

  const leftDetails: DetailItem[] = [
    {
      icon: IconMail,
      text: DATA.contact.email,
      href: `mailto:${DATA.contact.email}`,
      copyValue: DATA.contact.email,
    },
    {
      icon: IconMapPin,
      text: DATA.location,
      href: DATA.locationLink,
      copyValue: DATA.location,
    },
    {
      icon: IconWorld,
      text: DATA.displayUrl,
      href: DATA.url,
      copyValue: DATA.url,
    },
    {
      icon: IconBrandLinkedin,
      text: DATA.contact.social.LinkedIn.user,
      href: DATA.contact.social.LinkedIn.url,
      copyValue: DATA.contact.social.LinkedIn.url,
    },
  ];

  const rightDetails: DetailItem[] = [
    {
      icon: IconPaperclip,
      text: "Resume",
      href: DATA.resumeUrl,
      download: true,
      copyValue: `${DATA.url}${DATA.resumeUrl}`,
    },
    {
      icon: IconClockHour4,
      text: timeDisplay,
      href: DATA.timezoneLink,
      copyValue: timeDisplay,
    },
    {
      icon: IconBrandGithub,
      text: DATA.contact.social.GitHub.user,
      href: DATA.contact.social.GitHub.url,
      copyValue: DATA.contact.social.GitHub.url,
    },
    {
      icon: IconBrandX,
      text: DATA.contact.social.X.user,
      href: DATA.contact.social.X.url,
      copyValue: DATA.contact.social.X.url,
    },
  ];

  return (
    <section id="home" className="space-y-6">
      {/* Banner */}
      <div className="w-full h-40 md:h-48 relative rounded-xl overflow-hidden border border-border/80 group">
        <Image
          src={bannerSrc}
          alt="Home banner"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 672px, 768px"
          className="object-cover transition-all duration-300 group-hover:scale-105"
          priority
          fetchPriority="high"
        />
      </div>

      <div className="space-y-3">
        {/* Avatar & Title */}
        <div className="flex flex-row items-end gap-5 pl-4 sm:pl-6 relative z-10">
          <div
            id="profile-avatar"
            className="size-28 sm:size-36 -mt-14 sm:-mt-18 border-4 border-background rounded-full overflow-hidden bg-card flex-shrink-0 relative group"
          >
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover transition-all duration-300 group-hover:scale-105"
              priority
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-end pb-2 space-y-1 -translate-y-[8px] sm:-translate-y-[16px]">
            <h1 className="text-3xl sm:text-4xl font-normal font-heading leading-none tracking-tight text-foreground flex items-center gap-1.5">
              {DATA.name}
              <IconRosetteDiscountCheckFilled className="size-5 sm:size-6 text-blue-500 shrink-0 translate-y-[2px]" />
            </h1>
            <p className="text-xs sm:text-sm font-semibold font-mono text-muted-foreground">
              <Typewriter words={DATA.spinnerTexts} />
            </p>
          </div>
        </div>

        {/* Contact & Details Grid */}
        <div className="border-t border-dotted border-border/80 pt-2.5">
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-2.5 relative">
            <div className="flex flex-col gap-2.5">
              {leftDetails.map((detail, idx) => (
                <DetailRow key={idx} detail={detail} />
              ))}
            </div>

            <div className="absolute left-1/2 top-1 bottom-0 w-[1px] border-l border-dotted border-border/80" />

            <div className="flex flex-col gap-2.5 pl-2 sm:pl-8">
              {rightDetails.map((detail, idx) => (
                <DetailRow key={idx} detail={detail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
