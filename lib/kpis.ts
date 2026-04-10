import { contentItems, revenueEntries } from "@/lib/mock-data";

export function getDashboardKpis() {
  const totalViews = contentItems.reduce((sum, item) => sum + item.views, 0);
  const totalEngagement = contentItems.reduce(
    (sum, item) => sum + item.likes + item.comments + item.shares,
    0
  );
  const engagementRate = (totalEngagement / totalViews) * 100;
  const mtdRevenue = revenueEntries.reduce((sum, entry) => sum + entry.amountUsd, 0);

  return {
    totalViews,
    totalEngagement,
    engagementRate,
    mtdRevenue
  };
}
