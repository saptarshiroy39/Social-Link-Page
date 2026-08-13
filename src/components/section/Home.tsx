"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconClockHour4,
  IconGenderMale,
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
  href?: string;
  download?: boolean;
}

function DetailRow({ detail }: { detail: DetailItem }) {
  const Icon = detail.icon;

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-mono text-foreground min-w-0">
      <div className="flex items-center justify-center size-7 rounded-md bg-muted/30 border border-border/80 text-foreground/80 shrink-0">
        <Icon className="size-4" />
      </div>
      <div className="min-w-0 truncate">
        {detail.href ? (
          <a
            href={detail.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => haptic()}
            download={detail.download ? "Saptarshi-Roy_CV.pdf" : undefined}
            className="link-underline text-foreground block truncate"
          >
            {detail.text}
          </a>
        ) : (
          <span className="block truncate">{detail.text}</span>
        )}
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
      const bannerIndex =
        Math.floor(hour / 3) % (DATA.bannerImages.length || 1);
      const newBanner = DATA.bannerImages[bannerIndex] ?? DATA.bannerImages[0];
      setBannerSrc(newBanner);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const leftDetails: DetailItem[] = [
    { icon: IconMapPin, text: DATA.location, href: DATA.locationLink },
    { icon: IconWorld, text: DATA.displayUrl, href: DATA.url },
    {
      icon: IconBrandGithub,
      text: DATA.contact.social.GitHub.user,
      href: DATA.contact.social.GitHub.url,
    },
    {
      icon: IconBrandLinkedin,
      text: DATA.contact.social.LinkedIn.user,
      href: DATA.contact.social.LinkedIn.url,
    },
  ];

  const rightDetails: DetailItem[] = [
    {
      icon: IconClockHour4,
      text: time
        ? `${time} [${DATA.timezoneOffset}]`
        : `--:--:-- [${DATA.timezoneOffset}]`,
    },
    { icon: IconGenderMale, text: DATA.pronouns },
    {
      icon: IconBrandX,
      text: DATA.contact.social.X.user,
      href: DATA.contact.social.X.url,
    },
    {
      icon: IconPaperclip,
      text: "Resume",
      href: DATA.resumeUrl,
      download: true,
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
          <div className="size-28 sm:size-36 -mt-14 sm:-mt-18 border-4 border-background rounded-full overflow-hidden bg-card flex-shrink-0 relative group">
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
          <div className="pb-[5px]">
            <DetailRow
              detail={{
                icon: IconMail,
                text: DATA.contact.email,
                href: `mailto:${DATA.contact.email}`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-12 gap-y-2.5 pt-[5px] relative">
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
