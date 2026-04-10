type Props = {
  label: string;
  value: string;
  delta?: string;
};

export function KpiCard({ label, value, delta }: Props) {
  return (
    <article className="card">
      <p className="muted">{label}</p>
      <h2 style={{ margin: "0.25rem 0" }}>{value}</h2>
      {delta ? <p className="up">{delta}</p> : null}
    </article>
  );
}
