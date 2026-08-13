export function formatTimeInTimezone(date: Date, timezone: string): string {
  const displayOptions: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  };
  return date.toLocaleTimeString("en-US", displayOptions);
}

export function getHourInTimezone(date: Date, timezone: string): number {
  try {
    const h = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      hourCycle: "h23",
    }).format(date);
    const parsed = parseInt(h, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  } catch {}
  return date.getHours();
}
