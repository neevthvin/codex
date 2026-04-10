import { sponsorDeals } from "@/lib/mock-data";

export default function SponsorsPage() {
  return (
    <section className="grid">
      <h1>Sponsors</h1>
      <article className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Campaign</th>
              <th>Value</th>
              <th>Status</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {sponsorDeals.map((deal) => (
              <tr key={deal.id}>
                <td>{deal.brandName}</td>
                <td>{deal.campaignName}</td>
                <td>${deal.valueUsd.toLocaleString()}</td>
                <td>{deal.status}</td>
                <td>{deal.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
