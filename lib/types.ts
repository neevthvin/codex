export type Platform = "youtube" | "tiktok";

export type ContentItem = {
  id: string;
  platform: Platform;
  title: string;
  publishedAt: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
};

export type SponsorDeal = {
  id: string;
  brandName: string;
  campaignName: string;
  valueUsd: number;
  status: "lead" | "negotiating" | "active" | "delivered" | "paid";
  dueDate: string;
};

export type RevenueEntry = {
  id: string;
  source: "platform_ads" | "creator_fund" | "sponsorship" | "affiliate";
  amountUsd: number;
  earnedOn: string;
  status: "estimated" | "confirmed" | "paid";
};
