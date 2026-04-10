import { ContentItem, RevenueEntry, SponsorDeal } from "@/lib/types";

export const contentItems: ContentItem[] = [
  {
    id: "yt_101",
    platform: "youtube",
    title: "Behind the Scenes: My Editing Workflow",
    publishedAt: "2026-04-01",
    views: 128_500,
    likes: 8_914,
    comments: 501,
    shares: 612
  },
  {
    id: "tt_402",
    platform: "tiktok",
    title: "3 hooks that doubled retention",
    publishedAt: "2026-04-05",
    views: 302_200,
    likes: 33_025,
    comments: 1_642,
    shares: 2_988
  },
  {
    id: "tt_405",
    platform: "tiktok",
    title: "My creator budget template",
    publishedAt: "2026-04-08",
    views: 204_889,
    likes: 20_112,
    comments: 989,
    shares: 1_106
  }
];

export const sponsorDeals: SponsorDeal[] = [
  {
    id: "d1",
    brandName: "LensLab",
    campaignName: "Creator Spring Launch",
    valueUsd: 4500,
    status: "active",
    dueDate: "2026-04-18"
  },
  {
    id: "d2",
    brandName: "SnapStudio",
    campaignName: "Reel Preset Bundle",
    valueUsd: 3000,
    status: "negotiating",
    dueDate: "2026-04-22"
  }
];

export const revenueEntries: RevenueEntry[] = [
  {
    id: "r1",
    source: "platform_ads",
    amountUsd: 840,
    earnedOn: "2026-04-02",
    status: "confirmed"
  },
  {
    id: "r2",
    source: "creator_fund",
    amountUsd: 160,
    earnedOn: "2026-04-07",
    status: "confirmed"
  },
  {
    id: "r3",
    source: "sponsorship",
    amountUsd: 2250,
    earnedOn: "2026-04-09",
    status: "estimated"
  }
];
