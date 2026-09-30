interface StatTileProps {
  label: string;
  value: string;
  hint?: string;
  tone?: 'neutral' | 'gain' | 'loss';
}

/** A single KPI tile for the dashboard. Values are placeholders for now. */
export default function StatTile({ label, value, hint, tone = 'neutral' }: StatTileProps) {
  const toneClass =
    tone === 'gain' ? 'text-gain' : tone === 'loss' ? 'text-loss' : 'text-white';
  return (
    <div className="rounded-xl border border-edge bg-panel p-4">
      <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
      <div className={`mt-2 text-2xl font-semibold ${toneClass}`}>{value}</div>
      {hint && <div className="mt-1 text-xs text-muted">{hint}</div>}
    </div>
  );
}
