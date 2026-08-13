"use client";

import { use } from "react";
import { format } from "date-fns";

import type { Activity } from "@/components/ui/contri-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contri-graph";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function GitHubContributions({
  contributions,
  className,
}: {
  contributions: Promise<Activity[]>;
  className?: string;
}) {
  const data = use(contributions);

  return (
    <ContributionGraph
      className={cn(
        "mx-auto py-2",
        '**:data-[level="0"]:fill-foreground/8',
        '**:data-[level="1"]:fill-foreground/25',
        '**:data-[level="2"]:fill-foreground/45',
        '**:data-[level="3"]:fill-foreground/70',
        '**:data-[level="4"]:fill-foreground',
        className,
      )}
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent className="font-mono text-xs">
              <p>
                {activity.count} contribution{activity.count !== 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2 font-mono text-xs">
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in the last year
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
    </div>
  );
}
