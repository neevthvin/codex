import { KpiCard } from "@/components/kpi-card";
import { contentItems, sponsorDeals } from "@/lib/mock-data";
import { getDashboardKpis } from "@/lib/kpis";

export default function OverviewPage() {
  const kpis = getDashboardKpis();
  const trending = [...contentItems]
    .sort((a, b) => b.comments + b.shares - (a.comments + a.shares))
    .slice(0, 3);

  return (
    <section className="grid" aria-label="Overview">
      <h1>Overview</h1>
      <div className="grid grid-4">
        <KpiCard label="Total Views (30d)" value={kpis.totalViews.toLocaleString()} delta="+12.4% vs last month" />
        <KpiCard label="Engagement Rate" value={`${kpis.engagementRate.toFixed(2)}%`} delta="+0.9 pts" />
        <KpiCard label="Revenue (MTD)" value={`$${kpis.mtdRevenue.toLocaleString()}`} delta="+18.2%" />
        <KpiCard label="Active Deals" value={String(sponsorDeals.filter((d) => d.status === "active").length)} />
      </div>

      <article className="card">
        <h2>Trending Content</h2>
        <ul>
          {trending.map((item) => (
            <li key={item.id} style={{ marginBottom: "0.75rem" }}>
              <strong>{item.title}</strong> <span className="badge">{item.platform}</span>
              <div className="muted">
                {item.views.toLocaleString()} views · {item.likes + item.comments + item.shares} engagements
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className="card">
        <h2>Upcoming Deliverables</h2>
        {sponsorDeals.map((deal) => (
          <p key={deal.id}>
            <strong>{deal.brandName}</strong> ({deal.campaignName}) due on {deal.dueDate}
          </p>
        ))}
      </article>
    </section>
  );
}
