export default function SettingsPage() {
  return (
    <section className="grid">
      <h1>Settings</h1>
      <article className="card">
        <h2>Platform Connections</h2>
        <p>YouTube: <span className="up">Connected</span></p>
        <p>TikTok: <span className="up">Connected</span></p>
      </article>
      <article className="card">
        <h2>Preferences</h2>
        <p className="muted">Timezone: UTC</p>
        <p className="muted">Currency: USD</p>
        <p className="muted">Weekly performance digest: Enabled</p>
      </article>
    </section>
  );
}
