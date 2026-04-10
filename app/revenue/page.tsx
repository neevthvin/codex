import { revenueEntries } from "@/lib/mock-data";

export default function RevenuePage() {
  const total = revenueEntries.reduce((sum, row) => sum + row.amountUsd, 0);

  return (
    <section className="grid">
      <h1>Revenue</h1>
      <article className="card">
        <h2>Month to Date: ${total.toLocaleString()}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {revenueEntries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.earnedOn}</td>
                <td>{entry.source}</td>
                <td>${entry.amountUsd.toLocaleString()}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
