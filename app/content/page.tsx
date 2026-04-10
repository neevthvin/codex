import { contentItems } from "@/lib/mock-data";

function engagementRate(views: number, engagement: number) {
  return ((engagement / views) * 100).toFixed(2);
}

export default function ContentPage() {
  return (
    <section className="grid">
      <h1>Content</h1>
      <article className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Platform</th>
              <th>Published</th>
              <th>Views</th>
              <th>Engagement</th>
              <th>ER%</th>
            </tr>
          </thead>
          <tbody>
            {contentItems.map((item) => {
              const engagement = item.likes + item.comments + item.shares;
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <span className="badge">{item.platform}</span>
                  </td>
                  <td>{item.publishedAt}</td>
                  <td>{item.views.toLocaleString()}</td>
                  <td>{engagement.toLocaleString()}</td>
                  <td>{engagementRate(item.views, engagement)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}
